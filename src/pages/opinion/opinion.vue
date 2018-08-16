


<!-- 拼单列表页-->
<template>
    <div>
        <!-- 头部 -->
        <v-header></v-header>
        <!--反馈-->
        <v-opinion></v-opinion>
       
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/commonality/headline.vue'
import opinion from '../../components/opinion/opinion.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': header,
        'v-opinion': opinion,
    },
    methods: {
    }
};

</script>

<style>
/*@import "../../assets/allcss/iconfont.css";*/
</style>