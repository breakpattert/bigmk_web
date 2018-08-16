<template>
	<div class="main">
	<div class="sw_ucenter_index">
  <div class="sw_ucenter_t">
    <div align="center"><img src="../../assets/images/account_image.png" class="sw_ucenter_img1"/></div>
    <div class="sw_ucenter_t1">
    	<a href="./setting.html" style="float:left;position: absolute;left:0.12rem"><i class="iconfont icon-settings_fill">&#xe652;</i></a>
    	<a href="./messages.html" style="float:right;">
    		<span class="mui-icon mui-icon-weibo">
    			<strong class="mui-badge" style="z-index: 10;">{{ucenterinfos.message_num}}+</strong>
    			<i class="iconfont icon-conversation">&#xe63d;</i>
    		</span>
    	</a>
    </div>
    <div class="sw_ucenter_t2 autohei"> 
    	<a href="./profie.html">
      <div style="width:1rem;height:1rem;">
      	<img style="border-radius: 50%;height:100%;width:100%" :src="imgHost+userinfo.head_ico" :onerror="logo">
      </div>
      <h2>{{userinfo.username}}</h2>
      </a> </div>
    <div class="sw_ucenter_t3 autohei">
      <ul class="autohei">
        <li class="autohei">
          <div class="fr"><img src="../../assets/images/u68.png"></div>
          <a href="./favourite.html">Favourites {{ucenterinfos.favorite_count}}</a></li>
        <li><a href="./follow.html">Following {{ucenterinfos.seller_user_fav_count}}</a></li>
      </ul>
    </div>
  </div>
  <div class="sw_ucenter_a">
    <ul class="autohei">
      <!--<li>
      	<a href=""><strong class="sw_ucenter_news"><img src="../../assets/images/pay_gray.png"><span class="mui-badge">1</span></strong><br/>
        To Pay</a></li>-->
      <li><a href="./orderlist.html?type=its"><strong class="sw_ucenter_news"><img src="../../assets/images/receive_gray.png"/><span class="mui-badge">{{ucenterinfos.in_transit_count}}</span></strong><br/>
      	In transit</a></li>
      <li><a href="./orderlist.html?type=udl"><strong class="sw_ucenter_news"><img src="../../assets/images/ship_gray.png"/><span class="mui-badge">{{ucenterinfos.undelivered_count}}</span></strong><br/>
        Undelivered</a></li>
      <li><a href="./orderlist.html?type=pku"><strong class="sw_ucenter_news"><img src="../../assets/images/refunds_gray.png"/><span class="mui-badge">{{ucenterinfos.pick_up_count}}</span></strong><br/>
       Pick-up</a></li>
      <li><a href="./orderlist.html?type=all"><strong class="sw_ucenter_news"><img src="../../assets/images/orders_gray.png"></strong><br/>
        My Orders</a></li>
    </ul>
  </div>
  <div class="sw_ucenter_b">
    <ul class=" autohei">
      <li class="autohei" @click="opengroup_list()">
        <div class="fl"><img src="../../assets/images/me_icon_quota.png"></div>
        <span class="fr my_ico"></span><span class="mui-badge fr">{{ucenterinfos.quota_count}}</span> <strong>My Group buy</strong> </li>
      <li class="autohei"  @click="opencomment_list()">
        <div class="fl"><img src="../../assets/images/review_gray.png"></div>
        <span class="fr my_ico"></span><span class="mui-badge fr">{{ucenterinfos.comment_count}}</span> <strong>Comment</strong> </li>
      <li class="autohei"  @click="openaddress()">
        <div class="fl"><img src="../../assets/images/address_gray.png"></div>
        <span class="fr my_ico"></span><strong>My Address</strong> </li>
      <li class="autohei"  @click="opencoupons()">
      	
        <div class="fl"><img src="../../assets/images/vouchers_gray.png"></div>
        <span class="fr my_ico"></span><span class="mui-badge fr">{{ucenterinfos.voucher_count}}</span> <strong>My Coupons</strong> </li>
    </ul>
  </div>
  <div class="sw_ucenter_c">
    <h3><span>Recently Viewed</span></h3>
  </div>
  <div class="goods_list_com">
    <ul>
      <li v-for="(item,index) in recentlylist"> 
      	<a @click="opendetil(item)">
        <div align="center"><img :src="item.img"></div>
        <div class="goods_list_com_t">
          <p class="goods_list_p1">{{item.discount?item.discount:"0"}}%</p>
          <p> off</p>
        </div>
        <h2>{{item.name}}</h2>
        <h3 class="autohei"><span>₱{{item.sell_price}}</span><em>{{item.is_shipping==1?"FREESHIPPING":"NO FREESHIPPING"}}</em><!--<strong>COD</strong>--></h3>
        <h4 class="autohei"><span>Sale:&nbsp;{{item.sale}}</span><strong>Comments:&nbsp;{{item.comments}}</strong></h4>
        </a> 
      </li>
  
  

  
     
    </ul>
  </div>
