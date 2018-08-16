



<style>
.description {
    background-color: #fff;
}

.headline {
    font-size: 0.28rem;
    color: #3d3d40;
    border-bottom: 0.02rem solid black;
    padding-left: 0.28rem;
    line-height: 0.96rem;
}

.feedback {
    background-color: #fff;
}

.feedback .headline {
    line-height: 0.96rem;
    font-size: 0.28rem;
    color: #3d3d40;
    padding-left: 0.28rem;
    border-bottom: 0.02rem solid #f2f2f2;
}

.feedback_t {
    padding: 6px 0.28rem 0.28rem 0.28rem;
}

.feedback_t .star {
    text-align: right;
}

.buddha img {
    width: 0.62rem;
    height:  0.62rem;
    margin-right: 0.16rem;
}

.names {
    font-size: 0.28rem;
    color: #6d6e73;
    margin-right: 0.16rem;
    line-height: 0.36rem;
}

.content {
    padding: 0 0.28rem;
    font-size: 0.28rem;
    color: #3d3d40;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.time {
    font-size: 0.24rem;
    color: #96989e;
    padding: 0.08rem 0.28rem 0.28rem 0.28rem;
    border-bottom: 1px solid #f2f2f2;
}

.blueprint {
    padding: 0.08rem 0.28rem;
}

.blueprint img {
    height: 1rem;
    width: 1rem;
}

.seeall {
    font-size: 0.28rem;
    border: 0.02rem solid #ff4500;
    border-radius: 0.28rem;
    padding: 0.16rem 0.72rem;
    margin: 0.2rem 0;
    color: #ff4500;
}

.description img {
      width: 100% !important;
    height: 100% !important;
}
.description p{
        word-break: break-all;
}
</style>


<template>
    <div  v-if="descr !=''">
        <!-- 产品说明 -->
        <yd-flexbox direction="vertical" class="description">
            <yd-flexbox-item class="headline" style="    border-bottom: 1px solid #f2f2f2">Description</yd-flexbox-item>
            <yd-flexbox-item v-html="descr" class="typicture" ></yd-flexbox-item>
            <!-- <yd-flexbox-item class="headline">文字</yd-flexbox-item>
                <yd-flexbox-item class="Commoditypicture">图片</yd-flexbox-item> -->
        </yd-flexbox>

        <div class="division"></div>
    </div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            descr:'',
        }
    },
    created() {

    },
    computed: {
        ...mapGetters([
            'goods_info',

        ]),

    },
    watch: {
        goods_info() {
         this.descr=this.goods_info.content
        
        }

    },
    methods: {

    }
}



</script>