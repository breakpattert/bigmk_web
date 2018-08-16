<template>

	<!--<header class="mui-bar mui-bar-nav">
          <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../assets/images/back_gray.png" alt="" /></span></a></div>
          <div class="fl sw_search">
   				  <h1 class="mui-title" v-html="titles"></h1>
  			</div>
            <div class="fl_right" @click="modals()">
  				<i class="iconfont icon-more">&#xe65c;</i>
  			</div>
  				<ul class="titletab">
   				<div class="sanjiao_t"></div>
			 	<li><i class="iconfont icon-all">&#xe646;</i><a href="#" >Back to Homepage</a></li>
			 	<li><i class="iconfont icon-all">&#xe63d;</i><a href="#" >Messagesa</a></li>
			 	<li><i class="iconfont icon-all">&#xe64a;</i><a href="#" >Account Center</a></li>
			 	<li><i class="iconfont icon-all">&#xe661;</i><a href="#" >I Want Feedback</a></li>
			</ul>
     </header>-->
  <div class="mui-content">
  <div class="sw_blank"></div>
  <nav class="footer_nav">
    <ul>
      <li class="nav_home"><a href="./home.html"><i class="iconfont icon-category">&#xe646;</i><em>Home</em></a></li>
      <li class="nav_menu"><a href="./categorielist.html"><i class="iconfont icon-category">&#xe63b;</i><em>Categories</em></a></li>
      <li class="nav_cart"><a href="./cart.html"><i class="iconfont icon-category">&#xe63f;<strong class="mui-badge">{{count}}</strong></i><em>Cart</em></a></li>
    <!--  <li class="nav_user"><a href=""><span class="mui-icon mui-icon-person"></span><em>Favourites</em></a></li>-->
      <li class="nav_user on"><a href="./ucenter_index.html"><i class="iconfont icon-category">&#xe64d;</i><em>Me</em></a></li>
    </ul>
  </nav>
</div>

</template>

<script>
//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui';//导入mint-ui
	import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
	import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
	import qs from 'qs'
	import querystring from 'querystring'
//	vue新的组件
	export default {
		data() {
			return {
				titles:"",
				count:''
			}
		},
		created(){
//			截取获取url的用户user_token
			var search = window.location.search;
			if(search.length > 0 && search[0] == '?'){
				search = search.slice(1);
			}
			var query = querystring.parse(search);
			var token = query.user_token;
			console.log(query);


		},
		mounted() {
			var url = 'api/v1/common/getCartNum';
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
//				Toast({message: res.data.msg, duration: 1200});
				this.count = res.data.data.count;
		
				}else{
//					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		
		},
		methods: {
			modals:function(){
				 $(".titletab").toggle(100);
			},
		
		},
		computed: {

		}
	}
</script>
<style>
	
</style>
<style lang='scss'>
/*	@import '../assets/allcss/ins.css';*/
	/*@import '../assets/allcss/mui/css/mui.min.css';
	@import '../assets/allcss/mui/css/icons-extra.css';
	@import '../assets/allcss/ucentercss/ucenter.css';*/
	body  *{
		font-family:  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", "Source Han Sans CN", sans-serif !important;
	}
	.fl_right{
	width:20px;
	height:100%;
	float:right;
}
	.scan_code img {
    width: 60% !important;
        height: 100% !important;
  
}
	.titletab{

	display: none;
	border-radius:0.1rem;
	background: #000;
	position: absolute;
    right: 0.12rem;
    top: 0.56rem;
    height: 1.64rem;
    width: 1.64rem;
    padding:0.1rem;
}
.titletab li{
	border-bottom: 1px solid #3d3d40;
	    cursor: pointer;
}

.titletab li a{
	line-height: 28px;
	color:#fff;
    
}
.titletab li i{
	display:inline-block;
	width:0.16rem;
	    margin-right:0.05rem;
    height: 0.16rem;
	
}
.titletab .icon-all{
	color:#fff;
}
.sanjiao_t{
	position: absolute;
    border-bottom: 0.133333rem solid #000;
    border-top: 0.133333rem solid #ff000000;
    border-left: 0.133333rem solid #ff000000;
    border-right: 0.133333rem solid #ff000000;
	width: 0;
	height:0;
	top: -0.2rem;
    right: 0.01rem;
}
.fl_right .icon-more{
    	position: relative;
   		font-size: 0.24rem;
    	top: 0.1rem;
    }
   .main .mui-bar-nav{
   	position: relative;
   }
    .my_ico{
    	background:url('../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	height: 0.16rem;
		top: 0.08rem;
    	left: 0.08rem;

    }
   .mui-bar .scan_code img{
    	margin-top:0.07rem;
    }
	    /*footer*/
    .mui-content .footer_nav li a{
    	padding-top:0.08rem;
    }
    .footer_nav .icon-category {
    	font-size:0.28rem;
    	position: relative;
    }
    .mui-content .footer_nav li a em{
    	margin-top: 0;
    }
	
	
</style>