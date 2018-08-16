
   <!-- 头部 ..............      -->
<template>
    <div>
        <yd-flexbox class="herades">
            <div class="arrows" @click="skip">

                <i class="iconfont icon-back_" style="font-size: 0.36rem;font-weight: 700;"></i>

            </div>
            <yd-flexbox-item class="details">Product Details</yd-flexbox-item>
            <div class="superior" v-if="promo=='quota'">
                <a href="crowdordering_help.html">
                    <i class="iconfont icon-help" style="font-size:0.48rem;"></i>
                </a>
            </div>
            <div class="superior">
                <a href="cart.html">
                    <i class="iconfont icon-cart" style="font-size: 0.48rem;"></i>
                    <!--<div class="number" v-if="number!=0 && number!=undefined ">{{number}}</div>-->
                </a>
            </div>
            <div @click="toggle()">
                <i class="iconfont icon-more" style="font-size: 0.36rem;font-weight: 700;"></i>
            </div>

        </yd-flexbox>
        <div class="Columns pop" v-show="isShow">
            <img src="../../assets/images/not_refactoring/nav_popover_more.png" style="position: fixed;top: 1rem;right: 0.34rem;z-index: 99;">
            <div style="border-bottom: 0.02rem solid #3d3d40;padding: 0.1rem 0 0.1rem 0" v-for="(item,index) in arr" :key="index" @click="addClass(index)" :class="{ blue:index==current}">
                <a href="javascript:void(0)">
                    <i :class="[lits,item.iconfont]" style="font-size: 0.36rem;    vertical-align: middle;"></i>
                    <span style="">{{item.name}}</span>
                </a>
            </div>
        </div>
        <div style=" height: 1rem;"></div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            number: [],
            promo: '',
            isShow: false,
            id: '',
            active_id: '',
            goods_id: '',
            panelShow: true,
            arr: [
                { iconfont: "icon-home", name: "Back to Homepage" },
                { iconfont: "icon-conversation", name: "Messages" },
                { iconfont: "icon-my_light", name: "Account Cente" },
                { iconfont: "icon-feedback", name: "I Want Feedback" },
            ],
            lits: 'iconfont',
            current: 10,
        }
    },
    created() {
        this.seek()
    },

    methods: {
        addClass(index) {
            this.current = index;
        },
        toggle() {
            this.isShow = !this.isShow;
            $(function() {
                $(document).bind("click", function(e) {
                    var target = $(e.target);
                    if (target.closest(".pop").length == 0) {
                        $(".pop").hide();
                    }
                })
            })
        },
        skip() {
            window.history.back()
        },
        seek() {
            var ulrs = window.location.href;
            var _this = this
            var url = location.search; //获取url中"?"符后的字串 
            var theRequest = {};
            if (url.indexOf("?") != -1) {
                var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                }
            }
            _this.promo = theRequest.promo
        },
    }

}
</script>



<style>
.herades {
    width: 100%;
    position: fixed;
    z-index: 10;
    font-size: 0.36rem;
    background-color: #ffffff;
    text-align: center;
    padding: 0.2rem 0.28rem;
    top: 0px;
    border-bottom: 0.02rem solid #f2f2f2;
}

.superior {
    position: relative;
}

.superior .number {
    position: absolute;
    top: -0.06rem;
    right: 0.14rem;
    font-size: 0.24rem;
    color: #fff;
    border-radius: 0.14rem;
    background-color: #ff4500;
    padding: 0.02rem 0.08rem;
}

.arrows img {
    height: 0.48rem;
    width: 0.48rem;
}

.details {
    font-size: 0.36rem;
    color: #3d3d40;
}

.superior {
    margin-right: 0.08rem;
}

.Columns {
    position: fixed;
    z-index: 10;
    top: 1.1rem;
    right: 0.2rem;
    width: 3.22rem;
    height: 3.2rem;
    background-color: #2c2c2e;
    border-radius: 0.2rem;
    padding: 0px 0.2rem 0.2rem 0.2rem;
    font-size: 14px;
    color: #fff;
    text-align: left;
    line-height: 0.5rem;
}

.numb {
    position: absolute;
    top: 1.4rem;
    right: 2.2rem;
    font-size: 0.24rem;
    color: #fff;
    border-radius: 0.14rem;
    background-color: #ff4500;
    padding: 0.02rem 0.08rem;
}



.blue {
    color: #ffe4cc !important;
}


.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>

