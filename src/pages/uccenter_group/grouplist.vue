<template>
	<div class="mains"> <!--:class="{'main_padding':show_text=false}-->
		<header class="mui-bar mui-bar-nav">
      <div class="fl scan_code"><a  href="javascript:history.back(-1)">
      	<span class=""><img src="../../assets/images/back_gray.png" alt="" /></span></a></div>
  <div class="fl sw_search">
    <h1 class="mui-title">Group Buy</h1>
  </div>
  
</header>
		<div class="m_header" v-if="show_text">
			Due to higher volume of orders per product, there might be a slight delay on the delivery.
			<span @click="show_p()"><img src="../../assets/images/pop_icon_close_default.png" alt="" /></span>
		</div>
		<div class="m_tab">
			<ul>
				<li v-for="(item,index) in mains" :class="{'tabbottom':indexs==index}" @click="pointall(index)" :key="index">
					<a href="#">{{item}}</a>
				</li>
				<!--<li @click="pointneed()">
					<a href="#">Need to</a>
				</li>
				<li @click="pointsuccess()">
					<a href="#">Successful</a>
				</li>
				<li @click="pointout()">
					<a href="#">Out of date</a>
				</li>-->
			</ul>
		</div>
		<ul>
			<!--<li class="m_shophome" v-for="(item,index) in alllist" :key="index">
				<div class="s_header">
					<div class="head_l">
						<span class="ico_1">
							<img src="" alt="" /></span>
						<a :href="'/'+item.true_name.replace(/ /g,'_')">{{item.true_name}}</a>
						<span class="ico_2">
							<img src="" alt="" /></span>
					</div>
					<div class="head_r" v-if="item.code==1">Need to be shared</div>
					<div class="head_r" v-else-if="item.code==2">Successful</div>
					<div class="head_r" v-else="item.code==3">Out of date</div>
				</div>
				<div class="s_center">
					<div class="s_img">
						<a href="#" @click="orderdetil(item)">
							<img :src="imgHost+item.img" alt="" />
						</a>
					</div>
					<div class="s_detil">
						<h3 @click="orderdetil(item)">{{item.name}}</h3>
						<p class="s_color" @click="orderdetil()">
							<span>{{item.goods_array.value}}</span>
						</p>
						<p class="s_price">
							<span class="s_span1">₱{{item.quota_price}}</span>
							<span class="s_span2">x{{item.goods_nums}}</span>
						</p>
					</div>
				</div>
				<div class="s_footer">
					<div class="footer_l" @click="theory(item)">
						<span class="f_ico_1"><img src="" alt="" />
						</span>
						<span >Chat Now</span>

					</div>
					
					<div class="f_head_r" v-if="item.code==1">
						<a  @click="Friends(item)" >Invite Friends</a>
					</div>
					<div class="f_head_r f_head_r2" v-else-if="item.code==3">
						<a :href="'/site/products?id='+item.goods_id+'&promo='+item.promo">Buy Again</a>
					</div>
					<div class="f_head_r f_head_r2" v-else="item.code==2">
						<a :href="'/ucenter/order_detail/id/'+item.order_id+'?promo=quota'">View Order</a>
					</div>
				</div>
			</li>-->
				<li class="m_shophome" v-for="(item,index) in alllist" :key="index">
				<div class="s_header">
					<div class="head_l" @click="openshop(item)">
						<a href="javascript:;">
						<span class="ico_1">
							<img src="../../assets/images/list_icon_shop.png" alt="" /></span>
						<span class="text">{{item.true_name}}</span>
						<span class="ico_2">
							<img src="../../assets/images/quota_icon_skip.png" alt="" /></span>
						</a>	
					</div>
					<div class="head_r" v-if="item.code==1">Need to be shared</div>
					<div class="head_r" v-else-if="item.code==2">Successful</div>
					<div class="head_r" v-else="item.code==3">Out of date</div>
					
				</div>
				<div class="s_center" @click="orderdetil(item)">
					<div class="s_img">
						<a href="javascript:;">
							<img  :src="imgHost+item.img" />
						</a>
					</div>
					<div class="s_detil">
						<h3>{{item.name}}</h3>
						<p class="s_color">
							<span>{{item.goods_array.value}}</span>
						</p>
						<p class="s_price">
							<span class="s_span1">₱{{item.quota_price}}</span>
							<span class="s_span2">x{{item.goods_nums}}</span>
						</p>
					</div>
				</div>
				<div class="s_footer">
					<div class="footer_l" @click="theory(item)">
						<span class="f_ico_1">
							<img src="../../assets/images/list_icon_chatnow_default.png" alt="" />
						</span>
						<span >Chat Now</span>

					</div>
					<div class="f_head_r" v-if="item.code==1">
						<a @click="Friends(item)">Invite Friends</a>
					</div>
					<div class="f_head_r f_head_r2" v-else-if="item.code==3">
						<a @click="opendetil(item)">Buy Again</a>
					</div>
					<div class="f_head_r f_head_r2" v-else="item.code==2">
						<a @click="orderdetil(item)">View Order</a>
					</div>
				
				</div>
			</li>

		</ul>

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

