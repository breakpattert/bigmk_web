


<style>
/*@import "~assets/font/iconfont.css";*/


/*.flashsale_header {
    height: 50px;
    display: flex;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    background-color: #ffffff;
}*/

.flashsale_header .tinct {
    flex: 1;
    font-size: 28px;
}

.flashsale_header .Sale {
    flex: 9;
}

.superior {
    margin-right: 4px;
}

.yd-cell {
    background-color: #f5f5f5;
}

.yd-cell-title:after {

    border-bottom: none;
}

.yd-cell:after {

    border-bottom: none;
}

.yd-cell-right {

    padding-right: 0px;
}

.upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
}

.upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    /* background-color: rgba(0, 0, 0, 0.4); */
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
}

.upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}

.upload_warp_img_div {
    position: relative;
    height: 70px;
    width: 70px;
    /* border: 1px solid #ccc; */
    /* margin: 0px 30px 10px 0px; */
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
}

.upload_warp_img {
    /* border-top: 1px solid #D2D2D2; */
    display: inline-block;
    overflow: hidden
}

.upload_warp_text {
    text-align: left;
    margin-bottom: 10px;
    padding-top: 10px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
}

.upload_warp_right {
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
}

.upload_warp_left img {
    /* margin-top: 32px; */
}

.upload_warp_left {
    position: relative;
    /*width: 74px;
    height: 74px;*/
    display: inline-block;
    margin-left: 0.2rem;;
    border-radius: 4px;
    cursor: pointer;
}

.upload_warp {
    /* margin: 14px; */
}

.upload {
    /* border: 1px solid #ccc; */
    /* background-color: #fff; */
    width: 100%;
    /* box-shadow: 0px 1px 0px #ccc; */
    /* border-radius: 4px; */
}
.hello {
    width: 100%;
   /* padding: 14px;*/
    background: #fff;
}
.header_text{
	width:100%;
	 padding: 12px 14px 14px 14px;
    border-bottom: 1px solid #e3e3e3;
    overflow: hidden;
}
.header_img{
	width:1.08rem;
	    height: 1.08rem;
	float: left;
	
}
.header_img>img{
	width:100%;
	height:100%;
}
.h_ping{
	float:left;
	padding:0 0.2rem;;
}
.h_xing{
	width:100%;
	height:0.48rem;
	border:1px solid #000;
}
.h_ping>p{
	line-height: 0.56rem;
}
.main_h .yd-textarea>textarea{
	font-size:12px;
	line-height: 0.24rem;
}
.main_h .yd-cell-box{
	margin-bottom: 0;
}
.upload_warp{
	border-bottom:1px solid #ccc;
	padding:14px;
	padding-bottom: 28px;
}
.main_h{
	   
       padding: 1rem 0.16rem 0.16rem 0.16rem;
    background: #fff;
}
.shop_title>p{
	height:0.72rem;
	border-bottom:1px solid #ccc;
	line-height: 0.72rem;
	font-size:0.28rem;
	padding-left:0.24rem;
	color:#333;
}
.shop_title>ul>li{
	    height: 1.08rem;
	padding:0.24rem;
	overflow: hidden;
}
.shop_title>ul>li>span{
	width:1.8rem;
	height:0.8rem;
	color:#333;
	font-size:0.28rem;
	display: inline-block;
	float: left;
	
}
.shop_title .shop_ping{
	height:0.8rem;
	line-height: 0.8rem;
	width:60%;
	border:1px solid red;
	float:left;
}
.upload_warp_img{
	position: relative;
	top:0.36rem;
}
.main_h .yd-cell-right{
	     min-height: 0rem; 
}
.yd-rate>a{
	font-size: 0.36rem;
}
</style>


