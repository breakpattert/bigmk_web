<template>
	<div class="main">
	<!--<header class="mui-bar mui-bar-nav">
          <div class="fl scan_code"><a  href="#"><span class="mui-icon"><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
          <div class="fl sw_search">
            <h1 class="mui-title">Order List</h1>
          </div>
           <div class="fl_right" @click="modals()">
  				<i class="iconfont icon-more">&#xe65c;</i>
  			</div>

  			<ul class="titletab">
   				<div class="sanjiao_t"></div>
			 	<li><i class="iconfont icon-all">&#xe646;</i><a href="#" >Back to Homepage</a></li>
			 	<li><i class="iconfont icon-all">&#xe63d;</i><a href="#" >Messagesa</a></li>
			 	<li><i class="iconfont icon-all">&#xe64a;</i><a href="#" >Account Center</a></li>
			 	<li><i class="iconfont icon-all">&#xe661;</i><a href="#" >I Want Feedback</a></li>
			</ul>
	</header>-->
	<n-orderhead></n-orderhead>

<div class="sw_shop_Mars_King">
  <div align="center"><img src="../../assets/images/account_image.png" class="sw_shop_Mars_img1"></div>
  <div class="sw_shop_Mars_King_con">
    <div class="sw_shop_Mars_King_a">
      <div class="sw_shop_Mars_King_a1 fl">
        <div class="sw_shop_Mars_King_img">
          <div class="fl"><img :src="shops_info.img"/></div>
          <h3>{{shops_info.true_name}}</h3>
          <h4>Active days ago  {{shops_info.active_time}}</h4>
          <h5>Followers  {{shops_info.following_num}}</h5>
        </div>
      </div>
      <div class="sw_shop_Mars_King_a2 fl">
        <h3 class="sw_Followa_h3">
        	<span id="sw_Followa" @click="followpoin()">{{textstates}}</span></h3>
        <h4><a href="https://www.hao123.com/"><span class="mui-icon mui-icon-chat"></span> Chat</a></h4>
      </div>
    </div>
  </div>
</div>
<div class="sw_shop_con">
  <div id="sw_shop_con_tab" class="sw_shop_con_taba">
    <!--<div class="hd" id="sw_nav1">
      <ul class="autohei">
        <li class="on">
        	<a href="javascript:;">Shop</a>
        </li>
        <li>
        	<a href="javascript:;">Categories</a>
        	
        </li>
        <li>
        	<a href="javascript:;">All Products</a>
        </li>
      </ul>
    </div>-->
    <div class="bd" id="tabBox1-bd">
      <div class="autohei">
        <div class="sw_shop_Pro">
          <div class="sw_shop_Pro1">
            <ul class=" autohei">
              <li class="autohei">
                <div class="fl"></div>
                <p><span>Products:</span>{{shops_info.products}}</p>
              </li>
              <li class="autohei on1">
                <div class="fl"></div>
                <p><span>Sales:</span>{{shops_info.sale}}</p>
              </li>
              <li class="autohei">
                <div class="fl"></div>
                <p><span>Joined:</span>{{shops_info.create_time}}</p>
              </li>
              <li class="autohei on1">
                <div class="fl"></div>
<!--:-->
                <p><span>Cash on Delivery:</span>{{shops_info.is_cashondelivery==1?'Yes':'No'}}</p>
              </li>
              <li class="autohei">
                <div class="fl"></div>
                <p><span>Contacts:</span>{{shops_info.contacts}}</p>
              </li>
              <li class="autohei on1">
                <div class="fl"></div>
                <p><span>Rating:</span>{{shops_info.service_ratting}}</p>
              </li>
            
            </ul>
            <h3 class="autohei">
              <div class="fl"></div>
              <p><span style="font-size:0.12rem;">Shop Link:</span><a href="#" style="font-size:0.12rem;">{{shops_info.shop_link}}</a></p>
            </h3>
          </div>

          <div class="sw_shop_Pro3">
       		<div class="sw_ucenter_c" style="position: relative;">
    			<h3><span>Flash Sale</span></h3> 
    			<a class="openfalse"href="./flashsale_list.html">See All</a>
  			</div>
			  <div class="goods_list_com">
			    <ul>
			        <li v-for="(item,index) in reclist"> 
				      	<a href="javascript:;" @click="opendetil(item)">
				        <div align="center"><img :src="item.img"></div>
				        <div class="goods_list_com_t">
				          <p class="goods_list_p1">{{item.discount?item.discount:"0"}}%</p>
				          <p> off</p>
				        </div>
				        <h2>{{item.name}}</h2>
				        <h3 class="autohei"><span>₱{{item.sell_price}}</span><em>COD</em><!--<strong>COD</strong>--></h3>
				        <h4 class="autohei"><span>Sale:&nbsp;{{item.sale}}</span><strong>Comments:&nbsp;{{item.comments}}</strong></h4>
				        </a> 
				     </li>
			  
			  
			
			  
			     
			    </ul>
			  </div>
          </div>
 
        </div>
      </div>
      

    </div>
  </div>

