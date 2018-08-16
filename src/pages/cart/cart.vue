


<!-- 购物车............... -->
<template>
    <div>
        <!--头部-->
        <v-header></v-header>
        <!--列表-->
        <v-list></v-list>
        <!--底部-->
        <v-footer></v-footer>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/cart/header.vue';
import list from '../../components/cart/list.vue';
import footer from '../../components/commonality/footer.vue';

import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            user_id: user_id,
        }
    },
    components: {
        'v-header': header,
        'v-list': list,
        'v-footer': footer,
    },
    mounted() {
        this.__init();
    },
    methods: {
        ...mapActions([
            'toSetCartInfo'
        ]),
        __init() {
            if (user_id == null) {
                window.location.href = "/login.html"

            } else {
                service.get(api.contract + 'api/v1/cart/list').then(({ status, data }) => {
                    if (status === 200)
                        this.toSetCartInfo(data.data);
                })
            }

        }
    },
};

</script>

