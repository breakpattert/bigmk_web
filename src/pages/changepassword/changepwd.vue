<template>
	<div class="main">
<n-orderhead></n-orderhead>
<div class="mui-content">
  <div class="sw_login_con sw_Email_up">
    <form action="" method="get">
      <div class="mui-input-row mui-password ">
        <input type="password" class="mui-input-password sw_password" placeholder="Old Password" v-model="password_old" @input="lengthLimit('password_old')">
         <span class="m_state" :class="{'pwd_state':pwd_show}" v-show="stateshow">{{statetext}}</span>
      </div>
      <div class="mui-input-row mui-password ">
        <input type="password" class="mui-input-password sw_password" placeholder="New Password" v-model="password_new" @input="lengthLimit('password_new')">
         <span class="m_state" :class="{'pwd_state2':pwd_show2}" v-show="stateshow2">{{statetext2}}</span>
      </div>
      <div class="mui-input-row mui-password ">
        <input type="password" class="mui-input-password sw_password" placeholder="Confirm Password" v-model="Confirmpassword" @input="lengthLimit('Confirmpassword')">
         <span class="m_state" :class="{'pwd_state3':pwd_show3}" v-show="stateshow3">{{statetext3}}</span>
      </div>
      <div class="mui-button-row">
        <input  type="button" class="sw_submit_but" value="Submit" @click="sub_change_pwd()">
      </div>
    </form>
  </div>
</div>

	<n-footer></n-footer>
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
	import orderhead from '../../components/orderhead.vue';
	import footer from '../../components/allfooter.vue';
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				modal:false,
				 password_old:'',
				 password_new:'',
				 Confirmpassword:'',
//				 old
				 statetext:'',
				 stateshow:false,
				 pwd_show:false,
//				 new
				 statetext2:'',
				 stateshow2:false,
				 pwd_show2:false,
//				 Confirm
				 statetext3:'',
				 stateshow3:false,
				 pwd_show3:false
			}
		},
		components:{
     		'n-orderhead':orderhead,
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
//			console.log(query);
		},
		mounted() {
//			$(".main>a").css("background","deeppink");

		},
		methods: {
			modals:function(){
				 $(".titletab").toggle(100);
			},
			lengthLimit:function(type){
				if(type=="password_old"){
					if(!/[a-zA-Z0-9]{6,30}/.test(this.password_old)){
						
						this.stateshow=true;
						this.statetext='6-16 nunber and alphabet';
						this.pwd_show=true;
//							console.log(44)
							return;
					}else if(this.password_old.length>16){
						this.stateshow=true;
						this.statetext='6-16 nunber and alphabet';
						this.pwd_show=true;
					}
					else{
						this.stateshow=true
						this.statetext='Validation passed';
						this.pwd_show=false;
						console.log('验证通过')
						return;
					}
				}
				if(type=="password_new"){
					if(!/[a-zA-Z0-9]{6,30}/.test(this.password_new)){
						
						this.stateshow2=true;
						this.statetext2='6-16 nunber and alphabet';
						this.pwd_show2=true;
//							console.log(44)
							return;
					}else if(this.password_new.length>16){
						this.stateshow2=true;
						this.statetext2='6-16 nunber and alphabet';
						this.pwd_show2=true;
						return;
					}
					else{
						this.stateshow2=true
						this.statetext2='Validation passed';
						this.pwd_show2=false;
						console.log('验证通过')
						return;
					}
				}
				if(type=="Confirmpassword"){
					if(!/[a-zA-Z0-9]{6,30}/.test(this.Confirmpassword)){
						
						this.stateshow3=true;
						this.statetext3='6-16 nunber and alphabet';
						this.pwd_show3=true;
//							console.log(44)
							return;
					}else if(this.Confirmpassword.length>16){
						this.stateshow3=true;
						this.statetext3='6-16 nunber and alphabet';
						this.pwd_show3=true;
						return;
					}else if(this.Confirmpassword.length !== this.password_new.length){
						this.stateshow2=true;
						this.statetext2='The two password entries are inconsistent';
						this.pwd_show2=true;
						return;
					}
					else{
						this.stateshow3=true
						this.statetext3='Validation passed';
						this.pwd_show3=false;
						this.stateshow2=true
						this.statetext2='Validation passed';
						this.pwd_show2=false;
						console.log('验证通过')
						return;
					}
				}
			},
			sub_change_pwd:function(){
				if(this.statetext=='Validation passed'&&this.statetext2=='Validation passed'&&this.statetext3=='Validation passed'){
					 this.edit_pwd();
				}else{
					Toast({message: 'Please enter the correct password', duration: 1200});
				}
			},
			 edit_pwd(){
     			var that = this;
//				var token=that.getCookie('bigmk_wap_ut');
				var smscodeapi = 'api/v1/user/restPassword';
				var param = qs.stringify({old_password:that.password_old,password:that.password_new,password_confirmation:that.Confirmpassword});
				service.put(api.contract+smscodeapi,param,).then(res => {
				if(res.data.code==200){
				console.log(res.data)
					Toast({message:  res.data.msg, duration: 1200});
					setTimeout(function(){
								window.location.href="./login.html";
					},1500)
				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
     	},

		},
		computed: {
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
	.m_state{
			position: absolute;
			right: 0.14rem;
    		top:0.1rem;
    		color:#008000;
    		font-size:0.12rem;
		}
	.pwd_state{
		color:red;
	}
	.pwd_state2{
		color:red;
	}
   .pwd_state3{
		color:red;
	}
</style>