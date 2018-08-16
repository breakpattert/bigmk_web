<template>
	<div class="main">
<!--	<n-orderhead></n-orderhead>-->
	<header class="mui-bar mui-bar-nav" style="position: fixed;">
  <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">{{headertext}}</h1>
  </div>
  <!--<div class="fr sw_news"><a href="#" @click="opentab()" id="sw_top_nav_show"><i class="iconfont icon-more">&#xe65c;</i></a></div>-->
<!--    <div class="fr sw_news"><span class="mui-icon mui-icon-bars"  ></span></div>-->
</header>
<div class="mui-content">
  <div class="sw_ucenter_set">
    <ul class="autohei">
      <li v-for="(item,index) in province_list" :key="index" @click="opencity(item.area_id,item)">
        <h3><a href="#">{{item.area_name}}<span class="fr my_ico"></span></a></h3>
      </li>
    </ul>
  </div>
</div>
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
	import orderhead from '../../components/orderhead.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				showcopy:false,
				isActive:false,
				province_list:'',
				id:'',
				headertext:'province',
				types:'',
				useraddress:'',
				type_new:''
			}
		},
		components:{
	     'n-orderhead':orderhead,
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
			this.types = query.type;
			this.type_new = query.type_new;
			this.id = query.id;
			if(this.types==1){
				this.headertext="City";
				this.city();
				
				return;
			}else if(this.types==2){
				this.Area();
				this.headertext="Area";
				return
			}else if(this.types==0){
				this.headertext="Province";
				this.provincelist();
				return
			}else if(this.type_new==0){
				this.headertext="Province";
				this.provincelist();
				return
			}else if(this.type_new==1){
				this.headertext="City";
				this.city();
				return
			}else if(this.type_new==2){
				this.Area();
				this.headertext="Area";
				return
			}
			
		},
		mounted() {
			

			
		
		},
		methods: {
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			provincelist:function(id){
					var that=this;

					var param = qs.stringify({area_id:0});
					var codeapi = 'api/v1/common/getChildrenByAreaId';
					service.post(api.contract+codeapi, param).then(res => {
						if(res.data.code==200){
						that.province_list=res.data.data;
//							Toast({message: res.data.msg, duration: 1000});
						}else{
							Toast({message: '8888', duration: 2000});
						}
						

					})
			},
			opencity:function(id,item){
				if(id&&this.types==0){		
					window.location.href="./setaddress.html?type=1&id="+id;
						
						localStorage.setItem('province',item.area_name);
						localStorage.setItem('p_id',id);

					
				}else if(id&&this.types==1){
				
					localStorage.setItem('city',item.area_name);
					localStorage.setItem('c_id',id);
						
					window.location.href="./setaddress.html?type=2&id="+id;
				}else if(id&&this.types==2){
					let alladdress ={
						province:localStorage.getItem('province'),
						p_id:localStorage.getItem('p_id'),
						city:localStorage.getItem('city'),
						c_id:localStorage.getItem('c_id'),
						Area:item.area_name,
						a_id:id,
					}
					localStorage.setItem('alladdress', JSON.stringify(alladdress));
					window.location.href="./new_address.html?type=3&state=3";
				}else if(id&&this.type_new==0){
					window.location.href="./setaddress.html?type_new=1&id="+id;
						
						localStorage.setItem('province',item.area_name);
						localStorage.setItem('p_id',id);
				}else if(id&&this.type_new==1){
				
					localStorage.setItem('city',item.area_name);
					localStorage.setItem('c_id',id);
						
					window.location.href="./setaddress.html?type_new=2&id="+id;
				}else if(id&&this.type_new==2){
					let alladdress ={
						province:localStorage.getItem('province'),
						p_id:localStorage.getItem('p_id'),
						city:localStorage.getItem('city'),
						c_id:localStorage.getItem('c_id'),
						Area:item.area_name,
						a_id:id,
					}
					localStorage.setItem('alladdress', JSON.stringify(alladdress));
					window.location.href="./aadnew_address.html";
				}
			},
			city:function(){
					var that=this;

					var param = qs.stringify({area_id:that.id});
					var codeapi = 'api/v1/common/getChildrenByAreaId';
					service.post(api.contract+codeapi, param).then(res => {
						if(res.data.code==200){
						that.province_list=res.data.data;
//							Toast({message: res.data.msg, duration: 1000});
						}else{
							Toast({message: '8888', duration: 2000});
						}
						

					})
			},
			Area:function(){
					var that=this;

					var param = qs.stringify({area_id:that.id});
					var codeapi = 'api/v1/common/getChildrenByAreaId';
					service.post(api.contract+codeapi, param).then(res => {
						if(res.data.code==200){
						that.province_list=res.data.data;
//							Toast({message: res.data.msg, duration: 1000});
						}else{
							Toast({message: '8888', duration: 2000});
						}
						

					})
			},
			

		},
		computed: {

		}
	}
</script>

<style>


/*@import '../../assets/allcss/sw_style.css';*/

      .my_ico{
    	background:url('../../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	top:0.12rem;
    	height: 0.16rem;
		left: 0rem !important;

    }
    .scan_code span.mui-icon {
    font-size: 0.36rem !important;
    
     top: -0.1rem;
}
.scan_code img {
    width: 60% !important;
        height: 100% !important;
  
}
</style>
