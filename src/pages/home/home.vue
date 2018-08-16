


<!-- 首页............... -->
<template>
    <div>
        <!-- 头部 -->
        <v-header></v-header>
        <!-- 轮播图 -->
        <v-slideshow></v-slideshow>
        <!-- 拼单 -->
        <v-crowdordering></v-crowdordering>
        <!-- 限时抢购 -->
        <v-flashsale></v-flashsale>
        <!-- 分类 -->
        <v-categories></v-categories>
        <!-- 推荐店铺 -->
        <v-recommendshop></v-recommendshop>
        <!-- 推荐商品 -->
        <v-recommendproducts></v-recommendproducts>
           <!-- 底部 -->
        <v-footer></v-footer>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
import header from '../../components/home/header.vue';
import slideshow from '../../components/home/slideshow.vue';
import crowdordering from '../../components/home/crowdordering.vue';
import flashsale from '../../components/home/flashsale.vue';
import categories from '../../components/home/categories.vue';
import recommend_shop from '../../components/home/recommend_shop.vue';
import recommend_products from '../../components/home/recommend_products.vue';
import footer from '../../components/commonality/footer.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': header,
        'v-slideshow': slideshow,
        'v-crowdordering': crowdordering,
        'v-flashsale': flashsale,
        'v-categories': categories,
        'v-recommendshop': recommend_shop,
        'v-recommendproducts': recommend_products,
        'v-footer': footer,
    },
    methods: {
    }
};

</script>

