<template>
	<div class="main">
	<header class="mui-bar mui-bar-nav">
  		<div class="fl scan_code">
  			<a  href="javascript:history.back(-1)">
  				<span class="">
  				<img src="../../assets/images/back_gray.png" alt="" />
  				</span></a></div>
  			<div class="fl sw_search">
    		<h1 class="mui-title">My Coupons</h1>
  		</div>
  		   <div class="fl_right" @click="modals()">
  				<i class="iconfont icon-me_fill">&#xe653;</i>
  			</div>
  			<ul class="titletab">
   				<div class="sanjiao_t"></div>
			 	<li><i class="iconfont icon-facebook">&#xe603;</i><a href="#" >facebook</a></li>

			</ul>
	</header>
	<div class="sw_ucenter_index">

  		<div class="mains_detil">
  		<div class="My_Coupons">
      		 <div class="My_Coupons_tit">
         		<div class="fl">
         			<img :src="imgHost+detil_info.img">
         		</div>
         		<span>{{detil_info.true_name}}</span>
       		</div>
	       	<div class="My_Coupons_con">
	           <h1>Discount:<strong>₱ {{detil_info.value}}</strong></h1>
	           <h2><span>Scope of Application:</span><em>{{detil_info.range_text}}</em></h2>
	           <h2><span>Coupon Conditions:</span><em> apply if Total cart Value reaches ₱{{detil_info.limit}}（Not contain postage）.</em></h2>
	           <h2><span>Coupon Validity:</span><em>{{detil_info.start_time}} - {{detil_info.end_time}}</em></h2>
	           <p>This coupon is only applicable towards the same issuing store and all products listed on its shop. Valid for one transaction only.（excluding postage）<a href="https://www.bigmk.ph/help125.html" target="_blank" style="text-decoration: underline">See full details here.</a></p>
	           <h3><span @click="message()">Put in Angpao</span><span @click="nowuser()" class="use_now">Use Now</span></h3>
	       	</div>
  		</div>
  		</div>

  		<div class="sw_ucenter_c">
    		<h3><span>Recommend Products</span></h3>
  		</div>
		  <div class="goods_list_com">
		    <ul>
		      <li v-for="(item,index) in reclist"> 
		      	<a href="#">
		        <div align="center"><img :src="item.img"></div>
		        <div class="goods_list_com_t">
		          <p class="goods_list_p1">{{item.discount?item.discount:"0"}}%</p>
		          <p> off</p>
		        </div>
		        <h2>{{item.name}}</h2>
		        <h3 class="autohei"><span>₱{{item.sell_price}}</span><em>COD</em><!--<strong>COD</strong>--></h3>
		        <h4 class="autohei"><span>Sale:&nbsp;{{item.sale}}</span><strong>Comments:&nbsp;{{item.comments}}</strong></h4>
		        </a> 
		      </li>
		      
		    </ul>
		  </div>
	</div>
		<div class="mui-content">
		  <div class="sw_blank"></div>
		  <nav class="footer_nav">
		    <ul>
		      <li class="nav_home on"><a href=""><span class="mui-icon mui-icon-person"></span><em>Home</em></a></li>
		      <li class="nav_menu"><a href=""><span class="mui-icon mui-icon-person"></span><em>Categories</em></a></li>
		      <li class="nav_cart"><a href=""><span class="mui-icon mui-icon-person"><strong class="mui-badge">5</strong></span><em>Cart</em></a></li>
		    <!--  <li class="nav_user"><a href=""><span class="mui-icon mui-icon-person"></span><em>Favourites</em></a></li>-->
		      <li class="nav_user"><a href=""><span class="mui-icon mui-icon-person"></span><em>Me</em></a></li>
		    </ul>
		  </nav>
		</div>
		
		<div class="copybox" style="width:80%;height:356px;border:1px solid red;" v-if="showcopy">
			<span class="copy_false" style="display:inline-block;width:0.2rem;" @click="showcopy=false">
				<img src="../../assets/images/pop_icon_close_default.png" alt="" />
			</span>
			<div class="text_cog">
				<h3>Congratulations!</h3>
				<p>You just created an Angpao!</p>
			</div>
			<div class="angpao">
				<span>angpao code:</span>
				<textarea :class="{'copysuccess':copy_false}">
					{{code}}
				</textarea>
			</div>
			<div class="text_p">
				<p>Copy and share this link to your friend，they can use this link on website or app to get angpao,and you can find  angpao link in My coupons>> <a href="">Angpao Records</a> </p>
			</div>
			<div class="button_copy">
				<span v-clipboard="code" @success="handleSuccess" @error="handleError">Copy Code</span>
				<em v-for="num in codeArr"></em>
			</div>
			<h2 style="text-align: center;padding-top: 0.08rem;">
				<a href="">how to share angpao?</a>
			</h2>
		</div>
		<div class="body_box" v-if="showcopy" @touchstart.prevent>
			
		</div>
		 <n-footer></n-footer>
	</div>
</template>

<script>
	
