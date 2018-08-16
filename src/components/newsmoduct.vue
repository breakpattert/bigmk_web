<template>
	<div class="box">
	
		<p style="color:#DF0F70;font-size:20px;">新组件 33333333333333333333335555555555555555555555555555555555000000</p>

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
			
		},
		methods: {

		},
		computed: {

		}
	}
</script>
<style>
	
</style>
<style lang='scss'>
	@import '../assets/allcss/ins.css';

	body {
		line-height: 1.2;
	}
	body  *{
		font-family:  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", "Source Han Sans CN", sans-serif !important;
	}
	.box{
		width:100%;
		height:300px;
		background:#13B0E8;
	}

	
</style>