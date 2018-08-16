


<!-- 拼单帮助详情-->
<template>
    <div>
        <!-- 头部 -->
        <v-header></v-header>
        <!--详情-->
        <v-list></v-list>
      
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/commonality/headline.vue';
import list from '../../components/help_particulars/particulars.vue';
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

</style>