
<!-- // 首页限时抢购-->
<template>
	<div>
			<div class="Spring">
			<div class="Spring_t" v-for="(item,index) in recommend" :key="index" v-if="index<1">{{item.name.replace(/_/g,' ')}}</div>
			<yd-flexbox class="Spring_b" v-if="length!=0">
				<yd-flexbox-item style="font-size: 0.28rem;">
					<!-- 计时器 -->
					<!-- Ends in  HH:MM:SS离开始时间小于24小时 -->
					<div v-if="conclude >0">
						<span style="color:#ff4500;padding: 0.1rem;font-size: 0.32rem;display: inline-block;">Start in:</span>
						<span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
						<span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
						<span class="clocks">{{min}}</span>&nbsp;:
						<span class="clocks">{{sec}}</span>
					</div>
					<!-- 开始倒计时 -->
					<!-- Ends in  HH:MM:SS离结束时间小于24小时 -->
					<div v-if="initiates >0">
						<span style="color:#ff4500;padding: 0.1rem;font-size: 0.32rem;">Ends in:</span>
						<span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
						<span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
						<span class="clocks">{{min}}</span>&nbsp;:
						<span class="clocks">{{sec}}</span>
					</div>
				</yd-flexbox-item>
				<div>
					<a href="/flashsale_list.html">
						<span style="color:#6d6f73;padding-left: 0.28rem;font-size: 0.24rem">See All</span>
						<img src="../../assets/images/not_refactoring/flashsale_icon_seemore_default.png" alt="" class="seemore">
					</a>
				</div>
			</yd-flexbox>
			<!-- 商品 -->
		</div>
		<!--<yd-flexbox v-if="code!=200" style="border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;    background-color: #fff;">
			<yd-flexbox-item style="height:230px;border-right: 1px solid #f2f2f2; "></yd-flexbox-item>
			<yd-flexbox-item style="height:230px;"></yd-flexbox-item>
		</yd-flexbox>-->
		<div class="Picture">
			<div class="chosen-container">
				<div class="chosen-swiper">
					<a :href="'/products.html?id='+item.goods_id+'&promo=time'" v-for="(item,index) in recommend" :key="index" :style="{width: activeColor+'%'}">
						<div class="photo slidet"><img :src="item.img" :onerror="acquiescence"></div>
						<div class="designation" style="word-wrap: break-word;word-break: normal;">{{item.goods_name.replace(/amp;/g, '')}}</div>
						<div class="pmgressbar">
							<div class="strip" id="strip" :style="'width:'+(parseInt((item.sold_num))/parseInt((item.max_num)))*100 +'%'"></div>
							<span class="price">{{item.sold_num}}/{{item.max_num}}</span>
						</div>
						<div class="character">
							<yd-flexbox>
								<div style="margin-right: 0.2rem;">
									<h4 style="font-size: 0.32rem;color: #ff4500">₱{{item.award_value}}</h4>
								</div>
								<yd-flexbox-item>
									<h4 style="font-size: 0.24rem;color: #c2c4cc;text-decoration:line-through;">₱{{item.market_price}}</h4>
								</yd-flexbox-item>
							</yd-flexbox>
						</div>
					</a>
				</div>
			</div>

			<div class="interval"></div>
		</div>
	</div>
