

<style>
/* 购物车头部 。。。。。。。。。。。。。。。。。。*/

.header {
    padding: 0.5rem 0px;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index:10;
    height: 0.6rem;
    background: linear-gradient(to right, #ff7600, #ff4700);
    font-weight: 700;
}

.enter {
    text-align: center;
    font-size: 0.36rem;
    color: #fff;
    /* margin-left: 10%; */
}

.header_r {
    margin-right: 0.28rem;
    position: relative;
}

.information {
    background-color: #fff;
    font-size: 0.2rem;
    color: #ff4500;
    border-radius: 50%;
    padding: 0.08rem;
    position: absolute;
    top: -0.2rem;
    right: -0.18rem;
}
</style>


<template>
    <div>
        <yd-flexbox class="header">
            <div class="tinct">
                <a href="javascript:history.back(-1)">
                    <!-- <i class="iconfont tinct" style="font-size: 22px;font-weight: 700;color: #fff;margin-left: 10px;">&#xe628;</i> -->
                </a>
            </div>
            <yd-flexbox-item class="enter">
                Cart
            </yd-flexbox-item>
            <div class="header_r" style="transform: rotate(90deg);" @click="toggle()">
                <!-- <i class="iconfont tinct" style="font-size: 22px;font-weight: 700;color: #fff;">&#xe65c;</i> -->
                <!-- <a href="/ucenter/message">
                        <img src="../../../assets/images/wap_index/nav_icon_message_default.png" alt="">
                        <div class="information">{{recommend.count}}</div>
                    </a> -->
            </div>
         
        </yd-flexbox>
        <div style="height: 50px;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recommend: [],
            isShow: false,
        }
    }, created() {
      
    },
    methods: {
     

    }
}
</script>

