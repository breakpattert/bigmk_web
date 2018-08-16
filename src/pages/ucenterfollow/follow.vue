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
<div class="mui-content">
  <div class="sw_ucenter_following_list">
    <ul class="autohei">
      <li class="autohei" v-for="item in follow_list">
        <div class="fl"><img :src="imgHost+item.img"></div>
        <a href="#" class="sw_following_link fr" @click="message(item.id)">Unfollow</a>
        <h3>item.true_name</h3>
        <h4>{{item.products_count}} products</h4>
      </li>

    </ul>
  </div>
</div>
<n-footer></n-footer>
<!--顶部下滑导航条-->
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
	import fllowhead from '../../components/fllowhead.vue';
	import footer from '../../components/allfooter.vue';
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				follow_list:'',
				imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
			}
		},
		components:{
	  'n-fllowhead':fllowhead,
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
			this.followlist();
			

		},
		mounted() {

			$(".main>a").css("background","deeppink");

		
		},
		methods: {
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			touchStart:function(ev) {
                        ev = ev || event;
                        ev.preventDefault();

                        if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                            this.startX = ev.touches[0].clientX; // 记录开始位置
                        }
            },
            message:function(id){
				var that= this;
				var goodsid=id;
				MessageBox({
  				title: 'Tips ',
  				message: 'Are you sure to put this coupon in angpao?',
  				showCancelButton: true,
  				cancelButtonText:'No',
  				confirmButtonText:'Yes',
				}).then(action => {
					if(action=='cancel'){
						
					}else if(action=='confirm'){
						
						that.delfollow(goodsid);
					}else{
						return;
					}
			
				});
	
			},
			delfollow:function(id){
				var self = this;
				var url = 'api/v1/user/follow';
				var param = qs.stringify({
					seller_id:id,
					type:2
				});
				service.put(api.contract+url,param).then(res => {
				if(res.data.code==200){
					self.followlist();
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
			},
			followlist:function(){
				var that=this;
				var codeapi = 'api/v1/user/followList?page=1&size=10';
				service.get(api.contract+codeapi).then(res => {
					if(res.data.code==200){
						that.follow_list=res.data.data;
//						Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
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
.main .sw_ucenter_following_list ul{
	padding:0;
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
    .mui-content{
    	padding-bottom: 0 !important;
    }
</style>