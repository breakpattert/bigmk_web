


<!-- 下单页............... -->
<template>
    <div>
        <!--头部-->
        <v-header></v-header>
        <!--用户信息-->
        <v-userinfo></v-userinfo>
        <!--订单明细(普通商品、限时抢购)-->
        <div v-if="nature !='3'">
            <v-details></v-details>
        </div>
        <!--订单明细(拼单)-->
        <div v-if="nature =='3'">
            <v-qutu></v-qutu>
        </div>

    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/commonality/headline.vue';
import userinfo from '../../components/order/userinfo.vue';
import details from '../../components/order/details.vue';
import qutu from '../../components/order/qutu.vue';

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
        'v-userinfo': userinfo,
        'v-details': details,
        'v-qutu': qutu,
    },
    created() {
        this.__init()
    },
    mounted() {
       
    },
    methods: {
        ...mapActions([
            'toCart2Info'
        ]),
        __init() {
            var argumen = JSON.parse(localStorage.getItem('str1'));
            this.nature = argumen.nature
            //    普通商品详情到下单
            if (argumen.nature == 1) {
                if (argumen.promo == 'time') {
                    var param = qs.stringify({ id: argumen.id, type: argumen.type, num: argumen.result, promo: argumen.promo, active_id: argumen.active_id, });
                    service.post(api.contract + 'api/v1/goods/buyNow', param).then(({ status, data }) => {
                        if ({ status, data }.data.success == false) {
                            var error = { status, data }.data.error
                            this.$dialog.toast({
                                mes: error,
                                timeout: 5000
                            });

                        }
                        if ({ status, data }.data.data.promo == '') {
                            this.$store.state.promo = 'promos'
                        } else {
                            this.$store.state.promo = { status, data }.data.data.promo
                        }

                        // if (status === 200 && data.success === true)
                        this.toCart2Info(data.data)
                    })
                } else {
                    var param = qs.stringify({ id: argumen.id, type: argumen.type, num: argumen.result, });
                    service.post(api.contract + 'api/v1/goods/buyNow', param).then(({ status, data }) => {
                        if ({ status, data }.data.success == false) {
                            var error = { status, data }.data.error
                            this.$dialog.toast({
                                mes: error,
                                timeout: 5000
                            });

                        }
                        if ({ status, data }.data.data.promo == '') {
                            this.$store.state.promo = 'promos'
                        } else {
                            this.$store.state.promo = { status, data }.data.data.promo
                        }

                        // if (status === 200 && data.success === true)
                        this.toCart2Info(data.data)
                    })
                }


            }
            // 拼单商品详情到下单
            if (argumen.nature == 3) {
                if (argumen.products_id == '' || argumen.products_id == undefined) {
                    var param = qs.stringify({ quota_goods_id: argumen.quota_goods_id, products_id: '', num: argumen.num, });
                    service.get(api.contract + 'api/v1/group/groupOrderGoods?quota_goods_id=' + argumen.quota_goods_id + "&products_id=''" + '&num=' + argumen.num).then(({ status, data }) => {
                        this.$store.state.quotas = ({ status, data }).data.data
                        this.$store.state.promo = 'quota'
                    })

                } else {
                    var param = qs.stringify({ quota_goods_id: argumen.quota_goods_id, products_id: argumen.products_id, num: argumen.num, });
                    service.get(api.contract + 'api/v1/group/groupOrderGoods?quota_goods_id=' + argumen.quota_goods_id + '&products_id=' + argumen.products_id + '&num=' + argumen.num).then(({ status, data }) => {
                        this.$store.state.quotas = ({ status, data }).data.data
                        this.$store.state.promo = 'quota'
                    })

                }


            }
            // 购物车到下单
            if (argumen.nature == 0) {
                let cart2 = localStorage.getItem('cart2');
                var param = qs.stringify({ jsonData: cart2 });
                service.post(api.contract + 'api/v1/cart/cartCheckOut', param).then(({ status, data }) => {
                    if ({ status, data }.data.code != 200) {
                        var error = { status, data }.data.error
                        this.$dialog.toast({
                            mes: error,
                            timeout: 5000
                        });

                    }
                    if ({ status, data }.data.data.promo == '') {
                        this.$store.state.promo = 'promos'
                    } else {
                        this.$store.state.promo = { status, data }.data.data.promo
                    }
                    this.toCart2Info(data.data)
                })


            }





        }
    }
};

</script>

<style>

</style>