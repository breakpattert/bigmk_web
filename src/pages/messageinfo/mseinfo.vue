<template>
	<div class="main">
<header class="mui-bar mui-bar-nav">
      <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">Quota Message</h1>
  </div>
  
</header>
<div class="mui-content">
  <div class="sw_message_info">
    <div class="sw_message_info_tit"> <span>System</span> {{infoall.time}}</div>
    <div class="sw_message_info_a">
      <div class="mui-content-padded" style="font-size:0.12rem;line-height: 0.14rem;">
      	{{infoall.content}}
        <!--<p>Hi Bigmk卖家，
          为了让您的在线销售体验更轻松，我们不断在我们的卖家平台上更新。</p>
        <div align="center"><img src="../../assets/images/u36.jpg" data-preview-src="" data-preview-group="1"></div>
        <p>请注意，我们现在提供了一个选项，您可以决定是否向买家提供货到付款。 我们的系统在此选项上初始选择了“否”。 如果您选择向客户提供货到付款，请按照以下说明更改此项。
          如有查询，请致电02 242 4264与我们联络。
          谢谢！</p>
        <div align="center"><img src="../../assets/images/u36.jpg" data-preview-src="" data-preview-group="1"></div>-->
      </div>
    </div>
  </div>
</div>

<!--顶部下滑导航条-->
<div class="sw_top_navbar">
   <div class="sw_top_navbar1">
    <ul>
      <li class="nav_home on"><a href="/index.php"><span class="mui-icon mui-icon-home-filled"></span><em>Home</em></a></li>
     <li class="nav_user"><a href="/ucenter/index"><span class="mui-icon-extra mui-icon-extra-notice"></span><em>Messages</em></a></li>
      <li class="nav_cart"><a href="/cart.html"><span class="mui-icon-extra mui-icon-extra-cart"></span><em>Shopping Cart</em></a></li>
      
      <li class="nav_user"><a href="/ucenter/index"><span class="mui-icon mui-icon-contact mui-icon-icon-contact"></span><em>My Account</em></a></li>
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
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				infoall:''
				
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
			var info_id = query.id;
			var is_id = query.is_id;
			this.infolist(info_id);
			this.islook(is_id)
			

		},
		mounted() {

		

		},
		methods: {
			islook:function(is_id){
				var that=this;
				var param = qs.stringify({id:is_id});
				var codeapi = 'api/v1/user/isRead';
				service.post(api.contract+codeapi,param).then(res => {
					if(res.data.code==200){

//						Toast({message: 'The message has been read', duration: 1000});
					}else{
//						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
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
			infolist:function(info_id){
				var that=this;
				var param = qs.stringify({id:info_id});
				var codeapi = 'api/v1/user/sysCont';
				service.post(api.contract+codeapi,param).then(res => {
					if(res.data.code==200){
						
						that.infoall=res.data.data;
//							Toast({message: res.data.msg, duration: 1000});
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
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';

  .scan_code img{
  	margin-top:0.06rem;
  	width: 0.3rem;
  	height:0.3rem;
  }
</style>