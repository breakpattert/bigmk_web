


<!-- 评论页............... -->
<template>
    <div>
        <!--头部-->
        <v-header></v-header>
        <!--评论列表-->
        <v-feedback></v-feedback>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/commonality/headline.vue';
import feedback from '../../components/discuss/feedback.vue';

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
        'v-feedback': feedback,
    },
    created() {
        // this.details()
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