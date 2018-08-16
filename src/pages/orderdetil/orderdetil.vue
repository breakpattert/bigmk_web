<template>
	<div class="main">
<n-orderhead></n-orderhead>
<div class="mui-content">
  <div class="sw_Order_Details">
    <div class="sw_Order_NO autohei">
    	Order No.: {{d_list.order_no}} <a href="#">{{d_list.order_status_text}}</a>
    	
    </div>
    <div v-if="d_list.cancel_reason" style="line-height: 0.28rem;padding-left:0.12rem;background:#fff;">
    	cancel_reason:{{d_list.cancel_reason}}
    </div>
    <div class="sw_Order_add autohei">
      <div class="fl"><i class="iconfont icon-address">&#xe65a;</i></div>
      <h3>{{d_list.accept_name}}&nbsp;{{d_list.mobile}}</h3>
      <p>{{d_list.province_str}}, {{d_list.city_str}},{{d_list.area_str}},{{d_list.address}}</p>
    </div>
    <div class="sw_Order_Details_a">
      <ul class="sw_Order_Details_ul">
        <li><a>
          <h2 class=" autohei">
          	<!--images/shop_gray.png-->
            <div class="fl"><img src="../../assets/images/list_icon_shop.png" class="sw_ucenter_order_list_ul_img"/>{{d_list.true_name}} <span class=" fr my_ico"></span></div>
          </h2>
          <div class="sw_Order_Details_b autohei" v-for="(item,index) in d_list.order_goods" :key="index" @click="opendetil(item)">

            <div class="fl"><img :src="item.img"/></div>
            <p>{{item.goods_array.name}}</p>
            <div style="height:0.28rem;line-height: 0.28rem;"><span class="value_name" v-for="(item2,index2) in item.goods_array.value">{{item2.name}}:{{item2.value}}</span></div>
           	<h5>₱{{item.real_price}} <em>Qty:{{item.goods_nums}}</em></h5>
          </div>
          </a> </li>

      </ul>
    </div>
    <div class="sw_Order_Details_but autohei"> 
    <!--	待发货-->
    	<span v-if="button_1==1&&button_2==2">
    		<a href="#" @click="message()">Cancel Order</a>
    		<a href="#" @click="remindership()">Reminder Slip</a>
    	</span>
    	<span v-if="button_1==2">
    		<a href="#" @click="Write()">xxxxx</a>
    	</span>
    	<!--确认收货-->
    	<span v-if="button_1==4">
    		<a href="#" @click="message()">Cancel Order</a>
    		
    	</span>
    <!--	待收货	-->
	<!--	<span v-if="button_1==6"><a href="#" @click="message()">Cancel Order</a></span>-->
		 <!--<span><a href="#" @click="message()">Cancel Order</a></span>-->
    <!--交易成功-->
    	<span style="width:100%;" v-if="button_1==6">
    		<a href="#" @click="Write()">Write a Rewiew</a>
    		<a href="#" @click="Write()">Buy Algin</a>
    	</span>
    <!--交易成功且评论过-->
    
    	<!--<span style="width:100%;">
    		<a href="#" @click="message()">Buy Algin</a>
    	</span>-->
    	<!--<span><a href="#" @click="handleSuccess()">Reminder slip</a></span>-->
    	<!--<span><a href="#">Prompt shipment</a></span>
    	<span><a href="#">Application returns</a></span> -->
    </div>
    <div class="sw_Order_Details_Pay">
      <ul class="autohei">
        <li class="autohei"> Payment Method <span>{{d_list.payment}}</span> </li>
        <li class="autohei"> Shipping Method <span>{{d_list.delivery}}</span> </li>
        <li class="autohei"> Payment instructions <span>{{d_list.paynote}}</span> </li>
      </ul>
    </div>
    <div class="sw_Order_Details_Amount">
      <ul class="autohei">
        <li class="autohei"> Amount <span>₱{{d_list.real_amount}}</span> </li>
        
        <li class="autohei">Product price increase or reduce <span>₱{{d_list.discount}}</span> </li>
        <li class="autohei">Shipping Fee<span>₱{{d_list.real_freight}}</span> </li>
      </ul>
    </div>
    <div class="sw_Order_Details_Paid">
      <h3>Actually Paid:　<span> ₱{{d_list.order_amount}}</span></h3>
      <h4>Create Time: {{d_list.create_time}}</h4>
    </div>
  </div>
  <div class="sw_blank"></div>
  <div class="sw_Order_Details_bot">
    <h3 class="chat_h3" v-if="button_1==1&&button_2==4">
    	<!--<a href="#" @click="Confirm()">Confirm Receipt</a>-->
    	<a href="#"><span class="mui-icon mui-icon-weixin"></span>Chat Now</a>
    	<a href="#" style="background:#ff4500;color:#fff;" @click="Confirm()"><span class="mui-icon mui-icon-weixin"></span>Confirm Receipt</a>
    </h3>
     <h3 class="chat_h3" v-else>
    	<a href="#" style="width:100%!important;"><span class="mui-icon mui-icon-weixin"></span>Chat Now</a>
    	
    </h3>
   <!-- <h4><a href="#">Buy Again</a></h4>-->
  </div>
