

<!-- 头部................. -->

<template>
    <div>
        <div class="flashsale_header">
            <div class="tinct ">
                <a href="javascript:history.back(-1)" class="backtrack">
                    <i class="iconfont tinct icon-back_"></i>
                </a>
            </div>
            <div class="Sale">{{title}}</div>
            <div @click="toggle()" style="flex:1;  ">
                <i class="iconfont tinct icon-more"></i>
            </div>
            <div class="Columns pop" v-show="isShow">
                <img src="../../assets/images/not_refactoring/nav_popover_more.png" style="position: fixed;top: 1rem;right: 0.34rem;z-index: 99;">
                <div style="border-bottom: 0.02rem solid #3d3d40;padding: 0.1rem 0 0.1rem 0" v-for="(item,index) in arr" :key="index" @click="addClass(index)" :class="{ blue:index==current}">
                    <a :href="item.src">
                        <i :class="[lits,item.iconfont]" style="font-size: 0.36rem;    vertical-align: middle;"></i>
                        <span style="">{{item.name}}</span>
                    </a>
                </div>
            </div>
        </div>
        <div style="height: 1rem"></div>
    </div>
</template>

<script type="text/babel">
export default {
    data() {
        return {
            isShow: false,
            arr: [
                { iconfont: "icon-home", name: "Back to Homepage", src: 'home.html' },
                { iconfont: "icon-conversation", name: "Messages", src: 'javascript:void(0)' },
                { iconfont: "icon-my_light", name: "Account Cente", src: 'javascript:void(0)' },
                { iconfont: "icon-feedback", name: "I Want Feedback", src: 'javascript:void(0)' },
            ],
            lits: 'iconfont',
            current: 10,
            title: '',
        }
    },
    mounted() {
        var ulrs = window.location.href;
        if (ulrs.indexOf("successful_order.html?marking=2") > -1) {
            this.title='Order Submitted Successfully'
            $('.backtrack').css('display','none')
        }
        if (ulrs.indexOf("successful_order.html?marking=1") > -1) {
            this.title='Order Success'
            $('.backtrack').css('display','none')
        }
         if (ulrs.indexOf("order.html") > -1) {
           console.log(235)
        }
       
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
        }
    }
}
</script>
<style>
.flashsale_header {
    /* height: 50px; */
    display: flex;
    /* font-size: 20px; */
    text-align: center;
    /* line-height: 50px; */
    position: fixed;
    width: 100%;
    z-index: 99;
    background: #fff;
    padding: 0.28rem 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid #f2f2f2;
}

.flashsale_header .tinct {
    flex: 1;
    font-size: 0.36rem;
    font-weight: 700;
}

.flashsale_header .Sale {
    flex: 8;
    font-size: 0.36rem
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
