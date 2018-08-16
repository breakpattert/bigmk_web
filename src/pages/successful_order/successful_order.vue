


<!-- 订单提交成功页............... -->
<template>
    <div>
        <!--头部-->
        <v-header></v-header>
        <v-information></v-information>
         <v-similarity></v-similarity>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/commonality/headline.vue';
import information from '../../components/successful_order/information.vue';
import similarity from '../../components/successful_order/similarity.vue';

import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            promo: '',
            nat: '',
            nature: '',
        }
    },
    components: {
        'v-header': header,
         'v-information': information,
          'v-similarity': similarity,
      
    },
    mounted() {
    //    $('.Sale').html('Order Submitted Successfully')
    //    $('.icon-back_').css('display','none')
    },
};

</script>

<style>
</style>