//	vue新的组件
//	import newsmoduct from '../../components/newsmoduct.vue'

	export default {
		data() {
			return {
			alllist:[],
			imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
			codes: '',
			detil_id: '',
			show_text: true,
			indexs:'',
			mains:['All Group Buy','Need to be Shared','Successful','Out of date']	
			}
		},
		components:{

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

		},
		mounted() {
			var that = this;
				var smscodeapi = 'api/v1/quota/quotaList';
				var param = qs.stringify({
					quota_code:'',
					status:4,
					page: 1,
					pageSize: 100
				});
				service.post(api.contract+smscodeapi,param).then(res => {
				if(res.data.code==200){
					console.log(res.data);
					that.alllist = res.data.data;

				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})
		},
		methods: {
			pointall(index) {
			var self = this;
			self.indexs = index;

			if (index == 0) {
				var state = 4;
				self.quota_list(state);
			} else if (index == 1) {
				var state = 1;
				self.quota_list(state);
			} else if (index == 2) {
				var state = 2;
				self.quota_list(state);
			} else if (index == 3) {
				var state = 3;
				self.quota_list(state);
			}
		  },
		  quota_list: function(state) {
				var that = this;
				var smscodeapi = 'api/v1/quota/quotaList';
				var param = qs.stringify({
					quota_code:'',
					status:state,
					page: 1,
					pageSize: 100
				});
				service.post(api.contract+smscodeapi,param).then(res => {
				if(res.data.code==200){
					console.log(res.data);
					that.alllist = res.data.data;

				}else{
					Toast({message: res.data.msg, duration: 2000});
				}
				
			})


		},
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
			openshop(item){
				window.location.href = "./shopinfo.html?id=" + item.seller_id;
			},
		orderdetil(item) {
			window.location.href = "./ucenter_groupdetil.html?id=" + item.id;
			
		},
		show_p() {
			this.show_text = false;
		  },
		},
		computed: {

		}
	}
</script>

<style>
	body {
	background: #f2f2f2;
	font-family: Arial;
	font-size:0.14rem;
}
a {
    text-decoration:none !important;
     color: #333 !important; 
}
 .scan_code{
 	float: left;
 }
 .scan_code img{
  	margin-top:0.06rem;
  	width: 0.3rem;
  	height:0.3rem;
  }
	.m_header {

	width: 100%;
	border-bottom: 0.01rem solid #dcdde0;
	font-size: 0.14rem;
	line-height: 0.20rem;
	position: relative;
	color: #ff7800;
	top:0;
	padding: 0.12rem 0.14rem;
	padding-right: 0.3rem;
	background: #fff;

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


/*tab导航*/

.m_tab {
	padding: 0 0.14rem;
	height: 0.45rem;
	/*overflow: hidden;*/
	width: 100%;
	text-align: center;
	background: #fff;
	border-bottom: 0.01rem solid #dcdde0;
	margin-bottom: 0.14rem;
}

.m_tab ul {
	width: 100%;
}

.m_tab ul li {
	height: 0.45rem;
	float: left;
	line-height: 0.40rem;
/*	margin-right: 10rem;*/
	width: 25%;
}
.tabbottom{
	border-bottom: 0.02rem solid #ff4500;
}

.m_tab ul li>a {
	display: inline-block;
	width: 100%;
	height: 0.24rem;
	/*margin: 6rem 0rem;*/

	line-height: 0.24rem;
	border-right: 0.01rem solid #dcdde0;
	/*vertical-align: middle;*/
}
.m_tab ul li:nth-child(2)>a{
	display: inline-block;
	width: 100%;
	height: 0.24rem;
	margin: 0.06rem 0rem;
	line-height: 0.16rem;
	border-right: 0.01rem solid #dcdde0;
	vertical-align: middle;
}


/*tab导航*/

.m_shophome {
	height: 2.21rem;
	width: 100%;
	background: #fff;
	/*	border:1rem dashed red;*/
	margin-bottom: 0.14rem;
}

.s_header {
	padding: 0.14rem 0.14rem;
	width: 100%;
	height: 0.45rem;
	border-bottom: 0.01rem solid #dcdde0;

	color: #3d3d40;
	font-size: 0.14rem;
}

.s_center {
	padding: 0.14rem 0.14rem;
	width: 100%;
	height: 1.21rem;
}

.s_footer {
	padding: 0.14rem 0.14rem;
	width: 100%;
	height: 0.5rem;
	color: #3d3d40;
	font-size: 0.14rem;
	border-top: 0.01rem solid #dcdde0;
}

.head_l {
	float: left;
	line-height: 0.18rem;
	/*	vertical-align: middle;*/
}

.head_l .text {
	position: relative;
	bottom: 0.05rem;
	padding: 0 0.03rem;
}

.head_r {
	float: right;
}

.ico_1 {
	display: inline-block;
	width: 0.25rem;
	height: 0.25rem;

	text-align: center;
}

.ico_2 {
	display: inline-block;
	width: 0.15rem;
	height: 0.25rem;
	padding-bottom: 0.06rem;
	text-align: center;
	position: relative;
	bottom: 0.03rem;
}

.head_r {
	font-size: 0.12rem;
	color: #ff4500;
}


/*底部*/

.footer_l {
	float: left;
}

.f_head_r {
	font-size: 0.14rem;
	color: #ff4500;
	float: right;
	height: 0.28rem;
	width: 1.08rem;
	line-height: 0.28rem;
	border: 0.01rem solid #ff4500;
	text-align: center;
	position: relative;
	bottom: 0rem;
	border-radius: 0.28rem;
	cursor: pointer;
}

.f_head_r2 {
	border: 0.01rem solid #3d3d40;
	color: #3d3d40;
}

.f_ico_1 {
	display: inline-block;
	width: 0.25rem;
	height: 0.25rem;
	position: relative;
	top:0.06rem;
	text-align: center;
}

.footer_l>a {
	color: #30b46c;
	font-size: 0.12rem;
	position: relative;
	bottom: 0.06rem;
}

.s_img {
	width: 25%;
	height: 0.95rem;
	/*	border:1rem dashed #333;*/
	float: left;
}

.s_img>a {
	display: inline-block;
	/*width:95rem;*/
	width: 100%;
	height: 0.95rem;
	/*	border:1rem solid red;*/
	margin: 0 auto;
	overflow: hidden;
}

.s_img>a>img {
	width: 100%;
	height: 100%;
}

.s_detil {
	/*	border:1rem dashed #333;*/
	float: left;
	width: 75%;
	height: 0.95rem;
	padding-left: 0.14rem;
}

.s_detil h3 {
	font-size: 0.14rem;
	color: #6d6e73;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	line-height: 0.32rem;
	cursor: pointer;
}

.s_color {
	color: #333;
	font-size: 0.1rem;
	line-height: 0.18rem;
}

.s_price {
	padding-top: 0.16rem;
}

.s_price .s_span1 {
	color: #ff4500;
	font-size: 0.12rem;
	font-weight: 700;
}

.s_span2 {
	float: right;
	font-weight: 700;
	font-size: 0.12rem;
}

.my_quota{
	text-align: center;
	font-size:0.18rem;
	color:#495060;
	height:0.40rem;
	border-bottom: 0.01rem solid #dcdde0;
	line-height: 0.45rem;
	background-color: #fff;
}
.my_quota>a{
	display: inline-block;
position: absolute;
top: 0.08rem;
left: 0.14rem;
width: 0.35rem;
line-height: 0.12rem;
}
.my_quota>a>img{
	width:80%;
}
.mains{
	padding-top:0.48rem;
}
.main_padding{
	padding-top:0.45rem;
}
</style>