

<template>
    <div class="container">
        <div class="">
            <div style="text-align: center;  width: 100%;overflow: scroll;white-space: nowrap;">
                <div class=" borders lists" id="whis" v-for="(item,index) in recommend" :key="index" @click="currentTab(item,index)" :class="{selected:index==variable}" :style="{width: activeColor+'%'}">
                    <div class="dec nov">{{item.etime}}</div>
                    <span class="ongoings ongoing">On-going</span>
                </div>
            </div>
        </div>
        <!-- swiper2 -->
        <div class="swiper-container swiper2">
            <div class="swiper-wrapper" id="swip">
                <div class="swiper-slide swiper-no-swiping">
                    <div class="chinesenew">
                        <div class="year">
                            <img src="../../assets/images/not_refactoring/recommendproducts_icon_trimming_left.png" alt="">
                            <span class="tst">{{aliasname}}</span>
                            <img src="../../assets/images/not_refactoring/recommendproducts_icon_trimming_right.png" alt="">
                        </div>
                        <yd-flexbox-item class="calculagraph" style="font-size: 14px;    height: 30px;">
                            <!-- 计时器 -->
                            <!-- 未开始倒计时 -->
                            <!-- Ends in  HH:MM:SS离开始时间小于24小时 -->
                            <div v-if="conclude >0">
                                <span style="color:#ff4500;padding: 5px;font-size: 16px;display: inline-block;">Start in:</span>
                                <span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
                                <span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
                                <span class="clocks">{{min}}</span>&nbsp;:
                                <span class="clocks">{{sec}}</span>
                            </div>
                            <!-- 开始倒计时 -->
                            <!-- Ends in  HH:MM:SS离结束时间小于24小时 -->
                            <div v-if=" initiates >0">
                                <span style="color:#ff4500;padding: 5px;font-size: 16px;">Ends in:</span>
                                <span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
                                <span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
                                <span class="clocks">{{min}}</span>&nbsp;:
                                <span class="clocks">{{sec}}</span>
                            </div>
                        </yd-flexbox-item>
                    </div>
                    <!-- 商品列表 -->
                    <div v-for="(item,index) in iflashbuy.promotionList" :key="index" class="list">
                        <yd-list theme="4" class="tabulation">
                            <yd-list-item :href="'products.html?id='+item.goods_id+'&promo=time'">
                                <img slot="img" :src="item.img" :onerror="acquiescence">
                                <span slot="title" class="multitool">{{item.goods_name.replace(/amp;/g, '')}}</span>
                                <yd-list-other slot="other">
                                    <div>
                                        <yd-flexbox>
                                            <yd-flexbox-item>
                                                <h4 style="font-size: 16px;color: #ff4500">₱{{item.award_value}}</h4>
                                            </yd-flexbox-item>
                                            <yd-flexbox-item>
                                                <h4 style="font-size: 12px;color: #c2c4cc;text-decoration:line-through;margin-left: 8px;">₱{{item.market_price}}</h4>
                                            </yd-flexbox-item>
                                        </yd-flexbox>
                                        <div class="pmgressbar">
                                            <div class="strip" id="strip" :style="'width:'+(parseInt((item.sold_num))/parseInt((item.max_num)))*100 +'%'"></div>
                                            <span class="price">{{item.sold_num}}/{{item.max_num}}</span>
                                        </div>
                                    </div>
                                    <div class="purchase">Buy Now</div>
                                </yd-list-other>
                            </yd-list-item>
                        </yd-list>

                    </div>
                    <div class="characteristic">No more products yet</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script type="text/javascript">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            recommend: [],
            iflashbuy: [],
            id: '',
            variable: 0,
            length: '',
            activeColor: 100,
            day: "",
            hour: "",
            min: null,
            sec: null,
            conclude: '',
            initiates: '',
            when: '',
            reg: "",
            minst: "",
            aliasname: '',
            start_time: '',
            end_time: '',
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
        }
    },
    created() {
        // this.tabs()
        this.flash()

    },
    methods: {
        // 活动对应的商品列表信息
        currentTab(node, num) {
            this.aliasname = node.aliasname
            this.start_time = node.start_time
            this.end_time = node.end_time
            this.nowtime = node.nowtime
            this.id = node.id
            var that = this
            var start_time = that.start_time
            var end_time = that.end_time
            var nowtime = that.nowtime.replace(/-/g, '/')
            service.get(api.contract + 'api/v1/home/flashSaleCate', {
            }).then(res => {
                that.minst = nowtime
                var msts = that.minst
                var t2 = new Date(msts);
                var t1 = new Date(end_time);
                var t3 = new Date(start_time);
                // 后台返回当前时间
                var now = Date.parse(that.minst) / 1000;
                // 活动未开始倒计时
                if (Date.parse(t3) - Date.parse(t2) > 0) {
                    that.conclude = Date.parse(t3) - Date.parse(t2)
                    that.when = start_time.replace(/-/g, '/')
                    showTime();
                    var timer = setInterval(showTime, 1000);
                    function showTime() {
                        var end = Date.parse(that.when) / 1000;
                        now++
                        // 计算差值  

                        var offset = Math.floor((end - now));//毫秒  

                        if (offset <= 0) {
                            // 清除定时器  
                            clearInterval(timer);
                        }
                        var sec = offset % 60;
                        var min = Math.floor(offset / 60) % 60;
                        var hour = Math.floor(offset / 60 / 60) % 24;
                        var day = Math.floor(offset / 60 / 60 / 24);

                        that.sec = sec < 10 ? '0' + sec : sec;
                        that.min = min < 10 ? '0' + min : min;
                        that.hour = parseFloat((hour < 10 ? '0' + hour : hour)) + parseFloat(day * 24)
                        that.day = day < 10 ? '0' + day : day;
                             
                    }


                }
                // 活动开始倒计时

                if ((Date.parse(t3) - Date.parse(t2) <= 0)) {
                    that.initiates = Date.parse(t1) - Date.parse(t2)
                    if (Date.parse(t1) - Date.parse(t2) > 0) {

                        that.when = end_time.replace(/-/g, '/')
                        showTime();
                        var timer = setInterval(showTime, 1000);
                        function showTime() {
                            // 活动结束时间
                            var end = Date.parse(that.when) / 1000;
                            now++
                            // 计算差值  
                            var offset = Math.floor((end - now));//毫秒  

                            if (offset <= 0) {
                                // 清除定时器  
                                clearInterval(timer);
                            }

                            var sec = offset % 60;
                            var min = Math.floor(offset / 60) % 60;
                            var hour = Math.floor(offset / 60 / 60) % 24;
                            var day = Math.floor(offset / 60 / 60 / 24);

                            that.sec = sec < 10 ? '0' + sec : sec;
                            that.min = min < 10 ? '0' + min : min;
                            that.hour = parseFloat((hour < 10 ? '0' + hour : hour)) + parseFloat(day * 24)
                            that.day = day < 10 ? '0' + day : day;
                        }
                            
                    }

                }

            })
            var active_id = that.id
            service.get(api.contract + 'api/v1/home/flashSaleList?page=1&pageSize=5&active_id=' + active_id).then(res => {
                that.iflashbuy = res.data.data
                $("#swip").removeAttr("style");
                // $(".borders").addClass(".selected").siblings().removeClass(".selected")
                // 滚动加载
                // 缓存指针  
                // let _this = this;
                // 设置一个开关来避免重负请求数据  
                let sw = true;
                var page = 1;
                // 注册scroll事件并监听  
                window.onscroll = function() {
                    var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
                    var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                    var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
                    if (a + b == c) {
                        //    如果开关打开则加载数据  
                        if (sw == true) {
                            // 将开关关闭  
                            sw = false;
                            page++;
                            service.get(api.contract + 'api/v1/home/flashSaleList?pageSize=5&active_id=' + active_id + '&page=' + page).then(function(res) {
                                // 将新获取的数据push到vue中的data，就会反应到视图中了  
                                res.data.data.promotionList.forEach(function(val, index) {
                                    that.iflashbuy.promotionList.push(val);
                                    // console.log(val);  
                                });
                                // 数据更新完毕，将开关打开  
                                sw = true;
                            })

                        }
                    }
                }
            })
            if (that.variable == num) {
                that.variable = null
            } else {
                that.variable = num
            }
        },
        // 默认获取活动专题
        flash() {
            service.get(api.contract + 'api/v1/home/flashSaleCate').then(res => {
                this.recommend = res.data.data;
                $("#swip").removeAttr("style");
                this.length = this.recommend.length
                if (this.length == this.length) {
                    this.activeColor = 100
                }
                if (this.length == 2) {
                    this.activeColor = 50
                }
                if (this.length == 3) {
                    this.activeColor = 33
                }
                if (this.length > 3) {
                    this.activeColor = 30
                }
                var active_id = this.recommend[0].id
                this.aliasname = this.recommend[0].aliasname
                this.start_time = this.recommend[0].start_time
                this.end_time = this.recommend[0].end_time
                service.get(api.contract + 'api/v1/home/flashSaleList?page=1&pageSize=5&active_id=' + active_id).then(res => {
                    this.iflashbuy = res.data.data
                    $("#swip").removeAttr("style");
                    var start_time = this.start_time.replace(/-/g, '/')
                    var end_time = this.end_time.replace(/-/g, '/')
                    var that = this
                    that.minst = this.recommend[0].nowtime.replace(/-/g, '/')
                    var msts = that.minst
                    var t2 = new Date(msts);
                    var t1 = new Date(end_time);
                    var t3 = new Date(start_time);
                    // 后台返回当前时间
                    var now = Date.parse(that.minst) / 1000;
                    // 活动未开始倒计时
                    if (Date.parse(t3) - Date.parse(t2) > 0) {
                        that.conclude = Date.parse(t3) - Date.parse(t2)
                        that.when = start_time.replace(/-/g, '/')
                        showTime();
                        var timer = setInterval(showTime, 1000);
                        function showTime() {
                            var end = Date.parse(that.when) / 1000;
                            now++
                            // 计算差值  

                            var offset = Math.floor((end - now));//毫秒  

                            if (offset <= 0) {
                                // 清除定时器  
                                clearInterval(timer);
                            }
                            var sec = offset % 60;
                            var min = Math.floor(offset / 60) % 60;
                            var hour = Math.floor(offset / 60 / 60) % 24;
                            var day = Math.floor(offset / 60 / 60 / 24);

                            that.sec = sec < 10 ? '0' + sec : sec;
                            that.min = min < 10 ? '0' + min : min;
                            that.hour = parseFloat((hour < 10 ? '0' + hour : hour)) + parseFloat(day * 24)
                            that.day = day < 10 ? '0' + day : day;
                            if (that.hour == '0' && that.min == '00' && that.sec == '00') {
                                location.reload()
                            }
                        }


                    }
                    // 活动开始倒计时

                    if ((Date.parse(t3) - Date.parse(t2) <= 0)) {
                        that.initiates = Date.parse(t1) - Date.parse(t2)
                        if (Date.parse(t1) - Date.parse(t2) > 0) {

                            that.when = end_time.replace(/-/g, '/')
                            showTime();
                            var timer = setInterval(showTime, 1000);
                            function showTime() {
                                // 活动结束时间
                                var end = Date.parse(that.when) / 1000;
                                now++
                                // 计算差值  
                                var offset = Math.floor((end - now));//毫秒  

                                if (offset <= 0) {
                                    // 清除定时器  
                                    clearInterval(timer);
                                }

                                var sec = offset % 60;
                                var min = Math.floor(offset / 60) % 60;
                                var hour = Math.floor(offset / 60 / 60) % 24;
                                var day = Math.floor(offset / 60 / 60 / 24);

                                that.sec = sec < 10 ? '0' + sec : sec;
                                that.min = min < 10 ? '0' + min : min;
                                that.hour = parseFloat((hour < 10 ? '0' + hour : hour)) + parseFloat(day * 24)
                                that.day = day < 10 ? '0' + day : day;
                                if (that.hour == '0' && that.min == '00' && that.sec == '00') {
                                    location.reload()
                                }
                            }

                        }

                    }

                    // 滚动加载
                    // 缓存指针  
                    // let _this = this;
                    // 设置一个开关来避免重负请求数据  
                    let sw = true;
                    var page = 1;
                    // 注册scroll事件并监听  
                    window.onscroll = function() {
                        var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
                        var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                        var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
                        if (a + b == c) {
                            //    如果开关打开则加载数据  
                            if (sw == true) {
                                // 将开关关闭  
                                sw = false;
                                page++;
                                service.get(api.contract + 'api/v1/home/flashSaleList?pageSize=5&active_id=' + active_id + '&page=' + page).then(function(res) {
                                    // 将新获取的数据push到vue中的data，就会反应到视图中了  
                                    res.data.data.promotionList.forEach(function(val, index) {
                                        that.iflashbuy.promotionList.push(val);
                                        // console.log(val);  
                                    });
                                    // 数据更新完毕，将开关打开  
                                    sw = true;
                                })

                            }
                        }
                    }


                })

            })

        },

        tabs() {
            window.onload = function() {
                $(function() {
                    function setCurrentSlide(ele, index) {
                        $(".swiper1 .swiper-slide").removeClass("selected");
                        ele.addClass("selected");
                        $(".swiper1 .swiper-slide .dec")
                        ele.addClass("nov");
                        //swiper1.initialSlide=index;
                    }

                    var swiper1 = new Swiper('.swiper1', {
                        //					设置slider容器能够同时显示的slides数量(carousel模式)。
                        //					可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
                        //					loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。

                        paginationClickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                        spaceBetween: 0,//slide之间的距离（单位px）。
                        freeMode: true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
                        loop: false,//是否可循环
                        onTab: function(swiper) {
                            var n = swiper1.clickedIndex;
                        }
                    });
                    swiper1.slides.each(function(index, val) {
                        var ele = $(this);
                        ele.on("click", function() {
                            setCurrentSlide(ele, index);
                            swiper2.slideTo(index, 500, false);
                            //mySwiper.initialSlide=index;
                        });
                    });

                    var swiper2 = new Swiper('.swiper2', {
                        //freeModeSticky  设置为true 滑动会自动贴合  
                        direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
                        loop: false,
                        //					effect : 'fade',//淡入
                        //effect : 'cube',//方块
                        //effect : 'coverflow',//3D流
                        //					effect : 'flip',//3D翻转
                        autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                        onSlideChangeEnd: function(swiper) {  //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
                            var n = swiper.activeIndex;
                            setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
                            swiper1.slideTo(n, 500, false);
                        }
                    });
                });
            }

        },
    }

}
</script>
  <style>
