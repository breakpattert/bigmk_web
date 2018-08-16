<template>
	<div class="main">
<header class="mui-bar mui-bar-nav">
      <div class="fl scan_code">
      	<a  href="javascript:history.back(-1)">
      		<span class="">
      		<img src="../../assets/images/back_gray.png" alt="" />
      	</span>
      	</a>
      </div>
  <div class="fl sw_search">
    <h1 class="mui-title">Open a Shop</h1>
  </div>
  
</header>
<div class="mui-content">
  <div class="sw_login_con sw_Email_up">
    <form action="" method="get">
    	<p>Usersname &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="text" class="mui-input-password sw_password" placeholder="Seller Login name">
      </div>
      <p>Password&nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="password" class="mui-input-password sw_password" placeholder="Login password">
      </div>
      <p>Confirm password  &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="password" class="mui-input-password sw_password" placeholder="Repeat your login password">
      </div>
      <p>Your shop full true name &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="text" class="mui-input-password sw_password" placeholder="Shop name only allowed English character and spaces character">
      </div>
      <p>Shop Manager:  &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="text" class="mui-input-password sw_password" placeholder="Who's managing your store?">
      </div>
       <p>Manager Cellphone NO.  &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="tel" class="mui-input-password sw_password" placeholder="">
      </div>
        <p>Shop Telephone   &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="tel" class="mui-input-password sw_password" placeholder="">
      </div>
      
           <p> E-mail   &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="email" class="mui-input-password sw_password" placeholder="Such as: sale@bigmk.ph">
      </div>
      <p> Area   &nbsp;*</p>
      <div class="optons_two">
      	<li @click="opitionset2()">{{valueall2}}</li>
      	<li>select</li>
      	<li>select</li>
      </div>
      
       <p> Details address    &nbsp;*</p>
      <div class="mui-input-row mui-password ">
        <input type="text" class="mui-input-password sw_password" placeholder="">
      </div>
      <p> Where did you find us?    &nbsp;*</p>
       <div class="mui-input-row mui-password" @click="opitionset()">
        <input type="text" class="mui-input-password sw_password" placeholder="" v-model="valueall">
      </div>
      <!--<div class="mui-button-row">
        <input name="" type="submit" class="sw_submit_but" value="Submit"  id="regBtn">
      </div>-->
    </form>
    <div class="optons_tree" v-if="vivst">
    	<li v-for="(item,index) in mylist" @click="setitem(item)">{{item}}</li>
    </div>
     <div class="optons_tree2" v-if="vivst2">
    	<li v-for="(item,index) in mylist" @click="setitem2(item)">{{item}}</li>
    </div>
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
//	import orderhead from '../../components/orderhead.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				code: '000000',
				money: 0,
				commonContract: [],
				contract: '',
				query: null,
				modal:false,
				 slots: [
        			{
          		flex: 1,
          		values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          		className: 'slot1',
          		textAlign: 'right',
          		
        		}],
        		valueall:'On facebook',
        		vivst:false,
        		vivst2:false,
        		valueall2:'select',
        		mylist:['333',"444","555","666"],
//      		enterfalse:false

			}
		},
		components:{
//   'n-orderhead':orderhead,
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
			opitionset:function(){
				this.vivst = !this.vivst;
			},
			opitionset2:function(){
				this.vivst2 = !this.vivst2;
			},
			setitem:function(item){
				console.log(item);
				this.valueall = item;
				this.vivst = false;
			},
			setitem2:function(item){
				console.log(item);
				this.valueall2 = item;
				this.vivst2 = false;
			},
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			modals:function(){
				 $(".titletab").toggle(100);
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
html{
	    background-color: #f3f3f3 !important;
}
/*.mui-content{
	position: relative;
	padding-top: 0 !important;
}

.mui-button-row #regBtn{
	width:100%;
	padding: 6px 0px;
	background: #ff4500;
	border-color:#ff4500;
}*/

  .scan_code>a>span>img{
  	margin-top:0.06rem;
  	width: 0.3rem;
  	height:0.3rem;
  }
.sw_login_con>form>p{
	color:#333333db;
	line-height: 0.2rem;
	    padding-left:0.02rem;
}
.optons_tree2{
	  	height:2rem;
   	border:1px solid #e09e31;
   	    position: absolute;
    width: 92%;
    padding: 0;
    bottom: 1rem;
    margin: 0;
    background: #fff;
}
 .optons_tree2>li{
   	line-height:0.32rem;
   	text-align: left;
   	padding-left: 0.1rem;
   	
   	font-size:0.132rem;
   	background:#e2e2e2;
   	margin:0.1rem 0;
   	
   }
  .optons_tree2 li:hover{
   	background:#00bfff57;
   	color:#fff;
   }
   .optons_tree{
   	height:2rem;
   	border:1px solid #e09e31;
   	    position: absolute;
    width: 92%;
    padding: 0;
    bottom: 0.55rem;
    margin: 0;
    background: #fff;
    
   	
   }
   .optons_tree>li{
   	line-height:0.32rem;
   	text-align: left;
   	padding-left: 0.1rem;
   	
   	font-size:0.132rem;
   	background:#e2e2e2;
   	margin:0.1rem 0;
   	
   }
  .optons_tree li:hover{
   	background:#00bfff57;
   	color:#fff;
   }

    .optons_two{
    height:2rem;
 /*  	border:1px solid #e09e31;*/
	background:#fff;
    }
    .optons_two>li{
    line-height:0.28rem;
    text-align: left;
    padding-left: 0.1rem;
    margin:0.1rem 0;
    font-size:0.12rem;
    }
</style>