<template>

	<header class="mui-bar mui-bar-nav">
          <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../assets/images/back_gray.png" alt="" /></span></a></div>
          <div class="fl sw_search">
   				   <h1 class="mui-title" v-html="titles"></h1>
  			</div>
           <div class="fr sw_news"><a href="#" @click="opentab()" id="sw_top_nav_show"><i class="iconfont icon-more">&#xe663;</i></a></div>
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
				titles:''
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
			if(L=='login.html'){
				this.titles="Log in";
			}else if(L=='follow.html'){
				this.titles="Follow";
			}
		},
		methods: {
				opentab:function(){
				  $(".sw_top_navbar").toggle(100);
			}
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

       .my_ico{
    	background:url('../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	top:0.12rem;
    	height: 0.16rem;

    }
          .sw_news .icon-more{

    	position: relative;
   		font-size: 0.24rem;
    	top: 0.1rem;
    	
    }
    .left_ico .icon-xiaoxi{
    	color:#fff;
    	font-size:0.20rem;
    }
    .main .sw_message_ul li h4 {

    white-space: nowrap;
    padding-right:0.36rem;
    text-overflow: ellipsis;
    }
	 .main .scan_code img{
  	margin-top:0.06rem;
  	width: 0.4rem;
  	height:0.4rem;
  }
	
</style>