/* body {
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  color: #333;
  padding: 0;
  font-family: "Microsoft Yahei";
  text-align: center;
} */

.container {
    /*width: 100%;*/
}

.swiper1 {
    width: 100%;
    /* border-top: 1px solid #f2f2f2; */
}

.swiper1 .selected {

    background-color: #3d3d40;
}

.swiper1 .swiper-slide {
    text-align: center;
    height: 0.96rem;
    /* Center slide text vertically */
    /* display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex; */
    /* display: flex; */
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    cursor: pointer;
}


.swiper2 .swiper-wrapper {
    /* height:auto !important;  */
    /* height:200px !important;;   */
    /* min-height:200px !important; */
}

.swiper2 .swiper-slide {
    /* height: calc(100vh - 50px); */
    /* color: #fff; */
    text-align: center;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
}

.swiper-slide {
    background-color: #fff;
}

.swiper-wrapper .borders {
    border-right: 0.02rem solid #f2f2f2;
}

.dec {
    color: #3d3d40;
    background-color: #fff;
    font-size: 0.32rem;
    font-weight: 700;
    padding: 0.1rem 0 0.04rem 0;
}

.selected .nov {
    font-size: 0.32rem;
    color: #fff;
    padding: 0.1rem 0 0.04rem 0;
    background-color: #3d3d40;
}

