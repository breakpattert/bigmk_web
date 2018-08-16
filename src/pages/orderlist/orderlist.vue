<template>
	<div class="main">

	<n-orderhead></n-orderhead>
	<div class="m_header" v-if="show_text">
			<p style="padding:padding: 0px 5% 4px 14px;color: #ff7800;position: relative;">Due to higher volume of orders per product, there might be a slight delay on the delivery.</p>
			<span @click="show_p()"><img src="../../assets/images/pop_icon_close_default.png" alt="" /></span>
	</div>
<div class="mui-content">
          <div id="slider" class="mui-slider mui-fullscreen sw_ucenter_order_list">
    		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
              <div class="mui-scroll"> 
              	<a class="mui-control-item" :class="{'mui-active':showsall}" href="#item1mobile"> All Orders </a> 
              	<a class="mui-control-item" :class="{'mui-active':showsund}" href="#item2mobile"> Undelivered </a> 
              	<a class="mui-control-item" :class="{'mui-active':showsits}" href="#item3mobile"> In transit  </a> 
              	<a class="mui-control-item" :class="{'mui-active':showscpu}" href="#item4mobile"> Customer Pick-up </a>
              	<a class="mui-control-item" :class="{'mui-active':compshows}" href="#item5mobile"> Completed </a>
              
              </div>
            </div>
    <div class="mui-slider-group">
				       <div id="item1mobile" class="mui-slider-item mui-control-content" :class="{'mui-active':showsall}">
				        <div id="scroll1" class="mui-scroll-wrapper">
				           	<div class="mui-scroll sw_ucenter_order_list_a">
				            	<ul class="sw_ucenter_order_list_ul">
							            <li v-for="(item,index) in orderlist" :key="index">
							                <h2 class="autohei" @click="openorderdetil(item.id)">
							                    <div class="fl">
							                    	<a href="#">
							                    	<img src="../../assets/images/list_icon_shop.png" class="sw_ucenter_order_list_ul_img"/>
							                    	{{item.order_no}}<span class=" fr my_ico"></span>
							                    	</a>
							                    </div>
							                    <!--@click="message()"-->
							                     <a href="#"  class="fr">{{item.order_status_text}}</a> 
							                </h2>
							                <div class="sw_ucenter_order_list_b autohei" v-for="(item2,index2) in item.order_goods" :key="index2">
							                    <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
							                    <p>{{item2.goods_array.name}}</p>
							                        <div style="height:0.28rem;"><span class="value_name" v-for="(item3,index3) in item2.goods_array.value">{{item3.name}}:{{item3.value}}</span></div>
							                    <h5>₱{{item2.real_price}}<em>Qty:{{item2.goods_nums}}</em></h5>
							                </div>
							                <div class="chats">
							                	<a href="#" class="chat_w"><span></span>Chat</a>
							            
							                	<a href="#" class="chat_slip" v-if="item.buttons==6" @click="openwrite(item)">Write a Rewiew</a><!--点击后就变为空-->
							                	<a href="#" class="chat_slip" v-if="item.buttons==2" @click="remindership(item.id)">Reminder Slip</a> <!--提醒发货-->
							                	<a href="#" class="chat_slip" v-if="item.buttons==4" @click="message(item.id)">Confirm Receipt</a><!--确认收货-->
							                </div>
							            </li>
							           <!--<li v-for="item in orderlist">
						                <h2 class=" autohei">
						                          <div class="fl"><img src="../../assets/images/list_icon_shop.png" class="sw_ucenter_order_list_ul_img"/>2Mars Kingdom <span class="mui-icon mui-icon-arrowright"></span></div>
						                          <a href="" class="fr">Cancelled</a> </h2>
						                <div class="sw_ucenter_order_list_b autohei">
						                          <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
						                          <p>Nary Couple Watch 6031 with Random Design  Couple ring</p>
						                          <h4>variation: 84XL Black</h4>
						                          <h5>₱599.00 <em>Qty: 1</em></h5>
						                        </div>
						              </li>-->
					        
				                    </ul>
				          		</div>
				          </div>
				      </div>
		              <div id="item2mobile" class="mui-slider-item mui-control-content" :class="{'mui-active':showsund}">
		       			 <div id="scroll1" class="mui-scroll-wrapper">
		                  <div class="mui-scroll sw_ucenter_order_list_a">
						        <ul class="sw_ucenter_order_list_ul">
						               <li v-for="(item,index) in orderlist2" :key="index">
							                <h2 class=" autohei" @click="openorderdetil(item.id)">
							                    <div class="fl">
							                    	<a href="#">
							                    	<img src="../../assets/images/list_icon_shop.png" class="sw_ucenter_order_list_ul_img"/>
							                    	{{item.order_no}}<span class=" fr my_ico"></span>
							                    	</a>
							                    </div>
							                     <a href="#" @click="message_success()" class="fr">{{item.order_status_text}}</a> 
							                </h2>
							                <div class="sw_ucenter_order_list_b autohei" v-for="(item2,index2) in item.order_goods" :key="index2">
							                    <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
							                    <p>{{item2.goods_array.name}}</p>
							                     <div style="height:0.28rem;"><span class="value_name" v-for="(item3,index3) in item2.goods_array.value">{{item3.name}}:{{item3.value}}</span></div>
							                    <h5>₱{{item2.real_price}}<em>Qty:{{item2.goods_nums}}</em></h5>
							                </div>
							                <div class="chats">
							                	<a href="#" class="chat_w"><span></span>Chat</a>
							                	
							                	<a href="#" class="chat_slip" v-if="item.buttons==6" @click="openwrite()">Write a Rewiew</a><!--点击后就变为空-->
							                	<a href="#" class="chat_slip" v-if="item.buttons==2" @click="remindership(item.id)">Reminder Slip</a> <!--提醒发货-->
							                	<a href="#" class="chat_slip" v-if="item.buttons==4" @click="message(item.id)">Confirm Receipt</a><!--确认收货-->
							                </div>
							            </li>
						            </ul>
		          				</div>
		               		</div>
		     			</div>
			              <div id="item3mobile" class="mui-slider-item mui-control-content" :class="{'mui-active':showsits}">
			        		<div id="scroll1" class="mui-scroll-wrapper">
					            <div class="mui-scroll sw_ucenter_order_list_a">
							            <ul class="sw_ucenter_order_list_ul">
							              <li v-for="(item,index) in orderlist3" :key="index">
							                <h2 class=" autohei" @click="openorderdetil(item.id)">
							                    <div class="fl">
							                    	<a href="#">
							                    	<img src="../../assets/images/list_icon_shop.png" class="sw_ucenter_order_list_ul_img"/>
							                    	{{item.order_no}}<span class=" fr my_ico"></span>
							                    	</a>
							                    </div>
							                     <a href="#" @click="message_success()" class="fr">{{item.order_status_text}}</a> 
							                </h2>
							                <div class="sw_ucenter_order_list_b autohei" v-for="(item2,index2) in item.order_goods" :key="index2">
							                    <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
							                    <p>{{item2.goods_array.name}}</p>
							                      <div style="height:0.28rem;"><span class="value_name" v-for="(item3,index3) in item2.goods_array.value">{{item3.name}}:{{item3.value}}</span></div>
							                    <h5>₱{{item2.real_price}}<em>Qty:{{item2.goods_nums}}</em></h5>
							                </div>
							                <div class="chats">
							                	<a href="#" class="chat_w"><span></span>Chat</a>
							                	
							                	<a href="#" class="chat_slip" v-if="item.buttons==6" @click="openwrite()">Write a Rewiew</a><!--点击后就变为空-->
							                	<a href="#" class="chat_slip" v-if="item.buttons==2" @click="remindership(item.id)">Reminder Slip</a> <!--提醒发货-->
							                	<a href="#" class="chat_slip" v-if="item.buttons==4" @click="message(item.id)">Confirm Receipt</a><!--确认收货-->
							                </div>
							            	</li>
							             </ul>
					          		</div>
			                	</div>
			      			</div>
				              <div id="item4mobile" class="mui-slider-item mui-control-content" :class="{'mui-active':showscpu}">
						        <div id="scroll1" class="mui-scroll-wrapper">
						            <div class="mui-scroll sw_ucenter_order_list_a">
								            <ul class="sw_ucenter_order_list_ul">
								              	 <li v-for="(item,index) in orderlist4" :key="index">
									                <h2 class=" autohei" @click="openorderdetil(item.id)">
									                    <div class="fl">
									                    	<a href="#">
									                    	<img src="../../assets/images/list_icon_shop.png" class="sw_ucenter_order_list_ul_img"/>
									                    	{{item.order_no}}<span class=" fr my_ico"></span>
									                    	</a>
									                    </div>
									                     <a href="#" @click="message_success()" class="fr">{{item.order_status_text}}</a> 
									                </h2>
									                <div class="sw_ucenter_order_list_b autohei" v-for="(item2,index2) in item.order_goods" :key="index2">
									                    <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
									                    <p>{{item2.goods_array.name}}</p>
									                     <div style="height:0.28rem;"><span class="value_name" v-for="(item3,index3) in item2.goods_array.value">{{item3.name}}:{{item3.value}}</span></div>
									                    <h5>₱{{item2.real_price}}<em>Qty:{{item2.goods_nums}}</em></h5>
									                </div>
									                <div class="chats">
									                	<a href="#" class="chat_w"><span></span>Chat</a>
									                	
									                	<a href="#" class="chat_slip" v-if="item.buttons==6" @click="openwrite()">Write a Rewiew</a><!--点击后就变为空-->
									                	<a href="#" class="chat_slip" v-if="item.buttons==2" @click="remindership(item.id)">Reminder Slip</a> <!--提醒发货-->
									                	<a href="#" class="chat_slip" v-if="item.buttons==4" @click="message(item.id)">Confirm Receipt</a><!--确认收货-->
									                </div>
									            </li>
								            </ul>
						          </div>
						        </div>
				      </div>
			              <div id="item5mobile" class="mui-slider-item mui-control-content">
					        <div id="scroll1" class="mui-scroll-wrapper">
					            <div class="mui-scroll sw_ucenter_order_list_a">
					            <ul class="sw_ucenter_order_list_ul">
					             	 <li v-for="(item,index) in orderlist5" :key="index">
									                <h2 class=" autohei" @click="openorderdetil(item.id)">
									                    <div class="fl">
									                    	<a href="#">
									                    	<img src="../../assets/images/list_icon_shop.png" class="sw_ucenter_order_list_ul_img"/>
									                    	{{item.order_no}}<span class=" fr my_ico"></span>
									                    	</a>
									                    </div>
									                     <a href="#" @click="message_success()" class="fr">{{item.order_status_text}}</a> 
									                </h2>
									                <div class="sw_ucenter_order_list_b autohei" v-for="(item2,index2) in item.order_goods" :key="index2">
									                    <div class="fl"><img src="../../assets/images/hot_good2.jpg"/></div>
									                    <p>{{item2.goods_array.name}}</p>
									                    <div style="height:0.28rem;"><span class="value_name" v-for="(item3,index3) in item2.goods_array.value">{{item3.name}}:{{item3.value}}</span></div>
									                    <h5>₱{{item2.real_price}}<em>Qty:{{item2.goods_nums}}</em></h5>
									                </div>
									                <div class="chats">
									                	<a href="#" class="chat_w"><span></span>Chat</a>
									                	
									                	<a href="#" class="chat_slip" v-if="item.buttons==5" @click="openwrite(item)">Write a Rewiew</a><!--点击后就变为空-->
									                	<a href="#" class="chat_slip" v-if="item.buttons==2" @click="remindership(item.id)">Reminder Slip</a> <!--提醒发货-->
									                	<a href="#" class="chat_slip" v-if="item.buttons==4" @click="message(item.id)">Confirm Receipt</a><!--确认收货-->
									                </div>
										</li> 	
					            </ul>
					          </div>
					        </div>
			      		</div>
		
	
			    </div>
  			</div>
  			
  		
        </div>
        <n-footer></n-footer>
	</div>
