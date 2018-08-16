


<!-- 拼单列表页-->
<template>
    <div>
        <!-- 头部 -->
        <v-header></v-header>
        <!--列表-->
        <v-list></v-list>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/commonality/headline.vue';
import list from '../../components/crowdordering_help/list.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': header,
        'v-list': list,
    },
    mounted() {
       $('.Sale').html('Group buy Help Center')
    },
    methods: {
    }
};

</script>

<style>
/*@import "../../assets/allcss/iconfont.css";*/
</style>