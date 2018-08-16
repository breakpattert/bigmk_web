<template>
<div class="main">
<header class="mui-bar mui-bar-nav">
    <div class="fl scan_code"><a  href="javascript:history.back(-1)"><span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">New Address</h1>
  </div>
</header>
<div class="mui-content">
  <div class="sw_ucenter_newaddress">
    <div class="mui-input-row">
      <input type="text"  class="mui-input-clear sw_newaddress_iuput" placeholder="Name" v-model="getadderss_info.accept_name">
    </div>
     <div class="mui-input-row">
      <input type="email" class="mui-input-clear sw_newaddress_iuput" placeholder="Email Address" v-model="useremail">
    </div>
    <div class="mui-input-row">
      <input type="text" class="mui-input-clear sw_newaddress_iuput" placeholder="Phone Number" v-model="getadderss_info.mobile">
    </div>
    <div class="mui-content">
      <div class="mui-content-padded">
        <div class="sw_ucenter_newaddress_a">
          <div class="mui-input-clear sw_newaddress_iuput" @click="opens()" style="font-size: 0.12rem;line-height:0.42rem;height:100%;width:100%;background:#fff;border-bottom: 1px solid #ddd;padding-left: 0.1rem;">
          	{{getadderss_info.province}}&nbsp;{{getadderss_info.city}}&nbsp;{{getadderss_info.area}}&nbsp;
          </div>
          <span class="my_ico"></span>
          <div id='cityResult3'></div>
        </div>
      </div>
    </div>
    <div class="mui-input-row">
      <input type="text" class="mui-input-clear sw_newaddress_iuput" placeholder="Postal Code" v-model="getadderss_info.zip">
    </div>
    <div class="mui-input-row">
      <input type="text" class="mui-input-clear sw_newaddress_iuput" placeholder="Unit No., Building, steet and etc..." v-model="getadderss_info.address">
    </div>
    <div class="check_redio">

    		<input type="checkbox" v-model="Check" @change="check()">
    		<span>&nbsp;Set as Default</span>
   
    </div>
    <div align="center" @click.stop="getsave()"><a href="#" class="sw_ucenter_newaddress_but">Save</a></div>
  </div>
</div>
<!--<mt-popup
  position="bottom"
  v-model="popupVisible"
  >
  <div class="bottombox">
		
  			

  </div>