</template>

<script>

//	import env from '@/utils/env.js'//这个js是不同的环境访问到不同的api
	import { Toast } from 'mint-ui'//导入mint-ui
		import { MessageBox } from 'mint-ui';
		import { Indicator } from 'mint-ui';
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
				tapstyle:0,
				contract: '',
				query: null,
				show_text:true,
				orderlist:'',
				orderlist2:[],
				orderlist3:[],
				orderlist4:[],
				orderlist5:[],
				showsall:false,
				showsits:false,
				showsund:false,
				showscpu:false,
				compshows:false,
				mai:[{
				id:0
				
			},{
				id:1
			}],
			goodslist:[]
				
				
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
//			its,udl,pku,all
			var query = querystring.parse(search);
			var types = query.type;
//			if(this.tapstyle==1){
				
//			}
			this.order_list();
			this.order_list2();
			this.order_list3();
			this.order_list4();
			this.order_list5();
			if(types=='all'){
				this.showsall=true;
				this.watchscroll();
			}else if(types=='its'){
				this.showsits=true;
			}
			else if(types=='udl'){
				this.showsund=true;
			}else if(types=='pku'){
				this.showscpu=true;
			}else if(types=='coms'){
				this.compshows=true;
			}
//			   		let that=this;
     	


		},
		mounted() {
	
//			
// 			  $(".mui-scroll a").on("tap",function(){
//				this.tapstyle = $(this).index();   
//      		console.log(this.tapstyle);
//			});
            // 设置一个开关来避免重负请求数据  
       
  
//   		 $(".mui-scroll a").on("tap",function(){
//				this.tapstyle = $(this).index();   
//      		console.log(that.tapstyle);
//      		       if(that.tapstyle==0){
//          	that.order_list();
//          	that.watchscroll()
//          	console.log(444);
//          }else{
//          	console.log(555);
//          }
//			});
     
		
//			console.log($(".mui-scroll").children('a').index())

  
			
			     // 注册scroll事件并监听  
			      	

		},
		methods: {
			watchscroll(){
				let sw = true;
            	let that=this;
            	var page = 1;
			 window.onscroll = function() {
		
                var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
                var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
                if (a + b == c) {
               		
                    //    如果开关打开则加载数据  
                    if (sw == true) {
                    	Indicator.open({
							spinnerType: 'fading-circle'
						});
                        // 将开关关闭  
                        sw = false;
                        page++;
                        service.get(api.contract + 'api/v1/user/orderList?sta=0&size=6&page='+page, {
                        }).then(function(res) {
                        	if(res.data.code==200){
                        	if(res.data.data==''){
                        			return;
                        	}else{
                        		res.data.data.forEach(function(val, index) {
//                      			console.log(val)
                             	that.orderlist.push(val);
                         		setTimeout(function(){
										that.openloding();
									},1000)
                            });
                            	sw = true;
                        	}
                        	}else{
                        		setTimeout(function(){
										that.openloding();
								},1000)
                        		
                        	}
                   
                      
                        })
                    }
                }
            }
			},
			opendetil(item){
				if(item.promo=='time'){
					window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
				}else if(!item.promo){
					window.location.href="./products.html?id="+item.id+"&promo=";
				}else if(item.promo=='quota'){
					window.location.href="./products.html?id="+item.id+"&promo="+item.promo+"&active_id="+item.active_id+"";
				}
			},
			opengroup_list:function(){
					window.location.href="./grouplist.html";
			},
			show_p:function(){
				this.show_text = false;
			},

            message_success:function(){
				Toast({message: 'success', duration: 1000});
			},
			modals:function(){
				 $(".titletab").toggle(100);
			},
			order_list:function(){
			var that=this;
				var url = 'api/v1/user/orderList?sta=0&size=6&page=1';
				var param = qs.stringify({
					sta:0
				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					that.orderlist=res.data.data;
					console.log(res.data.data,444);
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
			
		   },
		   	order_list2:function(){
				var self = this;
				var url = 'api/v1/user/orderList?sta=1&page=1&size=10';
				var param = qs.stringify({
					sta:1
				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					self.orderlist2=res.data.data;
					console.log(res.data.data,444);
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		   },
		    order_list3:function(){
				var self = this;
				var url = 'api/v1/user/orderList?sta=2&page=1&size=10';
				var param = qs.stringify({
					sta:2
				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					self.orderlist3=res.data.data;
					console.log(res.data.data,444);
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		   },
		     order_list4:function(){
				var self = this;
				var url = 'api/v1/user/orderList?sta=3&page=1&size=10';
				var param = qs.stringify({
					sta:2
				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					self.orderlist4=res.data.data;
					console.log(res.data.data,444);
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		   },
		    order_list5:function(){
				var self = this;
				var url = 'api/v1/user/orderList?sta=4&page=1&size=10';
				var param = qs.stringify({
					sta:2
				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					self.orderlist5=res.data.data;
					console.log(res.data.data,444);
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		  },
		  openorderdetil:function(id){
		  	window.location.href="./orderdetil.html?order_id="+id;
		  },
		  message:function(id){
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
						that.confirmorder(id)
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
			//确认收货
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
//		评论页面
		openwrite:function(item){
			console.log(item);
			var that= this;
			
			localStorage.setItem('commentlist', JSON.stringify(item));
//			var as =  that.mai;
//			 that.mai.forEach(function(v2, k2) {
//				
//				 that.goodslist.push(v2);
//				
//			
//			})

//			 console.log(that.goodslist,33);		
			
			window.location.href="./write_review.html";
		},
//		提醒发货
		remindership:function(id){
				var self = this;
				var url = 'api/v1/user/reminderSlip/'+id;
				var param = qs.stringify({
					order_id:id
				});
				service.put(api.contract+url,param).then(res => {
				if(res.data.code==200){
					Toast({message: res.data.msg, duration: 1200});
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		},
		openloding:function(){
			Indicator.close();
			
		},
		

		},
		computed:{

		},
		watch:{

	
		
		}
	
	}
</script>

<style>
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';

.mui-bar~.mui-content .mui-fullscreen {  height: auto; }
.mui-pull-top-tips { position: absolute; top: -20px; left: 50%; margin-left: -25px; width: 40px; height: 40px; border-radius: 100%; z-index: 1; }
.mui-bar~.mui-pull-top-tips { top: 24px; }
.mui-pull-top-wrapper { width: 42px; height: 42px; display: block; text-align: center; background-color: #efeff4; border: 1px solid #ddd; border-radius: 25px; background-clip: padding-box; box-shadow: 0 4px 10px #bbb; overflow: hidden; }
.mui-pull-top-tips.mui-transitioning { -webkit-transition-duration: 200ms; transition-duration: 200ms; }
.mui-pull-top-tips .mui-pull-loading { /*-webkit-backface-visibility: hidden;
				-webkit-transition-duration: 400ms;
				transition-duration: 400ms;*/
				
margin: 0; }
.mui-pull-top-wrapper .mui-icon,  .mui-pull-top-wrapper .mui-spinner { margin-top: 7px; }
.mui-pull-top-wrapper .mui-icon.mui-reverse { /*-webkit-transform: rotate(180deg) translateZ(0);*/
}
.mui-pull-bottom-tips { text-align: center; background-color: #efeff4; font-size: 15px; line-height: 40px; color: #777; }
.mui-pull-top-canvas { overflow: hidden; background-color: #fafafa; border-radius: 40px; box-shadow: 0 4px 10px #bbb; width: 40px; height: 40px; margin: 0 auto; }
.mui-pull-top-canvas canvas { width: 40px; }
.mui-slider-indicator.mui-segmented-control { background-color: #efeff4; }
.scan_code span.mui-icon {
    font-size: 0.36rem !important;
    
     top: -0.1rem;
}

#scroll1{
	overflow-x: hidden !important;
overflow-y: auto !important;
}
 .mint-toast-text {
    font-size: 0.16rem !important;

    height: 0.16rem !important;
    line-height: 0.14rem !important;

}
.chats{
	    padding: 0.1rem 0.1rem 0rem 0rem;
	        height: 0.45rem;
}
.chat_slip{
	display: inline-block;
    text-align: center;
    font-size: 0.11rem;
    height: 0.26rem;
    line-height: 0.24rem;
     border: 0.01rem solid #ff4500;
    color: #ff4500;
    border-radius: 0.04rem;
    margin-left:0.1rem;
    padding: 0rem 0.16rem 0rem 0.16rem;
    float:right;
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
.sw_ucenter_order_list_b h5 em{
	    font-size: 0.10rem;
}

    .my_ico{
    	background:url('../../assets/images/quota_icon_skip.png') no-repeat !important;
    	width: 0.16rem;
    	position: relative;
    	height: 0.16rem;
		top: 0.08rem;
    	left: 0.08rem;

    }
  .m_header {

	width: 100%;
	border-bottom: 0.01rem solid #dcdde0;
	font-size: 0.14rem;
	line-height: 0.20rem;
	position:absolute;
	color: #ff7800;
	padding: 0.04rem 0.14rem;
	padding-right: 0.3rem;
	background: #fff;
	z-index: 40;
}

.m_header>span {
	display: inline-block;
	width: 0.2rem;
	height: 0.2rem;
	position: absolute;
	right: 5%;
	top: 0.12rem;
}

.m_header>span>img {
	width: 100%;
}
.value_name{
	 display: inline-block;
    line-height: 0.28rem;
    padding-left: 0.12rem;
    font-size: 0.1rem;
    color: #999;
    height:0.28rem;
}
 /*弹框*/  
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

    line-height: .20rem;
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
.mint-spinner-fading-circle div::before {
	background:#ff4500 !important;
}
.mint-indicator-wrapper{
	z-index:1000!important;	
	top: 87% !important;
	background: #0000 !important;
}
.main .sw_ucenter_order_list_ul{
	margin-bottom: 1rem;
}
</style>