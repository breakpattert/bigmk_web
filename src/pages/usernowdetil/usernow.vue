<template>
	<div class="main">
	<header class="mui-bar mui-bar-nav">
  		<div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  			<div class="fl sw_search">
    		<h1 class="mui-title">{{c_price}}</h1>
  		</div>
	</header>
	<div class="sw_ucenter_index">

  		<div class="mains_detil">
  		<div class="My_Coupons">
	       	<div class="My_Coupons_con">

	           <h2><span>Coupon Conditions:</span><em> apply if Total cart Value reaches ₱{{price_statas}}（Not contain postage）.</em></h2>
	           <h3>You can purchase these products by this coupon</h3>
	       	</div>
  		</div>
  		</div>

  		<div class="sw_ucenter_c">
    		<h3><span>Recommend Products</span></h3>
  		</div>
		  <div class="goods_list_com">
		    <ul>
		       <li v-for="(item,index) in reclist"> <a href="#">
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
		
		<div class="copybox" style="width:80%;height:400px;border:1px solid red;" v-if="showcopy">
			<span style="display:inline-block;border:1px solid #000;" @click="showcopy=false">false</span>
		
			<!--<div>
				<h3>Congratulations!</h3>
				<p>You just created an Angpao!</p>
			</div>
			<div>
				<span></span>
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</div>
			<div>
				<p>Copy and share this link to your friend，they can use this link on website or app to get angpao,and you can find  angpao link in My coupons>> <a href="">Angpao Records</a> </p>
			</div>
			<div>Copy Code</div>
			<h2>
				<a href="">how to share angpao?</a>
			</h2>-->
			
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
				contract: '',
				query: null,
				showcopy:false,
				isActive:false,
				c_price:'',
				price_statas:'',
				reclist:''
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
			this.c_price = query.price;
			this.price_statas = query.price_statas;
			this.recommentlist();
			

		},
		mounted() {
			//复制功能的控件
			// var clip = new Clipboard('.clip');
			// clip.on('success', function(e){
			// 	Toast({message: '复制成功', duration: 1000});
			// })
			$(".main>a").css("background","deeppink");

			
		
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
						console.log(8888);
						that.showcopy=true;
						that.isActive=true;
					}else{
						return;
					}
			
				});


				
			},
			recommentlist:function(){
				var that=this;
				var codeapi = 'api/v1/home/getRecom?page=1&size=10';
				service.get(api.contract+codeapi).then(res => {
					if(res.data.code==200){
						that.reclist=res.data.data;
//						Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
			}

		},
		computed: {
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
    padding-top: 0rem;
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
 .My_Coupons_con h2 em{ color:#6d6f73;margin-left:0.1rem; font-size:0.10rem;}
 .My_Coupons_con p{ font-size:0.13rem; line-height:0.20rem; color:#ff4500; padding-top:0.1rem; word-break:break-all;}
 .My_Coupons_con h3{ text-align:center; padding:0.16rem 0;line-height: 0.18rem;    font-size: 0.18rem;color: #ff4500;}
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
</style>