<template>
    <div class="main_h">
		
        <yd-cell-group v-for="(v,index1) in  arrinfo" :key="index1">
        	<div class="header_text">
        		<div class="header_img">
        			<img :src="imgHost+v.img" alt="" />
        		</div>
        		<div class="h_ping">
        			<p>Product Rating:</p>
        			<div class="h_xing">
        				  <yd-cell-item>
           						 <yd-rate slot="left" v-model="v.isstate"  :key="index1"></yd-rate>
            					<span slot="right">值是: 0</span>
        					</yd-cell-item>
        			</div>
        		</div>
        	</div>
            <yd-cell-item style="border-radius: 10px;padding: 0px 10px;background-color: #fff;">
                <yd-textarea :show-counter="false" v-model="v.input1" slot="right" placeholder="Write down the experience and use the experience to help other small partners ~
Evaluation can get points (points can be used to discount Oh)" maxlength="521" style="    border-radius: 10px;    height: 82px;"></yd-textarea>
            </yd-cell-item>
            <yd-flexbox direction="vertical" style="">
      <!--      <yd-flexbox-item style="    font-size: 14px;">Add images (Optional)</yd-flexbox-item>-->
            <yd-flexbox-item>
                <div class="hello">
                    <div class="upload">
                        <div class="upload_warp">
                            <form method="post" id="imgForm" action="/bigmkoss/putObject" enctype="multipart/form-data">
                                <div class="upload_warp_img" v-show="imgList.length!=0">
                                    <div class="upload_warp_img_div" v-for="(item,index) of imgList" :key="index1+index" v-if="item.key==index1">
                                        <div class="upload_warp_img_div_top">

                                            <img src="../assets/images/not_refactoring/img_icon_delete_default.png" class="upload_warp_img_div_del" @click="fileDel(index)">
                                        </div>
                                        <img :src="item.file.src" style="width: 70px;height: 70px;" >
                                    </div>
                                </div>
                                <div class="upload_warp_left">
                                    <img src="../assets/images/not_refactoring/uploadproduct_icon_addimg_default.png" id="list">
                                    <input @change="fileChange($event,index1)" :name="'k['+v.product_id+']'" type="file" id="imgUpFile" style="width:74px;height:74px;position: absolute;top: 0;opacity: 0;">
                                </div>

                            </form>
                        </div>
                 

                    </div>
                </div>
            </yd-flexbox-item>

        </yd-flexbox>
        </yd-cell-group>
        <!-- 上传图片 -->
  
               <div class="shop_title">
                        	<p>{{shopdetil.order_no}}</p>
                        	<ul>
                        		<li>
                        			<span>Sellers service</span>
                        			<div class="shop_ping">
                        				 <yd-cell-item>
           						 			<yd-rate slot="left" v-model="rate1"></yd-rate>
            								<span slot="right">值是: 0</span>
        								</yd-cell-item>
                        			</div>
                        		</li>
                        		<li>
                        			<span>Delivery speed</span>
                        			<div class="shop_ping">
                        				 <yd-cell-item>
           						 			<yd-rate slot="left" v-model="rate2"></yd-rate>
            								<span slot="right">值是: 0</span>
        								 </yd-cell-item>
                        			</div>
                        		</li>
                        	</ul>
                        </div>
                        <button size="large" color="#FFF" @click="uploadings()" style="width：100%;height:0.82rem;width: 100%;border: 0;color: #fff;margin-top:0.48rem;border-radius: 0.08rem;font-size:0.32rem;background: linear-gradient(to right, #ff8b33, #ff6f33)">Submit</button>
    </div>
</template>

