<template>
	<div class="main">
	<header class="mui-bar mui-bar-nav">
    
          <div class="fl sw_search">
            <h1 class="mui-title">Categories</h1>
          </div>

	</header>
	<!--<n-orderhead></n-orderhead>-->
	<div class="mui-content mui-row mui-fullscreen sw_categories ">
  <div class="mui-col-xs-3">
    <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
      <a v-for="(item,index) in cate_list" class="mui-control-item" :href="ins+item.sort" :class="{'mui-active':item.sort==1}" :key="index">
      <strong class="cate_ids">{{item.name}}</strong>
    
      </a> 
      </div>
  </div>
  <div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
    <div id="content1" class="mui-control-content  mui-active">
      <div class="mui-card">
        <ul class="mui-table-view">
          <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[0].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          </li>

        </ul>
          <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          		
          	</ul>
          </div>
      </div>
    </div>
    <div id="content2" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[1].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist2">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
       
          		
          	</ul>
          </div>
      </div>
    </div>
       <div id="content3" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[2].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
        
          		<li v-for="(items,indexs) in brandlist3">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          		<li>3</li>
          	</ul>
          </div>
      </div>
    </div>
       <div id="content4" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[3].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist4">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
       <div id="content5" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[4].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist5">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
       <div id="content6" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[5].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist6">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
       <div id="content7" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[6].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist7">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
       <div id="content8" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[7].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist8">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
       <div id="content9" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[8].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist9">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
           <div id="content10" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[9].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist10">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
           <div id="content11" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[10].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist11">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
           <div id="content12" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[11].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist12">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
           <div id="content13" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[12].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist13">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>
    <div id="content14" class="mui-control-content">
      <div class="mui-card">
        <ul class="mui-table-view">
            <li  class="mui-table-view-cell mui-collapse" v-for="(item2,index2) in cate_list[13].son"> 
          	<a class="mui-navigate-right" href="#">{{item2.name}}</a>
            <div class="mui-collapse-content">
              <ul class="mui-table-view sw_categories_ul">
                <li class="mui-table-view-cell autohei" v-for="(item3,index3) in item2.son"> 
                	<a href="#">
                  		<h2>{{item3.name}}</h2>
                  	</a> 
                </li>

              </ul>
            
            </div>
          	</li>


        </ul>
            <div class="cate_herf">
          	<p>Recommend Brand</p>
          	<ul>
          		<li v-for="(items,indexs) in brandlist14">
          			<img style="width:100%;height:100%;" :src="items.logo" alt="" />
          		</li>
          	</ul>
          </div>
      </div>
    </div>





  </div>
</div>
<!--<div class="sw_blank"></div>-->
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
	import footer from '../../components/allfooter.vue'
