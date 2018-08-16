<template>
	<div class="main">
	<n-orderhead></n-orderhead>

<div class="mui-content">
  <div class="sw_ucenter_profile_a">
    <div align="center"><img src="../../assets/images/account_image.png" class="sw_ucenter_img1"/></div>
    <div class="sw_ucenter_profile_a1"><a href="javascript:void(0);"><img :src="imgHost+userinfo.head_ico" :onerror="logo"></a></div>
  </div>
  <div class="sw_ucenter_profile">
    <ul class="autohei">
      <li><span>Username</span>
        <input type="text" class="mui-input-clear sw_ucenter_profile_iuput" :placeholder="userarry.username">
      </li>
      <li><span>Email</span>
        <input type="text" class="mui-input-clear sw_ucenter_profile_iuput" :placeholder="userarry.email">
      </li>
      <li><span>MKchat Id</span>
        <input type="text" class="mui-input-clear sw_ucenter_profile_iuput" :placeholder="userarry.useruin">
      </li>
    </ul>
  </div>
  <div class="sw_ucenter_profile_all">
    <div class="mui-content">
      <div class="mui-content-padded">
        <div class="sw_ucenter_profile_b" id='showUserPicker' @click="openpicker()"> <span>Gender</span> <span class="fr my_ico"></span><em  id='userResult'> {{Gender==null?'GenderSet ':Gender}}</em> </div>
      </div>
    </div>
    <div class="mui-content">
      <div class="mui-content-padded">
        <div class="sw_ucenter_profile_b sw_ucenter_profile_date" id='demo2' @click="openbirthday()"> <span>Birthday</span> <span class="fr my_ico"></span>
        	<em id='result'> 
        		<!--{{item.discount?item.discount:"0"}}-->
        		{{birthday==null?'Set birthday':birthday}}
			</em> 
        </div>
      </div>
    </div>
  </div>
  <div class="sw_ucenter_profile">
    <ul class="autohei">
      <li><span>Cellphone</span>
        <input type="text" class="mui-input-clear sw_ucenter_profile_iuput" placeholder="such:09565198444" v-model="userphone">
      </li>
    </ul>
  </div>
  <div align="center"><a href="#" class="sw_ucenter_newaddress_but" @click.stop="edit_user_info()">Save</a></div>
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
 <mt-datetime-picker
      type="date"
      ref="picker"
       v-model="pickerVisible"
      year-format="{value}"
      month-format="{value}"
      date-format="{value}"
      :startDate="startDate"
       cancelText="Cancel"
  	   confirmText="Submit"
  	   @confirm="handleConfirm"
      >
   </mt-datetime-picker>
   <div class="pick_box" v-if="pickershow">
   	<div class="button_pick"><span @click="pinkshows()">Cancel</span><span @click="pinksub()">Submit</span></div>
    <mt-picker :slots="slots" @change="onValuesChange">
    	
    </mt-picker>
    </div>
    <div class="motai" v-if="showmotai" @click="shows()"></div>
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
	import orderhead from '../../components/orderhead.vue';
	import footer from '../../components/allfooter.vue';
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				logo: 'this.src="' + require('../../assets/images/user_ico.gif') + '"',
				imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
				money: 0,
				contract: '',
				query: null,
				showcopy:false,
				isActive:false,
				pickerVisible:'',
				userarry:'',
				userphone:'',
				birthday:'',
				Gendernow:'',
				Gender:'',
				Gendercode:'',
				pickershow:false,
				showmotai:false,
				ucenterinfos:'',
				userinfo:'',
				startDate: new Date('1990-01-01'),
				 slots: [
        {
          flex: 1,
          values: ['Mate', 'Female'],
          className: 'slot1',
          textAlign: 'center'
        }
      ],


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
			console.log(query);
