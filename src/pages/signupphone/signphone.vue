<template>
	<div class="main">
<header class="mui-bar mui-bar-nav">
      <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">Sign up by phone</h1>
  </div>
  
</header>
<div class="mui-content">
  <div class="sw_login_con sw_Email_up">
  	<div class="message_box">
  		<p class="message" v-show="messageshow">{{messagetext}}</p>
  	</div>

      <div class="mui-input-row">
        <input type="text" placeholder="Please enter your username" class="mui-input-clear sw_password1" alt="Enter 4-20 characters" v-model="username" @input="lengthLimit('username')">
      </div>
       <div class="mui-input-row">
        <input type="email" placeholder="Please enter your email " class="mui-input-clear sw_password1" alt="Enter 4-20  email" v-model="useremail" @input="lengthLimit('useremail')">
      </div>
      <div class="mui-input-row mui-password ">
        <input type="password" class="mui-input-password sw_password" placeholder="Please enter your password" alt="Enter 6-32 characters" v-model="password_one" @input="lengthLimit('password_one')">
       	<i class="iconfont icon-xiaoxi"  :class="{'icon-eye':eyelook}" @click="eyes()">&#xe722;</i>
      </div>
      <div class="mui-input-row mui-password ">
        <input type="password" class="mui-input-password sw_password" placeholder="Confirm Password" v-model="password_two" @input="lengthLimit('password_two')">
         <i class="iconfont icon-xiaoxi"  :class="{'icon-eye':eyelook}" @click="eyes()">&#xe722;</i>
      </div>

      <div class="mui-input-row">
        <input type="text" name="mobile" placeholder="Such as: 09561234567" class="mui-input-clear sw_password1" v-model="mobile" @input="lengthLimit('mobile')" >
      </div>
      <div class="mui-input-row getphone">
        <input type="text" placeholder="Verification Code" class="mui-input-clear sw_password1 fl" v-model="smsCode"  @input="lengthLimit('smsCode')">
        <div class="right_code" :class="{'code-act':is_fetching_code}">
        	<span   @click.stop="getsmsCode">{{content}}</span>
        </div>
       		
        
      </div>
		
      <div class="mui-button-row" @click="signup()">
      	 <input name="" type="button" value="Sign up" class="sw_submit_but">
      <!--  <span class="sw_but" ></span>-->
      </div>
  </div>
</div>

