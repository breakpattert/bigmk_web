<template>
	<div class="main">
	<header class="mui-bar mui-bar-nav">
  <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">My Favoutites</h1>
  </div>

</header>
<div class="mui-content">
  <div class="sw_my_favourite">
    <ul class="sw_my_favourite_ul">
      <li class="autohei" v-for="(item,index) in likelist">
        <div class="sw_my_favourite_b autohei fl" @click="opendetil(item)">
          	<a href="#" class="sw_img"><img :src="imgHost+item.img"></a>
          <p>{{item.name}}</p>
          <h5>₱{{item.sell_price}}</h5>
        </div>
        <div class="sw_my_favourite_a fl">
          <div class="sw_my_favourite_a1" align="center" @click="message(item.id)">
          	<img src="../../assets/images/delete_favourites_gray.png">
          </div>
        
        </div>
      </li>
      





    </ul>
  </div>
	<n-footer></n-footer>
  <div class="sw_blank"></div>
</div>
<!--顶部下滑导航条-->
<div class="sw_top_navbar">
   <div class="sw_top_navbar1">
    <ul>
      <li class="nav_home on"><a href="#"><i class="iconfont icon-xiaoxi" >&#xe648;</i><em>Home</em></a></li>
     <li class="nav_user"><a href="#"><i class="iconfont icon-xiaoxi">&#xe662;</i><em>Messages</em></a></li>
      <li class="nav_cart"><a href="#"><i class="iconfont icon-xiaoxi">&#xe63f;</i><em>Shopping Cart</em></a></li>
      
      <li class="nav_user"><a href="#"><i class="iconfont icon-xiaoxi">&#xe64d;</i><em>My Account</em></a></li>
    </ul>
  </div>
</div>
	</div>
</template>

<script>

//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui'//导入mint-ui
	import { MessageBox } from 'mint-ui';
	import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
	import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
	import qs from 'qs'
	import querystring from 'querystring'
	import '@/assets/alljs/jquery-3.2.1.min.js';
	import '@/assets/alljs/mobile.js';
	import footer from '../../components/allfooter.vue';
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				likelist:[],
				imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
				
			}
		},
		components:{
		 'n-footer':footer,
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
			this.favoritelist();

			

		},
		mounted() {


		},
		methods: {
			opendetil(item){
					if(item.promo=='time'){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}
					
				}else if(!item.promo){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo=";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo=";
					}
					
				}else if(item.promo=='quota'){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}
					
				}else{
					
				}
				
			},
			touchStart:function(ev) {
                        ev = ev || event;
                        ev.preventDefault();
                        if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                            this.startX = ev.touches[0].clientX; // 记录开始位置
                        }
            },
            message:function(id){
				var that= this;
				var goodsid=id;
				MessageBox({
  				title: 'Tips ',
  				message: 'Are you sure to put this coupon in angpao?',
  				showCancelButton: true,
  				cancelButtonText:'No',
  				confirmButtonText:'Yes',
				}).then(action => {
					if(action=='cancel'){
						
					}else if(action=='confirm'){
						
						that.delfavorite(goodsid);
					}else{
						return;
					}
			
				});
	
			},
			opentab:function(){
				  $(".sw_top_navbar").toggle(100);
			},
			favoritelist:function(){
				var that=this;
				var codeapi = 'api/v1/user/fList';
				service.get(api.contract+codeapi).then(res => {
					if(res.data.code==200){
						that.likelist=res.data.data;
//							Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
			},
			delfavorite:function(id){
				var self = this;
				var url = 'api/v1/user/addOrCancel';
				var param = qs.stringify({
					goods_id:id,
					type:2
				});
				service.post(api.contract+url,param).then(res => {
				if(res.data.code==200){
					self.favoritelist();
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
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
  .main .scan_code img{
  	margin-top:0.06rem;
  	width: 0.4rem;
  	height:0.4rem;
  }
      .sw_news .icon-more{

    	position: relative;
   		font-size: 0.24rem;
    	top: 0.1rem;
    	
    }
    .sw_top_navbar1 .icon-xiaoxi{
    	font-size:0.21rem;
    }
    .sw_top_navbar1 li{
    	padding-top: 0.08rem;
    }
    .sw_img{
    	width:0.65rem;
    	height: 0.68rem;
    	overflow: hidden;
    	display: inline-block;
   		 float: left;
    }   
     .sw_img>img{
     	width:100%;
     	height:100%;
     }
      /*弹框*/  
 .mint-msgbox-input>input{
		width:90% !important;
		height: 0.06rem !important;
    margin-bottom: 0.15rem !important;
    border:0.01rem solid rgba(0, 0, 0, 0.38) !important;
	}
	.mint-msgbox-wrapper .mint-msgbox{
		width:62%;
	}
	/*.mint-msgbox .mint-msgbox-header{
		display: none;
	}*/
	.mint-msgbox .mint-msgbox-input{
		padding-top:0;
		height: 0.3rem;
	}
	.mint-msgbox .mint-msgbox-message {
    color: #333;
    font-weight: 700;
    font-size: .14rem;

    line-height: .20rem;
}
.mint-msgbox-wrapper .mint-msgbox{
	border-radius: 0.14rem;
}
.mint-msgbox .mint-msgbox-cancel{
	color:#ff4500;
}
.mint-msgbox .mint-msgbox-confirm{
	color:#ff4500;
}
 .mint-toast-text {
    font-size: 0.16rem !important;

    height: 0.16rem !important;
    line-height: 0.14rem !important;

}
.mint-msgbox .mint-msgbox-message{
	font-weight: 400 !important;
	
}
.mui-bar-nav ~ .mui-content {
    padding-top: 0 !important;
}
</style>