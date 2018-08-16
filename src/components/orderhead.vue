<template>

	<header class="mui-bar mui-bar-nav">
          <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../assets/images/back_gray.png" alt="" /></span></a></div>
          <div class="fl sw_search">
   				  <h1 class="mui-title" v-html="titles"></h1>
  			</div>
            <div class="fl_right" @click="modals()">
  				<i class="iconfont icon-more">&#xe65c;</i>
  			</div>
  				<ul class="titletab">
   				<div class="sanjiao_t"></div>
			 	<li><i class="iconfont icon-all">&#xe646;</i><a href="./home.html" >Back to Homepage</a></li>
			 	<li><i class="iconfont icon-all">&#xe63d;</i><a href="./messages.html" >Messagesa</a></li>
			 	<li><i class="iconfont icon-all">&#xe64a;</i><a href="./ucenter_index.html" >Account Center</a></li>
			 	<li><i class="iconfont icon-all">&#xe661;</i><a href="./opinion.html" >I Want Feedback</a></li>
			</ul>
     </header>

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
//			post请求要处理请求头部
//			var param = qs.stringify({user_id: '',id:4117,active_id:577,promo:'time'});
//			var params = {};
//				self = this;
//			service.post(api.commonContract, param).then(res => {
//				var d = res.data;
//				console.log(d);
////				self.commonContract = d.data.common_contract_d_t_o_s;
//			})
//			get请求
//			service.get(api.commonContract).then(res => {
//				var d = res;
//				console.log(res.data.data);
//			})

		},
		mounted() {
			var url=window.location.href;
			var urlArr = url.split('?');
			var k = urlArr[0], 
			appU = k.split('/');
			var L = appU[appU.length - 1];
			if(L=='orderlist.html'){
				this.titles="Order List";
			}else if(L=='changepwd.html'){
				this.titles="Change Password";
			}else if(L=='findpwd.html'){
				this.titles="找回密码";
			}else if(L=='orderdetil.html'){
				this.titles="Order Details";
			}else if(L=='uc_address.html'){
				this.titles="My Address";
			}else if(L=='profie.html'){
				this.titles="Edit Profile";
			}else if(L=='setting.html'){
				this.titles="Setting";
			}else if(L=='messages.html'){
				this.titles="Messages";
			}
		
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
	
</style>