//	import '@/assets/alljs/mui.min.js';
	export default {
		data() {
			return {
				contract: '',
				query: null,
				ins:'#content',
				cate_list:'',
				catelength:'',
				lengths:1,
				cates_id:'',
				brandlist:'',
				brandlist2:'',
				brandlist3:'',
				brandlist4:'',
				brandlist5:'',
				brandlist6:'',
				brandlist7:'',
				brandlist8:'',
				brandlist9:'',
				brandlist10:'',
				brandlist11:'',
				brandlist12:'',
				brandlist13:'',
				brandlist14:'',
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
			this.categorielist();
			this.cate_img();
//			this.cate_footer();
		},
		mounted() {
			
		},
		methods: {

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
		
		  categorielist:function(){
		  	 
		  	  	var self = this;
				var url = 'api/v1/common/getclist';
//				var param = qs.stringify({
//					order_id:id
//				});
				service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					self.cate_list=res.data.data;
					self.cate_list.forEach(function(v2, k2) {
						if(v2.sort==1){
							console.log(v2.id);
						}else if(v2.sort==2){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==3){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==4){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==5){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==6){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==7){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==8){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==9){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==10){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==11){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==12){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==13){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}else if(v2.sort==14){
							var id = v2.id;
							var sot = v2.sort;
							self.cate_footer(id,sot);
						}
						
					});
					self.catelength=self.cate_list.length-1;
					
//					Toast({message: res.data.msg, duration: 1200});
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		  },
		  cate_img:function(id){
		  	 
		  	  	var self = this;
				var url = 'api/v1/home/getRecommendedBrand?category_id=8';
				var param = qs.stringify({
					category_id:563
				});
			service.get(api.contract+url).then(res => {
				if(res.data.code==200){
				self.brandlist=res.data.data;
				console.log(res.data);
					
//					Toast({message: res.data.msg, duration: 1200});
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		 },
		 cate_footer:function(id,sot){
		  	  	var self = this;
				var url = 'api/v1/home/getRecommendedBrand?category_id='+id;
			service.get(api.contract+url).then(res => {
				if(res.data.code==200){
					if(sot==2){
						self.brandlist2=res.data.data;
					}else if(sot==3){
						self.brandlist3=res.data.data;
					}else if(sot==4){
						self.brandlist4=res.data.data;
					}else if(sot==5){
						self.brandlist5=res.data.data;
					}else if(sot==6){
						self.brandlist6=res.data.data;
					}else if(sot==7){
						self.brandlist7=res.data.data;
					}else if(sot==8){
						self.brandlist8=res.data.data;
					}else if(sot==9){
						self.brandlist9=res.data.data;
					}else if(sot==10){
						self.brandlist10=res.data.data;
					}else if(sot==11){
						self.brandlist11=res.data.data;
					}else if(sot==12){
						self.brandlist12=res.data.data;
					}else if(sot==13){
						self.brandlist13=res.data.data;
					}else if(sot==14){
						self.brandlist14=res.data.data;
					}
				
	
					
//					Toast({message: res.data.msg, duration: 1200});
					
				}else{
					Toast({message: res.data.msg, duration: 1200});
				}
				
			});
		 	
		 },
		 values:function(id){
		 	console.log(id);
		 }
		},
		computed: {
				
		}
	}
</script>

<style>
	@import '../../assets/allcss/mui/css/mui.min.css';
	@import '../../assets/allcss/mui/css/icons-extra.css';
	@import '../../assets/allcss/ucentercss/ucenter.css';

.mui-row.mui-fullscreen>[class*="mui-col-"] {
height: 100%;
}
#segmentedControls>a{
	height:0.45rem;
	line-height: 0.48rem;
	    padding-left: 0.08rem;
}
.mui-col-xs-3, .mui-control-content { overflow-y: auto; height: 100%; }
.mui-segmented-control .mui-control-item { width: 100%; line-height: normal; padding: 0px 0px 0.07rem 0px; }
.mui-segmented-control .mui-control-item span { padding: 0.05rem 0 0 0; }
.mui-segmented-control .mui-control-item strong { line-height: 0.15rem; font-size: 0.12rem; font-weight: normal; height: 0.30rem; display: inline-block; word-break: break-all; }
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active { background-color: #fff; border: none; border-left: 0.02rem solid #FF4500; color: #FF4500; }
.sw_categories_ul .mui-table-view-cell { padding: 0 0 0.1rem 0; }
.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell { padding-left: 0.1rem; }
.mui-table-view-cell.mui-collapse .mui-table-view { margin: 0.05rem 0 0 0; }
.mui-table-view-cell.mui-active { background: none; }
.sw_categories_ul_img img { width: 0.26rem; height: 0.26rem; }
.sw_categories .mui-card { box-shadow: 0 0 0 rgba(0,0,0,.3); margin: 0 0 0 0; }
.sw_categories .mui-table-view-cell>a:not(.mui-btn) { margin: 0; padding: 0px 0px 0px 0.08rem; height: 0.3rem; line-height: 0.3rem; font-size: 0.12rem;}
.sw_categories .mui-table-view-cell { padding: 0.06rem 0 0.06rem 0.06rem; }
.mui-table-view-cell.mui-collapse .mui-collapse-content { margin: 0px; padding: 0px; }
.sw_categories_ul li h2 { font-size: 0.012rem; color: #000; padding: 0px 0px 0px 0.34rem; line-height: 0.3rem; }
.cate_herf{
	    padding:0.12rem;
/*    border: 0.01rem solid #000;*/
    height: 3.4rem;
}
.cate_herf>ul{
	width:100%;
	padding:0.12rem 0;
}
.cate_herf>ul>li{
	float:left;
	width:33.3%;
	height:0.45rem;
	border:0.01rem solid rgba(204, 204, 204, 0.2);
}

</style>