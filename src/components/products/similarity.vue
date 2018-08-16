


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
    font-size: 0.24rem;
    color: #3d3d40;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.fever {
    height: 0.32rem;
    line-height:  0.32rem;
    font-size: 0.24rem;
    text-align: center;
    margin-bottom: 0.12rem;
    color: #fff;
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

    background-color: #f2f2f2;
    text-align: center;
    padding: 0.28rem 0 0.48rem 0;
}

.loading img {
    vertical-align: middle;
}

.etl {
    font-size: 0.28rem;
    color: #ff8f66;
}

svg path,
svg rect {
    fill: #FF6700;
}
</style>


<template>
    <div class="products" v-if="code=='200'">
        <div class="products_t">
            <img src="../../assets/images/not_refactoring/recommendproducts_icon_trimming_left.png" alt="">
            <span class="tst" style="color:#6e45f2;">You May Also Like</span>
            <img src="../../assets/images/not_refactoring/recommendproducts_icon_trimming_right.png" alt="">
        </div>
        <div id="container">
            <yd-list class="products_l" v-for="(item,index) in lonboArray" :key="index">
                <a :href="'/site/products?id='+item.id+'&promo='+item.promo+'&active_id='+item.active_id">
                    <div class="products_l_t">
                        <img :src="item.img" :onerror="acquiescence">
                    </div>
                    <div class="products_l_c">{{item.name.replace(/amp;/g, '')}}</div>
                    <yd-flexbox class="fever">
                        <div class="cod">{{item.is_shipping==1?'Free Shipping':''}}</div>
                        <div class="free">{{item.is_cashondelivery==1?'COD':''}}</div>
                    </yd-flexbox>
                    <yd-flexbox>
                        <yd-flexbox-item>
                            <h4 style="font-size: 0.32rem;color: #ff4500">₱{{item.sell_price}}</h4>
                        </yd-flexbox-item>
                        <yd-flexbox-item>
                            <h4 style="font-size: 0.24rem;color: #c2c4cc;text-align: right;">Sales:{{item.sale}}</h4>
                        </yd-flexbox-item>
                    </yd-flexbox>
                </a>
            </yd-list>

            <!--<yd-flexbox direction="vertical">
                <yd-flexbox-item class="loading">
                    <svg version="1.1" id="loader-1" x="0px" y="0px" width="0.8rem" height="0.8rem" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;vertical-align:middle;" xml:space="preserve">
                        <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
                        </path>
                    </svg>
                    <span class="etl">Loading...</span>
                </yd-flexbox-item>
            </yd-flexbox>-->
            <!--.......................................................................  -->
        </div>
    </div>
</template>

<script type="text/babel">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
            // address: address,
            lonboArray: [],
            repetition: [],
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            name: '',
            category: '',
            code: '',
        }


    }, computed: {
        ...mapGetters([
            'goods_info',
        ]),
    },
    watch: {
        goods_info() {
            this.name = this.goods_info.name
            this.category = this.goods_info.category
            this.mounted()
        }
    },
    created() {//这个方法Vue会自动调用
        // this.getCategory()


    },
    methods: {
        mounted() {
            // 缓存指针  
            let _this = this;
            // 设置一个开关来避免重负请求数据  
            let sw = true;
            // 此处使用node做了代理  
            var goods_name = _this.goods_info.name
            var goods_id = _this.goods_info.id
            service.get(api.contract + 'api/v1/group/youLike?goods_name=' + goods_name + '&goods_id=' + goods_id).then(res => {
                _this.lonboArray = res.data.data.goodsList
                _this.code = res.data.code
            })

        },



    }

}


</script>