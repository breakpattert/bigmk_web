<template>
	<div class="main">
	<header class="mui-bar mui-bar-nav">
      <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  		<div class="fl sw_search">
    		<h1 class="mui-title">Write a Review</h1>
  		</div>
  
	</header>
		<v-comment></v-comment>

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
//	import '@/assets/alljs/mobile.js';
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
import comment from '../../components/comment.vue';
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				likelist:[],
				imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
				
			}
		},
		components:{
			'v-comment': comment,
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
	

			

		},
		mounted() {


		},
		methods: {

			touchStart:function(ev) {
                        ev = ev || event;
                        ev.preventDefault();
                        if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                            this.startX = ev.touches[0].clientX; // 记录开始位置
                        }
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
.scan_code{
	position: absolute;
	top: -0.16rem;
}
.scan_code span.mui-icon {
    font-size: 0.36rem !important;
    
   /*  top: -0.1rem;*/
}
.scan_code img {
    width: 60% !important;
        height: 100% !important;
  
}



.chat_w{
	 padding: 0rem 0.12rem 0rem 0.12rem;

    float: left;

    margin-left: 0.10rem;
	display: inline-block;
    text-align: center;
    font-size: 0.11rem;
    height: 0.26rem;
    line-height: 0.24rem;
     border-radius: 0.04rem;
     border: 0.01rem solid #ff4500;
    color: #ff4500;
}

 
</style>