</mt-popup>-->
<n-footer></n-footer>
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
	import footer from '../../components/allfooter.vue';
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				code: '000000',
				money: 0,
				commonContract: [],
				contract: '',
				query: null,
				pickerVisible:'',
				Check:false,
				getadderss_info:'',
				useremail:'',
				popupVisible:false,
      			active: 'tab-container1',
      			eadtadderss:'',
      			is_default:'',
      			opensanji:'',
				
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
			
			var get_info = localStorage.getItem('adderss_info');
			var get_info_default = JSON.parse(get_info);
			if(get_info_default.is_default==1){
				
				this.Check=true;
				}else{
					return false;
			}

			

		},
		mounted() {
			var search = window.location.search;
			if(search.length > 0 && search[0] == '?'){
				search = search.slice(1);
			}
			var query = querystring.parse(search);
			var type = query.type;
			this.opensanji = query.state;
			if(type==3){
			let get_adderss_info = localStorage.getItem('adderss_info');
			this.getadderss_info = JSON.parse(get_adderss_info);
			var alladderss = localStorage.getItem('alladdress');
				this.eadtadderss =  JSON.parse(alladderss);
				this.getadderss_info.province=this.eadtadderss.province;
				this.getadderss_info.city=this.eadtadderss.city;
				this.getadderss_info.area=this.eadtadderss.Area;
				 this.useremail=this.getCookie('useremail');
			}else if(this.opensanji=='2'){
				let get_adderss_info = localStorage.getItem('adderss_info');
				this.getadderss_info = JSON.parse(get_adderss_info);
				 this.useremail=this.getCookie('useremail');
			}
			
			
//				console.log(this.getadderss_info,99);
			
		},
		methods: {
			
			check:function(){
				var that = this;
				if(that.Check==true){
					 that.is_default=1;
					 console.log( that.is_default);
				}else{
					 that.is_default=0;
					 console.log( that.is_default);
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
            getsave:function(){
            	if(this.opensanji =='3'){
            		console.log(this.opensanji);
          		this.getads();
            	}else if(this.opensanji=='2'){
            		console.log(this.opensanji);
          			this.initsave();
            	}
            },
             initsave:function(){
      			var that = this;
				var smscodeapi = 'api/v1/address/update/'+that.getadderss_info.id;
				var param = qs.stringify({
					accept_name:that.getadderss_info.accept_name,
					province:that.getadderss_info.province_id,
					city:that.getadderss_info.city_id,
					area:that.getadderss_info.area_id,
					address:that.getadderss_info.address,
					zip:that.getadderss_info.zip,
					telphone:'',
					mobile:that.getadderss_info.mobile,
					is_default:that.is_default,
					user_id:that.getCookie('user_id'),
					email:that.useremail
				});
				service.put(api.contract+smscodeapi,param,).then(res => {
				if(res.data.code==200){
					console.log(res.data);
					Toast({message: res.data.msg, duration: 1200});
					window.location.href="./uc_address.html";

				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
//				Toast({message:'Please........', duration: 1000});
			},
      		getads:function(){
      			var that = this;
				var smscodeapi = 'api/v1/address/update/'+that.getadderss_info.id;
				var param = qs.stringify({
					
					accept_name:that.getadderss_info.accept_name,
					province:that.eadtadderss.p_id,
					city:that.eadtadderss.c_id,
					area:that.eadtadderss.a_id,
					address:that.getadderss_info.address,
					zip:that.getadderss_info.zip,
					telphone:'',
					mobile:that.getadderss_info.mobile,
					is_default:that.is_default,
					user_id:that.getCookie('user_id'),
					email:that.useremail
				});
				service.put(api.contract+smscodeapi,param,).then(res => {
				if(res.data.code==200){
					console.log(res.data);
					
					
					Toast({message: res.data.msg, duration: 1200});
					window.location.href="./uc_address.html";

				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
//				Toast({message:'Please........', duration: 1000});
			},

			opens() {
//      	this.popupVisible=true;
//				this.opensanji=true;
				window.location.href="./setaddress.html?type=0";
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

		},
		computed: {
		}
	}
</script>

<style>
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';
	.sw_ucenter_newaddress .mui-content{
		    padding-bottom: 0px;
	}
	 .mint-toast-text {
    font-size: 0.16rem !important;
    height: 0.16rem !important;
    line-height: 0.14rem !important;
}
	.check_redio{
		padding:0.12rem;
	}
	.check_redio>span{
		font-size: 0.12rem;
	}
	.picker-toolbar .mint-datetime-action{
		line-height:0.38rem;
	}
	 .picker-toolbar .mint-datetime-cancel{
	 		width:0.8rem;
	 		border:0.01rem solid #D3D3D3;
	 		color:#333;
	 		font-size: 0.12rem;
	 		background: #fff;
	 }
	  .picker-toolbar .mint-datetime-confirm{
	  	width:0.8rem;
	  	font-size: 0.12rem;
	  	background: #ff4500;
	  	color:#fff;
	  }
	  	 .scan_code img{
  	margin-top:0.06rem;
  	width: 0.3rem;
  	height:0.3rem;
  }
  
    .my_ico{
    	background:url('../../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	height: 0.16rem;
    	top:0.13rem !important;
    	left: 90%;

    }
    .mint-popup{
    	background:#0000 !important;
    }
    .bottombox{
    	width:100%;
    	height:5.4rem;
    	background: #fff;
    	border-radius:16px 16px 0 0;   
		
    }
    .mint-popup-bottom{
    	width:100%;
    }
    .item {
    display: inline-block;
  }
 
  .nav {
    padding: 10px;
  }
 
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
#scroll1{
	overflow-x: hidden !important;
overflow-y: auto !important;
}
.mui-bar-nav ~ .mui-content{
	padding-top: 0!important;
}
.main .sw_ucenter_newaddress_a span{
	    left: 94%;
}
</style>