</div>
<!--<div class="mui-content">
  <div class="sw_blank"></div>
  <nav class="footer_nav">
    <ul>
      <li class="nav_home"><a href=""><i class="iconfont icon-category">&#xe646;</i><em>Home</em></a></li>
      <li class="nav_menu"><a href=""><i class="iconfont icon-category">&#xe63b;</i><em>Categories</em></a></li>
      <li class="nav_cart"><a href="./login.html"><i class="iconfont icon-category">&#xe63f;<strong class="mui-badge">5</strong></i><em>Cart</em></a></li>
 
      <li class="nav_user on"><a href=""><i class="iconfont icon-category">&#xe64d;</i><em>Me</em></a></li>
    </ul>
  </nav>
</div>-->
<n-footer></n-footer>
	</div>
</template>

<script>
	
//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui'//导入mint-ui
	import { Indicator } from 'mint-ui';
	import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
	import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
	import qs from 'qs'
	import querystring from 'querystring'
	import footer from '../../components/allfooter.vue'
//	import footer from '../../components/commonality/footer.vue';
	import '@/assets/alljs/jquery-3.2.1.min.js';
//	import '@/assets/alljs/mobile.js';
	
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				code: '000000',
				money: 0,
				logo: 'this.src="' + require('../../assets/images/user_ico.gif') + '"',
				imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
				commonContract: [],
				contract: '',
				query: null,
				ucenterinfos:'',
				userinfo:'',
				recentlylist:''
			}
		},
		components:{
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
			console.log(query);
			this.ucenterinfo();
//			最近浏览
			this.recently();
			
			

		},
		mounted() {
			//复制功能的控件
			// var clip = new Clipboard('.clip');
			// clip.on('success', function(e){
			// 	Toast({message: '复制成功', duration: 1000});
			// })
			$(".main>a").css("background","deeppink");
			var that = this;
			if(!that.getCookie('bigmk_wap_ut')&&that.getCookie('bigmk_wap_ut')==''){
			window.location.href="./login.html";
				console.log(8)
			}else{
				
			Indicator.open({
				spinnerType: 'fading-circle'
			});
			
				setTimeout(function(){
					that.openloding();
				},500)
			}

			
		
		},
		methods: {
			opendetil(item){
					if(item.promo=='time'){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}
					
				}else if(!item.promo){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo=";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo=";
					}
					
				}else if(item.promo=='quota'){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}
					
				}else{
					
				}
			},
			openloding:function(){
				Indicator.close();
			
			},
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			opencomment_list:function(){
					window.location.href="./orderlist.html";
			},
			openaddress:function(){
					window.location.href="./uc_address.html";
			},
			opencoupons:function(){
					window.location.href="./couponslist.html";
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
			ucenterinfo:function(){
				var that = this;
				var token=this.getCookie('bigmk_wap_ut');
				var smscodeapi = 'api/v1/user/userInfo';
				service.get(api.contract+smscodeapi,{
					 headers: {
					 	'Authorization': 'Bearer ' + token,
					 }
				}).then(res => {
				if(res.data.code==200){
					that.ucenterinfos=res.data.data;
					that.userinfo = that.ucenterinfos.user_info;
					localStorage.setItem('user_info', JSON.stringify(that.userinfo));
//					 let get_user_info = localStorage.getItem('user_info');
//					  get_user_info = JSON.parse(get_user_info)
//					   console.log(get_user_info,99);
					console.log(that.ucenterinfos);
				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
			},
			recently:function(){
				var that = this;
				var tokens=this.getCookie('bigmk_wap_ut');
				var reapi = 'api/v1/user/getRecentlyGoods';
				service.get(api.contract+reapi,{
					 headers: {
					 	'Authorization': 'Bearer ' + tokens,
					 }
				}).then(res => {
				if(res.data.code==200){
					that.recentlylist=res.data.data;
					console.log(that.recentlylist);
				}else{
					Toast({message: res.data.msg, duration: 2000});
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
display: none;
}
 .sw_ucenter_a ul li {
    width: 25% !important;
    }
    .sw_ucenter_t1 .icon-settings_fill{
    	font-size:0.28rem;
    	color:#fff;
    }
    .mui-icon-weibo .icon-conversation{
    	font-size:0.28rem;
    	color:#fff;
    	position: relative;
    /* margin: 34px 10px 0 10px; */
    	top: 0.04rem;
    	left: -0.07rem;
    }

    .my_ico{
    	background:url('../../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	top:0.12rem !important;
    	height: 0.16rem;


    }
    
    /*footer*/
    .mui-content .footer_nav li a{
    	padding-top:0.08rem;
    }
    .footer_nav .icon-category {
    	font-size:0.28rem;
    	position: relative;
    }
    .mui-content .footer_nav li a em{
    	margin-top: 0;
    }
</style>