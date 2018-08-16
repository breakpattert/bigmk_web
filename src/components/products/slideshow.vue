
<template>
    <div class="swiper-container">

        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in photo" :key="index">
                <a href="">
                    <img :src="item.img.replace('h_216,w_216', 'h_600,w_600')" :onerror="acquiescence">

                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <yd-rollnotice autoplay="6000" class="broadcast fadenum" id="wrapper" v-if="JSON.stringify(shift) != '[]' &&promo=='quota'" style="width: 70%;">
            <yd-rollnotice-item v-for="(item,index) in shift" :key="index">
                <a :href="'/site/products?id='+item.goods_id+'&active_id='+item.quota_activity_id+'&promo=quota'+'&quota_goods_id='+item.quota_goods_id+'&own_id='+item.own_id" style="display:flex;align-items: center; justify-content: center;">
                    <img :src="Imgstr+item.head_ico" :onerror="acquiescence" alt="" style=" width:30px;height:30px;border-radius: 50%;">
                    <span style="color:#F00;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width:40px;" id='usernames'> {{item.username}} </span>
                    <span style="width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">created in the Group buy</span>
                </a>
            </yd-rollnotice-item>
        </yd-rollnotice>
    </div>
</template>

 <script type="text/javascript">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            lonboArray: [],
            id: '',
            promo: '',
            active_id: '',
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            photo: [],
            imgs: "?x-oss-process=image/resize,m_pad,h_216,w_216",
            list: '?x-oss-process=image/resize,m_pad,h_300,w_300',
            shift: [],
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",

        }
    },
    computed: {
        ...mapGetters([
            'goods_photo', 'goods_info'
        ]),
    },
    created() {


    },
    watch: {
        goods_photo() {
            this.photo = this.goods_photo
            this.getLunboData()
        },
        goods_info() {
            this.promo = this.goods_info.promo
            this.id = this.goods_info.id
            this.unread()
        }
    },
    methods: {
        getLunboData() {
            this.$nextTick(function() {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    paginationType: 'fraction',
                    //  autoplay: 2000,

                });
            });


        },
        unread() {
            service.get(api.contract + 'api/v1/home/groupTipsList?goods_id=' + this.id).then(res => {
                this.shift = res.data.data

            });
          

        },
    }
}



</script>
<style>
.footer {
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
}

.swiper-slide {
    position: relative;
}

.swiper-slide img {
    width: 100%;
    height: 100%;
}

.swiper-container .swiper-pagination {

    background-color: #000;
    filter: alpha(Opacity=60);
    -moz-opacity: 0.6;
    opacity: 0.6;
    color: #fff;
}

.swiper-pagination {
    position: absolute;
    right: 0.2rem;
    left: 85%;
    bottom: 0.2rem;
}

.swiper-container-horizontal>.swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    width: 0.96rem;
    height: 0.48rem;
    border-radius: 0.24rem;
    font-size: 0.32rem;
    line-height: 0.48rem;
}


.swiper-container-horizontal>.swiper-pagination {
    width: 13%;
    position: absolute;
    right: 0.2rem;
    left: 85%;
    bottom: 5%;
}

.fadenum {
    -webkit-animation: fadenum 9s infinite;
    -moz-animation: fadenum 9s infinite;
    animation: fadenum 9s infinite;
}


@keyframes fadenum {

    0%,
    33.33% {
        opacity: 1;
    }

    43.33%,
    63.33% {
        opacity: 0;
    }

    73.33%,
    100% {
        opacity: 1;
    }
}



.broadcast {
    width: 75%;
    border-top-right-radius: 0.24rem;
    border-bottom-right-radius: 0.24rem;
    margin-top: 0.1rem;
    margin-left: 0.02rem;
    opacity: 0.8;
    font-size: 0.28rem;
    color: #060c30;
    position: fixed;
    top: 1.2rem;
    z-index: 9;
}
</style>
