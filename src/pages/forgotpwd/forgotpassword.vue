<template>
	<div class="main">
	<header class="mui-bar mui-bar-nav">
      <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">Forgot Password</h1>
  </div>
  
</header>
		<div class="mui-content" style="margin-top: 1.4rem;">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<a class="mui-control-item mui-active" href="#item1mobile">
				By SMS
					</a>
					<a class="mui-control-item" href="#item2mobile">
				By Email
					</a>
				</div>
				<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>
				<div class="mui-slider-group">
					<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
						<div id="scroll1" class="mui-scroll-wrapper">
                   			    <div class="main-cont-input">
                        		 <input type="text" name="telephone" v-model="telephone" @input="lengthLimit('telephone')" placeholder="Such as: 09561234567">
                   			  </div>
                    		  <div class="main-cont-input">
                        		<div class="input_left">
                        			<input type="text" name="smsCode" v-model="smsCode" @input="lengthLimit('sms')" placeholder="Verification Code">
                        		</div>
                        		<div class="input_right">
                        			<span :class="{'code-act':is_fetching_code}" @click.stop="getsmsCode">{{content}}</span>
                        		</div>
                    		  </div>
                    		  	<div class="footer"> 
								<button type="button" class="mui-btn mui-btn-danger mui-btn-block" @click="login">Continue</button>
								</div>
						</div>
		
					</div>
					<div id="item2mobile" class="mui-slider-item mui-control-content">
						<div id="scroll2" class="mui-scroll-wrapper">
                    		 <div class="main-cont-input">
                        		<input type="text" name="mobile"  @input="lengthLimit('mobile')" disabled="disabled" placeholder="Username">
                   			  </div>
                   			    <div class="main-cont-input">
                        		<input type="text" name="mobile"  @input="lengthLimit('mobile')" disabled="disabled" placeholder="Email">
                   			  </div>
                    		<div class="footer"> 
									<button type="button" class="mui-btn mui-btn-danger mui-btn-block">Continue</button>
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
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
	import newsmoduct from '../../components/newsmoduct.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				code: '000000',
				money: 0,
				commonContract: [],
				contract: '',
				query: null,
				is_pswdlogin:true,
				is_fetching_code:false,
				is_logining:false,
				is_showpswd:false,
				is_login_success:false,
				mobile:"",
				password:"",
				telephone:"",
				smsCode:"",
				time:120,
				content:"Get verification code",
				ismoble:false,
			}
		},
		components:{
       'n-newsmoduct':newsmoduct,
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


//			get请求
//			service.get(api.commonContract).then(res => {
//				var d = res;
//				console.log(res.data.data);
//			})
			

		},
		mounted() {

			$(".main>a").css("background","deeppink");
	
//			 mui.init({
//			 	swipeBack: false
//			 });
			
		
		},
		methods: {
			opengroup_list:function(){
					window.location.href="./grouplist.html";
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
			swithMenu:function(type) {
				this.is_pswdlogin = type==0?true:false;
					
			},
			showPswd:function(event){
				this.is_showpswd = !this.is_showpswd;
				var input = event.target.previousSibling.previousSibling
				var type = input.getAttribute('type');
				input.setAttribute('type',type=='password'?'text':'password');
			},
			lengthLimit:function(type){
					if(type=='mobile'){
						if(this.mobile.length>20){
							this.mobile = this.mobile.slice(0,20);
							Toast({message: '用户名超过最大值', duration: 1000});
							return false;
						}else{
							
						}
						
					}
					if(type=='sms'){
						if(this.smsCode.length>6){
							this.smsCode = this.smsCode.slice(0,6);
						}
					}
					if(type=="password"){
						if(this.password.length>20){
							this.password = this.password.slice(0,20);
							Toast({message: '密码超出最大', duration: 1000});
							return;
						}
					}
					if(type=="telephone"){	
						if(this.telephone.length>11){
							this.telephone = this.telephone.slice(0,11);
							Toast({message: '请输入09开头的11位数', duration: 1000});
						}
					}
			},
			checkPhone:function(){
					
				if(/^0?9[0-9]{9}$/.test(this.telephone)){
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
					var param = qs.stringify({mobile:that.telephone,type:2});
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
			login:function(){
					var that=this;
					//先验证此账户有没有存在
						if(that.telephone==''){
							console.log("请输入手机号");
							return;
						}else if(that.smsCode==''){
							console.log('请输入6位验证');
							return;
						}else if(!/^0?9[0-9]{9}$/.test(this.telephone)){
							console.log('电话号码有误');
							
							return;
						}else if(!/^[0-9]{5}$/.test(this.smsCode)){
							console.log('验证码错误')
							return;
						}
					that.pulltel(that.telephone,that.smsCode);
						
					
					
				},
				pullname:function(mobile,possword){
//					var that = this;
//					console.log(mobile);
//					console.log(possword);
//					console.log('成功')
//					//请求接口验证后再请求接口拿到token存cookie
//					var memberToken = '519844385';
//					that.setCookie("bigmk_wap_ut",memberToken,1);
//					console.log(that.getCookie('bigmk_wap_ut'));
					//判断用户存不存在的接口请求
//					if()
					
				},
				pulltel:function(telephone,smsCode){
					var that = this;
					var param = qs.stringify({mobile:telephone,mobile_code:smsCode});
					var smscodeapi = 'api/findPwdByMobile';
					service.post(api.contract+smscodeapi, param).then(res => {
						if(res.data.code==200){
							console.log(res.data);
							Toast({message: res.data.msg, duration: 1000});
							window.localStorage.setItem('find_moble', telephone);
							window.location.href ='./findpwd.html';
						}else{
							Toast({message: '3333', duration: 1000});
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
				setCookie:function(name,value,expires){
	
				    var LargeExpDate = new Date();
				    LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24*2));
				    document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
//				    				
				},
				getCookie:function (c_name){
					if (document.cookie.length>0)
					  {
					  var c_start=document.cookie.indexOf(c_name + "=")
					  if (c_start!=-1)
					    { 
					    c_start=c_start + c_name.length+1 
					    var c_end=document.cookie.indexOf(";",c_start)
					    if (c_end==-1) c_end=document.cookie.length
					    return unescape(document.cookie.substring(c_start,c_end))
					    } 
  						}
						return ""
				},
//				back:function(){
//					var referrer = document.referrer;
//					if(this.is_login_success){
//						window.history.go(-1);
//					}else{
//						window.history.go(-2);
//					}
//				}

		},
		computed: {

		}
	}
</script>

<style>


	@import './forgotpassword.scss';
	.header{
		height:2rem;
		border-bottom: 1px solid #e2e2e2;
	}
	.main {

		text-align: center;
		width:100%;
		padding: 1rem 1rem 0 1rem;
		background:#efeff4;
		/*background: url(../../assets/bg.png) no-repeat;*/
		background-size: 100% auto;
		 
		  /*  height:14rem;*/
	}
	#sliderSegmentedControl .mui-control-item{
		border:1px solid #ff4500;
		color:#ff4500;
	/*	font-size: 14px;*/
	}
	.mui-control-content{
		/*height: 800px !important;*/
		    background: #fff;
	}
	.mui-col-xs-4{
		width:49.8% !important;
	}
	#sliderProgressBar{
		background: #ff4500;
		display: none;
	}
	#sliderSegmentedControl{
		background-color: #fff;
		border:1px solid #ff4500;
	}
	.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
		   background:#efeff4;
    border-top: 0!important;
    border-bottom: 0!important;
    
}
	.mui-slider-indicator .mui-active{
		color:#fff !important;
		background: #ff4500 !important;
		
	}
	.mui-scroll-wrapper{
		background: #efeff4 !important;
		color: #333;
		top:1rem !important;
	/*	border:1px solid red;*/
		overflow: visible !important;
		 height: 10rem !important;
	}
	#scroll1{
		
	}
	.footer{
		    padding-top: 1.3rem;
		        padding-bottom: 1rem;
	}
	.footer .mui-btn-block{
		    padding: 0.5rem 0;
		    font-size:1rem;
	}
	.footer .mui-btn-danger{
		    border: 1px solid #ff4500;
    background-color: #ff4500;
	}
	
	/*#sliderProgressBar{
	background: #ff4500 !important;
	}*/
	/*.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
		color:#fff !important;
		background: #ff4500 !important;
	}*/

	.main-cont-input{
		margin-bottom:0.85rem;
	}
	.main-cont-input input{
		font-size: 0.8rem!important;
		border:0!important;
		border-top:0!important;
		   /* background-color: rgba(226, 226, 226, 0.46) !important;*/
		margin-bottom:0 !important;
		
		
	}
	.input_left{
		width:50%;
		    float: left;
	}
	.input_left input{
		    border-right: 0 !important;
    border-radius: 0 !important;
	}
	.input_right{
		width:50%;
		display: inline-block;
		line-height: 2.5rem;
		height: 2.5rem;
		position: relative;

	}
	.input_right span{
		    width: 82%;
 position: absolute;
    display: block;
    background: #ff4500;
    border-radius: 5px;
    line-height: 1.8rem;
    left: 10%;
        top: 0.38rem;
        border-radius: 0.3rem;
        color:#fff;
        font-size:0.75rem;
	}
	.input_pass{
		overflow: hidden;
		    height: 2.5rem;
	}
	.ms_left input{
	border-top: 0 !important;
	}
	.input_color>span{
		background: none;
		color:
	}
	#item1mobile{
		height:13rem;
	}
	.fl{
		float: left;
	}
	  .scan_code img{
    margin-top: 0.42rem;
    width: 2.2rem;
    height: 2rem;
  }
  	.main-cont-input .code-act{
		color: #FFF;
		background:#ff450099;
	}
</style>