//			console.log(new Date())
			
		},
		mounted() {
	
			$(".main>a").css("background","deeppink");
				let get_user_info = localStorage.getItem('user_info');
				this.userarry = JSON.parse(get_user_info)
				console.log(this.userarry ,9);
				this.userphone=this.userarry.mobile;
				this.birthday = this.userarry.birthday;
				this.Gender =this.userarry.sex==1?'Mate':'Female';
			
		
		},
		methods: {
			onValuesChange(picker, values) {
      			if (values[0] > values[1]) {
       			picker.setSlotValue(1, values[0]);
      			}
      			this.Gendernow=values[0];
      			if(values[0]=='Mate'){
      				this.Gendercode='1';
      				
      			}else{
      				this.Gendercode='2';
      			}

    		},
    		shows(){
    			this.pickershow=false;
    			this.showmotai=false;
    		},
    		pinkshows(){
    			this.pickershow=false;
    			this.showmotai=false;
    		},
    		openpicker(){
     		this.pickershow=!this.pickershow;
     		this.showmotai=true;
     		},
     		pinksub(){
     			this.Gender=this.Gendernow;
     			this.pickershow=false;
    			this.showmotai=false;
     		},
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
			 getdate(data) {
				var date = data;
				var mon = date.getMonth()  + 1;         //getMonth()返回的是0-11，则需要加1
				if(mon <=9){                                     //如果小于9的话，则需要加上0
					mon = "0" + mon;
					}
				var day = date.getDate();                   //getdate()返回的是1-31，则不需要加1
				if(day <=9){                                     //如果小于9的话，则需要加上0
					day = "0" + day;
					}
				this.birthday = date.getFullYear() + "-" + mon + "-" +  day;
				
   			},
			handleConfirm (data) {
				this.getdate(data);
      		
    		},
			openbirthday() {
        	this.$refs.picker.open();
     		},
     		edit_user_info(){
     			var that = this;
				var token=that.getCookie('bigmk_wap_ut');
				var smscodeapi = 'api/v1/user/userInfo';
				var param = qs.stringify({mobile:that.userphone,sex:that.Gendercode,birthday:that.birthday});
//				var header=	headers:{'Authorization': 'Bearer ' + token},
				service.put(api.contract+smscodeapi,param,).then(res => {
				if(res.data.code==200){
					that.ucenterinfo();
//					that.ucenterinfos=res.data.data;
//					that.userinfo = that.ucenterinfos.user_info;
//					localStorage.setItem('user_info', JSON.stringify(that.userinfo));
//					 let get_user_info = localStorage.getItem('user_info');
//					  get_user_info = JSON.parse(get_user_info)
//					   console.log(get_user_info,99);
//					console.log(that.ucenterinfos);
				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
     	},
     	ucenterinfo:function(){
				var that = this;
		
				var smscodeapi = 'api/v1/user/userInfo';
				service.get(api.contract+smscodeapi).then(res => {
				if(res.data.code==200){
					that.ucenterinfos=res.data.data;
					that.userinfo = that.ucenterinfos.user_info;
					localStorage.setItem('user_info', JSON.stringify(that.userinfo));
//					 let get_user_info = localStorage.getItem('user_info');
//					  get_user_info = JSON.parse(get_user_info)
//					   console.log(get_user_info,99);
//					console.log(that.ucenterinfos);
					Toast({message: res.data.msg, duration: 1000});
				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
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
.sw_ucenter_profile_all .mui-content{
	padding-bottom:0;
}
.mui-bar-nav~.mui-content{
	padding-top:0 !important;
}
        .my_ico{
    	background:url('../../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	top:0.13rem !important;
    	height: 0.16rem;


    }
.autohei>li>input{
	border:0 !important;
}
.picker-item.picker-selected{
	color:#ff4500;
}
.pick_box{
	position: relative;
}
.pick_box .picker{
	overflow: hidden;
    background: #fff;
    padding-top:0.3rem;
    line-height:0.3rem;
    position: fixed;
    bottom: 0px;
    right: 0;
    width: 100%;
    z-index: 10;
}
.motai{
	background:#00000057;
	position: absolute;
	top:0;
	width:100%;
	height:100%;
}
.button_pick{
	z-index: 20;
    position: absolute;
    top: -1.82rem;
    width: 100%;
}
  .button_pick>span{
  	 width: 50%;
    display: inline-block;
    float: left;
    text-align: center;
  }
</style>