.selected .ongoing {
    background-color: #fff;
    color: #3d3d40;
    font-size: 0.2rem;
    padding: 0.02rem 0.08rem;
    border-radius: 0.16rem;
}

.chinesenew {
    /* height: 50px; */
    background-color: #f2f2f2;
    padding-top: 0.2rem;
    font-weight: 700;
}

.year {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.32rem;
    color: #ff4500;
    font-weight: 700;
    margin-bottom: 0.24rem;
}

.calculagraph {
    /* height: 50px; */
    padding-bottom: 0.36rem;
}

.calculagraph .clocks {
    padding: 0.18rem;
    background-color: #332019;
    color: #ffffff;
    border-radius: 0.2rem;
}

.tabulation {
    padding: 0.2rem;
    border-top: 0.02rem solid #f2f2f2;
    /* border-bottom: 1px solid #f2f2f2; */
}

.tabulation .multitool {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 0.36rem;
    font-size: 0.28rem;
    color: #3d3d40;
    height: 0.72rem;
    margin-bottom: 0.2rem;
}

.pmgressbar {
    width: 110%;
    margin: 0 0.16rem;
    height: 0.3rem;
    background-color: #dcdde0;
    text-align: center;
    border-radius: 0.12rem;
    margin-top: 0.08rem;
}

.strip {
    height: 100%;
    width: 80%;
    background: linear-gradient(to right, #ff7800, #ff4500);
    border-radius: 0.12rem;
    line-height: 100%;
}

.price {
    position: relative;
    top: -0.3rem;
    z-index: 2;
    color: #fff;
    font-size: 0.2rem;
}

.tabulation .purchase {
    background: linear-gradient(to right, #ff7800, #ff4500);
    color: #fff;
    border-radius: 0.06rem;
    font-size: 0.28rem;
    padding: 0.12rem;
}

.tabulation .buynow {

    background-color: #ffe4cc;
    color: #fff;
    border-radius: 0.06rem;
    font-size: 0.28rem;
    padding: 0.12rem;
}

.characteristic {
    background-color: #f2f2f2;
    font-size: 0.28rem;
    color: #c2c4cc;
    padding: 0.28rem 0 0.68rem 0;
}

.ground {
    display: inline-block;
    font-size: 0.3rem;
}

.lists {
    display: inline-block;
    background: #fff;
    border: 0.02rem solid #f2f2f2;
}

.selected {
    background-color: #000;
}
</style>