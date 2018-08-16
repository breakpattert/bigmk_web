<template>
	<div class="main">

	<n-orderhead></n-orderhead>


	<!--<n-footer></n-footer>-->
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
	import orderhead from '../../components/orderhead.vue';
//	import footer from '../../components/allfooter.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				ins:'#content',
				cate_list:'',
				catelength:'',
				lengths:1,
				cates_id:''
				
			}
		},
		components:{
     'n-orderhead':orderhead,
//    'n-footer':footer,
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
//			its,udl,pku,all
			var query = querystring.parse(search);
			var types = query.type;
			this.goodslist();
			
			
		},
		mounted() {
			
		},
		methods: {

			touchStart:function(ev) {
                        ev = ev || event;
                        ev.preventDefault();
//                      console.log(ev.targetTouches);
//                      console.log(ev.changedTouches);
                        if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                            this.startX = ev.touches[0].clientX; // 记录开始位置
                        }
            },
    
			modals:function(){
				 $(".titletab").toggle(100);
			},

		  openorderdetil:function(id){
		  	window.location.href="./orderdetil.html?order_id="+id;
		  },
		
		  goodslist:function(){
		  	 
		  	  	var self = this;
				var url = 'api/v1/common/goodsList?pageSize=6&page=1&cate_id=10';
//				var param = qs.stringify({
//					order_id:id
//				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					console.log(res.data);
					
					Toast({message: res.data.msg, duration: 1200});
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
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

.mui-row.mui-fullscreen>[class*="mui-col-"] {
height: 100%;
}
#segmentedControls>a{
	height:0.45rem;
	line-height: 0.48rem;
	    padding-left: 0.08rem;
}
.mui-col-xs-3, .mui-control-content { overflow-y: auto; height: 100%; }
.mui-segmented-control .mui-control-item { width: 100%; line-height: normal; padding: 0px 0px 0.07rem 0px; }
.mui-segmented-control .mui-control-item span { padding: 0.05rem 0 0 0; }
.mui-segmented-control .mui-control-item strong { line-height: 0.15rem; font-size: 0.12rem; font-weight: normal; height: 0.30rem; display: inline-block; word-break: break-all; }
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active { background-color: #fff; border: none; border-left: 0.02rem solid #FF4500; color: #FF4500; }
.sw_categories_ul .mui-table-view-cell { padding: 0 0 0.1rem 0; }
.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell { padding-left: 0.1rem; }
.mui-table-view-cell.mui-collapse .mui-table-view { margin: 0.05rem 0 0 0; }
.mui-table-view-cell.mui-active { background: none; }
.sw_categories_ul_img img { width: 0.26rem; height: 0.26rem; }
.sw_categories .mui-card { box-shadow: 0 0 0 rgba(0,0,0,.3); margin: 0 0 0 0; }
.sw_categories .mui-table-view-cell>a:not(.mui-btn) { margin: 0; padding: 0px 0px 0px 0.08rem; height: 0.3rem; line-height: 0.3rem; font-size: 0.12rem;}
.sw_categories .mui-table-view-cell { padding: 0.06rem 0 0.06rem 0.06rem; }
.mui-table-view-cell.mui-collapse .mui-collapse-content { margin: 0px; padding: 0px; }
.sw_categories_ul li h2 { font-size: 0.012rem; color: #000; padding: 0px 0px 0px 0.34rem; line-height: 0.3rem; }
.cate_herf{
	    padding:0.12rem;
    border: 0.01rem solid #000;
    height: 3.4rem;
}
.cate_herf>ul{
	width:100%;
	padding:0.12rem 0;
}
.cate_herf>ul>li{
	float:left;
	width:33.3%;
	height:0.45rem;
	border:0.01rem solid #cccccc54;
}

</style>