<script type="text/babel">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            isShow: false,
            imgList: [],
            size: 0,
            input1: '',
            images: '',
            drawing: [],
            posp: [],
            address: '',
            user_id: user_id,
            rate1:0,
             rate2:0,
            shopdetil:'',
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            arrinfo:[],
            mainindex:''
        }
    },
    watch: {
        imgList() {
        }
    }, created() {
        if (user_id == null) {
            window.location.href = './login.html'
        }

    },
    methods: {
        uploadings() {
        this.mainindex
        	var ins =''
        	 this.imgList.forEach(function(item,key) {
                ins = item.key;
           	})
        	if(this.mainindex+ins){
        		console.log(44)
        	}
//     if(this.mainindex+)
//       var imgtu = this.posp.join(',')
//       console.log(this.input1);
//        console.log(imgtu);
//          axios.post("/usercenter/commit_suggestion?web_access=web", {
//              user_id: user_id,
//              type: 1,
//              content: this.input1,
//              images: imgtu,
//          }).then(res => {
//              if (res.data.error_code == '10003' || res.data.error_code == '10004') {
//                  this.$dialog.toast({
//                      mes: res.data.error,
//                      timeout: 1500
//                  });
//              }
//              if (res.data.success == true) {
//                  this.$dialog.toast({
//                      mes: 'Submit success, Thank you for your feedback!',
//                      timeout: 1500
//                  });
//                  setTimeout(() => {
//                      window.history.back()
//                  }, 1000);
//              }
//
//          });
        },
//      toggle() {
//          this.isShow = !this.isShow;
//          $(function() {
//              $(document).bind("click", function(e) {
//                  var target = $(e.target);
//                  if (target.closest(".pop").length == 0) {
//                      $(".pop").hide();
//                  }
//              })
//          })
//      },
//      fileClick() {
//          document.getElementById('upload_file').click()
//      },
        fileChange(el,index1) {
//      	console.log(index1);
        	this.mainindex=index1;
            if (this.imgList.length < 5) {
                setTimeout(() => {
                    var imgs = ''
                    this.imgList.forEach(function(item,key) {
                        imgs = item.file.src;
                    })
                    var param = qs.stringify({ images64: imgs });
                    service.post(api.contract + 'api/v1/common/uploadImage', param).then(res => {
                        if (res.data.code == '200') {
                            this.drawing = res.data.data.url
                            this.posp.push(this.drawing)
                        }

                    })

                }, 1000)
            
                
                
                   
                   console.log( this.imgList);
            } else {
                this.$dialog.toast({
                    mes: 'You can only add up to 5 images',
                    timeout: 1500
                });
            }
            ;

            if (!el.target.files[0].size) return;
            //
            this.fileList(el.target.files,index1);
            el.target.value = ''
        },
        fileList(files,index1) {
            for (let i = 0; i < files.length; i++) {
                this.fileAdd(files[i],index1);
            }

        },
        fileAdd(file,index1) {
//      	console.log(index1);
//        this.images = file.src
            this.size = this.size + file.size;//总大小
            let reader = new FileReader();
            reader.vue = this;
            reader.readAsDataURL(file);
            reader.onload = function() {
                file.src = this.result;
                if (this.vue.imgList.length < 5) {
                    this.vue.imgList.push({
                    	key:index1,
                        file:file
                    });
                 
                }


            }

        },
        fileDel(index) {
            this.size = this.size - this.imgList[index].file.size;//总大小
            this.imgList.splice(index, 1);

        },
//      bytesToSize(bytes) {
//          if (bytes === 0) return '0 B';
//          let k = 1000, // or 1024
//              sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
//              i = Math.floor(Math.log(bytes) / Math.log(k));
//          return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
//      },
//      dragenter(el) {
//          el.stopPropagation();
//          el.preventDefault();
//      },
//      dragover(el) {
//          el.stopPropagation();
//          el.preventDefault();
//      },
//      drop(el) {
//          el.stopPropagation();
//          el.preventDefault();
//          this.fileList(el.dataTransfer.files);
//      }
    },
    mounted() {
    	let that = this;
    	 let get_commentdetil = localStorage.getItem('commentlist');
    	  get_commentdetil = JSON.parse(get_commentdetil);
    	that.shopdetil=get_commentdetil;
    	console.log(that.shopdetil.order_goods);
    	that.shopdetil.order_goods.forEach(function(val, index) {
    		that.arrinfo.push({
    			isstate:'',
    			input1:'',
    			goods_id:val.goods_id,
    			goods_nums:val.goods_nums,
    			goods_price:val.goods_price,
    			img:val.img,
    			order_id:val.order_id,
    			product_id:val.product_id,
				real_price:val.real_price,
				seller_id:val.seller_id
    		})
    	})
    	console.log(that.arrinfo);
    }
}
</script>
