<template>
	<div class="main">
<!--<header class="mui-bar mui-bar-nav">
  <div class="fl scan_code"><a  href="#"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">Following</h1>
  </div>
  <div class="fr sw_news"><a href="#" @click="opentab()" id="sw_top_nav_show"><i class="iconfont icon-more">&#xe663;</i></a></div>
</header>-->
<n-fllowhead></n-fllowhead>
        <div class="main_all" style="padding:0.8rem 0.12rem 0.12rem 0.12rem;background: #fff;">
        	
            <div class="main-menu">
                <ul>
                    <li class="main-menu-item" :class="{'menu-item-act':is_pswdlogin}" @click="swithMenu(0)">Login as Password</li>
                    <li class="main-menu-item" :class="{'menu-item-act':!is_pswdlogin}" @click="swithMenu(1)">Login as SMS</li>
                </ul>
            </div>
           
            <div class="main-cont">
                <div class="main-cont-item">
                	 <div class="message_box">
  						<p class="message" v-show="messageshow">{{messagetext}}</p>
  					</div>
                	<div v-if="is_pswdlogin">
                    <div class="main-cont-input">
                        <input type="text" name="mobile" v-model="mobile" @input="lengthLimit('mobile')" @blur="fun('mobile')" placeholder="Phone Number/Username/E-mail">
                        <span class="m_state" v-show="stateshow">Validation passed</span>
                    </div>
                    <div class="main-cont-input">
                        <input type="password" name="password" v-model="password" placeholder="Password" @input="lengthLimit('password')" @blur="fun('password')">
                        	<!--判断密码切换显示还是影藏-->
                        <span class="password-see" :class="{'password-nosee':!is_showpswd}" @click.stop="showPswd"></span>
                        <span class="m_state" v-show="statepwd">Validation passed</span>
                    </div>
                    </div>
                    
                    <div v-else>
                     <div class="main-cont-input">
                        <input type="text" name="telephone" v-model="telephone" @input="lengthLimit('telephone')" placeholder="Such as: 09561234567">
                    </div>	
					<div class="main-cont-input" >
                        <input type="text" name="smsCode" v-model="smsCode" @input="lengthLimit('smsCode')" placeholder="Verification Code">
                        <span class="code-fetch" :class="{'code-act':is_fetching_code}" @click.stop="getsmsCode">{{content}}</span>
                    </div>
                    </div>
                </div>

            </div>
            <div class="main-foot">
           <!--     <div class="main-foot-submit" :class="{'main-submit-act':checkOk}" @click="login">Login</div>-->
                <div class="main-foot-submit" @click.stop="login">Login</div>
                <div class="main-foot-link">
                    <a href="./signphone.html"><span>Fast Signup</span></a>
                   <!-- <a href="./joinmine.html"></span>Open a Shop</span></a>-->
                    <a href="./forgotpassword.html"><span>Forgot password</span></a>
                </div>
            </div>
        
            <div class="outline"><span>Or login with</span></div>
            <ul class="m_goologe">
            	<li>
            		<a href="#">
            			
            			<img src="../../assets/images/Facebook.png" alt="" />
            			
            			<span>Facebook</span>
            		</a>
            	</li>
            	<li>
            		<a href="#">
            			<img src="../../assets/images/Google.png" alt="" />
            			<span>Google</span>
            		</a>
            	</li>
            </ul>
        </div>
        <!--顶部下拉-->
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
	import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
	import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
	import qs from 'qs'
	import querystring from 'querystring'
	import '@/assets/alljs/jquery-3.2.1.min.js';
	import '@/assets/alljs/mobile.js';
	import fllowhead from '../../components/fllowhead.vue'
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'
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
				messageshow:false,
				messagetext:'',
				stateshow:false,
				statepwd:false
				
			}
		},
		components:{
	  'n-fllowhead':fllowhead,
    	},
    	externals: {
			mui: 'mui'
		},
		created(){
//			截取获取url的用户user_token
//			var search = window.location.search;
//			if(search.length > 0 && search[0] == '?'){
//				search = search.slice(1);
//			}
//			var query = querystring.parse(search);
//			var token = query.user_token;
//			console.log(query);
		},
		mounted() {
			//复制功能的控件
			// var clip = new Clipboard('.clip');
			// clip.on('success', function(e){
			// 	Toast({message: '复制成功', duration: 1000});
			// })
//			$(".main>a").css("background","deeppink");

			
		
		},
		methods: {
			fun:function(type){
				if(type=='mobile'){
					if(this.mobile.length>20){
					this.messageshow=true;
					this.messagetext="Please enter the correct username";
					}else{
					this.messageshow=false;
					}
				}if(type=="password"){
					if(this.password.length>20){
						this.messageshow=true;
						this.messagetext="Please enter the correct password";
					}else{
						this.messageshow=false;
					}
				}
				
				
				
			},
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
						if(!/[a-zA-Z0-9]{3,30}/.test(this.mobile)){
								
								this.stateshow=false;
								return;
						}
						else{
							this.messageshow=false;
							this.stateshow=true;
						}
					}
					if(type=='smsCode'){
						if(this.smsCode.length>6){
							this.smsCode = this.smsCode.slice(0,6);
							this.messageshow=true;
							this.messagetext="Please enter 5 bit verification code";
							return false;
						}else{
							this.messageshow=false;
						}
					}
					if(type=="password"){
						if(!/[a-zA-Z0-9]{6,30}/.test(this.password)){
						
							this.statepwd=false;
							return;
						}
						else{
							this.messageshow=false;
							this.statepwd=true
							return;
						}
					}
					if(type=="telephone"){	
						if(this.telephone.length>11){
							this.telephone = this.telephone.slice(0,11);
							this.messageshow=true;
							this.messagetext="Please enter the correct telephone";
							return false;
						}else{
							this.messageshow=false;
						}
					}
			},
			checkPhone:function(){
//					/^(0|[0-9]{9}*)$/
				if(/^0?9[0-9]{9}$/.test(this.telephone)){
			        return true;
			    }
				return false;
			},
			getsmsCode : function(){
					var that=this;
					if(that.is_fetching_code)return;
					if(!that.checkPhone()){
						mui.toast("The mobile phone number is wrong, please refill it");
						return false;
					}
					that.is_fetching_code = true;
				//	然后请求成功了就调用that.changeContent();
					var param = qs.stringify({mobile:that.telephone,type:3});
					var codeapi = 'api/send_mobile_code';
					service.post(api.contract+codeapi, param).then(res => {
						if(res.data.code==200){
							console.log(res.data.data.mobile_code);
							that.changeContent();
//							Toast({message: res.data.msg, duration: 1000});
						}else{
							Toast({message: '8888', duration: 2000});
						}
						

					})
//					that.changeContent();

			},
			login:function(){
					var that=this;
					//先验证此账户有没有存在
					if(that.is_pswdlogin==true){
						if(that.messageshow==false&&that.stateshow==true&&that.statepwd==true){
							that.pullname(that.mobile,that.password)
							return;
						}else{
							Toast({message: 'Please enter the correct username or password', duration: 2000});
						}
//						if(that.mobile==''){
//							that.messageshow=true;
//							that.messagetext="用户名为空";
//							return;
//						}else if(that.password==''){
//							that.messageshow=true;
//							that.messagetext="请输入密码";
//							return;
//						}else if(!/[a-zA-Z0-9]{6,30}/.test(that.password)){
//							that.messageshow=true;
//							that.messagetext="密码规格错误";
//							return;
//						}else{
//							that.messageshow=false;
//							that.pullname(that.mobile,that.password)
//							return;
//						}
						
					} else if(that.is_pswdlogin==false){
						if(that.telephone==''){
							that.messageshow=true;
							that.messagetext="Please enter your cell phone number";
							return;
						}else if(that.smsCode==''){
							that.messageshow=true;
							that.messagetext="Please enter 5 bit verification code";
							return;
						}else if(!/^0?9[0-9]{9}$/.test(this.telephone)){
							that.messageshow=true;
							that.messagetext="Wrong telephone number format";
							return;
						}else if(!/^[0-9]{5}$/.test(this.smsCode)){
							that.messageshow=true;
							that.messagetext="Verification code error";
							return;
						}else{
							that.messageshow=false;
							that.pulltel(that.telephone,that.smsCode);
							return;
						}
						
						
					}else{
						return false;
					}
					
				},
				pullname:function(mobile,possword){
					var that = this;
					//请求接口验证后再请求接口拿到token存cookie
//					console.log(possword);
					var param2 = qs.stringify({username:mobile,password:possword});
					var loginapi = 'api/login';
					service.post(api.contract+loginapi, param2).then(res => {
						if(res.data.code==200){
							var memberToken = res.data.data.token;
							var username = res.data.data.username;
							var password = res.data.data.password;
							var userid = res.data.data.id;
							var useremail = res.data.data.email;
							that.setCookie("bigmk_wap_ut",memberToken,1);
							that.setCookie("user_name",username,1);
							that.setCookie("pass_word",password,1);
							that.setCookie("user_id",userid,1);
							that.setCookie("useremail",useremail,1);
							Toast({message: res.data.msg, duration: 2000});
//							setTimeout(that.back(), 3000);
							setTimeout(function(){
								//改成回退
//								that.back();
								window.location.href="./ucenter_index.html";
								
							},3000)
//							
						}else{
							console.log('请求有错误');
							Toast({message: '请求有错误', duration: 1000});
						}
						

					})
//					var memberToken = '519844385';
//					
//					console.log(that.getCookie('bigmk_wap_ut'));
					//判断用户存不存在的接口请求
//					if()
					
				},
				pulltel:function(telephone,smsCode){
					var that = this;
					var param = qs.stringify({mobile:telephone,mobile_code:smsCode});
					var smscodeapi = 'api/login_mobile';
					service.post(api.contract+smscodeapi, param).then(res => {
						if(res.data.code==200){
							console.log(res.data);
							var memberToken = res.data.data.token;
							var username = res.data.data.username;
							var password = res.data.data.password;
							var userid = res.data.data.id;
							that.setCookie("bigmk_wap_ut",memberToken,1);
							that.setCookie("user_name",username,1);
							that.setCookie("pass_word",password,1);
							that.setCookie("user_id",userid,1);
							Toast({message: res.data.msg, duration: 2000});
							setTimeout(function(){
								that.back();
							},3000)
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
				back:function(){
					window.history.go(-1);
//						window.history.go(-2);
				}

		},
		computed: {
			checkOk:function(type){
				//如果is_logining通过就returnfalse
//					if(this.is_logining)return false;
//					if(){
//						/^09[0-9]{9}$/.test(this.telephone)
//						return false;
//					}if(/^[0-9]{6}$/.test(this.smsCode)==false){
//						return false
//					}
					return true;
			}
		}
	}
</script>

<style>
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';
 .mint-toast-text {
    font-size: 0.12rem !important;

   /* height: 0.16rem !important;*/
    line-height: 0.14rem !important;

}
.scan_code span.mui-icon {
    font-size: 0.36rem !important;
    
     top: -0.1rem;
}
.scan_code img {
    width: 60% !important;
        height: 100% !important;
  
}

.sw_ucenter_order_list_b h5 em{
	    font-size: 0.10rem;
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
    .mui-checkbox, .mui-radio{
    	width:50% !important;
    }
    .te{
    	background:#ff4500;
    }
    
			input::-webkit-input-placeholder {
			    color:#a6a6a6;
			}
			ul li{
				color:#ff4500;
			}
			.hidden{
			    display: none;
			}
			.main-menu{
			    height: 0.42rem;
			
			}
			.main-menu ul{
				    width: 99%;
			    overflow: hidden;
			    color:#92969c;
			    
			}
			.main-menu li{
			    width: 50%;
			    height: 0.32rem;
			    text-align: center;
			    line-height: 0.32rem;
			   /* border-bottom: 0.02rem solid #e0e0e0;*/
			   border: 0.01rem solid #ff4500 !important;
			    float: left;
			}
			li.menu-item-act{
			    color:#fff;
			    border-color:#ff4500;
			    background:#ff4500;
			}


			.main-cont-item{
			  /*  box-shadow: 0 0 0.01rem #808080;*/
			    border-radius: 0.05rem;
			    overflow: hidden;
			    padding: 0rem 0.12rem;
			    padding-bottom:0.14rem;
			}

			.main-cont-input{
			    /*height: 0.45rem;
			    line-height: 0.45rem;
			    border-bottom: 0.01rem solid #e0e0e0;*/
			   padding: 0 0.02rem;
			    padding-left:0.08rem;
			   background:#e2e2e29e;
			    position: relative;
			}
			/*.main-cont-input:last-child{
			    border:0;
			}*/
			.main-cont-input input{
			    /*outline: none;
			   box-shadow:inset 0 0 0.5rem #fff;
			    border:0;
			    border-bottom: 1px solid #000;
			    display: block;*/
				padding:0;
				margin: 0;
				border:0;
/*				padding-left:0.12rem;*/
				background:#e2e2e29e;
				    background: rgba(226, 226, 226, 0);
				border-bottom: 0.01rem solid #E2E2E2;
			/*	height: 0.45rem !important;*/
			    font-size: 0.12rem;
			}

			.main-cont-input .password-see{
			    position: absolute;
			    height: 0.44rem;
			    width: 0.60rem;
			    right: 0;
			    top: 0;
			}

			/*.main-cont-input .password-see::before{
			    content: '';
			    position: absolute;
			    width:0.18rem;
			    height: 0.15rem;
			    background-image: url(../../assets/images/canseens.png);
			    background-size: cover;
			    left: 50%;
			    top: 50%;
			    margin-top: -0.075rem;
			    margin-left: -0.15rem;
			}*/
			.main-cont-input .password-nosee::before{
				 background-image: url(../../assets/images/nocanseens.png);

			}

			.main-cont-input .code-fetch{
			      position: absolute;
				    height: 0.24rem;
				    width: 1.4rem;
				    top: 0.05rem;
				    right: 0.12rem;
				    text-align: center;
				    color: #fff;
				    background: #ff4500;
				    font-size: 0.12rem;
				    line-height: 0.24rem;
				    border-radius: 0.04rem;
			}
			.main-cont-input .code-act{
			    color: #FFF;
			    background:#ff450099;
			}

			.main-foot{
			 /*   margin-top: 0.3rem;*/
				padding-bottom: 0.75rem;
			}
			.main-foot-submit{

			    height: 0.32rem;
			    line-height: 0.32rem;
			    font-size: 0.14rem;
			    letter-spacing: 0.01rem;
			    text-align: center;
			    color: #fff;
			    background-color: #ff4500;
			    border-radius: 0.03rem;
			}
			.main-submit-act{
			    color: #fff;
			    background-color: #f2a494;
			}

			.main-foot-link{
			    height: 0.2rem;
			    margin-top: 0.1rem;
			    padding: 0.12rem 16%;
			}
			.main-foot-link>a{
				display: inline-block;
				width:50%;
				font-size: 0.10rem;
				color:#ff4500;
				text-decoration: underline;
				float: left;
				text-align: center;
			}
			.main-foot-link>a>span{
				font-size: 0.10rem;
			}
			/*.main-foot-link a{
			    text-decoration: underline;
			    color: #92969c;
			    font-size: 0.14rem;
			    float: left;
			}*/
			/*.main-foot-link a:last-child{
			    float: right;
			}
			.main-foot-link a:last-child span{
			    color:#f2a494;
			}*/


			.footer{
			    margin-top: 0.4rem;
			}

			.footer-title{
			    padding:0.2rem 0;
			    position: relative;
			}
			.footer-title h2{
			    line-height: 0.3rem;
			    margin:0 auto;
			    font-size: 0.16rem;
			    position: relative;
			    background-color: #efeff4;
			    z-index: 9;
			    width: 1.2rem;
			    text-align: center;
			    color:#92969c;
			    font-weight: normal;
			}
			.footer-title::before{
			    content: '';
			    width: 1.6rem;
			    height: 0.01rem;
			    background: #92969c;
			    position: absolute;
			    left:50%;
			    margin-left: -0.8rem;
			    top:50%;
			    z-index: 8;
			}

			.footer-icon{
			    margin-top: 0.1rem;
			    height: 0.7rem;
			    position: relative;
			}
			.footer-icon li{
			    position: absolute;
			    width: 0.7rem;
			    height: 0.7rem;
			    left: 50%;
			}
			.footer-icon li:first-child{
			    margin-left: -0.9rem;
			}
			.footer-icon li:last-child{
			    margin-left: 0.2rem;
			}
			.footer-icon li img{
			    display: block;
			    width: 100%;
			    height: 100%;
			}
			   input::-webkit-input-placeholder{
            color:#666;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
               color:#666;
               text-indent:3;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
              color:#666;
              text-indent:3;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
               color:#666;
                text-indent:3;
        }
		.outline{
			width: 100%;
			border-bottom:0.01rem solid #E2E2E2;
			height:0.10rem;
			text-align: center;
			position: relative;
		}
		.outline>span{
			    display: inline-block;
			    width: 1rem;
			    text-align: center;
			    height: 0.12rem;
			    top: 0.03rem;
			    background: #fff;
			    left: 37.5%;
			    font-size: 0.12rem;
			    position: absolute;
		}
		.m_goologe{
			height:1.3rem;
			width:100%;
		/*	background:#eee;*/
			padding:0.28rem 18%;
		}
		.m_goologe>li{
	
			float:left;
			 width: 50%;
			 text-align: center;
		}
		.m_goologe>li>a>span{
			display: block;
			margin-top: 0.08rem;
			font-size:0.12rem;

		}
		.m_goologe>li>a>span:hover{
			color:#ff4500;
		}
		
		.m_goologe>li>a>img{
			width: 52%;
		}
		.message_box{
			position: relative;
			height:0.24rem;
			top: -0.05rem;
    		left: 0.04rem;
		} 
		.message{
		line-height: 0.24rem;
		color:red;
		}   
		.m_state{
			position: absolute;
			right: 0.14rem;
    		top:0.13rem;
    		color:#008000;
    		font-size:0.1rem;
		}
		/*.statepw{
			position: absolute;
			right: 0.14rem;
    		top:0;
    		color:#008000;
    		font-size:0.1rem;
		}*/
</style>