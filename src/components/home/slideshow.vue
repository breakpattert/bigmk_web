

<!-- // 轮播图 -->
<template>
    <yd-slider autoplay="3000">
        <yd-slider-item v-for="(item,index) in lonboArray" :key="index">
            <a :href="'/'" v-if="item.type==''">
                <img :src="item.img" :onerror="acquiescence">
            </a>
            <a :href="'/'+item.homename.replace(/ /g,'_')" v-if="item.type=='home'">
                <img :src="item.img" :onerror="acquiescence">
            </a>
            <a :href="'/site/products?id='+item.id+'&promo='+item.promo+'&active_id='+item.active_id" v-if="item.type=='products'">
                <img :src="item.img" :onerror="acquiescence">
            </a>
            <a :href="'/site/p_list/search/'+item.id" v-if="item.type=='pro_list' || item.type=='search_list'">
                <img :src="item.img" :onerror="acquiescence">
            </a>
        </yd-slider-item>
    </yd-slider>
</template>

<script type="text/babel">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            lonboArray: [],
           acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            //  status:'',
        }
    },
    created() {//这个方法Vue会自动调用
        this.getLunboData()
    },
    methods: {
        getLunboData() {
            service.get(api.contract + 'api/v1/home/banner').then(res => {
                this.lonboArray = res.data.data
            })
        }
    }

}
</script>
<style>
/* 轮播图 */

.slideshow {
    /* margin-top: 1rem; */
    height: 3.74rem;
}
.yd-slider-item{
     height: 3.74rem;;
}
.yd-slider-item img{
    height: 3.74rem;
}
</style>