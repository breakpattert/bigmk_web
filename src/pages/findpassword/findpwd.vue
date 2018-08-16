<template>
	<div class="main">
<n-orderhead></n-orderhead>
<div class="mui-content">
  <div class="sw_login_con sw_Email_up">
  	<div class="message_box">
  		<p class="message" v-show="messageshow">{{'messagetext'}}</p>
  	</div>
  	
    <form action="" method="get">
      <div class="mui-input-row mui-password ">
        <input type="password" name="password_one" class="mui-input-password sw_password" placeholder="New Password" v-model="password_one" @input="lengthLimit('password_one')">
      </div>
      <div class="mui-input-row mui-password ">
        <input type="password" name="password_two" class="mui-input-password sw_password" placeholder="Confirm Password" v-model="password_two" @input="lengthLimit('password_two')">
      </div>
      <div class="mui-button-row">
        <input name="" type="button" class="sw_submit_but" value="Submit"   @click="sub()">
      </div>
    </form>
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
	import orderhead from '../../components/orderhead.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				code: '000000',
				money: 0,
				messagetext:'',
				messageshow:false,
				commonContract: [],
				contract: '',
				query: null,
				modal:false,
				password_one:'',
				password_two:'',
				 slots: [
        			{
          		flex: 1,
          		values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          		className: 'slot1',
          		textAlign: 'right',
          		
        		}]
			}
		},
		components:{
     'n-orderhead':orderhead,
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
			console.log(query);
//			post请求要处理请求头部
//			var param = qs.stringify({user_id: '',id:4117,active_id:577,promo:'time'});
//			var param2 = qs.stringify({grant_type:'client_credentials',client_id:'2ff77e077c405be3de2bc8bccb3e2bbc',client_secret:'648dff972772cabac6923511a8f11aff'});
////			var params = {};
//				self = this;
//				var is = 'index/slideList?web_access=web';
//			service.post(api.contract+is, param2).then(res => {
//				var dg = res.data;
//				console.log(dg);
////				self.commonContract = d.data.common_contract_d_t_o_s;
//			})
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
			$(".main>a").css("background","deeppink");
	
//			 mui.init({
//			 	swipeBack: false
//			 });
			
		
		},
		methods: {
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			modals:function(){
				 $(".titletab").toggle(100);
			},
			sub:function(){
					var that=this;
					//先验证此账户有没有存在
						if(that.password_one==''){
							that.messageshow=true;
							that.messagetext="请输入新密码";
							return;
						}else if(that.password_two==''){

							that.messageshow=true;
							that.messagetext="请确认密码";
							return;
						}else if(!/[a-zA-Z0-9]{6,30}/.test(that.password_one)){
							that.messageshow=true;
							that.messagetext="密码格式有误";
							return;
						}else if(that.password_one !== that.password_two){
						
							that.messageshow=true;
							that.messagetext="两次密码不一致";
							return;
						}else{
							that.messageshow=false;
						}
						
						that.setpwd(that.password_one,that.password_two);
			},
			lengthLimit:function(type){
					if(type=="password_one"){
						if(this.password_one.length>20){
							this.password_one = this.password_one.slice(0,20);
//							Toast({message: '密码超出最大', duration: 1000});
							this.messageshow=true;
							this.messagetext="密码超出最大";
							return;
						}else{
							this.messageshow=false;
						}
					}
					if(type=="password_two"){	
						if(this.password_two.length>20){
							this.password_two = this.password_two.slice(0,20);
//							Toast({message: '密码超出最大', duration: 1000});
							this.messageshow=true;
							this.messagetext="密码超出最大";
							return;
						}else{
							this.messageshow=false;
						}
					}
			},
			setpwd:function(pwd_one,pwd_two){
				var that = this;
				var find_moble = localStorage.getItem('find_moble')
//				find_moble
					var param = qs.stringify({mobile:find_moble,password:pwd_one,password_confirmation:pwd_two});
					var findpwdapi = 'api/reset_password';
					service.post(api.contract+findpwdapi, param).then(res => {
						if(res.data.code==200){
							console.log(res.data);
							Toast({message: res.data.msg, duration: 1000});
							window.location.href ='./login.html';
						}else{
							Toast({message: '3333', duration: 1000});
						}
						

					})
			}
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

<style>


/*@import '../../assets/allcss/sw_style.css';*/
html{
	    background-color: #efeff4 !important;
}
.mui-content{
	position: relative;
	padding-top: 0 !important;
}

.mui-button-row #regBtn{
	width:100%;
	padding: 6px 0px;
	background: #ff4500;
	border-color:#ff4500;
}
.message_box{
	height:0.24rem;
	
}
.message{
	line-height: 0.24rem;
	color:red;
}


   
</style>