</div>
	</div>
</template>

<script>
	
//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui'
	import { MessageBox } from 'mint-ui';//导入mint-ui
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
				order_id:'',
				d_list:'',
				button_1:'',
				button_2:''
				
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
			this.order_id = query.order_id;
			this.detillist();
		},
		mounted() {
		
			
		
		},
		methods: {
			opendetil(item){
				if(item.promo=='time'){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}
					
				}else if(!item.promo){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo=";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo=";
					}
					
				}else if(item.promo=='quota'){
					if(item.goods_id){
						window.location.href="./products.html?id="+item.goods_id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}else{
						window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
					}
					
				}else{
					
				}
			},
            message:function(){
				MessageBox.prompt('Cancel Order',{cancelButtonText:'cancel',confirmButtonText:'ok'}).then(action  => {
					if(action.action=='confirm'&&action.value!==null){
						this.cancelorder(action.value);
					}else if(action.action=='confirm'&&action.value==null){
						Toast({message: 'Reason for the cancellation of input', duration: 1000});
					}
					else{
					  return;
					}
				});
				
			},
			Write:function(){
				window.location.href="./write_review.html";
			},
			handleSuccess: function(){
				Toast({message: 'Success', duration: 1000});
			},
			modals:function(){
				 $(".titletab").toggle(100);
			},
			detillist:function(){
				var self = this;
				var url = 'api/v1/user/orderDetail/'+self.order_id;
				var param = qs.stringify({
					
				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					self.d_list=res.data.data;
				self.button_1=self.d_list.buttons[0];
				self.button_2=self.d_list.buttons[1];
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
			},
//			取消订单
			cancelorder:function(value){
				var self = this;
				var url = 'api/v1/user/cancelOrder/'+self.d_list.id;
				var param = qs.stringify({
					order_id:self.d_list.id,
					cancel_reason:value
				});
				service.put(api.contract+url,param).then(res => {
				if(res.data.code==200){
					self.detillist();
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
			},
			//		提醒发货
		remindership:function(){
				var self = this;
				var url = 'api/v1/user/reminderSlip/'+self.d_list.id;
				var param = qs.stringify({
					order_id:self.d_list.id
				});
				service.put(api.contract+url,param).then(res => {
				if(res.data.code==200){
					Toast({message: res.data.msg, duration: 1200});
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		},
		//确认收货
		Confirm:function(){
				var that= this;
				MessageBox({
  				title: 'Confirm Receipt',
  				message: 'Please confirm that you really receive the goods, If yes, We will determine this transaction success',
  				showCancelButton: true,
  				cancelButtonText:'No',
  				confirmButtonText:'Yes',
				}).then(action => {
					if(action=='cancel'){
						console.log(999);
					}else if(action=='confirm'){
						that.confirmorder(that.d_list.id)
							MessageBox({
			  				title: 'Order transaction completed',
			  				message: 'Go to write a review?',
			  				showCancelButton: true,
			  				cancelButtonText:'No',
			  				confirmButtonText:'Yes',
							}).then(action => {
								if(action=='cancel'){
									
								}else if(action=='confirm'){
									console.log(555);
								}else{
									return;
								}
						
							});
					}else{
						return;
					}
			
				});
		},
		confirmorder:function(id){
				var self = this;
				var url = 'api/v1/user/confirmReceipt/'+id;
				var param = qs.stringify({
					order_id:id
				});
				service.put(api.contract+url,param).then(res => {
				if(res.data.code==200){
					let order_no_id ={
						order_no:res.data.data.order_no,
						
					}
					
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
	.mui-bar-nav~.mui-content {
    padding-top: 0px !important;
}
	a{
		text-decoration: none !important;
	}
	.sw_Order_Details_bot .chat_h3{
		width:100%;
	}
	.mint-msgbox-input>input{
		width:90% !important;
		height: 0.06rem !important;
    margin-bottom: 0.15rem !important;
    border:0.01rem solid rgba(0, 0, 0, 0.38) !important;
	}
	.mint-msgbox-wrapper .mint-msgbox{
		width:62%;
	}
	.mint-msgbox .mint-msgbox-header{
		display: none;
	}
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
.value_name{
	 display: inline-block;
    line-height: 0.28rem;
    padding-left: 0.12rem;
    font-size: 0.1rem;
    color: #999;
    height:0.28rem;
}
.sw_Order_Details_b h5 em{
	font-size:0.1rem;
}
.main .mui-bar-nav{
	position: fixed !important;
}
.sw_Order_Details_Pay ul li span{
	font-size: 0.13rem;
}
.sw_Order_Details_bot h3{
	    background: none !important;
	
}
.sw_Order_Details_bot h3>a{

	background:#20b2aa;
	
	 float: left;
}
.sw_Order_Details_bot h3>a{
	width:50%;
}
.mui-content .sw_Order_Details_but span{
	width:100%;
	
}
.mui-content .sw_Order_Details_but span a{
	float: left;
	    width: 44%;
    margin: 0 0.1rem;
}
</style>