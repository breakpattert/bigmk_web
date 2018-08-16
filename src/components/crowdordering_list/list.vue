

 

<template>
    <div>
        <div id="tab">
            <!-- 导航 -->

            <!-- 内容 -->
            <div class="tab_content" style=" ">
                <!-- 根据curId的值显示div,分别对应 -->
                <!-- <div v-for="(item,index) in recommend" :key="index"  v-show="curId==index">Home Content</div> -->
                <div class="products">
                    <div id="container">
                        <yd-list class="products_l" v-for="(item,index) in lonboArray" :key="index">
                            <a :href="'products.html?id='+item.goods_id+'&active_id='+access+'&promo=quota'+'&quota_goods_id='+item.quota_goods_id">
                                <div class="products_l_t">
                                    <img :src="Imgstr+item.img " :onerror="acquiescence">
                                </div>
                                <div class="products_l_c">{{item.goods_name}}</div>
                                <yd-flexbox class="fever">
                                    <div class="cod">{{item.is_cashondelivery==1?'COD':''}}</div>
                                    <div class="free">{{item.is_shipping==1?'Free Shipping':''}}</div>
                                </yd-flexbox>
                                <yd-flexbox style="margin-left: 10px; margin-bottom: 10px;">
                                    <yd-flexbox-item>
                                        <h4 style="font-size: 16px;color: #ff4500">₱{{item.quota_price}}</h4>
                                    </yd-flexbox-item>
                                    <yd-flexbox-item>
                                        <h4 style="font-size: 12px;color: #c2c4cc;text-decoration:line-through">₱{{item.market_price}}</h4>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            lonboArray: [],
            recommend: [],
            variable: 0,
            length: '',
            activeColor: 100,
            state: [],
            curId: 0,
            node: '',
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
            access: '',
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
        }
    },
    created() {
        // this.tabs()
        this.flash()
        // this.mounted()

    }, mounted() {
        // window.addEventListener('scroll', this.handleScroll)
    }, watch: {

    },
    methods: {
        flash() {

            // 缓存指针  
            let _this = this;

            // 设置一个开关来避免重负请求数据  
            let sw = true;

            // 显示默认拼单列表
            // var active_id = _this.recommend[0].id
            service.get(api.contract + 'api/v1/home/groupList?pageSize=6&page=1').then(function(res) {
                // 将得到的数据放到vue中的data  
                _this.lonboArray = res.data.data
            })
            // 注册scroll事件并监听 
            var page = 1
            window.onscroll = function() {
                var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
                var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
                if (a + b == c) {
                    //    如果开关打开则加载数据  
                    if (sw == true) {
                        // 将开关关闭  
                        sw = false;
                        page++
                        service.get(api.contract + 'api/v1/home/groupList?pageSize=6&page=' + page).then(function(res) {
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
        },


    }

}
</script>
 <style>
.swiper1 {
    width: 100%;
}

.swiper1 .selected {

    background-color: #3d3d40;
}

.swiper1 .swiper-slide {
    text-align: center;
    height: 0.96rem;
    ;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    cursor: pointer;
}

.swiper2 .swiper-slide {
    text-align: center;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
}

.swiper-wrapper .borders {
    border-right: 0.02rem solid #f2f2f2;
}

.dec {
    color: #3d3d40;
    background-color: #fff;
    font-size: 0.32rem;
    font-weight: 700;
    padding: 0.1rem 0 0.04rem 0;
}

.selected .nov {
    font-size: 0.32rem;
    color: #fff;
    padding: 0.1rem 0 0.04rem 0;
    background-color: #3d3d40;
}

.selected .ongoing {
    background-color: #fff;
    color: #3d3d40;
    font-size: 0.2rem;
    padding: 0.02rem 0.08rem;
    border-radius: 0.16rem;
}

.products {
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
    margin: 1%;
    /* border: 1px solid #f2f2f2; */
    border-left: none;
    border-bottom: none;
    width: 48%;
    display: inline-block;
    background-color: #313652;
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
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-left: 0.2rem;
    word-wrap: break-word;
}

.fever {
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: 0.24rem;
    text-align: center;
    margin-bottom: 0.12rem;
    color: #fff;
    margin-left: 0.2rem;
}

.cod {
    margin-right: 0.08rem;
    background: linear-gradient(to right, #ff7600, #ff4700);
    padding: 0px 0.06rem;
    border-radius: 0.02rem;
}

.free {
    background: linear-gradient(to right, #ff7600, #ff4700);
    padding: 0px 0.06rem;
    border-radius: 0.02rem;
}

.loading {


    text-align: center;
    padding: 0.28rem 0 0.48rem 0;
}

.loading img {
    vertical-align: middle;
}

.etl {
    font-size: 0.28rem;
    color: #5a6499;
}

#tab {
    background: url(../../assets/images/not_refactoring/quota_bg_2800.png);
    background-size: 100%;
    margin: 0 auto;
}

.tab_title {
    font-size: 0;
    /*有间隙*/
    width: 100%;
    height: 0.96rem;
    overflow-x: scroll;
    /* 内容会被裁剪，会以滚动条显示 */
    overflow-y: hidden;
    /* 超出内容不可见 */
    white-space: nowrap;
}

.tab_title div {
    display: inline-block;
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.32rem;
    width: 40%;
    text-align: center;
    background-color: #ff8a00;
    color: #fff;
    text-decoration: none;
    margin-right: 0.02rem;
    /* back */
}

.tab_title .cur {
    background: #843fff;
    color: #fff;
}
svg path,
svg rect {
    fill: #FF6700;
}
</style>
