


<!-- 产品页............... -->
<template>
    <div>
        <!--头部-->
        <v-header></v-header>
        <!--轮播图-->
        <v-slideshow></v-slideshow>
        <!-- 倒计时 -->
        <v-countdown></v-countdown>
        <!--选项 （规格、运费计算、优惠券）-->
        <v-option></v-option>
        <!-- 产品说明 -->
        <v-description></v-description>
        <!-- 评论 -->
        <v-feedbacks></v-feedbacks>
        <!-- 相似产品 -->
        <v-similarity></v-similarity>
        <!-- 普通商品底部 -->
        <v-footer></v-footer>
          <!-- 限时商品、拼单商品底部 -->
        <v-footers></v-footers>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/products/header.vue';
import slideshow from '../../components/products/slideshow.vue';
import countdown from '../../components/products/countdown.vue';
import option from '../../components/products/option.vue';
import description from '../../components/products/description.vue';
import feedbacks from '../../components/products/feedbacks.vue';
import similarity from '../../components/products/similarity.vue';
import footer from '../../components/products/footer.vue';
import footers from '../../components/products/footers.vue';

import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapActions } from 'vuex'
export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': header,
        'v-slideshow': slideshow,
        'v-countdown': countdown,
        'v-option': option,
        'v-description': description,
        'v-feedbacks': feedbacks,
        'v-similarity': similarity,
        'v-footer': footer,
        'v-footers': footers,
    },
    created() {
        this.details()
    },

    methods: {
        ...mapActions([
            'toSetGoodsInfo'
        ]),
        details() {
            var ulrs = window.location.href;
            var _this = this
            var url = location.search; //获取url中"?"符后的字串 
            var theRequest = {};
            if (url.indexOf("?") != -1) {
                var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                }
            }
            var param = qs.stringify({ id: theRequest.id });
            service.post(api.contract + 'api/v1/goods/goodsInfo', param).then(({ status, data }) => {
                if (status === 200)
                    _this.toSetGoodsInfo(data.data);
            })

        }
    }
};

</script>

<style>
/*@import "../../assets/allcss/iconfont.css";*/
</style>