</template>
 <script type="text/javascript">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
	data() {
		return {
			recommend: [],
			goodsinfo: "",
			// address: address,
			acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
			day: "",
			hour: "",
			min: "",
			sec: "",
			length: '',
			conclude: '',
			initiates: '',
			open_status: '',
			minst: '',
			Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
			activeColor: '',
			code: '',
		}
	},
	mounted() {


	},
	created() {//这个方法Vue会自动调用
		this.getShopList()

	},
	methods: {

		getShopList() {
			var that = this
			service.get(api.contract + 'api/v1/home/flashSale?limit=6').then(res => {
				that.recommend = res.data.data
				that.code = res.data.code
				that.length = res.data.data.length
				if (that.length != 0 && that.code == 200) {
					// that.success = res.data.success
					if (that.length <= 2) {
						that.activeColor = 50
					}
					if (that.length >= 3) {
						that.activeColor = 40
					}
					if (that.length != 0) {
						that.when = that.recommend[0].end_time.replace(/-/g, '/')
					}
					// 开始时间 
					var start_time = res.data.data[0].start_time.replace(/-/g, '/')

					// 结束时间
					var end_time = res.data.data[0].end_time.replace(/-/g, '/')
				
						that.minst =  res.data.data[0].nowtime.replace(/-/g, '/')
						var msts = that.minst
						var t2 = new Date(msts);
						var t1 = new Date(end_time);
						var t3 = new Date(start_time);
						// 后台返回当前时间
						var now = Date.parse(that.minst) / 1000;
						// 活动未开始倒计时
						if (Date.parse(t3) - Date.parse(t2) > 0) {
							that.conclude = Date.parse(t3) - Date.parse(t2)

							that.when = start_time.replace(/-/g, '/')
							showTime();
							var timer = setInterval(showTime, 1000);
							function showTime() {
								var end = Date.parse(that.when) / 1000;
								now++
								// 计算差值  

								var offset = Math.floor((end - now));//毫秒  

								if (offset <= 0) {
									// 清除定时器  
									clearInterval(timer);
								}
								var sec = offset % 60;
								var min = Math.floor(offset / 60) % 60;
								var hour = Math.floor(offset / 60 / 60) % 24;
								var day = Math.floor(offset / 60 / 60 / 24);

								that.sec = sec < 10 ? '0' + sec : sec;
								that.min = min < 10 ? '0' + min : min;
								that.hour = parseFloat((hour < 10 ? '0' + hour : hour)) + parseFloat(day * 24)
								that.day = day < 10 ? '0' + day : day;
								if (that.hour == '0' && that.min == '00' && that.sec == '00') {
									location.reload()
								}
							}


						}
						// 活动开始倒计时

						if ((Date.parse(t3) - Date.parse(t2) <= 0)) {
							that.initiates = Date.parse(t1) - Date.parse(t2)

							if (Date.parse(t1) - Date.parse(t2) > 0) {

								that.when = end_time.replace(/-/g, '/')
								showTime();
								var timer = setInterval(showTime, 1000);
								function showTime() {
									// 活动结束时间
									var end = Date.parse(that.when) / 1000;
									now++
									// 计算差值  
									var offset = Math.floor((end - now));//毫秒  

									if (offset <= 0) {
										// 清除定时器  
										clearInterval(timer);
									}
								
									var sec = offset % 60;
									var min = Math.floor(offset / 60) % 60;
									var hour = Math.floor(offset / 60 / 60) % 24;
									var day = Math.floor(offset / 60 / 60 / 24);

									that.sec = sec < 10 ? '0' + sec : sec;
									that.min = min < 10 ? '0' + min : min;
									that.hour = parseFloat((hour < 10 ? '0' + hour : hour)) + parseFloat(day * 24)
									that.day = day < 10 ? '0' + day : day;
									if (that.hour == '0' && that.min == '00' && that.sec == '00') {
										location.reload()
									}
										// console.log(that.hour,that.min,that.sec)	
								}

							}

						}

					
				}
			})
		},

	}

};

</script>
<style>

.Picture {

	font-weight: 700;
	background-color: #ffffff;
}


.swiper1 .selected {
	color: #ec5566;
}

.swiper1 .slidet {
	text-align: center;
	font-size: 0.32rem;
}

.slidet {

	border: 0.02rem solid #f2f2f2;
}

.photo {

	height: 2.8rem;
	/* background-color: blue; */
}

.photo img {
	margin-top: 0.14rem;
	width: 90%;
	height: 90%;
}

.designation {
	line-height: 0.36rem;
	height: 0.72rem;
	text-align: left;
	margin: 0.08rem 0.16rem;
	font-size: 0.24rem;
	color: #3d3d40;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.pmgressbar {
	margin: 0 0.16rem;
	height: 0.24rem;
	background-color: #dcdde0;
	text-align: center;
	border-radius: 0.12rem;
}

.strip {
	height: 100%;
	/* width: 80%; */
	background: linear-gradient(to right, #ff7800, #ff4500);
	border-radius: 0.12rem;
	line-height: 100%;
}

.price {
	position: relative;
	top: -0.28rem;
	z-index: 2;
	color: #fff;
	font-size: 0.2rem;
}

.character {
	height: 0.44rem;
	margin: 0.12rem 0.16rem 0.16rem 0.16rem;
	text-align: left;
}

.interval {
	height: 0.28rem;
	background-color: #f2f2f2;
}

.chosen-container {
	overflow: auto;
}

.chosen-swiper {
	display: -moz-box;
	/*Firefox*/
	display: -webkit-box;
	/*Safari,Opera,Chrome*/
	display: box;
	/*display: flex;/**/
}

.chosen-swiper a {
	width: 40%;
	text-align: center;
	background-color: #ffffff;
	color: #3d3d40;
	text-decoration: none;
	display: block!important;
}


.Spring {
	font-weight: 700;

	margin-top: 0.28rem;
}

.Spring_t {
	text-align: center;
	background: url(../../assets/images/not_refactoring/flashsale_image_strip.png) no-repeat;
	color: #ff4500;
	font-size: 0.32rem;
	padding-top: 0.2rem;
	background-size: 100%;
	background-color: #fff;
}

.Spring_b {
	font-size: 0.3rem;
	line-height: 0.76rem;
	background-color: #ffffff;
	padding-top: 0.2rem;
	padding-bottom: 0.16rem;
}


.clocks {
	padding: 0.2rem;
	background-color: #332019;
	color: #ffffff;
	border-radius: 0.2rem;
}

.seemore {
	margin: 0px 0.28rem 0 0.16rem;
	vertical-align: middle;
}

.groundt {
	display: inline-block;
	/* color: #000; */
}
</style>
