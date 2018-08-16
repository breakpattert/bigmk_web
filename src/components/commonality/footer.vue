
<!--  底部..............   -->
<template>
    <div>
        <div class="footer">
            <yd-flexbox class="footer_l">
                <yd-flexbox-item v-for="(item,index) in arr" :key="index">
                    <a :href="item.src" :class="item.colors">
                        <yd-flexbox direction="vertical" class="ico">
                            <yd-flexbox-item>
                                <i :class="item.iconfont" class="iconfont"></i>
                            </yd-flexbox-item>
                            <yd-flexbox-item class="home" :class="item.home">{{item.name}}</yd-flexbox-item>
                        </yd-flexbox>
                    </a>
                </yd-flexbox-item>
                <span class="number">{{number}}</span>
            </yd-flexbox>
        </div>
        <div class="sky"></div>
    </div>
</template>

 <script type="text/babel">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            number: '',
            arr: [
                { iconfont: "icon-home", name: "Home", src: 'home.html', colors: 'blue' },
                { iconfont: "icon-category", name: "Categories", src: 'categorielist.html', colors: 'blue2' },
                { iconfont: "icon-cart", name: "Cart", src: 'cart.html', colors: 'blue3' },
                { iconfont: "icon-my_light", name: "Me", src: 'ucenter_index.html', colors: 'blue4' },
            ],
            current: 10,
        }
    }, created() {
        this.seek()
    },
    mounted() {
        var ulrs = window.location.href;
        if (ulrs.indexOf("home.html") > -1) {
            $('.icon-home').css('color', '#ff4500')
            $('.blue').css('color', '#ff4500')
        }
        if (ulrs.indexOf("cart.html") > -1) {
            $('.icon-cart').css('color', '#ff4500')
            $('.blue3').css('color', '#ff4500')
        }
        if (ulrs.indexOf("categorielist.html") > -1) {
            $('.icon-category').css('color', '#ff4500')
            $('.blue2').css('color', '#ff4500')
        }
        if (ulrs.indexOf("ucenter_index.html") > -1) {
            $('.icon-my_light').css('color', '#ff4500')
            $('.blue4').css('color', '#ff4500')
        }
    },
    methods: {
        addClass(index) {
            this.current = index;
        },
        seek() {

            service.get(api.contract + 'api/v1/common/getCartNum').then(res => {
                this.number = res.data.data.count
            })
            // axios.post("common/cartNum?web_access=web", {
            //     user_id: user_id,
            // }).then(res => {
            //     this.number = res.data.data.count

            // })
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
    /*color: #ff4500;*/
    padding-bottom: 0.12rem;
}

.categories {
    font-size: 0.2rem;
    color: #6d6e73;
    padding-bottom: 0.12rem;
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
    height: 0.7rem;
    background-color: #fff;
}

.footer_l .iconfont {
    font-size: 0.55rem;
    color: #6d6e73;
}

.number {
    position: absolute;
    top: -0.02rem;
    left: 64%;
    font-size: 0.24rem;
    color: #fff;
    border: 0.02rem solid #ff4500;
    border-radius: 50%;
    background-color: #ff4500;
       padding: 0px 0.05rem;
    font-weight: 900;
}
</style>