<!--顶部下滑导航条-->

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
				query: null,
				eyelook:true,
				is_fetching_code:false,
				content:'Get verification code',
				username:'',
				password_one:'',
				password_two:'',
				mobile:'',
				smsCode:'',
				useremail:'',
				time:120,
				messagetext:'',
				messageshow:false,
				
				
				
			}
		},
		components:{
//     'n-newsmoduct':newsmoduct,
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

			

		},
		mounted() {

			$(".main>a").css("background","deeppink");

			
		
		},
		methods: {
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			eyes:function(){
				var that = this;
				that.eyelook=true;
			},
			touchStart:function(ev) {
                        ev = ev || event;
                        ev.preventDefault();

                        if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                            this.startX = ev.touches[0].clientX; // 记录开始位置
                        }
            },
            message:function(){
				Toast({message: 'success', duration: 1000});
			},
			lengthLimit:function(type){
					if(type=='username'){
						if(this.username.length>20){
							this.username = this.username.slice(0,20);
							this.messageshow=true;
							this.messagetext="用户名格式不对";
							return false;
							
								
							
						}else{
							this.messageshow=false;
						}
					}
					if(type=="useremail"){
						var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
						if(this.useremail.length>30){
							this.username = this.username.slice(0,30);
							this.messageshow=true;
							this.messagetext="email 过长";
							return;
							
								
							
						}else if(!reg.test(this.useremail)){
						
							this.messageshow=true;
							this.messagetext="email 格式问题";
							return;
							
								
							
						}
						else{
							this.messageshow=false;
						}
					}
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
					if(type=='mobile'){
						if(this.mobile.length>11){
							this.mobile = this.mobile.slice(0,11);
							this.messageshow=true;
							this.messagetext="请输入0或者9开头的电话号码";
							
							return false;
						}else{
							this.messageshow=false;
						}
						
					}
					if(type=='smsCode'){
						if(this.smsCode.length>5){
							this.smsCode = this.smsCode.slice(0,5);
							this.messageshow=true;
							this.messagetext="验证码位数错误";
						}else{
							this.messageshow=false;
						}
					}
				
			},
			checkPhone:function(){
					
				if(/^0?9[0-9]{9}$/.test(this.mobile)){
			        return true;
			    }
				return false;
			},
			getsmsCode : function(){
						var that=this;
						
					if(that.is_fetching_code)return;
					if(!that.checkPhone()){
						mui.toast("手机号码有误，请重填");
						return false;
					}
					that.is_fetching_code = true;
				//	然后请求成功了就调用that.changeContent();
					var param = qs.stringify({mobile:that.mobile,type:1});
					var codeapi = 'api/send_mobile_code';
					service.post(api.contract+codeapi, param).then(res => {
						if(res.data.code==200){
							console.log(res.data.data.mobile_code);
							that.changeContent();
//							Toast({message: res.data.msg, duration: 1000});
						}else{
							Toast({message: '8888', duration: 1000});
						}
						

					})

			},
		changeContent : function(){
					var that=this;
					if(!that.is_fetching_code){
						return;
					};
					that.content="Re-send"+that.time+"S";
					(function(time){
		                 var t=setInterval(function(){
		                   if(time>0){
		                      time--;
		                      that.content="Re-send"+time+"S";
		                   }else{
		                     that.time=120;
		                     that.content="Get verification code";
							 that.is_fetching_code = false;
		                     clearInterval(t);
		                   }
		                },1e3);
		           })(that.time);
				},
				pulltel:function(userinfo){
					var that = this;
					var param = qs.stringify({
						mobile:userinfo.mobile,
						password:userinfo.password_one,
						password_confirmation:userinfo.password_two,
						email:userinfo.useremail,
						username:userinfo.username
						});
					var signcodeapi = 'api/registerBymobile2';
					service.post(api.contract+signcodeapi, param).then(res => {
						if(res.data.code==200){
							console.log(res.data);
							Toast({message: res.data.msg, duration: 1000});
//							window.localStorage.setItem('find_moble', telephone);
							window.location.href ='./login.html';
						}else{
							Toast({message: '3333', duration: 1000});
						}
						

					})
				},
				signup:function(){
					var that=this;
//					console.log(44);
					//先验证此账户有没有存在
						if(that.username==''){
							that.messageshow=true;
							that.messagetext="请输入用户名";
							return;
						}
						else if(that.useremail==''){
							that.messageshow=true;
							that.messagetext="请输入邮箱";
							return;
						}
						else if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(that.useremail)){
							that.messageshow=true;
							that.messagetext="邮箱有误";
							return;
						}
				
						else if(that.smsCode==''){
								that.messageshow=true;
							that.messagetext="请输入手机验证码";
							return;
						}else if(that.mobile==''){
							that.messageshow=true;
							that.messagetext="请输入手机号";
							return;
						}
						else if(!/^0?9[0-9]{9}$/.test(that.mobile)){
							that.messageshow=true;
							that.messagetext="电话号码错误";
							
							return;
						}else if(!/^[0-9]{5}$/.test(that.smsCode)){
							that.messageshow=true;
							that.messagetext="验证码错误";
							return;
							
						}else if(that.password_one==''){
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
//						console.log('注册成功');
						let userinfo = {
							username:that.username,
							useremail:that.useremail,
							mobile:that.mobile,
							password_one:that.password_one,
							password_two:that.password_two
						}
					that.pulltel(userinfo);
						
					
					
				},

		},

		computed: {

		}
	}
</script>

<style>
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';

  .scan_code img{
  	margin-top:0.06rem;
  	width: 0.3rem;
  	height:0.3rem;
  }
  .mui-icon-eye{
  	display: block !important;
  	color: #0000 !important;
  }
  .mui-input-row .icon-xiaoxi{
  	    position: absolute;
    right: 0.12rem;
    top: 0.12rem;
    font-size: 0.16rem;
  }
 .icon-eye{
  	color:#ff4500;
  }
  .sw_login_con .getphone{
  	width:50%;
  	overflow: visible !important;
  }
  #button{
  	float:right;
    width: 100%;
    height: 0.27rem;
    border-radius: 0.03rem;
    background: #ff4500;
    color: #fff;
     text-align: center;
    font-size: 0.13rem;
  }
  .mui-button-row{
  	top:0.45rem;
  }
   .mui-button-row>input{
   	      width: 100%;
    padding: 0.06rem 0;
    background: #ff4500;
    border-color:#ff4500;
   }
   .code-fetch{
   	    line-height: 0.32rem;
    background: #ff4500;
    display: inline-block;
    padding: 0.04rem 0.06rem;
    color:#fff;
   }
   .message_box{
	height:0.24rem;
	
}
.message{
	line-height: 0.24rem;
	color:red;
}
 .getphone .code-act{
		color: #FFF;
		background:#ff450099;
		    
}
.right_code{
    width: 1.5rem;
    position: absolute;
    right: -100%;
    padding: 0 0.1rem;
    background: #ff4500;
	text-align: center;
    height: 0.36rem;
    line-height: 0.36rem;
    color: #fff;
}
</style>