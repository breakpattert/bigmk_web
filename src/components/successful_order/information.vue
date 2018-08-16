


<style>
.Submitteds {
    height: 2rem;
    color: #fff;
    font-size: 0.32rem;
    padding: 0.5rem;
    background: url(../../assets/images/not_refactoring/quotasuccess_bg_successful.png) no-repeat;
    background-size: 100% 100%;
}

.Submitted {
    height: 2rem;
    color: #fff;
    font-size: 0.32rem;
    padding: 0.5rem;
    background: linear-gradient(to right, #ff7600, #ff4700);
}

.details {
    background-color: #fff;
    padding: 0.28rem;
    font-size: 0.28rem;
    color: #96989e;
    border-bottom: 0.02rem solid #f2f2f2;
}

.Consignee {
    margin-bottom: 0.16rem;
}

.Payment {
    background-color: #fff;
    padding: 0.28rem;
    font-size: 0.28rem;
    color: #96989e;
}

.Qrder {
    font-size: 0.32rem;
    color: #ff4500;
    text-align: center;
    margin: 0.32rem 0 0.2rem 0;
}

.Qrder span {
    border: 0.02rem solid #ff4500;
    border-radius: 0.32rem;
    padding: 3% 10%;
}

.buddha {
    vertical-align: middle;
    height: 0.88rem;
    width: 12%;
    border-radius: 50%;
    /* padding-right: 5%; */
    margin-bottom: 0.2rem;
    margin-right: 5%;
}

.expression {
    background-color: #ff8000;
    padding: 0.06rem;
    border-radius: 0.14rem;
    width: 1.2rem;
    color: #fff;
    position: absolute;
    top: 0.4rem;
    left: -10%;
}
</style>


<template>
    <div style="width: 100%;">
        <div v-if="marking=='1'">
            <yd-flexbox class="Submitted">
                <div><img src="../../assets/images/not_refactoring/ordersuccess_image_successful.png" alt=""></div>
                <yd-flexbox-item style="margin-left: 14px;">Order Submitted Successfully</yd-flexbox-item>
            </yd-flexbox>

            <yd-flexbox direction="vertical" class="details">
                <yd-flexbox-item class="Consignee">Consignee:
                    <span style=" color:#3d3d40;">{{accomplish.accept_name}}</span>
                </yd-flexbox-item>
                <yd-flexbox-item class="Consignee">Mobile:
                    <span style=" color:#3d3d40;">{{accomplish.mobile}}</span>
                </yd-flexbox-item>
                <yd-flexbox-item class="Consignee">
                    <yd-flexbox>
                        <div>Address:</div>
                        <yd-flexbox-item>
                            <span style=" color:#3d3d40;">{{accomplish.province_str}}{{accomplish.city_str}}{{accomplish.area_str}}{{accomplish.address}}</span>
                        </yd-flexbox-item>
                    </yd-flexbox>
                </yd-flexbox-item>
            </yd-flexbox>

            <yd-flexbox direction="vertical" class="Payment">
                <yd-flexbox-item class="Consignee">Payment Method:
                    <span style=" color:#3d3d40;">{{accomplish.pay_type}}</span>
                </yd-flexbox-item>
                <yd-flexbox-item class="Consignee">Actual Payment:
                    <span style=" color:#3d3d40;">₱{{accomplish.real_amount}}</span>
                </yd-flexbox-item>
                <yd-flexbox-item class="Qrder">
                    <a href="/ucenter/order_list/tab">
                        <span>View Order</span>
                    </a>
                </yd-flexbox-item>
            </yd-flexbox>
            <div style="height: 0.28rem;"></div>
        </div>
        <div v-if="marking=='2'" style=" width: 100%;    position: absolute;">
            <yd-flexbox class="Submitteds" v-if="triumph.end_time !=''">
                <!-- <div style="position: absolute;z-index: -56;height: 100px;"><img src="../../../assets/images/crowdordering_web/quotasuccess_bg_successful.png" alt="" style=" width: 100%;" ></div> -->
                <yd-flexbox direction="vertical">
                    <yd-flexbox-item style="margin-left: 0.28rem;text-align: center;">{{triumph.message2}}</yd-flexbox-item>
                    <!-- <yd-countdown :time="triumph.end_time">
                                        <span style="font-size: 12px">Ends in:</span>
                                        <span class="clocks">{%h}</span>&nbsp;:
                                        <span class="clocks">{%m}</span>&nbsp;:
                                        <span class="clocks">{%s}</span>
                                    </yd-countdown> -->
                    <div>
                        <span style="color:#fff;padding-left: 0.28rem;font-size: 0.28rem">Ends in:</span>
                        <span class="clocks">{{hour}}</span>&nbsp;:
                        <span class="clocks">{{min}}</span>&nbsp;:
                        <span class="clocks">{{sec}}</span>
                    </div>
                </yd-flexbox>
            </yd-flexbox>

            <yd-flexbox class="Submitteds" v-if="triumph.end_time ==''">
                <div><img src="../../assets/images/not_refactoring/ordersuccess_image_successful.png" alt=""></div>
                <yd-flexbox-item style="margin-left: 0.28rem;"> Group buy has been submitted, waiting for the seller confirm</yd-flexbox-item>
            </yd-flexbox>
            <yd-flexbox direction="vertical" style="background-color: #fff;">
                <yd-flexbox-item style="width: 100%;text-align: center;">
                    <div style="position: relative;padding: 0.28rem 0.28rem 0px 0.28rem;    display: inline-block;">
                        <span style='position: relative;'>
                            <img v-for="(item,index) in info" :key="index" :src="imgHost+item.user_head_ico" :onerror="acquiescence" alt="" :class="{captain:index==0}" class="buddha">
                            <span class="expression">Originator</span>
                        </span>
                        <img src="../../assets/images/not_refactoring/quota_icon_wait.png" alt="" v-for="(item,index) in indicate" class="buddha" style="display: inline-block;">

                    </div>
                </yd-flexbox-item>
            </yd-flexbox>

            <yd-flexbox direction="vertical" class="details" v-if="triumph.end_time !=''">
                <yd-flexbox-item class="Qrder">
                    <a :href="'/site/invitefriends?Name='+name+'&price='+price">
                        <span style=" background: linear-gradient(to right, #ff7600, #ff4700);color: #fff;">Invite Friends</span>
                    </a>
                </yd-flexbox-item>
            </yd-flexbox>

            <yd-flexbox direction="vertical" class="Payment">
                <yd-flexbox-item class="Consignee">Payment Method:
                    <span style=" color:#3d3d40;">{{triumph.pay_type}}</span>
                </yd-flexbox-item>
                <yd-flexbox-item class="Consignee">Actual Payment:
                    <span style=" color:#3d3d40;">₱{{triumph.price}}</span>
                </yd-flexbox-item>
                <yd-flexbox-item class="Qrder">
                    <a :href="'/site/quotaorder_list?Name='+name+'&price='+price">
                        <span style="    color: #ff4500;">View Order</span>
                    </a>
                </yd-flexbox-item>
            </yd-flexbox>
            <div style="height: 0.28rem;"></div>
        </div>
    </div>
</template>

<script>
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            accomplish: [],
            marking: '',
            verify: [],
            triumph: [],
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/headeruser.jpg') + '"',
            indicate: '',
            joinq: '',
            info: '',
            list: '',
            name: '',
            price: '',
            minst: '',
            hour: '',
            min: '',
            sec: '',
            day: '',
        }
    },
    created() {
        this.getCategory()
        this.eltered()
    },
    methods: {
        eltered() {

        },
        getCategory() {
            var url = location.search; //获取url中"?"符后的字串 
            var theRequest = {};
            if (url.indexOf("?") != -1) {
                var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                }

            }

            this.marking = theRequest.marking
            this.name = theRequest.Name
            this.price = theRequest.price
            if (theRequest.marking == 1) {
                var param = qs.stringify({ order_id: theRequest.id });
                service.post(api.contract + 'api/v1/user/orderSuc', param).then(res => {
                    this.accomplish = res.data.data
                })
            }
            if (theRequest.marking == 2) {

                this.triumph = JSON.parse(localStorage.getItem('obj'));
                this.list = this.triumph.list
                this.info = this.triumph.info
                this.joinq = this.triumph.is_join_quota
                console.log(this.triumph.nowtime)
                // this.indicate = (this.triumph.message2.split('/')[1]) - (this.triumph.message2.split('/')[0])
                if (this.triumph.message2 == '') {
                    this.indicate = 0
                } else {
                    this.indicate = parseInt(this.triumph.message2.replace(/[^0-9]/ig, ""))
                }

                var that = this
              
                    that.minst = that.triumph.nowtime.replace(/-/g, '/')
                    // 后台返回当前时间
                    var now = Date.parse(that.minst) / 1000;
                    // 活动未开始倒计时            
                    that.when = that.triumph.end_time.replace(/-/g, '/')
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
                        that.hour = hour < 10 ? '0' + hour : hour;
                        that.day = day < 10 ? '0' + day : day;
                    }


               
            }


        }
    }

}
</script>

