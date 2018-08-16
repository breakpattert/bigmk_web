

<style>
.herades {
    width: 100%;
    position: fixed;
    z-index: 10;
    font-size: 18px;
    background-color: #ffffff;
    text-align: center;
    padding: 10px 14px;
    top: 0px;
}

.superior {
    position: relative;
}

.arrows img {
    height: 24px;
    width: 24px;
}

.details {
    font-size: 18px;
    color: #3d3d40;
}

.occupied {
    height: 64px;
}



.description {
    background-color: #fff;
}

.headline {
    font-size: 14px;
    color: #3d3d40;
    border-bottom: 1px solid black;
    padding-left: 14px;
    line-height: 48px;
}

.Commoditypicture {
    height: 200px;
    border-bottom: 1px solid black;
    background-color: red;
}

.feedback {
    background-color: #fff;
    padding-right: 25px;
}

.feedback .headline {
    line-height: 48px;
    font-size: 14px;
    color: #3d3d40;
    padding-left: 14px;
    border-bottom: 1px solid #f2f2f2;
}

.feedback_t {
    padding: 6px 14px 14px 14px;
}

.feedback_t .star {
    text-align: right;
}

.buddha {
    vertical-align: middle;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    margin-right: 6px;
    margin-bottom: 10px;
}

.buddha img {
    width: 100%;
    height: 100%;
    margin-right: 8px;
    border-radius: 50%;
    object-fit: cover;
}

.names {
    font-size: 14px;
    color: #6d6e73;
    margin-right: 8px;
    line-height: 18px;
}

.content {
    padding: 0 14px;
    font-size: 14px;
    color: #3d3d40;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.time {
    font-size: 12px;
    color: #96989e;
    padding: 4px 14px 14px 14px;
    border-bottom: 1px solid #f2f2f2;
}

.blueprint {
    width: 100%;
    padding: 4px 14px;
}

.blueprint img {
    margin-right: 2%;
    height: 50px;
    width: 50px;
    overflow: hidden;
}

.seeallt {
    text-align: center;
    background-color: #ffffff;
}

.seeall {
    font-size: 14px;
    border: 1px solid #ff4500;
    border-radius: 14px;
    padding: 8px 36px;
    margin: 10px 0;
    color: #ff4500;
    display: inline-block;
}

.division {
    height: 14px;
    background-color: #f2f2f2;
}

.criticism {
    font-size: 14px;
    line-height: 20px;
}

.star {
    text-align: right;
    padding-left: 37%
}

.Columns {
    position: fixed;
    z-index: 10;
    top: 55px;
    right: 10px;
    width: 161px;
    height: 160px;
    background-color: #2c2c2e;
    border-radius: 10px;
    padding: 0px 10px 10px 10px;
    font-size: 14px;
    color: #fff;
    text-align: left;
    line-height: 25px;
}

.numb {
    position: absolute;
    top: 70px;
    right: 110px;
    font-size: 12px;
    color: #fff;
    border-radius: 7px;
    background-color: #ff4500;
    padding: 1px 4px;
}

@font-face {
    font-family: 'iconfont';
    /* project id 731344 */
    src: url('//at.alicdn.com/t/font_731344_zonu17xro4.eot');
    src: url('//at.alicdn.com/t/font_731344_zonu17xro4.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_731344_zonu17xro4.woff') format('woff'),
    url('//at.alicdn.com/t/font_731344_zonu17xro4.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_731344_zonu17xro4.svg#iconfont') format('svg');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

.Columns a:active {
    color: #ffe4cc;
}

.recontents {
    background-color: #f5f5f5;
    margin-left: 25px;
    padding: 8px 14px;
    border-radius: 5px;
    color: #6d6e73;
    word-break: break-all;
}
</style>


<template>
    <div>
        <div v-for="(item,index) in lonboArray" :key="index">
            <yd-flexbox direction="vertical" class="feedback">
                <yd-flexbox-item>
                    <yd-flexbox class="feedback_t">
                        <div class="buddha"><img :src="item.head_ico" :onerror="buyer" alt=""></div>
                        <div class="names">{{item.username.charAt(0)+'****'+item.username.charAt(item.username.length-1)}}</div>
                        <yd-cell-item class="star">
                            <yd-rate slot="right" v-model="item.point" :readonly="true" size="24px" active-color="#fcbd32"></yd-rate>

                        </yd-cell-item>
                    </yd-flexbox>
                </yd-flexbox-item>
                <yd-flexbox-item class="content">{{item.contents}}</yd-flexbox-item>
                <yd-flexbox-item class="recontents" v-if="item.recontents!=''">
                    <span style="color: #ff4500;">Seller Reply:</span>{{item.recontents}}</yd-flexbox-item>
                <yd-lightbox :num="lonboArray.length" class="blueprint">
                    <yd-lightbox-img :src="pust" v-for="(pust,key) in item.img" :key='key' :onerror="acquiescence"></yd-lightbox-img>
                    <yd-lightbox-txt>
                        <div slot="content" class="criticism">
                            <yd-flexbox>
                                <yd-flexbox-item style="font-size: 16px;">{{item.username}}</yd-flexbox-item>
                                <yd-flexbox-item style="text-align: right;" class="yd-lightbox-head"> </yd-flexbox-item>
                            </yd-flexbox>
                            <p>{{item.contents}}</p>
                        </div>
                    </yd-lightbox-txt>
                </yd-lightbox>
                <yd-flexbox-item class="time">{{item.comment_time}}</yd-flexbox-item>
            </yd-flexbox>
        </div>
        <!-- <yd-flexbox direction="vertical">
                                        <yd-flexbox-item class="seeallt">
                                            <a href="/site/feedback2">
                                                <div class="seeall">See All</div>
                                            </a>
                                        </yd-flexbox-item>
                                    </yd-flexbox> -->

        <div class="division"></div>
    </div>
</template>

<script type="text/babel">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            lonboArray: [],
            rate6: 3,
            lengths: '',
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            buyer: 'this.src="' + require('../../assets/images/not_refactoring/prouct.jpg') + '"',
            isShow: false,
            feedback: '',
        }
    },
    created() {
        this.discuss()
    },
    computed: {
        ...mapGetters([
            'goods_info',
        ]),

    }, watch: {
        goods_info() {
        },

    },
    methods: {

        skip() {
            window.history.back()
        },
        discuss() {
            var url = location.search; //获取url中"?"符后的字串 
            var theRequest = {};
            if (url.indexOf("?") != -1) {
                var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                }

            }
            var id = theRequest.id
            this.feedback = theRequest.feedback

            var param = qs.stringify({ id: theRequest.id });
            service.post(api.contract + 'api/v1/goods/getFeedback', param).then(res => {
                this.lonboArray = res.data.data
                this.lengths = res.data.data.length

                let _this = this;
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
                            var param = qs.stringify({ id: theRequest.id, page: page });
                            service.post(api.contract + 'api/v1/goods/getFeedback', param).then(res => {
                                // 将新获取的数据push到vue中的data，就会反应到视图中了  
                                res.data.data.forEach(function(val, index) {
                                    _this.lonboArray.push(val);
                                    // console.log(val);  
                                });
                                // 数据更新完毕，将开关打开  
                                sw = true;
                            })



                        }
                    }
                }
            })




        }
    }
}
</script>