//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui'//导入mint-ui
	import { MessageBox } from 'mint-ui';
		import { Indicator } from 'mint-ui';
	import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
	import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
	import qs from 'qs'
	import querystring from 'querystring'
	import '@/assets/alljs/jquery-3.2.1.min.js';
	import '@/assets/alljs/mobile.js';
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'
import footer from '../../components/allfooter.vue';
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
				contract: '',
				query: null,
				showcopy:false,
				isActive:false,
				voucher_str_id:'',
				detil_info:[],
				reclist:'',
				copy_false:false,
				code:'',
				
			}
		},
		components:{
//     'n-newsmoduct':newsmoduct,
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
			
			this.voucher_str_id = query.voucher_str_id;
		
			this.detilinfo();
//			this.recommentlist();

		},
		mounted() {
	
   
            // 设置一个开关来避免重负请求数据  
            let sw = true;
            let that=this;
			this.recommentlist();
			var page = 1;
			     // 注册scroll事件并监听  
            window.onscroll = function() {
                var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
                var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
                if (a + b == c) {
                    //    如果开关打开则加载数据  
                    if (sw == true) {
                        // 将开关关闭  
                        sw = false;
                        page++;
                        service.get(api.contract + 'api/v1/home/getRecom?size=6&page='+page, {
                        }).then(function(res) {
                        	if(res.data.code==200){
                        		         // 将新获取的数据push到
                        	if(res.data.data==''){
                        			return;
                        	}else{
                        			Indicator.open({
										spinnerType: 'fading-circle'
									});
                        		res.data.data.forEach(function(val, index) {
                                that.reclist.push(val);
                           		setTimeout(function(){
										that.openloding();
									},400)
                            	});
                            
                            	// 数据更新完毕，将开关打开  
                            	sw = true;
                        	}
               
                        	}
                   
                      
                        })
                    }
                }
            }

		},
		methods: {
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			message:function(){
				var that= this;
				MessageBox({
  				title: 'Tips ',
  				message: 'Are you sure to put this coupon in angpao?',
  				showCancelButton: true,
  				cancelButtonText:'No',
  				confirmButtonText:'Yes',
				}).then(action => {
					if(action=='cancel'){
						console.log(999);
					}else if(action=='confirm'){
								this.getcode();
						that.showcopy=true;
						that.isActive=true;
					}else{
						return;
					}
			
				});


				
			},
			modals:function(){
				 $(".titletab").toggle(100);
			},
			nowuser:function(){
				window.location.href="./usernow.html?price="+this.detil_info.value+"&price_statas="+this.detil_info.limit;
			},
			detilinfo:function(){
				var that=this;
				var param = qs.stringify({voucher_str_id:that.voucher_str_id});
				var codeapi = 'api/v1/user/voDetail';
				service.post(api.contract+codeapi,param).then(res => {
					if(res.data.code==200){
				
						that.detil_info=res.data.data;
						console.log(that.detil_info);
//							Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
			},
			getcode:function(){
				var that=this;
//				that.voucher_str_id
				var param = qs.stringify({voucher_str_id:3792});
				var codeapi = 'api/v1/user/creCode';
				service.post(api.contract+codeapi,param).then(res => {
					if(res.data.code==200){
						console.log(res.data.data);
						that.code=res.data.data.KouLing;
//							Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
			},
			recommentlist:function(){
				var that=this;
				
				var codeapi = 'api/v1/home/getRecom?page=1&size=6';
				service.get(api.contract+codeapi).then(res => {
					if(res.data.code==200){
						that.reclist=res.data.data;
						console.log(that.reclist);
//						Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
			},
			handleSuccess: function(){
				this.copy_false=true;
				Toast({message: '复制成功', duration: 3000});
				
			},
			handleError: function(){
				Toast({message: '复制失败', duration: 3000});
			},
			openloding:function(){
				Indicator.close();
			
			},

		},
		computed: {
			codeArr: function(){
				var code = this.code;
				if(typeof code == 'string'){
					return this.code.split('');
				}else{
					return;
				}
			}
		}
	}
</script>

<style>


/*@import '../../assets/allcss/sw_style.css';*/

.mui-icon-weibo:before {

    color:red;
}
 .sw_ucenter_a ul li {
    width: 25% !important;
    }
  .mains_detil{
/*    height: 5rem;*/
   /* padding-top: 0.44rem;*/
    }
  .My_Coupons{ background:#fff; margin-top:0.1rem;}
 .My_Coupons_tit{ padding:0.1rem 0.12rem 0.1rem 0.12rem; border-bottom:1px  solid #f0f0f0; height:0.55rem; overflow:hidden;zoon:1;}
 .My_Coupons_tit span{ font-size:0.22rem; color:#353638; margin-left:0.15rem; display:inline-block; line-height:0.35rem; font-weight:bold;} 
 .My_Coupons_tit img{ width:0.35rem; height:0.35rem; border-radius:50%; border:1px  solid #dddddd;}
 .My_Coupons_con{padding:0.1rem 0.12rem 0rem 0.12rem;}
 .My_Coupons_con h1{ font-size:0.14rem; color:#353638; line-height:0.30rem; height:0.28rem; overflow:hidden;zoom:1;}
 .My_Coupons_con h1 strong{ font-size:0.20rem; color:#ff4500; margin-left:0.1rem;}
 .My_Coupons_con h2{ font-size:0.14rem; line-height:0.25rem;}
 .My_Coupons_con h2 span{ color:#000; width:1.6rem; display:inline-block; }
 .My_Coupons_con h2 em{ color:#6d6f73;margin-left:0.1rem; font-size:0.12rem;}
 .My_Coupons_con p{ font-size:0.13rem; line-height:0.20rem; color:#ff4500; padding-top:0.1rem; word-break:break-all;}
 .My_Coupons_con h3{ text-align:center; padding:0.1rem 0;}
 .My_Coupons_con h3 span{margin: 0.12rem 0.06rem;display:inline-block; border:0.01rem solid #ff4500;font-size:0.14rem; background:#ffece5; color:#ff4500; text-align:center; padding:0.1rem 0.25rem; border-radius:0.04rem;}
 .My_Coupons_con h3 .use_now{
 	background: #ff4500;
 	color:#fff;
 	padding: 0.1rem 0.42rem;
 } 
 /*弹框*/  
 .mint-msgbox-input>input{
		width:90% !important;
		height: 0.06rem !important;
    margin-bottom: 0.15rem !important;
    border:0.01rem solid rgba(0, 0, 0, 0.38) !important;
	}
	.mint-msgbox-wrapper .mint-msgbox{
		width:62%;
	}
	/*.mint-msgbox .mint-msgbox-header{
		display: none;
	}*/
	.mint-msgbox .mint-msgbox-input{
		padding-top:0;
		height: 0.3rem;
	}
	.mint-msgbox .mint-msgbox-message {
    color: #333;
    font-weight: 700;
    font-size: .14rem;

    line-height: .20rem;
}
.mint-msgbox-wrapper .mint-msgbox{
	border-radius: 0.14rem;
}
.mint-msgbox .mint-msgbox-cancel{
	color:#ff4500;
}
.mint-msgbox .mint-msgbox-confirm{
	color:#ff4500;
}
 .mint-toast-text {
    font-size: 0.16rem !important;

    height: 0.16rem !important;
    line-height: 0.14rem !important;

}
.mint-msgbox .mint-msgbox-message{
	font-weight: 400 !important;
	
}
.main{
	position: relative;
	
}

.copybox{
	position: absolute;
	top:1.2rem;
	left: 0;
	right: 0;
/*	bottom:0;*/
	margin:auto;
	background:#fff;
	border-radius: 0.1rem;
	z-index:1000;
}
.body_box{
	width:100%;
	height:100%;
	background:#222222;
	position: absolute;
	background: rgb(0,0,0,0.65);
	top:0rem;
	left:0;
	bottom:0;
	right:0;
	z-index:100;
}
	.scan_code img {
    width: 60% !important;
        height: 100% !important;
  
}
   .mui-bar .scan_code img{
    	margin-top:0.07rem;
    }
    	.fl_right{
	width:20px;
	height:100%;
	float:right;
}
    .fl_right .icon-me_fill{
    	position: relative;
   		font-size: 0.24rem;
    	top: 0.1rem;
    	color:#ff4500;
    }
    .titletab{

	display: none;
	border-radius:0.1rem;
	background: #000;
	position: absolute;
    right: 0.12rem;
    top: 0.56rem;
     height: 0.5rem;
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
.titletab .icon-facebook{
	color:red;
}
.copybox{
	padding:0.12rem;
}
.text_cog{
	color: #ff4500;
    font-weight: bold;
    font-size:0.16rem;
    text-align: center;
        margin-bottom: 0.14rem;
}  
.text_cog>p{
	line-height: 0.28rem;
	font-weight: 400;
    color: #666;
    line-height: 0.28rem;
    font-size: 0.14rem;
} 
.angpao>span{
	display: inline-block;
	padding-bottom:0.08rem;
	font-size: 0.1rem;
}
.angpao>textarea{
	    height: 60px;
	    font-size:0.12rem;
    line-height: 0.14rem;
	padding:0;
    text-align:left;
   
}
.text_p{
	padding:0.12rem 0;
}
.text_p>p{
	line-height: 0.18rem;
    font-size: 0.13rem;
}
.button_copy>span{
	display: inline-block;
    padding: 0.03rem 0.4rem;
    background: #ff4500;
    color: #fff;
    border-radius: 0.8rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
}
.button_copy{
	    text-align: center;
}
.copy_false{
	position: absolute;
	left: 90%;
	top:0.1rem;
}
.copy_false>img{
	width:100%;
	
}
.angpao .copysuccess{
	background: #cccc;
}
.mint-spinner-fading-circle div::before {
	background:#ff4500 !important;
}
.mint-indicator-wrapper{
	top: 87% !important;
	background: #0000 !important;
}
</style>