</div>
<div class="sw_shop_filter">
  <div class="sw_shop_filter_a">
    <div class="sw_shop_filter1"></div>
    <div class="sw_shop_filter2">
      <div class="sw_shop_filter2b">
        <div class="sw_shop_filter_price">
          <h2>Price range</h2>
          <h3>
            <input name="" type="text" class="sw_shop_filter_txt1" placeholder="MIN">
            <span>——</span>
            <input name="" type="text" class="sw_shop_filter_txt1" placeholder="MAX">
          </h3>
        </div>
        <div class="sw_shop_filter_tag">
          <div class="sw_shop_filter_c1">
            <ul class="sw_shop_filter_ul1">
              <li class="sw_shop_filter_li">
                <h2 class="sw_shop_filter_tit"><strong>Brand1</strong> <em>All<span class="mui-icon mui-icon-arrowdown"></span></em></h2>
                <h3 class="sw_shop_filter_son" style=" height:100%;"> <span class="selected">Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> <span>Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> <span>Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> </h3>
              </li>
              <li class="sw_shop_filter_li">
                <h2 class="sw_shop_filter_tit"><strong>Brand2</strong> <em>All<span class="mui-icon mui-icon-arrowdown"></span></em></h2>
                <h3 class="sw_shop_filter_son"> <span class="selected">Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> <span>Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> <span>Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> </h3>
              </li>
              <li class="sw_shop_filter_li">
                <h2 class="sw_shop_filter_tit"><strong>Brand3</strong> <em>All<span class="mui-icon mui-icon-arrowdown"></span></em></h2>
                <h3 class="sw_shop_filter_son"><span class="selected">Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> <span>Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> <span>Mars Kindom Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span><span>Mars Kindom</span> </h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="sw_shop_filter_bot autohei">
          <h3><a href="https://www.hao123.com/">Rest</a></h3>
          <h4><a href="https://www.hao123.com/">Apply</a></h4>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="sw_shop_share">
  <div class="sw_shop_share_a">
    <div class="sw_shop_share1"></div>
    <div class="sw_shop_share2 autohei">
      <div class="sw_shop_top_after autohei sw_dw3">
        <div class="sw_shop_top1 fl"><span class="mui-icon mui-icon-arrowthinleft"></span></div>
        <div class="sw_shop_top2 fl"><a href="1_search_bar.html" target="_blank">
          <input name="" type="text" class="sw_shop_top2_txt" value="&nbsp;&nbsp;&nbsp;Search in Marskingdom">
          </a></div>
        <div class="sw_shop_top3 fl autohei">
          <h3 class="fl"><span class="mui-icon-extra mui-icon-extra-filter "></span></h3>
          <h3 class="fl sw_share_morebut"><span class="mui-icon mui-icon-more "></span></h3>
        </div>
      </div>
      <div class="sw_shop_share_con">
        <ul class=" autohei">
          <li><span class="mui-icon-extra mui-icon-extra-share"></span><em>Share</em></li>
          <li><span class="mui-icon-extra mui-icon-extra-lamp"></span><em>Report this seller</em></li>
        </ul>
      </div>
    </div>
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
				shops_info:'',
				reclist:'',
				togglestyle:false,
				states:'',
				textstates:'+ Follow',
				seller_id:''
				
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
//			its,udl,pku,all
			var query = querystring.parse(search);
			var types = query.type;
			this.seller_id = query.id;
			this.shopinfos();
			
		},
		mounted() {
			
   			
            // 设置一个开关来避免重负请求数据  
            let sw = true;
            let that=this;
           
			var codeapi = 'api/v1/Shop/shopFlashList?seller_id='+that.seller_id +'&page=1&pageSize=6';
				service.get(api.contract+codeapi).then(res => {
					if(res.data.code==200){
						that.reclist=res.data.data;
//						Toast({message: res.data.msg, duration: 1000});
					}else{
						Toast({message: 'res.data.msg', duration: 1200});
					}
						

			})
			var page = 1;
			     // 注册scroll事件并监听  
            window.onscroll = function() {
                var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
                var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
                if (a + b == c) {
                    //    如果开关打开则加载数据  
                    if (sw == true) {
                        // 将开关关闭  
                        sw = false;
                        page++;
                        service.get(api.contract + 'api/v1/Shop/shopFlashList?seller_id='+that.seller_id +'&pageSize=6&page='+page, {
                        }).then(function(res) {
                        	if(res.data.code==200){
                        		         // 将新获取的数据push到
                        	res.data.data.forEach(function(val, index) {
                                that.reclist.push(val);
                               
                            });
                            
                            // 数据更新完毕，将开关打开  
                            sw = true;
                        	}
                   
                      
                        })
                    }
                }
            }
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
		  	shopinfos:function(){
//		  		
				var self = this;
				var url = 'api/v1/common/sellerInfo';
				var param = qs.stringify({
					seller_id:self.seller_id
				});
				service.post(api.contract+url,param).then(res => {
				if(res.data.code==200){
					self.shops_info=res.data.data;
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		  },
		  followpoin:function(){
		  	let that = this;
		  	that.togglestyle=!that.togglestyle;
		  	if(that.togglestyle==true){
		  		that.states=1;
		  		that.textstates='Unfollow';
		  	
		  		that.togglefollow(that.states);
		  		
		  	}else{
		  		that.states=2;
		  		that.textstates='+ Follow';
		  		that.togglefollow(that.states);
		  	}
		  },
		  togglefollow:function(states){
				var self = this;
				var url = 'api/v1/user/follow';
				var param = qs.stringify({
					seller_id:self.seller_id,
					type:states
				});
				service.put(api.contract+url,param).then(res => {
				if(res.data.code==200){
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

.sw_shop_Pro1 ul li p span{
	font-size:0.12rem;
}
.openfalse{
	    position: absolute;
    right:0.28rem;
    top: 0.29rem;
    color: #ff4500;
    border: 0.01rem solid #ff4500;
    z-index: 10;
    padding: 0.04rem 0.1rem;
    background: #f3f3f3;
    border-radius: 0.06rem;
}
</style>