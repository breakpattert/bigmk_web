

<style>
.description {
    background-color: #fff;
}

.headline {
    font-size: 0.28rem;
    color: #3d3d40;
    border-bottom: 0.02rem solid black;
    padding-left: 0.28rem;
    line-height: 0.96rem;
}

.Commoditypicture {
    height: 4rem;
    border-bottom: 0.02rem solid black;
    background-color: red;
}

.feedback {
    background-color: #fff;
    padding-right: 0.5rem;
}

.feedback .headline {
    line-height: 0.96rem;
    font-size: 0.28rem;
    color: #3d3d40;
    padding-left: 0.28rem;
    border-bottom: 0.02rem solid #f2f2f2;
}

.feedback_t {
    padding: 0.12rem 0.28rem 0.28rem 0.28rem;
}

.feedback_t .star {
    text-align: right;
}

.buddha img {
    width: 100%;
    height: 100%;
    margin-right: 0.16rem;
    border-radius: 50%;
    object-fit: cover;
}

.names {
    font-size: 0.28rem;
    color: #6d6e73;
    margin-right: 0.16rem;
    line-height: 0.36rem;
}

.content {
    padding: 0  0.28rem;
    font-size:  0.28rem;
    color: #3d3d40;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.time {
    font-size: 0.24rem;
    color: #96989e;
    padding: 0.08rem  0.28rem  0.28rem  0.28rem;
    border-bottom: 0.02rem solid #f2f2f2;
}

.blueprint {
    width: 100%;
    padding: 0.08rem  0.28rem;
    /* float: left; */
}

.blueprint img {
    margin-right: 2%;
    height: 10%;
    width: 14%;
    overflow: hidden;
}

.seeallt {
    text-align: center;
    background-color: #ffffff;
}

.seeall {
    font-size:  0.28rem;
    border: 1px solid #ff4500;
    border-radius:  0.28rem;
    padding: 0.16rem 0.72rem;
    margin: 0.2rem 0;
    color: #ff4500;
    display: inline-block;
}

.division {
    height:  0.28rem;
    background-color: #f2f2f2;
}

.criticism {
    font-size:  0.28rem;
    line-height: 0.4rem;
}

.star {
    text-align: right;
    padding-left: 37%
}

.therr {

    text-align: center;
    line-height: 1.68rem;
    font-size:  0.28rem;
    color: #c2c4cc;
}

.recontents {
    background-color: #f5f5f5;
    margin-left: 0.5rem;
    padding: 0.16rem  0.28rem;
    border-radius: 0.1rem;
    color: #6d6e73;
    word-break: break-all;
}
</style>


<template>
    <div>
        <div class="feedbacks" v-if="extent==0">
            <yd-flexbox direction="vertical" class="feedback">
                <yd-flexbox-item class="headline">Feedback
                    <span>(0)</span>
                </yd-flexbox-item>
            </yd-flexbox>
            <yd-flexbox direction="vertical" class="therr">
                <yd-flexbox-item class="">There is no feedback yet</yd-flexbox-item>
            </yd-flexbox>
            <div class="division"></div>
        </div>
        <!-- 评论 -->
        <div v-if="extent!=0">
            <yd-flexbox direction="vertical" class="feedback">
                <yd-flexbox-item class="headline">Feedback
                    <span>({{feedback}})</span>
                </yd-flexbox-item>
            </yd-flexbox>
            <div v-for="(item,index) in lonboArray" :key="index" v-if="index < 2">
                <yd-flexbox direction="vertical" class="feedback">
                    <yd-flexbox-item>
                        <yd-flexbox class="feedback_t">
                            <div class="buddha"><img :src="item.head_ico" :onerror="buyer"></div>
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
            <yd-flexbox direction="vertical">
                <yd-flexbox-item class="seeallt">
                    <a :href="'discuss.html?id='+goods_info.id+'&feedback='+feedback">
                        <div class="seeall">See All</div>
                    </a>
                </yd-flexbox-item>
            </yd-flexbox>

            <div class="division"></div>
        </div>
    </div>
</template>
 <script type="text/javascript">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            lonboArray: [],
            rate6: 3,
            extent: '',
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            buyer: 'this.src="' + require('../../assets/images/not_refactoring/prouct.jpg') + '"',
            feedback: '',
        }
    },
    created() {

    },
    computed: {
        ...mapGetters([
            'goods_info',
        ]),
    }, watch: {
        goods_info() {
            this.discuss()
            this.feedback = this.goods_info.comments
        },

    },
    methods: {
        discuss() {
            var param = qs.stringify({ id: this.goods_info.id });
            service.post(api.contract + 'api/v1/goods/getFeedback', param).then(res => {
                this.lonboArray = res.data.data
                this.extent = this.lonboArray.length
            })
        }
    }
}



</script>