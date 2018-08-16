<template>
		<div class="mains">
		 <header class="mui-bar mui-bar-nav">
		    <div class="fl scan_code"><a  href="javascript:history.back(-1)">
		      	<span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
		  	<div class="fl sw_search">
		    	<h1 class="mui-title">Group Buy</h1>
		  	</div>
  
			</header>
		<div class="m_header">
			<p v-if="orderdetil.code==1">Need to be shared</p>
			<p v-else-if="orderdetil.code==2">Successful</p>
			<p v-else="orderdetil.code.code==3">Out of date</p>
		
			<p>Group Buy No.
			<span></span>{{orderdetil.quota_code}}</p>
		</div>
	
		<ul class="m_ardess" v-if="orderdetil.pay_type==17">
			<li>
				<div class="left_ico">

					<span><img src="../../assets/images/orderconfirmation_icon_contact_default.png" alt="" /></span>
				</div>
				<div class="right_text">
					<p>{{pickup_addressall.contact_person}}</p>
					<p>{{pickup_addressall.mobile}}</p>
				</div>
			</li>
			<li>
				<div class="left_ico2">

					<span><img src="../../assets/images/orderconfirmation_icon_address_default.png" alt="" /></span>
				</div>
				<div class="right_text2">
					<p>
						<span>{{pickup_addressall.province}}</span>
						<span>{{pickup_addressall.city}}</span>
						<span>{{pickup_addressall.area}}</span>
					</p>
					<p>
						{{pickup_addressall.address}}
					</p>
				</div>
			</li>
			<li>
	    		<p style="padding-left:0.20rem;line-height:0.30rem;position:relative;">Business Hours
	    			<span style="position: absolute;right: 0.14rem;">{{pickup_addressall.business_time}}</span>
	    		</p>
	    		<p style="padding-left:0.20rem;line-height:0.30rem;position:relative;">Pick-up Time
	    			<span style="position: absolute;right: 0.14rem;">	Please pick-up in{{pickup_addressall.pickup_time}}days</span>
	    		</p>
	    	</li>

		</ul>
			<ul class="m_ardess" v-if="orderdetil.pay_type==16"><!--orderdetil.pay_type==16-->
			<li>
				<div class="left_ico">
					<!--../../../../assets/images/crowdordering_web/orderconfirmation_icon_contact_default.png-->
					<span><img src="../../assets/images/orderconfirmation_icon_contact_default.png" alt="" /></span>
				</div>
				<div class="right_text">
					<p>{{orderdetil.accept_name}}</p>
					<p>{{orderdetil.mobile}}</p>
				</div>
			</li>
			<li>
				<div class="left_ico2">
					<!--../../../../assets/images/crowdordering_web/orderconfirmation_icon_address_default.png-->
					<span><img src="../../assets/images/orderconfirmation_icon_address_default.png" alt="" /></span>
				</div>
				<div class="right_text2">
					<p>{{orderdetil.address}}</p>
					<p>
						{{orderdetil.area_addr}}
					</p>
				</div>
			</li>
		</ul>
		<ul class="quotatype_02">
			<!--orderdetil.code == 1-->
			<div class="q_more2" v-if="orderdetil.code == 1">
				<div class="more_left2">Need
					<i>{{ypeople}}</i>
					<span>person joined in this Group Buy!</span>
				</div>
				<div class="more_right2">
					<span>{{orderdetil.joined_people}}/{{orderdetil.people}}</span>
				</div>
			</div>
			<div class="q_more2" v-if="orderdetil.code == 2">
				<div class="more_left2">
					Group Buy Successful
				</div>
				<div class="more_right2">
					<span>{{orderdetil.joined_people}}/{{orderdetil.people}}</span>
				</div>
			</div>
			<div class="q_more2" v-if="orderdetil.code == 3">
				<div class="more_left2">
					Out of Date
				</div>
				<div class="more_right2">
					<span>{{orderdetil.joined_people}}/{{orderdetil.people}}</span>
				</div>
			</div>
			<ul class="people_detil">
				<li class="people_main" v-for="(item,index) in orderdetil.users" :key="index">
					<a href="#" :class="{'owner': item.is_owner==1}">
						<img :src="imgHost+item.head_ico" :onerror="logo">
						<p v-if="item.is_owner==1">Originator</p>
					</a>
					
				</li>
				<li class="people_f" v-for="is in ypeople">
					<!--../../../../assets/images/crowdordering_web/quota_icon_wait.png-->
					<a href=""><img src="../../assets/images/quota_icon_wait.png"></a>
				</li>
			</ul>
			<!--拼单中-->
			<div class="invite_footer" v-if="orderdetil.code == 1">
				<div class="invit_left">
					<div style="color:#3d3d40;font-size:14rem;position: absolute;top: 12rem;left:14rem;">Ends in</div>
					<article>

						<div class="timer" id="timer">
						</div>
					</article>
				</div>
				<div class="invit_right">
					<!--:href="'/site/invitefriends?Name='+Name+'&price='+price"-->
					<a :href="'/site/invitefriends?Name='+Name+'&price='+price">Invite Friends</a>
				</div>
			</div>
			<!--拼单 结束-->

		</ul>

		<ul>
			<li class="m_shophome">

				<div class="s_center">
					<div class="s_img">
						<a href="/site/q_orderdetil">
							<img :src="imgHost+orderdetil.img" />
						
						</a>
					</div>
					<div class="s_detil">
						<h3>{{name}}</h3>
						<p class="s_color">
							<span>{{value}}</span>
						</p>
						<p class="s_price">
							<span class="s_span1">₱{{orderdetil.quota_price}}</span>
							<span class="s_span2">X{{orderdetil.goods_nums}}</span>
						</p>
					</div>
				</div>
				<div class="s_footer">
					<!--<div class="footer_l">
	    					<span class="f_ico_1"><img src="../../../../assets/images/crowdordering_web/list_icon_chatnow_default.png" alt="" /></span>
	    					<a>Chat Now</a>
	    					
	    				</div>-->
					<div class="f_head_r" v-if="orderdetil.code == 3">
						<a :href="'/site/products?id='+orderdetil.goods_id+'&promo='+orderdetil.promo"> Buy Again</a>
					</div>
				</div>
			</li>

		</ul>
		<ul class="amount_list">
			<li>
				<p class="t_left">Payment Method</p>
				<p class="t_right" >{{orderdetil.pay_type==16?'Cash On Delivery':'Customer Pick-up'}}</p>-->
				 <!--<p class="t_right" >{{orderdetil.pay_type==17?'Free Shipping':''}}</p> -->
			</li>
			<li>
				<p class="t_left">Shipping Method</p>
				<p class="t_right">{{orderdetil.delivery}}</p>
			</li>
			<li>
				<p class="t_left">Amount</p>
				<p class="t_right">₱{{orderdetil.real_amount}}</p>
			</li>
			<li>
				<p class="t_left">Shipping Fee</p>
				<p class="t_right">₱{{orderdetil.real_freight}}</p>
			</li>
			<li class="payment">
				<p class="payment_t"> Actual Payment：
					<span>₱{{orderdetil.order_amount}}</span>
					
				</p>
				<p class="payment_b">Creation Time：{{orderdetil.created_time}}</p>

			</li>
		</ul>
		<div class="tel_phone">
			<span>
		<!--		../../../../assets/images/crowdordering_web/details_icon_phonecall.png-->
				<img src="../../assets/images/details_icon_phonecall.png" alt="" />
			</span>
			<a>{{orderdetil.seller_mobile}}</a>
		</div>
		<div class="footer_wet">
			<a :href="'/ucenter/order_detail/id/'+orderdetil.order_id" style="margin:0 14rem;border:1rem solid #3d3d40;color:#3d3d40;" v-if="orderdetil.code == 2">
				<i>View Order</i>
			</a>
			<a href="#">
				<span class="wet_img">
					<!--../../../../assets/images/crowdordering_web/list_icon_chatnow_default.png-->
					<img src="../../assets/images/list_icon_chatnow_default.png" alt="" />
				</span>
				<i style="position: relative;left: 0.1rem;" @click="theory()">Chat Now</i>

			</a>

		</div>

	</div>
