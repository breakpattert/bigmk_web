<template>
<div class="main">
<n-orderhead></n-orderhead>
<div class="mui-content">
  <div class="sw_ucenter_address">
    <ul class="autohei">
      <li v-for="(item,index) in adderssarr" :key="index">
        <h2>{{item.accept_name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.mobile}}</h2>
        <p>{{item.province}}&nbsp;{{item.city}}&nbsp;{{item.area}}&nbsp;{{item.address}}</p>
        <h3>
          <input name="index" type="checkbox" :checked="item.is_default==1" @change="check(item.is_default,index,item.id)">
          &nbspSet as default 
          <em class="fr" @click="message(item.id)">
          	<a href="#">
          		<i class="iconfont">&#xe642;</i>
          		
          		Delete
          	</a>
          	
          </em>
          <em class="fr"><a href="#" @click="edit(item)"><i class="iconfont">&#xe67f;</i> Edit</a>
          	
          </em> 
        </h3>
      </li>

    </ul>
    <div class="sw_blank4"></div>
    <a href="#" class="sw_ucenter_address_but" @click.top="add()">+    Add new Address</a> </div>

</div>
<n-footer></n-footer>
</div>

</template>

<script>
//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui'//导入mint-ui
	import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
	import { MessageBox } from 'mint-ui';//导入mint-ui
	import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
	import qs from 'qs'
	import querystring from 'querystring'
	import '@/assets/alljs/jquery-3.2.1.min.js';
	import '@/assets/alljs/mobile.js';
//	import '@/assets/alljs/mui.min.js';
//	vue新的组件
import orderhead from '../../components/orderhead.vue';
import footer from '../../components/allfooter.vue';

	export default {
		data() {
			return {
				money: 0,
		
				contract: '',
				query: null,
				adderssarr:'',
				Check:false,
				is_default:'',
				is_index:'',
				
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
//			console.log(query);
			this.addersslist();
			

		},
		mounted() {
			$(".main>a").css("background","deeppink");
		},
		methods: {
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
				modals:function(){
				 $(".titletab").toggle(100);
			},
			message:function(id){
			MessageBox({
  				title: 'Cancel confirm',
  				message: 'Are you sure to cancel?',
  				showCancelButton: true,
  				cancelButtonText:'No',
  				confirmButtonText:'Yes',
			}).then(action => {
 					if(action=='confirm'){
 						this.delddress(id);
 					}
			   });
				
			},
			touchStart:function(ev) {
              ev = ev || event;
              ev.preventDefault();
//             console.log(ev.targetTouches);
//            console.log(ev.changedTouches);
              if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
                this.startX = ev.touches[0].clientX; // 记录开始位置
                }
        },
      	messagess:function(){
				Toast({message: 'success', duration: 1000});
			},
		check:function(checkstates,index,id){
				this.is_index==index;
				this.setdefault(id);
				
		},
		setdefault:function(id){
			  var that = this;
				var smscodeapi = 'api/v1/address/setDefault/'+id;
				var param = qs.stringify({
					address_id:id,
				});
				service.put(api.contract+smscodeapi,param,).then(res => {
				if(res.data.code==200){
					console.log(res.data);
					that.addersslist();

				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
		},
			addersslist:function(){
						var that = this;
//				var token=this.getCookie('bigmk_wap_ut');
//				{
//					 headers: {
//					 	'Authorization': 'Bearer ' + token,
//					 }
//				}
				var smscodeapi = 'api/v1/user/myAddress';
				service.get(api.contract+smscodeapi).then(res => {
				if(res.data.code==200){
						that.adderssarr=res.data.data;
//					that.adderssarr.forEach(function(ts){
//							ts.checked = false;
//				
//					})
						console.log(res.data);
						console.log(that.adderssarr);
				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
				})
			},
			edit:function(item){
//				var useremail=this.getCookie('useremail');
//				console.log(useremail);
   				localStorage.setItem('adderss_info', JSON.stringify(item));
   				window.location.href="./new_address.html?state=2";
   				
			},
			add:function(){
//				var useremail=this.getCookie('useremail');
//				console.log(useremail);
// 				localStorage.setItem('adderss_info', JSON.stringify(''));
   				window.location.href="./aadnew_address.html";
   				
			},
			delddress:function(id){
				 var that = this;
				var smscodeapi = 'api/v1/address/delete/'+id;
				var param = qs.stringify({
					address_id:id,
				});
				service.delete(api.contract+smscodeapi,param,).then(res => {
				if(res.data.code==200){
//					console.log(res.data);
					that.addersslist();

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
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';
	.mint-msgbox-input>input{
		width:90% !important;
		height: 0.06rem !important;
    margin-bottom: 0.15rem !important;
    border:0.01rem solid rgba(0, 0, 0, 0.38) !important;
	}
	.mint-msgbox-wrapper .mint-msgbox{
		width:62%;
	}
	/*.mint-msgbox .mint-msgbox-header{
		display: none;
	}*/
	.mint-msgbox .mint-msgbox-input{
		padding-top:0;
		height: 0.3rem;
	}
	.mint-msgbox .mint-msgbox-message {
    color: #333;
    font-weight: 700;
    font-size: .14rem;

    line-height: .36rem;
}
.mint-msgbox-wrapper .mint-msgbox{
	border-radius: 0.14rem;
}
.mint-msgbox .mint-msgbox-cancel{
	color:#ff4500;
}
.mint-msgbox .mint-msgbox-confirm{
	color:#ff4500;
}
 .mint-toast-text {
    font-size: 0.16rem !important;

    height: 0.16rem !important;
    line-height: 0.14rem !important;

}
.mint-msgbox .mint-msgbox-message{
	font-weight: 400 !important;
	
}
html{
	    background-color: #efeff4 !important;
}
.mui-content{
	position: relative;
	padding-top:0!important;
}

.mui-button-row #regBtn{
	width:100%;
	padding: 6px 0px;
	background: #ff4500;
	border-color:#ff4500;
}



</style>