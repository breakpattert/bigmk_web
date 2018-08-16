<template>
	<div class="main">
	<n-orderhead></n-orderhead>
<div class="mui-content">
  <div class="sw_ucenter_set">
    <ul class="autohei">
      <li>
        <h3><a href="./profie.html">My Profile  <span class="fr my_ico"></span></a></h3>
      </li>
      <li>
        <h3><a href="./changepwd.html">Change Password <span class="fr my_ico"></span></a></h3>
      </li>
      <li class="on1">
        <h3><a href="./uc_address.html">My Address<span class="fr my_ico"></span></a></h3>
      </li>
      <li class="on2">
        <h3><a href="#">Help Center <span class="fr my_ico"></span></a></h3>
      </li>
      <!--<li class="on3">
        <h3><a href="#">About US <span class="fr my_ico"></span></a></h3>
      </li>-->
    </ul>
  </div>
  <div align="center"><a href="#" class="sw_ucenter_newaddress_but" @click="logout()">Logout</a></div>
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
				code: '000000',
				money: 0,
				commonContract: [],
				contract: '',
				query: null,
				showcopy:false,
				isActive:false,
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
			var token = query.user_token;
			console.log(query);
//			post请求要处理请求头部
//			var param = qs.stringify({user_id: '',id:4117,active_id:577,promo:'time'});
//			var param2 = qs.stringify({grant_type:'client_credentials',client_id:'2ff77e077c405be3de2bc8bccb3e2bbc',client_secret:'648dff972772cabac6923511a8f11aff'});
////			var params = {};
//				self = this;
//				var is = 'index/slideList?web_access=web';
//			service.post(api.contract+is, param2).then(res => {
//				var dg = res.data;
//				console.log(dg);
////				self.commonContract = d.data.common_contract_d_t_o_s;
//			})
//			get请求
//			service.get(api.commonContract).then(res => {
//				var d = res;
//				console.log(res.data.data);
//			})
			

		},
		mounted() {
			//复制功能的控件
			// var clip = new Clipboard('.clip');
			// clip.on('success', function(e){
			// 	Toast({message: '复制成功', duration: 1000});
			// })
			$(".main>a").css("background","deeppink");
	
//			 mui.init({
//			 	swipeBack: false
//			 });
			
		
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
			modals:function(){
				$(".titletab").toggle(100);
			},
			delCookie:function(name){ 
			    var exp = new Date(); 
			    exp.setTime(exp.getTime() - 1); 
			    var cval=this.getCookie(name); 
			    if(cval!=null) 
        		document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
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
			logout:function(){
				var that = this;
				that.delCookie("bigmk_wap_ut");
				that.delCookie("pass_word");
				that.delCookie("user_name");
				that.delCookie("user_id");
				window.location.href="./login.html";
//				pass_word
//				user_id
			}
//			handleSuccess: function(){
//				Toast({message: '复制成功', duration: 3000});
//			},
//			handleError: function(){
//				Toast({message: '复制失败', duration: 3000});
//			}
		},
		computed: {
//			codeArr: function(){
//				var code = this.code;
//				if(typeof code == 'string'){
//					return this.code.split('');
//				}else{
//					return [0,0,0,0,0,0];
//				}
//			}
		}
	}
</script>

<style>


/*@import '../../assets/allcss/sw_style.css';*/
		.mui-content {
    padding-top: 0px !important;
}

      .my_ico{
    	background:url('../../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	top:0.12rem;
    	height: 0.16rem;


    }
</style>
