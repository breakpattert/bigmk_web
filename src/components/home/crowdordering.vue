
<!-- // 拼单...........................-->
<template>
    <div v-if="open_status=='2'">
        <div class="Spring" style="    position: relative;    height: 1.4rem">
            <img src="../../assets/images/not_refactoring/quota_img_title.png" alt="" style="  height: 100%;    width: 100%;">
            <yd-flexbox class="Spring_s crowdordering" style="top: 0.3rem;position: absolute;width: 100%;" v-if="length!=0">
                <yd-flexbox-item style=" font-size: 0.28rem;   ">
                    <!-- 计时器 -->
                    <!-- Ends in  HH:MM:SS离开始时间小于24小时 -->
                    <div v-if=" conclude >0" style="    margin-top:0.16rem;">
                        <span style="color: #ffffff;padding: 0.1rem;font-size: 0.32rem;display: inline-block;">Start in:</span>
                        <span class="clockss" v-if="hour<10">{{'0'+hour}}</span>
                        <span class="clockss" v-if="hour>10">{{hour}}</span>&nbsp;:
                        <span class="clockss">{{min}}</span>&nbsp;:
                        <span class="clockss">{{sec}}</span>
                    </div>
                    <!-- Ends in  HH:MM:SS离结束时间小于24小时 -->
                    <div v-if=" initiates >0" style="    margin-top: 0.16rem;">
                        <span style="color: #ffffff;padding: 0.1rem;font-size: 0.32rem;">Ends in:</span>
                        <span class="clockss" v-if="hour<10">{{'0'+hour}}</span>
                        <span class="clockss" v-if="hour>10">{{hour}}</span>&nbsp;:
                        <span class="clockss">{{min}}</span>&nbsp;:
                        <span class="clockss">{{sec}}</span>
                    </div>
                </yd-flexbox-item>
                <div style=" ">
                    <a href="/crowdordering_list.html">
                        <span style="color: #ffffff;padding-left: 0.28rem;font-size: 0.24rem">See All</span>
                      	<img src="../../assets/images/not_refactoring/quota_icon_seemore_default.png" alt="" class="seemore">
                    </a>
                </div>
            </yd-flexbox>
            <!-- 商品 -->
        </div>
        <!--<yd-flexbox v-if="success!=true" style="border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;background-color: #fff;">
            <yd-flexbox-item style="height: 230px;border-right: 1px solid #f2f2f2; "></yd-flexbox-item>
            <yd-flexbox-item style="height: 230px;"></yd-flexbox-item>
        </yd-flexbox>-->
        <div class="Picture">
            <div class="chosen-container">
                <div class="chosen-swiper">
                    <a :href="'/products.html?id='+item.goods_id+'&promo='+item.promo+'&active_id='+item.quota_activity_id+'&quota_goods_id='+item.quota_goods_id" v-for="(item,index) in recommend" :key="index" :style="{width: activeColor+'%'}" style="    border: 0.02rem solid #060c30;">
                        <div class="photo slidets"><img :src="Imgstr+item.img" :onerror="acquiescence" style="margin-top: 0px;width: 100%;height: 100%;"></div>
                        <div class="besx">
                            <div class="designation" style="word-wrap: break-word;word-break: normal;    color:#fff;">{{item.goods_name.replace(/amp;/g, '')}}</div>
                            <div class="characters">
                                <yd-flexbox>
                                    <div style="margin-right: 0.1rem;">
                                        <h4 style="font-size: 16px;color: #ff9933;">₱{{item.quota_price}}</h4>
                                    </div>
                                    <yd-flexbox-item>
                                        <h4 style="font-size: 0.24rem;color: #c2c4cc;text-decoration:line-through;">₱{{item.market_price}}</h4>
                                    </yd-flexbox-item>
                                </yd-flexbox>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

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
			service.get(api.contract + 'api/v1/home/groupBuy').then(res => {
				   that.recommend = res.data.data.list
				that.code = res.data.code
				that.length = res.data.data.list.length
				if (that.length != 0 && that.code == 200) {
					that.length = res.data.data.list.length
                    that.open_status = res.data.data.open_status
                    that.success = res.data.success
                    if (that.length <= 2) {
                        that.activeColor = 50
                    }
                    if (that.length >= 3) {
                        that.activeColor = 40
                    }
					// 开始时间 
					var start_time = res.data.data.user_start_time.replace(/-/g, '/')
                      console.log(start_time)      
					// 结束时间
					var end_time = res.data.data.user_end_time.replace(/-/g, '/')
				
						that.minst =  res.data.data.nowtime.replace(/-/g, '/')
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
    font-size: 0.38rem;
}

.photo {
    height: 2.8rem;
   
}

.photo img {
    margin-top: 0.14rem;
    width: 90%;
    height: 90%;
}

.designation {
    line-height: 0.36rem;
    text-align: left;
    margin: 0.08rem 0.16rem;
    font-size: 0.28rem;
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
    top: -0.24rem;
    z-index: 2;
    color: #fff;
    font-size: 0.2rem;
}

.characters {
    height: 0.44rem;
    margin: 0.12rem 0px 0.16rem 0.16rem;
    text-align: left;
    overflow: hidden;
}

.interval {
    height: 0.24rem;
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

.Spring_s {
    font-size: 0.3rem;
    line-height: 0.76rem;
    /* background-color: #ffffff; */
    padding-top: 0.2rem;
    padding-bottom: 0.16rem;
}


.clockss {
    padding: 0.18rem;
    background-color: #8d3dff;
    color: #ffffff;
    border-radius: 0.2rem;
}

.seemore {
    margin: 0px 0.28rem 0 0.16rem;
    vertical-align: middle;
}

.ground {
    display: inline-block;
    color: #fff;
}

.besx {
    background-color: #313652;
    padding: 0.16rem 0px;
}
</style>