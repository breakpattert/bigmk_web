
<!--  底部..............   -->
<template>
    <div>
        <div class="footer">
            <yd-flexbox class="footer_l">
                <yd-flexbox-item>
                    <a href="./home.html">
                        <yd-flexbox direction="vertical" class="ico">
                            <yd-flexbox-item>
                                <i class="iconfont icon-home_fill" style="color: #ff4500;"></i>
                            </yd-flexbox-item>
                            <yd-flexbox-item class="home">Home</yd-flexbox-item>
                        </yd-flexbox>
                    </a>
                </yd-flexbox-item>

                <yd-flexbox-item>
                    <yd-flexbox direction="vertical" class="ico">
                        <a href="./categorielist.html">
                            <yd-flexbox-item>
                                <i class="iconfont icon-category"></i>
                            </yd-flexbox-item>
                            <yd-flexbox-item class="categories">Categories</yd-flexbox-item>
                        </a>

                    </yd-flexbox>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <yd-flexbox direction="vertical" class="ico">
                        <yd-flexbox-item class="count">
                            <a href="./cart.html">
                                <i class="iconfont icon-cart"></i>
                                <!--<span v-if="number!=0 && number !=undefined">{{number}}</span>-->
                            </a>
                        </yd-flexbox-item>
                        <yd-flexbox-item class="categories">Cart</yd-flexbox-item>
                    </yd-flexbox>
                </yd-flexbox-item>
                <!-- <yd-flexbox-item>
                    <yd-flexbox direction="vertical" class="ico">
                        <a href="/ucenter/favorite">
                            <yd-flexbox-item>
                                <i class="iconfont">&#xe7ce;</i>
                            </yd-flexbox-item>
                            <yd-flexbox-item class="categories">Favorites</yd-flexbox-item>
                        </a>
                    </yd-flexbox>
                </yd-flexbox-item> -->
                <yd-flexbox-item>
                    <yd-flexbox direction="vertical" class="ico">
                        <a href="./ucenter_index.html">
                            <yd-flexbox-item>
                                <i class="iconfont icon-my_light"></i>
                            </yd-flexbox-item>
                            <yd-flexbox-item class="categories">Me</yd-flexbox-item>
                        </a>

                    </yd-flexbox>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
        <div class="sky"></div>
    </div>
</template>

 <script type="text/babel">

export default {
    data() {
        return {
            number: '',
        }
    }, created() {
        // this.seek()
    },

    methods: {
        seek() {
            axios.post("common/cartNum?web_access=web", {
                user_id: user_id,
            }).then(res => {
                this.number = res.data.data.count

            })
        },

    }
}
</script>



<style>
/* 底部 */

.footer {
    width: 100%;
    position: fixed;
    z-index: 10;
    bottom: 0px;
    font-weight: 700;
    background-color: #fff;
    border-top: 0.02rem solid #dcdde0;
    padding-top: 0.1rem;
}

.ico {
    text-align: center;
}

.home {
    /* margin-top: 4px; */
    font-size: 0.2rem;
    color: #ff4500;
    padding-bottom: 0.12rem;
}

.categories {
    font-size: 0.2rem;
    color: #6d6e73;
    padding-bottom:0.12rem;
}

.count {
    position: relative;
}

.count span {
    position: absolute;
    top: -0.04rem;
    right: 0.24rem;
    font-size: 0.24rem;
    color: #ff4500;
    border: 0.02rem solid #ff4500;
    border-radius: 40%;
    /* padding: 0.5px 3px; */
    font-weight: 900;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
}

.sky {
    height:0.7rem;
    background-color: #fff;
}

.footer_l .iconfont {
    font-size: 0.55rem;
    color: #6d6e73;
}


</style>
