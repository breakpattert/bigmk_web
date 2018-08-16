

<!-- // 首页头部搜索 -->
<template>
    <yd-flexbox class="header">
        <!-- <div class="header_l"><img src="../../../assets/images/wap_index/nav_image_logo.png" alt=""></div> -->
        <yd-flexbox-item class="enter" style="    padding: 0px 14px;">
            <input type="text" @keyup="show($event)" placeholder="Search in Bigmk" class="seek" id="myText" v-model="myVal" style="padding-left: 30px;border-radius: 16px;">
            <a :href="'/site/p_list/search/'+myVal">
                <i class="iconfont ti">&#xe650;</i>
            </a>
        </yd-flexbox-item>
        <!-- <div class="header_r">
                        <img src="~assets/images/wap_index/nav_icon_message_default.png" alt="">
                        <div class="number">{{recommend.count}}</div>
                    </div>  -->
    </yd-flexbox>
</template>

<script>

export default {
    data() {
        return {
            recommend: [],
            myVal: null,
            myCount: [],
            scrollTop: '',
        }
    }, created() {
        // this.unread()

    }, mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > '128') {
                $('.header').css('background', 'linear-gradient(to right, #ff7600, #ff4700)')
                // $('.seek').css('background', 'linear-gradient(to right, #ff8b33, #ff6f33)')
            } else {
                $('.header').css('background', 'none')
                // $('.seek').css('background', '#fff')
            }
        },
        unread() {
            var _this = this
            axios.post("common/message?web_access=web", {
                user_id: user_id,
            }).then(res => {
                // console.log(res)
                _this.recommend = res.data.data
            })
            // window.onload = function() {
            //     $('#myText').bind('keypress', function(event) {
            //         if (event.keyCode == "13") {
            //            
            //         }
            //     })

            // }

        }, show(ev) {
            var _this = this
            if (ev.keyCode == 13) {
                window.location.href = "/site/p_list/search/" + _this.myVal;

            }
        }

    }
}
</script>
<style>
/* s首页头部 。。。。。。。。。。。。。。。。。。*/

.header {
    padding: 0.2rem 0px;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 10;
    /*height: 30px;*/
    background: linear-gradient(to right, #ff7600, #ff4700);
    font-weight: 700;
}

.header_l {
    margin-left: 0.24rem;
}

.header_c {
    position: relative;
}

.header_r {
    margin-right: 0.24rem;
}

.seek {
    background-color: #fff;
    height: 0.6rem;
    width: 100%;
    /* background: linear-gradient(to right, #ff8b33, #ff6f33); */
    border: none;
    /* margin-left: 0.4rem; */
    padding-left: 0.6rem;
    opacity: 0.8;
}

.ti {
    position: absolute;
    top: 0.36rem;
    left: 0.6rem;
    font-size: 0.36rem;
    color: #6d6e73;
}

.header_r {
    position: relative;
}

.header_r .number {
    position: absolute;
    top: 0.06rem;
    right: 0.28rem;
    font-size: 0.24rem;
    color: #fff;
    border-radius: 0.14rem;
    background-color: #ff4500;
    padding: 0.02rem 0.08rem;
}

.seek::-webkit-input-placeholder {
    color: #6d6e73;
    font-size: 0.28rem;
    text-align: center;
    padding-right: 0.6rem;
}
</style>


