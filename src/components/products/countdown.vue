

<!--倒计时...................  -->
<template>
    <div>
        <div v-if="promo=='time'">
            <div class="pmgressbar">
                <div class="strip" :style="'width:'+proportion"></div>
                <span class="price">{{sold_num}}/{{max_num}}</span>
            </div>
            <!-- 商品抢购 -->
            <yd-flexbox class="purchase">
                <img src="../../assets/images/not_refactoring/productdet_image.png" alt="" style=" width: 100%;height: 100%;">
                <yd-flexbox-item class="purchase_l">
                    <yd-flexbox>
                        <yd-flexbox-item>
                            <span class="par">₱{{award_value}}</span>
                            <span class="pricet">₱{{goods_info.market_price}}</span>
                        </yd-flexbox-item>
                    </yd-flexbox>
                    <span class="switch">{{Math.floor(award_value/goods_info.market_price*100)}}% OFF</span>
                </yd-flexbox-item>
                <div class="purchase_r">
                    <yd-flexbox-item>
                        <!-- 计时器 -->
                        <!-- 未开始倒计时 -->
                        <!-- Ends in  HH:MM:SS离开始时间小于24小时 -->
                        <div v-if="conclude >0">
                            <span style="color:#ff4500;padding: 5px;font-size: 16px;display: block;">Start in:</span>
                            <span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
                            <span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
                            <span class="clocks">{{min}}</span>&nbsp;:
                            <span class="clocks">{{sec}}</span>
                        </div>
                        <!-- 开始倒计时 -->

                        <!-- Ends in  HH:MM:SS离结束时间小于24小时 -->
                        <div v-if=" initiates >0">
                            <span style="color:#ff4500;padding: 5px;font-size: 16px;display: block;">Ends in:</span>
                            <span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
                            <span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
                            <span class="clocks">{{min}}</span>&nbsp;:
                            <span class="clocks">{{sec}}</span>
                        </div>

                    </yd-flexbox-item>
                </div>
            </yd-flexbox>
        </div>

        <div v-if="promo=='quota'">
            <yd-flexbox class="purchase">
                <img src="../../assets/images/not_refactoring/quotadetails_image_unjoin.png" alt="" style=" width: 100%;height: 100%;" v-if="joinq==1 ||joinq==2">
                <img src="../../assets/images/not_refactoring/quotadetails_image_price.png" alt="" style=" width: 100%;height: 100%;" v-if="joinq==3">
                <yd-flexbox-item class="purchase_l">
                    <yd-flexbox>
                        <yd-flexbox-item>
                            <span class="par">₱{{quota_price}}</span>
                            <span class="pricet">₱{{goods_info.market_price}}</span>
                        </yd-flexbox-item>
                    </yd-flexbox>
                    <span class="switch">{{people}} person mode</span>
                </yd-flexbox-item>
                <div class="purchase_r" v-if="joinq==1 ||joinq==2">
                    <yd-flexbox-item>
                        <!-- 计时器 -->
                        <!-- 未开始倒计时 -->
                        <!-- Ends in  HH:MM:SS离开始时间小于24小时 -->
                        <div v-if=" conclude >0">
                            <span style="color:#ff4500;padding: 5px;font-size: 16px;display: block;">Start in:</span>
                            <span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
                            <span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
                            <span class="clocks">{{min}}</span>&nbsp;:
                            <span class="clocks">{{sec}}</span>
                        </div>
                        <!-- 开始倒计时 -->
                        <!-- Ends in  HH:MM:SS离结束时间小于24小时 -->
                        <div v-if=" initiates >0">
                            <span style="color:#ff4500;padding: 5px;font-size: 16px;display: block;">Ends in:</span>
                            <span class="clocks" v-if="hour<10">{{'0'+hour}}</span>
                            <span class="clocks" v-if="hour>10">{{hour}}</span>&nbsp;:
                            <span class="clocks">{{min}}</span>&nbsp;:
                            <span class="clocks">{{sec}}</span>
                        </div>
                    </yd-flexbox-item>
                </div>
            </yd-flexbox>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            lonboArray: [],
            comments: null,
            end_time: '',
            start_time: "",
            proportion: '',
            sold_num: '',
            max_num: '',
            sec: '',
            min: '',
            hour: '',
            day: '',
            promo: '',
            when: '',
            award_value: '',
            joinq: '',
            conclude: '',
            initiates: '',
            minst: '',
            quota_price: '',
            people: '',
            active_id: '',
            id: '',
            nowtime: '',
        }
    },
    created() {
        this.path()

    },
    computed: {
        ...mapGetters([
            'goods_info', 'joinquota'
        ]),
    }, watch: {
        goods_info() {
            if (this.goods_info.promo == 'quota') {
                this.people = this.goods_info.quota.people
                this.quota_price = this.goods_info.quota.quota_price
            }

            //    console.log(this.quota_price,3232)
            this.discuss()

        },
        joinquota() {
            this.joinq = this.joinquota

        },

    },
    methods: {
        path() {
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
            _this.goods_id = theRequest.goods_id
            _this.promo = theRequest.promo
            _this.active_id = theRequest.quota_goods_id




        },
        discuss() {
            if (this.goods_info.promo == 'time') {
                this.proportion = (parseInt(this.goods_info.promotion.sold_num) / parseInt(this.goods_info.promotion.max_num)) * 100 + '%'
                this.sold_num = this.goods_info.promotion.sold_num
                this.max_num = this.goods_info.promotion.max_num
                this.award_value = this.goods_info.promotion.award_value
            }

            //  当前时间
            this.nowtime = this.goods_info.nowtime.replace(/-/g, '/')
            // 结束时间
            if (this.goods_info.promo == 'time') {
                this.end_time = this.goods_info.promotion.end_time.replace(/-/g, '/')
                this.start_time = this.goods_info.promotion.start_time.replace(/-/g, '/')
            }

            if (this.goods_info.promo == 'quota') {
                this.end_time = this.goods_info.quota.user_end_time.replace(/-/g, '/')
                this.start_time = this.goods_info.quota.user_start_time.replace(/-/g, '/')
            }
            // 开始时间 

            var that = this
            that.minst = that.nowtime
            var msts = that.minst
            var t2 = new Date(msts);
            var t1 = new Date(that.end_time);
            var t3 = new Date(that.start_time);
            // 后台返回当前时间
            var now = Date.parse(that.minst) / 1000;
            // 活动未开始倒计时
            if (Date.parse(t3) - Date.parse(t2) > 0) {
                that.conclude = Date.parse(t3) - Date.parse(t2)
                that.$store.state.conclude = that.conclude;
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
                that.$store.state.initiates = that.initiates;
                if (Date.parse(t1) - Date.parse(t2) > 0) {

                    that.when = that.end_time.replace(/-/g, '/')
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
        },
    }
}
</script>

<style>
.pmgressbar {
    height: 0.28rem;
    ;
    background-color: #dcdde0;
    text-align: center;
    color: #fff;
}

.strip {
    height: 100%;
    width: 80%;
    background-color: #56aa19;
    border-top-right-radius: 0.08rem;
    border-bottom-right-radius: 0.08rem;
}

.price {
    position: relative;
    top: -0.28rem;
    z-index: 2;
}


.purchase {
    position: relative;
    height: 1.28rem;
    /* background: url(../../../assets/images/wap_products/productdet_image.png) no-repeat; */
}

.purchase_l {
    height: 100%;
    position: absolute;
    left: 3%;
}

.purchase_l .par {
    font-size: 0.44rem;
    color: #fff;
    line-height: 0.6rem;
}

.purchase_l .pricet {
    font-size: 0.28rem;
    color: #fff;
    text-decoration: line-through;
    margin-left: 0.1rem;
}

.purchase_l .switch {
    background-color: #ffffff;
    border-radius: 0.22rem;
    color: #613eff;
    font-size: 0.28rem;
    line-height: 0.44rem;
    padding: 0.06rem 0.18rem;
}

.purchase_r {
    position: absolute;
    height: 100%;
    right: 1%;
}

.purchase_r .clocks {
    background-color: #332019;
    color: #feefff;
    padding: 0.13rem 0.11rem;
    font-size: 0.32rem;
    border-radius: 0.08rem;
}

.ground {
    background-color: #000;
    color: #fff;
    padding: 0.08rem;
    border-radius: 0.1rem;
    font-size: 0.26rem;
}
</style>
