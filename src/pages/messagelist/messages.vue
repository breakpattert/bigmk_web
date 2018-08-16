<template>
	<div class="main">
		<n-messagehead></n-messagehead>
   <div class="sw_message">
    <div id="sw_message_a" class="sw_Forgot_Pwd_con">
        <div class="autohei">
           <ul class=" sw_message_ul">
              <li v-for="item in messageslist"> 
	              <a @click="poininfo(item.id,item.is_id)">
	              <div class="left_ico" :class="{'left_isdu':item.is_read==1}"><i class="iconfont icon-xiaoxi icons">&#xe662;</i></div>
	              <div class="fr"><span class="fr my_ico"></span></div>
	              <h3>{{item.title}}</h3>
	              <h4>{{item.time}}</h4>
	              </a> 
              </li>
     
          	</ul>
          </div>
   
   	</div>
	</div>
	 <n-orderhead></n-orderhead>
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
				messageslist:''
				
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
			this.messlist();
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
            messlist:function(){
            	var that=this;
//				var param = qs.stringify({area_id:that.id});
				var codeapi = 'api/v1/user/sysList';
				service.get(api.contract+codeapi).then(res => {
					if(res.data.code==200){
						this.messageslist=res.data.data;
//							Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

				})
           },
           poininfo:function(id,is_id){
           	window.location.href="./mseinfo.html?id="+id+"&is_id="+is_id;
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
 .main .sw_message_ul{
	padding:0;
}
 .main .sw_message{
 	padding-top:0.48rem;
 }
  .main .sw_message_ul li{
  	background:#fff;
  	margin: 0.12rem 0;
  	padding: 0.12rem 0.04rem 0.12rem 0.04rem;
  }
   .main .sw_message_ul li h3{
  	line-height: 0.14rem;
  }
  .main .sw_message{
  	background-color: #efeff4;
  }
  .left_ico{
  	 float: left;
    width: 0.28rem;
    height: 0.28rem;
    background: #dadada;
    border-radius: 50%;
    text-align: center;
    margin: 0.06rem 0.10rem 0.10rem 0.10rem;
    line-height: 0.28rem;
  }
  .scan_code img{
  	margin-top:0.02rem;
  	width: 0.4rem;
  	height:0.4rem;
  }
     .sw_news .icon-me_fill{

    	position: relative;
   		font-size: 0.24rem;
    	top: 0.1rem;
    	color:#ff4500;
    }
       .my_ico{
    	background:url('../../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	top:0.12rem;
    	height: 0.16rem;
    	left:0 !important;


    }
    .left_ico .icon-xiaoxi{
    	color:#fff;
    	font-size:0.20rem;
    }

    .main .sw_message_ul li h4 {

    white-space: nowrap;
    padding-right:0.36rem;
    text-overflow: ellipsis;
    }
    .left_isdu{
    	background:#fea410;
    }
    .main .mui-bar-nav {
    position: fixed !important;
}
</style>