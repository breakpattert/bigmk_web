<template>
	<div class="main">
	<n-couponshead></n-couponshead>
<div class="mui-content">
          <div id="slider" class="mui-slider mui-fullscreen sw_ucenter_order_list">
    		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll">
              	<a class="mui-control-item mui-active" href="#item1mobile"> My Coupons({{listlength}}) </a> 
              	<a class="mui-control-item" href="#item2mobile">  Record  </a> 
              </div>
            </div>
    		<div class="mui-slider-group">
				    <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
				        <div id="scroll1" class="mui-scroll-wrapper">
				           	<div class="mui-scroll sw_ucenter_order_list_a">
				            	<ul class="sw_ucenter_order_list_ul">

				              		    <li v-for="item in coupons_list">
				                		<div class="sw_ucenter_order_list_b autohei">
				                			<a href="#">
				                          <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
				                          <p>{{item.true_name}}</p>
				                          <h4>Validity Time:</h4>
				                          </a>
				                          <h5>{{item.start_time}} - {{item.end_time}}</h5>
				                        </div>
				                        <div class="c_pick" @click="open_detil(item.voucher_str_id)">
				                        	<h4>undefined</h4>
				                        	<img src="../../assets/images/Coupons_bg22.png" alt="" />
				                        </div>
				              		   </li>
				              
				                    </ul>
				          		</div>
				          </div>
				      </div>
		            <div id="item2mobile" class="mui-slider-item mui-control-content">
		       			 <div class="mui-scroll-wrapper">
		                  <div class="mui-scroll sw_ucenter_order_list_a">
						        <ul class="sw_ucenter_order_list_ul">
									    <li v-for="item in coupons_list_low">
				                		<div class="sw_ucenter_order_list_b autohei">
				                          <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
				                          <p>{{item.true_name}}</p>
				                          <h4>Validity Time:</h4>
				                           <h5>{{item.start_time}} - {{item.end_time}}</h5>
				                        </div>
				                        <div class="c_pick">
				                        	<span>Used</span>
				                        	<h4>undefined</h4>
				                        	<img src="../../assets/images/Coupons_bg33.png" alt="" />
				                        </div>
				              		   </li>
				              	
		
						        </ul>
		          				</div>
		               		</div>
		     			</div>
	




			    </div>
  			</div>
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
	import couponshead from '../../components/couponshead.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				coupons_list:'',
				listlength:'',
				coupons_list_low:'',
				listlength_low:''
				
			}
		},
		components:{
     'n-couponshead':couponshead,
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
			var token = query.user_token;
			this.couponlist();
			this.couponlist_low();
		},
		mounted() {
	
			$(".main>a").css("background","deeppink");

		},
		methods: {
			open_detil:function(id){
					window.location.href="./coupon_detil.html?voucher_str_id="+id;
			},
			touchStart:function(ev) {
                        ev = ev || event;
                        ev.preventDefault();
//                      console.log(ev.targetTouches);
//                      console.log(ev.changedTouches);
                        if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                            this.startX = ev.touches[0].clientX; // 记录开始位置
                        }
            },
            message:function(){
				Toast({message: 'success', duration: 1000});
			},
			couponlist:function(){
				var that=this;
				var param = qs.stringify({status:1});
				var codeapi = 'api/v1/user/voList';
				service.post(api.contract+codeapi,param).then(res => {
					if(res.data.code==200){
						that.coupons_list=res.data.data;
						that.listlength=that.coupons_list.length;
//							Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
			},
			couponlist_low:function(){
				var that=this;
				var param = qs.stringify({status:2});
				var codeapi = 'api/v1/user/voList';
				service.post(api.contract+codeapi,param).then(res => {
					if(res.data.code==200){
						that.coupons_list_low=res.data.data;
						that.listlength_low=that.coupons_list_low.length;
//							Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
			}

		},
		computed: {
		}
	}
</script>

<style>
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';
.mui-bar~.mui-content .mui-fullscreen { top: 44px; height: auto; }
.mui-pull-top-tips { position: absolute; top: -20px; left: 50%; margin-left: -25px; width: 40px; height: 40px; border-radius: 100%; z-index: 1; }
.mui-bar~.mui-pull-top-tips { top: 24px; }
.mui-pull-top-wrapper { width: 42px; height: 42px; display: block; text-align: center; background-color: #efeff4; border: 1px solid #ddd; border-radius: 25px; background-clip: padding-box; box-shadow: 0 4px 10px #bbb; overflow: hidden; }
.mui-pull-top-tips.mui-transitioning { -webkit-transition-duration: 200ms; transition-duration: 200ms; }
.mui-pull-top-tips .mui-pull-loading { /*-webkit-backface-visibility: hidden;
				-webkit-transition-duration: 400ms;
				transition-duration: 400ms;*/
				
margin: 0; }
.mui-pull-top-wrapper .mui-icon,  .mui-pull-top-wrapper .mui-spinner { margin-top: 7px; }
.mui-pull-top-wrapper .mui-icon.mui-reverse { /*-webkit-transform: rotate(180deg) translateZ(0);*/
}
.mui-pull-bottom-tips { text-align: center; background-color: #efeff4; font-size: 15px; line-height: 40px; color: #777; }
.mui-pull-top-canvas { overflow: hidden; background-color: #fafafa; border-radius: 40px; box-shadow: 0 4px 10px #bbb; width: 40px; height: 40px; margin: 0 auto; }
.mui-pull-top-canvas canvas { width: 40px; }
.mui-slider-indicator.mui-segmented-control { background-color: #efeff4; }
.scan_code span.mui-icon {
    font-size: 0.36rem !important;
    
     top: -0.1rem;
}
.scan_code img {
    width: 60% !important;
        height: 100% !important;
  
}
#scroll1{
	overflow-x: hidden !important;
overflow-y: auto !important;
}
 .mint-toast-text {
    font-size: 0.16rem !important;

    height: 0.16rem !important;
    line-height: 0.14rem !important;

}
.chats{
	    padding: 0.1rem 0.1rem 0rem 0rem;
	        height: 0.45rem;
}
.chat_slip{
	display: inline-block;
    text-align: center;
    font-size: 0.11rem;
    height: 0.26rem;
    line-height: 0.24rem;
     border: 0.01rem solid #ff4500;
    color: #ff4500;
    border-radius: 0.04rem;
    padding: 0rem 0.16rem 0rem 0.16rem;
    float:right;
}
.chat_w{
	 padding: 0rem 0.12rem 0rem 0.12rem;

    float: left;

    margin-left: 0.10rem;
	display: inline-block;
    text-align: center;
    font-size: 0.11rem;
    height: 0.26rem;
    line-height: 0.24rem;
     border-radius: 0.04rem;
     border: 0.01rem solid #ff4500;
    color: #ff4500;
}
.sw_ucenter_order_list_b h5 em{
	    font-size: 0.10rem;
}
.mui-segmented-control.mui-scroll-wrapper .mui-scroll{
	width:inherit !important;
}
.sw_ucenter_order_list_ul .sw_ucenter_order_list_b p{
	font-size: 0.14rem;
	font-weight: 700;
	color:#3D3D40;
	padding-bottom:0.16rem;
}
.sw_ucenter_order_list_ul .sw_ucenter_order_list_b h4{
	color:#c8cacf;
}
.sw_ucenter_order_list_ul .sw_ucenter_order_list_b h5{
	color:#959699;
}
 .sw_ucenter_order_list_ul>li{
	background: none !important;
	    border-bottom: 1px solid #f5f5f5;
}
.mui-scroll-wrapper .sw_ucenter_order_list_a{
		background: #fff;
}
 .sw_ucenter_order_list_a .sw_ucenter_order_list_ul{
	background: #fff;
}
.sw_ucenter_order_list_ul>li{
	position: relative;
}
.c_pick{
	width:0.84rem;

    
     top: -0.12rem;
    position: absolute;
    right:0;

}
.c_pick>img{
	width:100%;
	height: 100%;
}
.c_pick>h4{
	position: absolute;
	line-height: 0.8rem;
    padding-left:0.08rem;
    /* font-weight: 500; */
    color: #fff;
    font-size: 0.15rem;
}
.c_pick>span{
	position: absolute;
	left: -0.35rem;
    top: 0.2rem;
    color: #c8cacf;
      font-size: 0.1rem;
}
</style>