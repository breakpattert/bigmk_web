

<!-- 限时抢购列表............... -->
<template>
    <div>
        <!-- 头部 -->
        <v-headline></v-headline>
        <!-- 列表 -->
        <v-list></v-list>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import headline from '../../components/commonality/headline.vue';
import list from '../../components/flashsale_list/list.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        'v-headline': headline,
        'v-list': list,
    },
    mounted() {
        this.headline()
    },
    methods: {
        headline() {
            $('.Sale').html("Flash Sale")
        }
    }
};

</script>

<style>

</style>