</template>

<script>
	
//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui'//导入mint-ui
	import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
	import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
	import qs from 'qs'
	import querystring from 'querystring'
	import '@/assets/alljs/jquery-3.2.1.min.js';
	import '@/assets/alljs/mobile.js';
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
			logo: 'this.src="' + require('../../assets/images/headeruser.jpg') + '"',
			detil_id: '',
			orderdetil: [],
			ypeople: '',
			imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
			price: '',
			Name: '',
			isShow: false,
			name:'',
			value:'',
			pickup_addressall:{},
			}
		},
		components:{

    	},
    	externals: {
			mui: 'mui'
		},
		created(){
//			截取获取url的用户user_token
			var search = window.location.search;
			if(search.length > 0 && search[0] == '?'){
				search = search.slice(1);
			}
			var query = querystring.parse(search);
			this.detil_id = query.id;
			this.oredr_detil();
			if (this.orderdetil.end_time = undefined) {
			//			console.log(66)
			return
			} else {
			//			console.log(77)
			this.set();
			}

		},
		mounted() {

			
		
		},
		methods: {
			 toggle() {
       			this.isShow = !this.isShow;
				$(function() {
	                $(document).bind("click", function(e) {
	                    var target = $(e.target);
	                    if (target.closest(".pop").length == 0) {
	                        $(".pop").hide();
	                    }
	                })
	            })
        	},
        	theory() {
			chat(this.orderdetil.shop_name, imgHost + this.orderdetil.img, "82000" + imgHost + this.orderdetil.seller_id)
			},
			oredr_detil:function(){
				var self = this;
				var url = 'api/v1/quota/quotaDetail/'+self.detil_id;
				var param = qs.stringify({
					quota_detail_id:self.detil_id
				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					self.orderdetil = res.data.data;
					var all = +self.orderdetil.people;
					var join = +self.orderdetil.joined_people;
					self.pickup_addressall = self.orderdetil.pickup_address;
					self.ypeople = all - join;
					self.name = self.orderdetil.goods_info.name
					self.value = self.orderdetil.goods_info.value
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
				var url = location.search; //获取url中"?"符后的字串 
				var theRequest = {};
				if (url.indexOf("?") != -1) {
					var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
					var strs = str.split("&");
					for (var i = 0; i < strs.length; i++) {
						theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
					}

			  	}
				this.price = theRequest.price
				this.Name = theRequest.Name
			},
				//			时间的time
			set() {
				let that = this;
				var timer = document.getElementsByTagName("div")[0];
				setInterval(
					function() {
						that.getDate(timer);
					}, 300);
			},
			tow(n) {
				return n >= 0 && n < 10 ? '0' + n : '' + n;
			},
			getDate() {
				var nowDate = new Date();
				var nowTime = nowDate.getTime();
				var neDate = new Date(this.orderdetil.end_time);//预定时间,自己写
				var newTime = neDate.getTime();
				var shicha = Math.floor(Math.abs(newTime - nowTime)) / 1000;
	
				var day = Math.floor(shicha / (86400));//取整
	
				var one = shicha % 86400;//剩下的余数
				var hour = Math.floor(one / 3600);
				var two = one % 3600;
				var hourall = day * 24 + hour;
				var minute = Math.floor(two / 60);
				var three = Math.floor(two % 60);
	
	
				if (day == 0) {
	
					var str = '<span>' + this.tow(hour) + '</span>' +
						'<span>' + this.tow(minute) + '</span>' +
						'<span>' + this.tow(three) + '</span>';
					timer.innerHTML = str;
	
				} else {
					//                 	               var str = this.tow(day) + '<span>天</span>'+
					//                        this.tow(hour) + '<span>小时</span>'+
					//                         this.tow(minute) + '<span>分钟</span>'+
					//                         this.tow(three)+'<span>秒</span>';
	
	
	
					var str = '<span>' + this.tow(hourall) + '</span>' +
						'<span>' + this.tow(minute) + '</span>' +
						'<span>' + this.tow(three) + '</span>';
					timer.innerHTML = str;
	
				}

			}
		},
		computed: {

		}
	}
</script>

<style>
body {
	background: #f2f2f2;
	font-family: Arial;
}

.m_header {
	height: 0.72rem;
	width: 100%;
	border-bottom: 0.01rem solid #dcdde0;
	font-size: 0.14rem;
	line-height: 0.24rem;
	color: #fff;
	padding: 0.12rem 0.14rem;
	background: #933fff;
}

.m_ardess {

	padding: 0.14rem;
	margin-bottom: 0.14rem;
	background-color: #fff;
}

.m_ardess>li {
	overflow: hidden;
}
.m_ardess>li>p{
	font-size:0.12rem;
	    color: #666;
}
.m_ardess>li>p>span{
	font-size:0.12rem;
	    color: #666;
}
.m_header>p {
	line-height: 0.24rem;
	color:#fff;
}

.m_shophome {
	width: 100%;
	background: #fff;
	/*	border:1rem dashed red;*/
	margin-bottom: 0.14rem;
}

.s_header {
	padding: 0.14rem 0.14rem;
	width: 100%;
	height: 0.50rem;
	border-bottom: 0.01rem solid #dcdde0;

	color: #3d3d40;
	font-size: 0.14rem;
}

.s_center {
	padding: 0.14rem 0.14rem;
	width: 100%;
	height: 1.21rem;
}

.s_footer {
	padding: 0.14rem 0.14rem;
	width: 100%;
	height: 0.50rem;
	color: #3d3d40;
	font-size: 0.14rem;
	border-top: 0.01rem solid #dcdde0;
}

.head_l {
	float: left;
	line-height: 0.18rem;
	/*	vertical-align: middle;*/
}

.head_l>a {
	position: relative;
	bottom: 0.06rem;
	padding: 0 0.03rem;
}

.head_r {
	float: right;
}

.ico_1 {
	display: inline-block;
	width: 0.25rem;
	height: 0.25rem;

	text-align: center;
}

.ico_2 {
	display: inline-block;
	width: 0.15rem;
	height: 0.25rem;
	padding-bottom: 0.6rem;
	text-align: center;
	position: relative;
	bottom: 0.3rem;
}

.head_r {
	font-size: 0.12rem;
	color: #ff4500;
}


/*底部*/

.footer_l {
	float: left;
}

.f_head_r {
	font-size: 0.14rem;
	float: right;
	height: 0.28rem;
	width: 1.08rem;
	line-height: 0.28rem;

	text-align: center;
	position: relative;
	bottom: 0.04rem;
	border-radius: 0.28rem;
	cursor: pointer;
	border: 0.01rem solid #3d3d40;
	color: #3d3d40;
}

.f_ico_1 {
	display: inline-block;
	width: 0.25rem;
	height: 0.25rem;

	text-align: center;
}

.footer_l>a {
	color: #30b46c;
	font-size: 0.12rem;
	position: relative;
	bottom: 0.06rem;
}

.s_img {
	width: 25%;
	height: 0.95rem;
	/*	border:1rem dashed #333;*/
	float: left;
}

.s_img>a {
	display: inline-block;
	/*width:95rem;*/
	width: 100%;
	height: 0.95rem;
	/*	border:1rem solid red;*/
	margin: 0 auto;
	overflow: hidden;
}

.s_img>a>img {
	width: 100%;
	height: 100%;
}

.s_detil {
	/*	border:1rem dashed #333;*/
	float: left;
	width: 75%;
	height: 0.95rem;
	padding-left: 0.14rem;
}

.s_detil h3 {
	font-size: 0.14rem;
	color: #6d6e73;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	line-height: 0.32rem;
	cursor: pointer;
}

.s_color {
	color: #333;
	font-size: 0.10rem;
	line-height: 0.18rem;
}

.s_price {
	padding-top: 0.16rem;
}

.s_price .s_span1 {
	color: #ff4500;
	font-size: 0.14rem;
	font-weight: 700;
}

.s_span2 {
	float: right;
	font-weight: 700;
	font-size: 0.01rem;
}


/*tab导航*/

.left_ico {
	float: left;
	width: 20%;
	height: 0.65rem;
	padding: 0.14rem;
}

.left_ico>span {
	display: inline-block;
	width: 0.36rem;
	height: 0.36rem;
}

.left_ico>span>img {
	width: 84%;
}

.left_ico2 {
	float: left;
	width: 20%;

	padding: 0.12rem;
}

.left_ico2>span {
	display: inline-block;
	width: 0.36rem;
	height: 0.36rem;
	color: #6d6e73;
}

.left_ico2>span>img {
	width: 84%;
}

.right_text {
	width: 80%;
	float: left;
	height: 0.65rem;
}

.right_text2 {
	width: 80%;
	float: left;
}

.right_text2>p {
	color: #3d3d40;
	font-size: 0.12rem;
	line-height: 0rem;
	padding: 0.12rem 0;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.right_text3 {
	width: 80%;
	float: left;
}

.right_text3>p {
	color: #3d3d40;
	font-size: 0.12rem;
	line-height: 0rem;
	padding: 0.12rem 0;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.right_text>p {
	color: #3d3d40;
	font-size: 0.15rem;
	line-height: 0rem;
	padding: 0.14rem 0;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}


/*拼团 人数*/


/*样式二*/

.quotatype_02 {
	width: 100%;
	background: rgba(250, 250, 250, 1);

	overflow: hidden;
	margin-bottom: 0.14rem;
}

.q_more2 {
	height: 0.48rem;
	width: 100%;
	line-height: 0.48rem;
	/*		background-color:#6D53CD;*/
	font-size: 0.14rem;
	color: #3d3d40;
	padding-left: 0.14rem;
	border-bottom: 0.01rem solid #dcdde0;
}

.more_left2 {
	float: left;
}

.more_left2>i {
	padding: 0 0.06rem;
}

.more_right2 {
	width: 0.75rem;
	text-align: center;
	float: right;
}

.more_right2>a {
	padding: 0 0.06rem;
	font-size: 0.14rem;
	color: #fff;
}

.people_detil {
	margin: 0 auto;
	width: 90%;
	overflow: hidden;
	padding: 0.14rem 0;
}

.people_detil>li {
	text-align: center;
	display: inline-block;
	width: 20%;
	height: 0.62rem;
	position: relative;
		overflow: hidden;
	float: left;
}

.people_main>a>p {
    font-size: 0.1rem!important;
    line-height: 0.20rem;
    font-size: 0.10rem;
    color: #fff;
    width: 0.60rem;
    background: #ffc41c;
    height: 0.21rem;
    position: absolute;
    border-radius: 0.06rem;
       top: 0.30rem;
    left: -0.05rem;
}

.people_detil>li>a {
	display: block;
	width: 0.48rem;
	height: 0.48rem;
	border-radius: 50%;

	    /* overflow: hidden; */
    position: relative;
	margin: 0.10rem auto;
}

.people_detil .owner {
	border: 0.01rem solid #ffc41c;
}

.people_detil>li>a>img {
	width: 100%;
	height:100%;
	border-radius: 50%;
}


/*over*/

.people_detil .people_f a {}

.invite_footer {
	width: 100%;
	height: 0.48rem;
	border-top: 0.01rem solid #dcdde0;
}

.invit_left {
	float: left;
	width: 60%;
	height: 100%;
	position: relative;
	/*	border:1rem dashed #000;*/
	text-align: center;
}

.invit_right {
	float: left;
	width: 40%;
	height: 100%;
	text-align: center;
	padding: 0.10rem;
}

.invit_right>a {
	display: inline-block;
	width: 1.08rem;
	height: 0.28rem;
	border-radius: 0.28rem;
	background-color: #ff7800;
	text-align: center;
	line-height: 0.28rem;
	color: #fff;
	margin: 0 auto;
}

.invit_right_out {
	float: right;
	width: 40%;
	height: 100%;
	text-align: center;
	padding: 0.10rem;
}

.invit_right_out>a {
	display: inline-block;
	width: 1.08rem;
	height: 0.28rem;
	border: 0.01rem solid #3d3d40;
	color: #3d3d40;
	border-radius: 0.28rem;
	text-align: center;
	line-height: 0.28rem;
	margin: 0 auto;
}

.amount_list {
	margin-bottom: 0.14rem;
	width: 100%;
	background-color: #fff;
}

.amount_list li {
	overflow: hidden;
	width: 100%;
	padding: 0 0.14rem;
	;
	height: 0.48rem;
	line-height: 0.48rem;
	border-bottom: 0.01rem solid #dcdde0;
}

.amount_list li>p {
	color: #3d3d40;
	font-size: 0.14rem;
}

.amount_list .t_right {
	float: right;
	color: #ff4500;
}

.t_left {
	float: left;
}

.amount_list .payment {
	height: 0.70rem;
	line-height: 0;
	line-height: 0.28rem;
	padding-top: 0.06rem;
}

.payment>p {
	float: right;
}

.payment .payment_t {
	font-size: 0.16rem;
}

.payment_t>span {
	color: #ff4500;
	display: inline-block;
	padding-left: 0.6rem;
}

.payment .payment_b {
	font-size: 0.12rem;
	color: #96989e;
}

.tel_phone {
	height: 0.48rem;
	padding: 0 0.14rem;
	text-align: center;
	line-height: 0.48rem;
	background-color: #fff;
	margin-bottom: 0.24rem;
}

.tel_phone>a {
	font-size: 0.14rem;
	color: #3d3d40;
}

.tel_phone>span {
	position: relative;
}

.footer_wet {
	height: 0.5rem;
	width: 100%;
	background-color: #fff;
	line-height: 0.50rem;
	padding: 0.12rem
}

.footer_wet>a {
	display: inline-block;
	width: 30%;
	height: 0.28rem;
	border-radius: 0.28rem;
	line-height: 0.28rem;
	border: 0.01rem solid #30b46c;
	position: relative;
	text-align: center;
	float: right;
}

.wet_img {
	position: absolute;
	left: 0.01rem;
	top: -0.02rem;
}


/*时间的css*/


/*时间css*/

article {
	border-radius: 0.05rem;
	line-height: 0.30rem;
	color: #fff;
	position: absolute;
	top: 0.10rem;
	left: 30%;
}

.timer>span {
	border-radius: 0.03rem;
	width: 0.36rem;

	height: 0.28rem;
	line-height: 0.28rem;
	text-align: center;
	margin-right: 0.6rem;
	display: inline-block;
	font-family: 'FZY4JW--GB1-0';
	font-weight: 700;
	color: rgba(255, 255, 255, 1);
	background-color: #3d3d40;
	;
	/*background: linear-gradient(top, #FF902D,#FFD800);
    background: -webkit-linear-gradient(top, #FF902D,#FFD800);
    background: -o-linear-gradient(top,#FF902D,#FFD800);
    background: -moz-linear-gradient(top,#FF902D,#FFD800);
    background: -ms-linear-gradient(top,#FF902D,#FFD800);*/
	font-size: 0.16rem !important;
}
.my_quota{
	text-align: center;
	font-size:0.16rem;
	color:#495060;
	height:0.40rem;
	border-bottom: 0.01rem solid #dcdde0;
	line-height: 0.45rem;
	background-color: #fff;
}
.my_quota>a{
	display: inline-block;
position: absolute;
top: 0.12rem;
left: 0.14rem;
width: 0.30rem;
line-height: 0.12rem;
}
.my_quota>a>img{
	width:80%;
}
 .scan_code{
 	float: left;
 }
 .scan_code>a>span>img{
  	margin-top:0.06rem !important;
  	width: 0.3rem !important;
  	height:0.3rem !important;
  }
  .mains{
  	padding-top:0.45rem;
  }
</style>