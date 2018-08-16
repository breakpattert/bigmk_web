
<!-- 推荐商品........................... -->
<template>
    <div class="products">
        <div class="products_t">
           	<img src="../../assets/images/not_refactoring/recommendproducts_icon_trimming_left.png" alt="" >
            <span class="tst" style="color:#6e45f2;">Recommend Products</span>
          	<img src="../../assets/images/not_refactoring/recommendproducts_icon_trimming_right.png" alt="" >
        </div>
        <!--<yd-flexbox v-if="success!=true" style="border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;background-color: #fff;">
            <yd-flexbox-item style="height: 270px;border-right: 1px solid #f2f2f2; "></yd-flexbox-item>
            <yd-flexbox-item style="height: 270px;"></yd-flexbox-item>
        </yd-flexbox>-->
        <div id="container">
            <yd-list class="products_l" v-for="(item,index) in lonboArray" :key="index">
                <a :href="'/products.html?id='+item.id+'&promo='+item.promo+'&active_id='+item.active_id">
                    <div class="products_l_t">
                        <img :src="item.img" :onerror="acquiescence">
                    </div>
                    <div class="products_l_c">{{item.name}}</div>
                    <yd-flexbox class="fever">
                        <div class="cod">{{item.is_shipping==1?'Free Shipping':''}}</div>
                        <div class="free">{{item.is_cashondelivery==1?'COD':''}}</div>
                    </yd-flexbox>
                    <yd-flexbox>
                        <yd-flexbox-item>
                            <h4 style="font-size: 16px;color: #ff4500">₱{{item.sell_price}}</h4>
                        </yd-flexbox-item>
                        <yd-flexbox-item>
                            <h4 style="font-size: 12px;color: #c2c4cc;text-align: right;">Sales:{{item.sale}}</h4>
                        </yd-flexbox-item>
                    </yd-flexbox>
                </a>
            </yd-list>

            <yd-flexbox direction="vertical">
                <yd-flexbox-item class="loading">
                    <svg version="1.1" id="loader-1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;vertical-align:middle;" xml:space="preserve">
                        <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
                        </path>
                    </svg>
                    <span class="etl">Loading...</span>
                </yd-flexbox-item>
            </yd-flexbox>
            <!--.......................................................................  -->
        </div>
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
            success: "",
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
            // address: address,
            lonboArray: [],
            repetition: [],
          	acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
        }
    },
    created() {
        this.mounted()
    },
    methods: {
        mounted() {
            // 缓存指针  
            let _this = this;
            // 设置一个开关来避免重负请求数据  
            let sw = true;
            // 此处使用node做了代理 
            service.get(api.contract + 'api/v1/home/getRecom?page=1&size=6').then(res => {
                // 将得到的数据放到vue中的data  
                _this.lonboArray = res.data.data
                _this.success = res.data.success
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
                        service.get(api.contract + 'api/v1/home/getRecom?size=6&page='+page, {
                        }).then(function(res) {
                            // 将新获取的数据push到vue中的data，就会反应到视图中了  
                            res.data.data.forEach(function(val, index) {
                                _this.lonboArray.push(val);
                                // console.log(val);  
                            });
                            // 数据更新完毕，将开关打开  
                            sw = true;
                        })
                    }
                }
            }
        }
    }

}
</script>

<style>
.products {
    background-color: #fff;
    font-weight: 700;
}

.products_t {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.96rem;
    text-align: center;
    color: #ff4500;
    font-size: 0.32rem;
    line-height: 0.96rem;
    border-top: 0.02rem solid #f2f2f2;
}

.products_l {
    border: 0.02rem solid #f2f2f2;
    padding: 0.16rem;
    border-left: none;
    border-bottom: none;
    width: 50%;
    display: inline-block;
}

.products_l_t {
    height: 3.3rem;
}

.products_l_t img {
     height: 3.3rem;
    width: 100%;
}

.products_l_c {
    line-height: 0.36rem;
    height: 0.72rem;
    text-align: left;
    margin: 0.16rem 0px 0.08rem 0;
    font-size: 0.28rem;
    color: #3d3d40;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.fever {
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: 0.24rem;
    text-align: center;
    margin-bottom: 0.12rem;
    color: #fff;
}

.cod {
    margin-right: 0.08rem;
    background: linear-gradient(to right, #ff7600, #ff4700);
    padding: 0px 0.06rem;
    border-radius:0.02rem ;
}

.free {
    background: linear-gradient(to right, #ff7600, #ff4700);
     padding: 0px 0.06rem;
    border-radius:0.02rem ;
}

.loading {

    background-color: #f2f2f2;
    text-align: center;
    padding: 0.28rem 0 0.28rem 0;
}

.loading img {
    vertical-align: middle;
}

.etl {
    font-size:0.28rem;
    color: #ff8f66;
}

svg path,
svg rect {
    fill: #FF6700;
}
</style>