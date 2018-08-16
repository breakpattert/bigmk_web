


<style>
/* s首页头部 。。。。。。。。。。。。。。。。。。*/

.head {
    width: 100%;
    background: url(../../assets/images/not_refactoring/quota_img_banner.png) no-repeat;
    background-size: 100% 4.8rem;
    height: 4.8rem;
    /* position: fixed; */
    z-index: -1;
}

.yd-navbar-center-title {
    color: #fff !important;
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
    border-bottom-right-radius:  0.24rem;
    margin-top: 0.1rem;
    margin-left: 0.02rem;
    opacity: 0.8;
    font-size: 0.28rem;
    color: #060c30;
    position: fixed;
    top: 0.92rem;
    z-index: 9;
}


.arrows {
    position: absolute;
    right: 41%;
    top: 1.24rem;
    z-index: 10;
   
}
</style>


<template>
    <div>
        <div class="head">
            <yd-navbar title="Group buy" class="quota" style="background-color: #060c30;opacity:0.8; border-bottom: 1px solid #060c30;  position: fixed; width: 100%;    z-index: 10;    height: 48px;">
                <div to="#" slot="left" @click="skip()">
                   <i class="iconfont icon-back_"  style=" color: #ffffff;font-size: 0.48rem;"></i>
                </div>

                <div to="#" slot="right" style="margin-right: 14px;">
                    <a href="crowdordering_help.html">
                       <i class="iconfont icon-help" style=" color: #ffffff;font-size: 0.48rem;"></i>
                    </a>
                </div>
                <div to="#" slot="right">

                    <a href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&amp;t='+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');void(0)">
                       <i class="iconfont icon-share"  style=" color: #ffffff;font-size: 0.48rem;"></i>
                    </a>
                </div>
            </yd-navbar>

            <yd-rollnotice autoplay="6000" class="broadcast fadenum" id="wrapper" v-if="JSON.stringify(shift) != '[]'" style="width: 70%;">
                <yd-rollnotice-item v-for="(item,index) in shift" :key="index" >
                    <a :href="'products.html?id='+item.goods_id+'&active_id='+item.quota_activity_id+'&promo=quota'+'&quota_goods_id='+item.quota_goods_id+'&own_id='+item.own_id" style=" display:flex;align-items: center; justify-content: center;">
                        <img :src="Imgstr+item.img" :onerror="acquiescence" alt="" style=" width:0.6rem;height:0.6rem;border-radius: 50%;">
                        <span style="color:#F00;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width:0.8rem;" id='usernames'> {{item.username}} </span>
                        <span v-if="item.action=='1'" style="width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">created in the Group buy</span>
                        <span v-if="item.action=='2'" style="width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">joined in the Group buy</span>
                    </a>

                </yd-rollnotice-item>
            </yd-rollnotice>
        </div>
        <!-- <div style=" height: 250px;"></div> -->
    </div>
</template>

<script>
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            shift: [],
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
        }
    }, created() {
        this.unread()
    },
    methods: {
        skip() {
            window.history.back()
        },
        unread() {
            service.get(api.contract + 'api/v1/home/groupTipsList').then(res => {
                this.shift = res.data.data

            });

        },

    }
}
</script>
