<template>
	<div class="main">
		<!--<div class="msg-box">
			<div class="msg-tit">
				<img src="../../assets/title.png" alt="">
			</div>
			
		</div>
		<div class="copy">·点击下方复制您的邀请码·</div>

		<div class="btn-line">

			<div class="btn-group" v-clipboard="code" @success="handleSuccess" @error="handleError">
				<div class="invite-num" v-for="num in codeArr">{{num}}</div>
			</div>

			
			<a class="btn-download" href="http://a.app.qq.com/o/simple.jsp?pkgname=me.fmfm.loverfund">下载恋爱宝</a>
		</div>-->
		<p style="color:#DF0F70;font-size:20px;">55555555555555555500000000000000000</p>
	
		<n-newsmoduct></n-newsmoduct>

		<a href="./demo.html" style="display:block;width:50px;padding:12px;border-radius: 25px;border: 1px solid #000;background: pink;">跳转</a>
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
	import newsmoduct from '../../components/newsmoduct.vue'
	export default {
		data() {
			return {
				code: '000000',
				money: 0,
				commonContract: [],
				contract: '',
				query: null,
			}
		},
		components:{
       'n-newsmoduct':newsmoduct,
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
			var param = qs.stringify({user_id: '',id:4117,active_id:577,promo:'time'});
			var param2 = qs.stringify({grant_type:'client_credentials',client_id:'2ff77e077c405be3de2bc8bccb3e2bbc',client_secret:'648dff972772cabac6923511a8f11aff'});
//			var params = {};
				self = this;
				var is = 'index/slideList?web_access=web';
			service.post(api.contract+is, param2).then(res => {
				var dg = res.data;
				console.log(dg);
//				self.commonContract = d.data.common_contract_d_t_o_s;
			})
//			get请求
//			service.get(api.commonContract).then(res => {
//				var d = res;
//				console.log(res.data.data);
//			})

		},
		mounted() {
			//复制功能的控件
			// var clip = new Clipboard('.clip');
			// clip.on('success', function(e){
			// 	Toast({message: '复制成功', duration: 1000});
			// })
		},
		methods: {
//			handleSuccess: function(){
//				Toast({message: '复制成功', duration: 3000});
//			},
//			handleError: function(){
//				Toast({message: '复制失败', duration: 3000});
//			}
		},
		computed: {
//			codeArr: function(){
//				var code = this.code;
//				if(typeof code == 'string'){
//					return this.code.split('');
//				}else{
//					return [0,0,0,0,0,0];
//				}
//			}
		}
	}
</script>

<style lang='scss'>

	@import '../../assets/allcss/ins.css';
	@import './invite.scss';
	html .mint-toast-text {
		font-size: 24px;
		padding: 6px 12px 8px;
		height: 24px;
		line-height: 30px;
		vertical-align: middle;
	}

	body {
		line-height: 1.2;
	}
	body  *{
		font-family:  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", "Source Han Sans CN", sans-serif !important;
	}

	html, body {
		background-color: #2B1576;
		min-height: 100%;
		/*height: 100%;*/
	}
	.main {
		overflow: hidden;
		text-align: center;
		min-height: 100vh;
		background-color: #2B1576;
		background: url(../../assets/bg.png) no-repeat;
		background-size: 100% auto;
		.msg-box {
			position: relative;

			margin: 60px 30px 0;
			border-radius: 30px;
			background-color: #4334BF;
			
			padding: 0 30px 42px;
			.msg {

				text-align: left;
				font-size: 28px;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 48px;
				margin-bottom: 12px;
				.money {
					color: #EB3BA5;
					text-decoration: underline;
				}
				.msg-user {
					white-space: pre-wrap;       /* Since CSS 2.1 */
					white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
					white-space: -pre-wrap;      /* Opera 4-6 */
					white-space: -o-pre-wrap;    /* Opera 7 */
					word-wrap: break-word;       /* Internet Explorer 5.5+ */
				}
			}
			.circle-1 {
				position: absolute;
				top: -54px;
				right: -24px;
				border-radius: 50%;
				height: 75px;
				width: 75px;
				background-color: #13B0E8;
				background-image: linear-gradient(-55deg, #13B0E8 0%, #0FA1E6 41%, #0F50F5 98%);
			}
			.circle-2 {
				position: absolute;
				top: 360px;
				right: -80px;
				border-radius: 50%;
				height: 120px;
				width: 120px;
				background-color: #AF2AFF;
				background-image: linear-gradient(-55deg, #AF2AFF 0%, #4CBBCF 67%, #24FFD1 98%);
			}
			.circle-3 {
				position: absolute;
				top: 22px;
				left: -100px;
				border-radius: 50%;
				width: 105px;
				height: 105px;
				background-color: #DF0F70;
				background-image: linear-gradient(-55deg, #DF0F70 0%, #FA737C 67%, #F0C214 99%);
			}
			.circle-4 {
				position: absolute;
				top: 425px;
				left: -160px;
				border-radius: 50%;
				width: 183px;
				height: 183px;
				background-color: #8C37F7;
				background-image: linear-gradient(-45deg, #8C37F7 2%, #3B34FE 86%);
				&:after {
					content: '';
					position: absolute;
					bottom: -20px;
					right: 0;
					border-radius: 50%;
					width: 60px;
					height: 60px;
					background-color: #DF0F70;
					background-image: linear-gradient(-55deg, #DF0F70 0%, #FA737C 67%, #F0C214 99%);
				}
			}
			.msg-tit{
				/*height: 200px;*/
				img {
					width: 240px;
					margin: 30px 0;
					display: inline-block;
				}
			}
			
		}

		.copy {
			margin-top: 108px;
			text-align: center;
			position: relative;
			font-size: 28px;
			color: #FC4684;
		}
		.btn-line {
			position: relative;
			margin: 84px 30px 0;
			background: url(../../assets/btn-bg.png) no-repeat;
			background-size: 100% auto;
			background-position: center;
			height: 209px;
			.btn-group {
				position: absolute;
				top: -60px;
				left: 0;
				right: 0;
				margin: 0 auto;
				.invite-num {
					display: inline-block;
					
					width: 75px;
					height: 100px;
					background: url(../../assets/invite-btn.png) no-repeat;
					background-size: 100% auto;

					font-size: 54px;
					line-height: 100px;
					color: #FC4684;
					margin-right: 15px;
					&:last-child {
						margin-right: 0;
					}
				}
			}
			.btn-download {
				position: absolute;
				bottom: 30px;
				left: 0;
				right: 0;
				margin-left: auto;
				margin-right: auto;

				display: inline-block;
				text-decoration: none;

				background-color: #FCDE1E;
				width: 570px;
				height: 90px;
				line-height: 90px;

				background-image: linear-gradient(-180deg, #FCDE1E 2%, #FEC703 99%);
				box-shadow: 2px 4px 12px 0 rgba(67,52,191,0.68), inset 0 -9px 5px 0 #FFBE02, inset 0 6px 6px 0 #FDE95F;
				border-radius: 6px;
				
				font-size: 34px;
				color: #7A4400;
				letter-spacing: 1px;
			}

		}

		.tip {
			margin-top: 16px;
			margin-bottom: 30px;
			/* 注意：邀请码24小时内有效: */
			font-size: 24px;
			color: #6856FC;
			letter-spacing: 0.71px;
		}

	}
</style>