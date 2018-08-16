

<style>
/* <!-- 选择规格  specification--> */

.variation {
    height: 0.96rem;
    font-size: 0.28rem;
    color: #3d3d40;
    border-bottom: 0.02rem solid #f2f2f2;
    padding: 0 0.28rem;
}

.Manner {
    padding: 0.28rem;

    font-size: 0.28rem;
    color: #3d3d40;
}

.Manner .fee {
    line-height: 0.36rem;
}

.logo {
    padding: 0.28rem;
    border-bottom: 0.02rem solid #f2f2f2;
}

.logo img {
    width: 1.08rem;
    height: 1.08rem;
}

.logo .keimva {
    font-size: 0.32rem;
    color: #3d3d40;
    margin-left: 0.16rem;
}

.logo .view {
    border: 0.02rem solid #ff4500;
    border-radius: 0.24rem;
    color: #ff4500;
    font-size: 0.24rem;
    padding: 0.08rem 0.16rem;
    margin-left: 0.28rem;
}

.heat {
    margin-top: 0.28rem;

    /* background-color: red; */
}

.heat .Sales {
    border-right: 0.02rem solid #f2f2f2;
    text-align: center;
    font-size: 0.24rem;
    color: #96989e;
    margin-bottom: 0.28rem;
}

.heat .quantity {
    font-size: 0.28rem;
    color: #3d3d40;
    margin-top: 0.08rem;
}

.yd-btn-primary {
    width: 100%;
    /* background-color: #fff; */
    color: #3d3d40;
    text-align: left;
}

.yd-popup-content {
    overflow-y: visible;
}

.Specification_t {
    margin: 0 0.28rem;
}

.Large {
    height: 1.48rem;
    width: 2.28rem;
    margin-right: 0.16rem;
    position: relative;
}

.Large img {
    width: 2.28rem;
    height: 2.28rem;
    border-radius: 0.1rem;
    position: absolute;
    top: -0.8rem;
    z-index: 10;
    background-color: #fff;
}

.Specification .yd-popup {
    display: none;
}

.yd-popup-show {
    display: flex !important;
}

.tinct {
    margin: 0.36rem 0 0.16rem 0;
    color: #3d3d40;
    font-size: 0.28rem;
    line-height: 0.36rem;
}

.design {
    display: inline-block;
    width: 17%;
    height: 17%;
    margin-left: 0.2rem;
}

.design img {
    width: 100%;
    height: 100%;
    margin: 0px 0.2rem 0.2rem 0;
}

.size {
    padding-top: 0.36rem;
    color: #3d3d40;
    font-size: 0.28rem;
    line-height: 0.36rem;
    border-top: 0.02rem solid #f2f2f2;
}

.spec {
    display: inline-block;
    color: #3d3d40;
    margin: 0.08rem 0.2rem 0.2rem 0;
    padding: 3% 6%;
    background-color: #f2f2f2;
    border-radius: 0.28rem;
    font-size: 0.28rem
}

.Selected {
    color: #fff;
    background-color: #ff4500;
}

.addcart {
    text-align: center;
    font-size: 0.36rem;
    color: #fff;
    background-color: #ff7800;
    width: 50%;
    display: inline-block;
    float: left;
    height: 1rem;
    padding: 0px;
    border-radius: 0px;
}

.buy_now {
    text-align: center;
    font-size: 0.36rem;
    color: #fff;
    background-color: #ff4500;
    /* line-height: 49px; */
    width: 50%;
    display: inline-block;
    height: 1rem;
    padding: 0px;
    border-radius: 0px;
}

.SelectedImg {
    border: 0.02rem solid #ff4500;
}

.disableCheckedImg {
    border: 0.02rem solid #ff4500;
}

.base {
    width: 100%;
    position: fixed;
    bottom: 0px;
}

.desc,
.bd-box {
    float: right;
}

.bd-box {
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    vertical-align: middle;
    background: #fff;
    width: 60px;
    border: 1px solid #d3d3d3;
}

.addition,
.subtraction {
    width: 0.6rem;
    padding: 0 0.12rem;
    color: #727171;
    font-size: 0.36rem;
    cursor: pointer;
    /* border: 1px solid #d3d3d3;   */
}

.addition {
    border: 0.02rem solid #d3d3d3;
    border-right: none;
}

.subtraction {
    border: 0.02rem solid #d3d3d3;
    border-left: none;
}

.boxes {
    height: 5rem;
    overflow-y: scroll;
}







.forbids {
    color: rgb(194, 196, 204)!important;
    background-color: #f2f2f2 !important;
}


.forbid {
    color: rgb(194, 196, 204)!important;
    background-color: #f2f2f2 !important;
}
</style>


<template>
    <!-- 选择规格  specification-->
    <div>
        <yd-flexbox class="variation" v-if="promo=='' || promo==undefined || promo=='time'">
            <yd-button @click.native="show2 = true" style="background-color: rgba(0, 0, 0, 0)">
                <yd-flexbox>
                    <yd-flexbox-item style="color: #000;text-align: left;">Select Variation</yd-flexbox-item>
                    <div>
                        <i class="iconfont icon-more1" style="color: #3d3d40;font-size: 0.4rem;"></i>
                    </div>
                </yd-flexbox>
            </yd-button>
            <yd-popup v-model="show2" position="bottom" height="60%" class="Specification" :close-on-masker="false">
                <!-- <yd-button type="warning" style="margin: 30px;" @click.native="show2 = false">Close Bottom Popup</yd-button> -->

                <yd-flexbox class="Specification_t">
                    <div class="Large"><img :src="Imgstr+goods_info.img" alt=""></div>
                    <yd-flexbox-item>
                        <yd-flexbox direction="vertical">
                            <yd-flexbox-item v-if="cost!=null" style="font-size: 0.32rem;color: #ff4500;line-height: 0.6rem; margin-bottom: 0.08rem;" v-model="cost">
                                ₱{{cost}}
                            </yd-flexbox-item>
                            <yd-flexbox-item v-if="cost==null &&promo!='time'" style="font-size: 0.32rem;color: #ff4500;line-height: 0.6rem; margin-bottom: 0.08rem;">
                                ₱{{sell_price}}
                            </yd-flexbox-item>
                            <!-- <yd-flexbox-item v-if="cost==null && promo==''" style="font-size: 16px;color: #ff4500;line-height: 30px; margin-bottom: 4px;" v-model="cost">
                                                                                                                                                ₱{{sell_price}}
                                                                                                                                            </yd-flexbox-item>   -->
                            <yd-flexbox-item v-if="cost==null && promo=='time'" style="font-size: 0.32rem;color: #ff4500;line-height: 0.6rem; margin-bottom: 0.08rem;" v-model="cost">
                                ₱{{award_value}}
                            </yd-flexbox-item>
                            <yd-flexbox-item style="font-size: 0.28rem;color: #c2c4cc;" v-if="checked.store_nums!=null">Stcok:{{checked.store_nums}}</yd-flexbox-item>
                            <yd-flexbox-item style="font-size: 0.28rem;color: #c2c4cc;" v-if="checked.store_nums==null">Stcok:{{goods_info.store_nums}}</yd-flexbox-item>
                        </yd-flexbox>
                    </yd-flexbox-item>
                    <yd-flexbox-item style="font-size: 0.4rem;text-align: right;margin-top: -0.4rem;color: #c2c4cc" @click.native="showlis();toChangeSwitch(false)">
                        <i class="iconfont icon-close" style="font-size: 0.4rem;"></i>
                    </yd-flexbox-item>
                </yd-flexbox>
                <!-- Color 颜色规格-->
                <div class="boxes">
                    <div class="Specification_t">

                        <div v-for="(v, k) in keys" style="width: 100%;" :keys="k">
                            <div class="tinct">{{ v.name }}</div>

                            <yd-flexbox-item v-if="parseInt(v.type) === 1">
                                <div class="spec" v-for="(vv, kk) in v.value" :keys="kk" @click="tabInfoChange(k, kk, vv.id, $event)" :class="{'Selected': vv.isActiveC, 'disableChecked': vv.notClick,'forbid':(vv.inventory==0 && keys.length==1)}">{{vv.cname}}
                                </div>
                            </yd-flexbox-item>

                            <yd-flexbox-item v-else>
                                <div class="design" v-for="(vv, kk) in v.value">
                                    <img :src="vv.cname" alt="" @click="tabInfoChange(k, kk, vv.id, $event)" :class="{'SelectedImg': vv.isActiveC, 'disableCheckedImg': vv.notClick}">
                                </div>
                            </yd-flexbox-item>
                        </div>
                    </div>
                    <yd-flexbox class="count">
                        <yd-flexbox-item>
                            <h4 style="font-size: 14px;color: #3d3d40">Qty</h4>
                        </yd-flexbox-item>
                        <div id="bb">
                            <button type="button" @click="plus" class="bd-box subtraction min">+</button>
                            <input type="text" class="bd-box number-box" v-model="result">
                            <button type="button" @click="minus" class="bd-box addition add">-</button>
                        </div>
                    </yd-flexbox>
                </div>
                <!-- 底部加入购物车 -->
                <div style=" height:50px;"></div>
                <!-- <yd-button @click.native="openNotify" size="large" type="hollow">Notify</yd-button> -->
                <!-- 限时抢购 -->
                <div class="base" v-if="promo=='time'">
                    <div v-if="initia >0" class="buy_now" style="width: 100%; line-height: 1rem;" @click="immediately()">Buy Now</div>
                    <div v-if="initia <= 0" class="buy_now" style="width: 100%;line-height: 1rem;" @click="speak()">Buy Now</div>
                </div>
                <!-- 普通商品 -->
                <div class="base" v-if="promo=='' || promo==undefined">
                    <div class="addcart" style="line-height: 1rem;background-color: #ff7800;" @click="join()">Add to Cart</div>
                    <div class="buy_now" style="line-height: 1rem;background-color: #ff4500;" @click="immediately()">Buy Now</div>
                </div>

            </yd-popup>
        </yd-flexbox>

        <yd-flexbox class="variation" v-if="promo=='quota'">
            <yd-button @click.native="show2 = true" style="background-color: rgba(0, 0, 0, 0)">
                <yd-flexbox>
                    <yd-flexbox-item style="color: #000;text-align: left;">Select Variation</yd-flexbox-item>
                    <div>
                        <i class="iconfont icon-more1" style="color: #3d3d40;font-size: 0.4rem;"></i>
                    </div>
                </yd-flexbox>
            </yd-button>
            <yd-popup v-model="show2" :close-on-masker="false" position="bottom" height="60%" class="Specification">
                <!-- <yd-button type="warning" style="margin: 30px;" @click.native="show2 = false">Close Bottom Popup</yd-button> -->

                <yd-flexbox class="Specification_t">
                    <div class="Large"><img :src="Imgstr+goods_info.img" alt=""></div>
                    <yd-flexbox-item>
                        <yd-flexbox direction="vertical">
                            <yd-flexbox-item v-if="checked!='' && goodsID==''" style="font-size: 0.32rem;color: #ff4500;line-height: 0.6rem; margin-bottom: 0.08rem;" v-model="goodsID">
                                ₱{{quota_price}}
                            </yd-flexbox-item>
                            <yd-flexbox-item v-if="checked==''" style="font-size: 0.32rem;color: #ff4500;line-height: 0.6rem; margin-bottom: 0.08rem;" v-model="goodsID">
                                ₱{{quota_price}}
                            </yd-flexbox-item>
                            <yd-flexbox-item v-for="(item,index) in product_detail" :key="index" v-if="item.product_id==goodsID" v-model="item.quota_price" style="font-size: 16px;color: #ff4500;line-height: 30px; margin-bottom: 4px;">
                                ₱{{item.quota_price}}
                            </yd-flexbox-item>
                            <!-- <yd-flexbox-item v-if="cost==null" style="font-size: 16px;color: #ff4500;line-height: 30px; margin-bottom: 4px;" v-model="cost">
                                                                                                                                ₱{{award_value}}
                                                                                                                            </yd-flexbox-item> -->
                            <!-- <yd-flexbox-item style="font-size: 14px;color: #c2c4cc;" v-if="checked.store_nums!=null">Stcok:{{checked.store_nums}}</yd-flexbox-item>
                                                                <yd-flexbox-item style="font-size: 14px;color: #c2c4cc;" v-if="checked.store_nums==null">Stcok:{{goods_info.store_nums}}</yd-flexbox-item> -->
                            <!-- <yd-flexbox-item style="font-size: 14px;color: #c2c4cc;"  v-for="(item,index) in product_detail" :key="index" v-if="item.product_id==goodsID">Stcok:{{item.quota_number}}</yd-flexbox-item>
                                                                 <yd-flexbox-item style="font-size: 14px;color: #c2c4cc;" v-if="checked!='' && goodsID==''">Stcok:20</yd-flexbox-item>  
                                                                  <yd-flexbox-item style="font-size: 14px;color: #c2c4cc;" v-if="checked==''">Stcok:20</yd-flexbox-item>   -->

                        </yd-flexbox>
                    </yd-flexbox-item>
                    <yd-flexbox-item style="font-size: 0.4rem;text-align: right;margin-top: -0.4rem;color: #c2c4cc" @click.native="showlis();toChangeSwitch(false)">X
                    </yd-flexbox-item>
                </yd-flexbox>
                <!-- Color 颜色规格-->
                <div class="boxes">
                    <div class="Specification_t">

                        <div v-for="(v, k) in keys" style="width: 100%;" :keys="k">
                            <div class="tinct">{{ v.name }}</div>

                            <yd-flexbox-item v-if="parseInt(v.type) === 1">
                                <div class="spec" v-for="(vv, kk) in v.value" :keys="kk" @click="tabInfoChange(k, kk, vv.id, $event)" :class="{'Selected': vv.isActiveC, 'disableChecked': vv.notClick,'forbid':(vv.inventory==0 && keys.length==1)}">{{vv.cname}}
                                </div>
                            </yd-flexbox-item>

                            <yd-flexbox-item v-else>
                                <div class="design" v-for="(vv, kk) in v.value">
                                    <img :src="vv.cname" alt="" @click="tabInfoChange(k, kk, vv.id, $event)" :class="{'SelectedImg': vv.isActiveC, 'disableCheckedImg': vv.notClick}">
                                </div>
                            </yd-flexbox-item>
                        </div>
                    </div>
                    <yd-flexbox class="count">
                        <yd-flexbox-item>
                            <h4 style="font-size: 14px;color: #3d3d40">Qty</h4>
                        </yd-flexbox-item>
                        <div id="bb">
                            <button type="button" @click="plus" class="bd-box subtraction min">+</button>
                            <input type="text" class="bd-box number-box" v-model="result">
                            <button type="button" @click="minus" class="bd-box addition add">-</button>
                        </div>
                    </yd-flexbox>
                    <yd-flexbox direction="vertical" style="    height: 0.4rem;text-align: right;padding-right: 0.28rem;color: rgb(194, 196, 204);">
                        <yd-flexbox-item>Maximum of {{max}} pieces per item(Group Buy)</yd-flexbox-item>
                    </yd-flexbox>
                </div>
                <!-- 底部加入购物车 -->
                <div style=" height:50px;"></div>
                <!-- <yd-button @click.native="openNotify" size="large" type="hollow">Notify</yd-button> -->
                <!-- 拼单商品 -->
                <!-- 1.创建拼团 -->
                <div class="base" v-if="plays=='true' && isjoin==2">
                    <div class="buy_now" @click="sponsor()" style=" background: linear-gradient(to right, #9f3fff, #623eff) ;width: 100%;">
                        <div>₱{{quota_price}}</div>
                        <div>Join Group buy</div>
                    </div>
                </div>
                <div class="base" v-if="isjoin==3">
                    <div class="buy_now" @click="sponsor()" style=" background: linear-gradient(to right, #9f3fff, #623eff) ;width: 100%;">
                        <div>₱{{quota_price}}</div>
                        <div>Join Group buy</div>
                    </div>
                </div>
                <div class="base" v-if="plays=='false' && isjoin==2">
                    <div class="addcart" @click="immediately()" style=" background: linear-gradient(to right, #ff7600, #ff4700);width: 50%;">
                        <div v-if="sellprice==''">₱{{sell_price}}</div>
                        <div v-if="sellprice!=''">₱{{sellprice}}</div>
                        <div>Buy Solo</div>
                    </div>
                    <div class="buy_now" @click="creation()" style=" background: linear-gradient(to right, #9f3fff, #623eff) ;width: 50%;">
                        <div v-if="checked!='' && goodsID==''">₱{{quota_price}}</div>
                        <div v-if="checked==''">₱{{quota_price}}</div>
                        <div v-for="(item,index) in product_detail" :key="index" v-if="item.product_id==goodsID">₱{{item.quota_price}}</div>
                        <div>{{people}} Person Group Buy</div>

                    </div>
                </div>

                <!-- <div class="base" v-if="promo=='quota'&& isjoin!=1">
                                                                                        <yd-button class="addcart" @click.native="immediately()" style=" background: linear-gradient(to right, #ff7600, #ff4700);width: 50%;">
                                                                                            <div>₱{{sell_price}}</div>
                                                                                            <div>Buy Solo</div>
                                                                                        </yd-button>
                                                                                        <yd-button class="buy_now" @click.native="creation()" style=" background: linear-gradient(to right, #9f3fff, #623eff) ;width: 50%;">
                                                                                            <div>₱{{quota_price}}</div>
                                                                                            <div>Create Quota</div>
                                                                                        </yd-button>
                                                                                    </div>  -->
                <div class="base" v-if="promo=='quota'&& isjoin==1">

                    <div class="addcart" @click.native="ftsc()" style="line-height: 1rem; background: linear-gradient(to right, #ff7600, #ff4700);width: 100%;">
                        Invite Friends
                    </div>

                </div>
                <!-- <div class="base" v-if="promo=='quota'&& isjoin==2">
                                                                                                                                                    <yd-button class="buy_now" style="width: 100%;background: linear-gradient(to right, #9f3fff, #623eff) ;" @click.native="sponsor">
                                                                                                                                                        <div v-if="cost!=null"> ₱{{cost}}.00</div>
                                                                                                                                                        <div v-if="cost==null"> ₱{{sell_price}}</div>
                                                                                                                                                        <div>Join Quota</div>
                                                                                                                                                    </yd-button>
                                                                                                                                                </div> -->
            </yd-popup>
        </yd-flexbox>
    </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'
import { diff } from '../../assets/help/utils'

import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            show2: false,
            show1: false,
            spinner1: 1,
            SKUResult: {},
            data: {},
            keys: [],
            checked: {},
            result: 1,
            cost: null,
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
            forbid: '',
            show: '',
            specArray: [],
            sell_price: '',
            reveal: false,
            promo: '',
            isjoin: '',
            isShow: false,
            quotagoodsid: '',
            award_value: '',
            initia: '',
            conclu: '',
            id: '',
            quota_price: '',
            market_price: '',
            plays: 'false',
            peoples: '',
            max: '',
            orders_ids: '',
            goodsID: '',
            product_detail: '',
            sellprice: '',
            user_id: user_id,
        }
    },
    computed: {
        ...mapState([
            'skuKeys', 'stockGoods', 'model_show'
        ]),
        ...mapGetters([
            'setAttributes', 'setStockGoods', 'goods_info', 'joinquota', 'quotaordersid', 'conclude', 'initiates', 'conclude', 'play', 'orders_id'
        ]),
    },
    watch: {

        play() {
            this.plays = this.play

        },
        setAttributes() {
            this.keys = this.setAttributes;
            // console.log(this.setAttributes)
            // var forbid =  this.setAttributes[0].value
            // var _this = this
            // forbid.forEach(function(item) {
            //     var value = item.value;
            //     value.forEach(function(rem) {
            //         var inventory = rem.inventory
            //         if (inventory == 0) {
            //             _this.forbid = true
            //         }
            //     });


            // });


        },
        setStockGoods() {
            this.data = this.setStockGoods;
            //  console.log(skuKeys)
        },
        keys() {
            this.queryDGoodsById();
        },
        model_show() {

            this.show2 = this.model_show
            this.isShow = !this.isShow;

        },

        checked() {
            this.$store.state.checked = this.checked;
            this.goodsID = this.checked.goodsID
            this.sellprice = this.checked.sell_price
        },
        result() {
            this.$store.state.result = this.result;
        },
        goods_info() {
            this.price()
            if (this.goods_info.promo == 'quota') {
                this.quota_price = this.goods_info.quota.quota_price
                this.people = this.goods_info.quota.people
                this.market_price = this.goods_info.market_price
                this.max = this.goods_info.quota.max
                this.product_detail = this.goods_info.quota.product_detail
            }

        },
        joinquota() {
            this.isjoin = this.joinquota

        },
        initiates() {
            this.initia = this.initiates

        },
        conclude() {
            this.conclu = this.conclude

        },
        orders_id() {
            this.orders_ids = this.orders_id
        }
    },
    created() {
        this.path()
    },
    updated() {
        //    this.switch = this.$store.state.switch

        //   console.log(this.show2)
    },
    methods: {

        ftsc() {

            let nothing1 = {
                id: this.goods_info.id,
                promo: this.goods_info.promo,
                price: this.goods_info.quota.quota_price,
                Name: this.goods_info.name,
            }

            localStorage.setItem('str3', JSON.stringify(nothing1))
            window.location.href = "/site/invitefriends"
        },
        ...mapActions([
            'toChangeSwitch'
        ]),
        speak() {
            this.$dialog.toast({
                // 活动结束或未开始！
                mes: 'The activity ends or does not begin',
                timeout: 1500
            });
        },
        showlis() {
            this.show2 = false
        },
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
            // 是否从收藏进来
            if (theRequest.collect != undefined) {
                var str = window.location.href;
                if (theRequest.collect == 1) {
                    var str1 = str.replace(/\s+/g, "")
                    var str = str1.replace(/\//g, "")
                    _this.id = str.replace('?', "~").match(/id(\S*)~/)[1]

                }
                if (theRequest.collect == 2) {
                    var str1 = str.replace(/\s+/g, "")
                    var str = str1.replace(/\//g, "")
                    _this.id = str.match(/id(\S*)active_id/)[1]
                    _this.active_id = str.match(/active_id(\S*)promo/)[1]
                    _this.promo = str.replace('?', "~").match(/promo(\S*)~/)[1]

                }
            }
            if (theRequest.collect == undefined) {
                if (ulrs.indexOf(".html") != -1) {
                    _this.id = ulrs.substring(ulrs.lastIndexOf("-") + 1, ulrs.length).replace(/.html/, "")
                    if (ulrs.indexOf("?") != -1) {
                        _this.id = ulrs.split("?")[0].substring(ulrs.split("?")[0].lastIndexOf("-") + 1, ulrs.split("?")[0].length).replace(/.html/, " ")

                    }
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
                    _this.quotagoodsid = theRequest.quota_goods_id

                } else {
                    var url = location.search; //获取url中"?"符后的字串 
                    var theRequest = {};
                    if (url.indexOf("?") != -1) {
                        var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
                        var strs = str.split("&");
                        for (var i = 0; i < strs.length; i++) {
                            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                        }
                    }
                }
            }


            _this.promo = theRequest.promo
            _this.quotagoodsid = theRequest.quota_goods_id
        },
        price() {
            this.sell_price = this.goods_info.sell_price
            this.award_value = this.goods_info.promotion.award_value
        },
        minus() {
            var store_nums = this.checked.store_nums
            var goods_id = this.checked.goodsID;
            if (this.result > 1) {
                this.result--;
                this.$emit('input', { res: this.result, other: '--' })
                if (this.checked.sell_price != undefined) {
                    this.cost = this.checked.sell_price
                }
            }
        },
        plus() {
            var store_nums = this.checked.store_nums
            var goods_id = this.checked.goodsID;
            // if (this.result < store_nums) {
            //     this.result++;
            //     this.$emit('input', { res: this.result, other: '++' })
            //     this.cost = this.checked.sell_price * this.result

            // }
            var nothing = this.goods_info.store_nums
            if (this.result < nothing) {
                this.result++;
                this.$emit('input', { res: this.result, other: '++' })
                if (this.checked.sell_price != undefined) {
                    this.cost = this.checked.sell_price
                }
            } else {
                this.$dialog.toast({
                    mes: 'lnsufficient inventory',
                    timeout: 1500
                });
            }

        },
        //加入购物车
        join() {
            var goods_id = this.checked.goodsID;
            var type = this.goods_info.type;
            var goods_num = this.result;
            var cargo = this.goods_info.id
            var stock = this.goods_info.store_nums;

            if (this.checked.store_nums != 0 && stock != 0) {
                if (user_id == null) {
                    window.location.href = "/login.html"
                } else {
                    if (JSON.stringify(this.goods_info.spec_array) == "{}") {
                        var param = qs.stringify({ id: cargo, type: type, num: goods_num });
                        service.post(api.contract + 'api/v1/goods/joinCart', param).then(res => {
                            this.shop = res.data.data.count
                            this.$dialog.toast({
                                //  已加入购物车！
                                mes: 'Added to cart',
                                timeout: 1500
                            });
                        })
                    }
                    if (!goods_id && JSON.stringify(this.goods_info.spec_array) != "{}") {
                        // alert("请选择规格")
                        this.$dialog.toast({
                            // 请选择规格
                            mes: 'Please select variation first',
                            timeout: 1500
                        });

                    }
                    if (goods_id != undefined) {
                        var param = qs.stringify({ id: goods_id, type: type, num: goods_num });
                        service.post(api.contract + 'api/v1/goods/joinCart', param).then(res => {
                            this.shop = res.data.data.count
                            this.$dialog.toast({
                                //  已加入购物车！
                                mes: 'Added to cart',
                                timeout: 1500
                            });
                        })
                    }
                }
            } else {
                this.$dialog.toast({
                    // 库存不足
                    mes: 'Understock',
                    timeout: 1500
                });
            }



        },
        // 立刻购买 
        immediately() {
            // s数量
            var result = this.result;
            // 货品id
            var id = this.checked.goodsID;
            // 商品类型，
            var type = this.goods_info.type;
            // 活动类型

            if (this.goods_info.promo == 'quota') {
                var promo = ''
                var active_id = ''
                let nothing1 = {
                    id: this.goods_info.id,
                    promo: this.goods_info.promo,
                    price: this.goods_info.quota.quota_price,
                    Name: this.goods_info.name,
                }
                localStorage.setItem('str3', JSON.stringify(nothing1))
            } else {
                var promo = this.goods_info.promo
                var active_id = this.goods_info.active_id;
            }
            // 活动id


            // 商品id
            var cargo = this.goods_info.id
            var stock = this.goods_info.store_nums;
            if (this.checked.store_nums != 0 && stock != 0) {
                if (user_id == null) {
                    window.location.href = "/login.html"
                } else {
                    if (!id && JSON.stringify(this.goods_info.spec_array) != "{}") {
                        this.$dialog.toast({
                            mes: 'Please select variation first',
                            timeout: 1500
                        });

                    }
                    // 无规格
                    if (JSON.stringify(this.goods_info.spec_array) == "{}") {
                        window.location.href = "order.html"
                        let nothing1 = {
                            id: cargo,
                            type: type,
                            promo: promo,
                            active_id: active_id,
                            result: result,
                            nature: 1
                        }

                        localStorage.setItem('str1', JSON.stringify(nothing1))

                    }
                    if (id != undefined) {
                        window.location.href = "order.html"
                        var nothing2 = {
                            id: id,
                            type: type,
                            promo: promo,
                            active_id: active_id,
                            result: result,
                            nature: 1
                        }
                        localStorage.setItem('str1', JSON.stringify(nothing2))
                        //  var storage = window.localStorage;
                        //  var str1 = JSON.stringify(nothing2); 
                        // storage.str1 = str1;
                    }
                }
            } else {
                this.$dialog.toast({
                    mes: 'Understock',
                    timeout: 1500
                });
            }

        },
        // 加入拼单
        sponsor() {
            let nothing1 = {
                id: this.goods_info.id,
                promo: this.goods_info.promo,
                price: this.goods_info.quota.quota_price,
                Name: this.goods_info.name,
            }
            localStorage.setItem('str3', JSON.stringify(nothing1))
            var result = this.result;
            var id = this.checked.goodsID;
            // var type = this.goods_info.type;
            // var promo = this.goods_info.promo;
            // var active_id = this.goods_info.active_id;
            var cargo = this.goods_info.id
            var stock = this.goods_info.store_nums;
            // var storage = window.localStorage;
            var quota_goods_id = this.goods_info.quota.quota_goods_id;
            var storage = window.localStorage;
            var quota_orders_id = storage.quota_orders_id;
            if (this.isjoin == 3) {
                quota_orders_id = this.orders_ids
            }
            if (this.checked.store_nums != 0 && stock != 0) {
                if (user_id == null) {
                    window.location.href = "login.html"
                } else {
                    if (!id && JSON.stringify(this.goods_info.spec_array) != "{}") {
                        this.$dialog.toast({
                            mes: 'Please select variation first',
                            timeout: 1500
                        });

                    }
                    // 无规格
                    if (result <= this.max) {
                        if (JSON.stringify(this.goods_info.spec_array) == "{}") {
                             // 验证
                            var param = qs.stringify({
                                goods_id: cargo,
                                products_id: id,
                                quota_goods_id: quota_goods_id,
                                num: result,

                            });
                            service.post(api.contract + 'api/v1/group/createGroup', param).then(res => {
                                var msg = res.data.msg
                                var code = res.data.code
                                if (code == '200') {
                                    window.location.href = "order.html"
                                } else {
                                    this.$dialog.toast({
                                        mes: msg,
                                        timeout: 3000
                                    });
                                }
                            })
                            let nothing1 = {
                                quota_goods_id: quota_goods_id,
                                products_id: id,
                                num: result,
                                goods_id: cargo,
                                quota_orders_id: quota_orders_id,
                                nature: 3,
                                promo:this.goods_info.promo,
                            }

                            localStorage.setItem('str1', JSON.stringify(nothing1))

                        }
                        if (id != undefined) {
                          // 验证
                            var param = qs.stringify({
                                goods_id: cargo,
                                products_id: id,
                                quota_goods_id: quota_goods_id,
                                num: result,

                            });
                            service.post(api.contract + 'api/v1/group/createGroup', param).then(res => {
                                var msg = res.data.msg
                                var code = res.data.code
                                if (code == '200') {
                                    window.location.href = "order.html"
                                } else {
                                    this.$dialog.toast({
                                        mes: msg,
                                        timeout: 3000
                                    });
                                }
                            })
                            var nothing2 = {
                                quota_goods_id: quota_goods_id,
                                products_id: id,
                                num: result,
                                goods_id: cargo,
                                quota_orders_id: quota_orders_id,
                                nature: 3,
                                 promo:this.goods_info.promo,
                            }
                            localStorage.setItem('str1', JSON.stringify(nothing2))

                        }
                    } else {
                        this.$dialog.toast({
                            mes: 'Exceed purchase quantity',
                            timeout: 1500
                        });
                    }

                }
            } else {
                this.$dialog.toast({
                    mes: 'Understock',
                    timeout: 1500
                });
            }

        },
        // 创建拼单
        creation() {
            let nothing1 = {
                id: this.goods_info.id,
                promo: this.goods_info.promo,
                price: this.goods_info.quota.quota_price,
                Name: this.goods_info.name,
            }
            localStorage.setItem('str3', JSON.stringify(nothing1))
            var result = this.result;
            var id = this.checked.goodsID;
            // var type = this.goods_info.type;
            // var promo = this.goods_info.promo;
            // var active_id = this.goods_info.active_id;
            var cargo = this.goods_info.id
            var stock = this.goods_info.store_nums;
            // var storage = window.localStorage;
            var quota_goods_id = this.goods_info.quota.quota_goods_id;

            if (this.checked.store_nums != 0 && stock != 0) {
                if (user_id == null) {
                    window.location.href = "/login.html"
                } else {
                    if (!id && JSON.stringify(this.goods_info.spec_array) != "{}") {
                        this.$dialog.toast({
                            mes: 'Please select variation first',
                            timeout: 1500
                        });

                    }
                    // 无规格
                    if (result <= this.max) {
                        if (JSON.stringify(this.goods_info.spec_array) == "{}") {

                            window.location.href = "order.html"
                            let nothing1 = {
                                quota_goods_id: quota_goods_id,
                                products_id: id,
                                num: result,
                                goods_id: cargo,
                                quota_orders_id: '',
                                nature: 3,
                            }

                            localStorage.setItem('str1', JSON.stringify(nothing1))

                        }
                        if (id != undefined) {

                            window.location.href = "order.html"
                            var nothing2 = {
                                quota_goods_id: quota_goods_id,
                                products_id: id,
                                num: result,
                                goods_id: cargo,
                                quota_orders_id: '',
                                nature: 3,
                            }
                            localStorage.setItem('str1', JSON.stringify(nothing2))

                        }
                    } else {
                        this.$dialog.toast({
                            mes: 'Exceed purchase quantity',
                            timeout: 1500
                        });
                    }

                }
            } else {
                this.$dialog.toast({
                    mes: 'Understock',
                    timeout: 1500
                });
            }

        },
        // 加入购物车
        /*商品详情数据*/
        queryDGoodsById() {
            this.initSKU();//初始化，得到SKUResult
            /*根据SKUResult得到初始化的时候哪些不能点击*/
            for (let i = 0; i < this.keys.length; i++) {
                for (let j = 0; j < this.keys[i].value.length; j++) {
                    if (this.SKUResult[this.keys[i].value[j].id] == null) {
                        this.keys[i].value[j].notClick = true;
                    }
                }
            }
        },
        //获得对象的key
        getObjKeys(obj) {
            if (obj !== Object(obj)) throw new TypeError('Invalid object');
            var keys = [];
            for (var key in obj)
                if (Object.prototype.hasOwnProperty.call(obj, key))
                    keys[keys.length] = key;
            return keys;
        },

        //把组合的key放入结果集SKUResult
        add2SKUResult(combArrItem, sku) {
            var key = combArrItem.join(";");
            if (this.SKUResult[key]) { //SKU信息key属性·
                this.SKUResult[key].count += sku.count;
                this.SKUResult[key].prices.push(sku.price);
            } else {
                this.SKUResult[key] = {
                    count: sku.count,
                    prices: [sku.price]
                };
            }

        },

        //初始化得到结果集
        initSKU() {
            var i, j, skuKeys = this.getObjKeys(this.data);
            for (i = 0; i < skuKeys.length; i++) {
                var skuKey = skuKeys[i]; //一条SKU信息key
                var sku = this.data[skuKey]; //一条SKU信息value
                var skuKeyAttrs = skuKey.split(";"); //SKU信息key属性值数组
                skuKeyAttrs.sort(function(value1, value2) {
                    return parseInt(value1) - parseInt(value2);
                });

                //对每个SKU信息key属性值进行拆分组合
                var combArr = this.combInArray(skuKeyAttrs);
                for (j = 0; j < combArr.length; j++) {
                    this.add2SKUResult(combArr[j], sku);
                }

                //结果集接放入SKUResult
                this.SKUResult[skuKeyAttrs.join(";")] = {
                    count: sku.count,
                    prices: [sku.price]
                }
            }

        },

        /**
         * 从数组中生成指定长度的组合
         * 方法: 先生成[0,1...]形式的数组, 然后根据0,1从原数组取元素，得到组合数组
         */
        combInArray(aData) {
            if (!aData || !aData.length) {
                return [];
            }

            var len = aData.length;
            var aResult = [];

            for (var n = 1; n < len; n++) {
                var aaFlags = this.getCombFlags(len, n);
                while (aaFlags.length) {
                    var aFlag = aaFlags.shift();
                    var aComb = [];
                    for (var i = 0; i < len; i++) {
                        aFlag[i] && aComb.push(aData[i]);
                    }
                    aResult.push(aComb);
                }
            }

            return aResult;
        },

        /**
         * 得到从 m 元素中取 n 元素的所有组合
         * 结果为[0,1...]形式的数组, 1表示选中，0表示不选
         */
        getCombFlags(m, n) {
            if (!n || n < 1) {
                return [];
            }

            var aResult = [];
            var aFlag = [];
            var bNext = true;
            var i, j, iCnt1;

            for (i = 0; i < m; i++) {
                aFlag[i] = i < n ? 1 : 0;
            }

            aResult.push(aFlag.concat());

            while (bNext) {
                iCnt1 = 0;
                for (i = 0; i < m - 1; i++) {
                    if (aFlag[i] == 1 && aFlag[i + 1] == 0) {
                        for (j = 0; j < i; j++) {
                            aFlag[j] = j < iCnt1 ? 1 : 0;
                        }
                        aFlag[i] = 0;
                        aFlag[i + 1] = 1;
                        var aTmp = aFlag.concat();
                        aResult.push(aTmp);
                        if (aTmp.slice(-n).join("").indexOf('0') == -1) {
                            bNext = false;
                        }
                        break;
                    }
                    aFlag[i] == 1 && iCnt1++;
                }
            }
            return aResult;
        },
        /*商品条件筛选*/
        tabInfoChange(index, cindex, cid, e, node) {
            let orderInfo = this.keys
            /*所有规格*/
            let orderInfoChild = this.keys[index].value;
            /*当前点击的规格的所有子属性内容*/

            //选中自己，兄弟节点取消选中
            // console.log(orderInfoChild[cindex].notClick)
            if (orderInfoChild[cindex].notClick != true) {
                if (orderInfoChild[cindex].isActiveC == true) {
                    orderInfoChild[cindex].isActiveC = false;
                    this.checked = ''
                    this.goodsID = ''
                    this.sellprice = ''

                } else {
                    for (let i = 0; i < orderInfoChild.length; i++) {
                        orderInfoChild[i].isActiveC = false;
                    }
                    orderInfoChild[cindex].isActiveC = true;

                }
            }

            //已经选择的节点
            let haveChangedId = [];
            for (let i = 0; i < this.keys.length; i++) {
                for (let j = 0; j < this.keys[i].value.length; j++) {
                    if (this.keys[i].value[j].isActiveC == true) {
                        haveChangedId.push(this.keys[i].value[j].id);
                    }
                }
            }
            if (haveChangedId.length) {
                //获得组合key价格
                haveChangedId.sort(function(value1, value2) {
                    return parseInt(value1) - parseInt(value2);
                });
                var len = haveChangedId.length;
                var prices = this.SKUResult[haveChangedId.join(';')].prices;
                //用已选中的节点验证待测试节点
                let daiceshi = [];//待测试节点
                let daiceshiId = [];

                for (let i = 0; i < this.keys.length; i++) {
                    for (let j = 0; j < this.keys[i].value.length; j++) {
                        if (this.keys[index].value[cindex].id != this.keys[i].value[j].id) {
                            daiceshi.push({
                                index: i,
                                cindex: j,
                                id: this.keys[i].value[j].id
                            });
                            daiceshiId.push(this.keys[i].value[j].id);
                        }
                    }
                }
                for (let i = 0; i < haveChangedId.length; i++) {
                    var indexs = daiceshiId.indexOf(haveChangedId[i]);
                    if (indexs > -1) {
                        daiceshi.splice(indexs, 1);
                    }
                }
                for (let i = 0; i < daiceshi.length; i++) {
                    let testAttrIds = []; //从选中节点中去掉选中的兄弟节点
                    let siblingsId = "";
                    for (let m = 0; m < this.keys[daiceshi[i].index].value.length; m++) {
                        if (this.keys[daiceshi[i].index].value[m].isActiveC == true) {
                            siblingsId = this.keys[daiceshi[i].index].value[m].id;

                        }
                    }
                    if (siblingsId != "") {
                        for (let j = 0; j < len; j++) {
                            (haveChangedId[j] != siblingsId) && testAttrIds.push(haveChangedId[j]);
                            // console.log(326)
                        }
                    } else {
                        testAttrIds = haveChangedId.concat();

                    }
                    testAttrIds = testAttrIds.concat(this.keys[daiceshi[i].index].value[daiceshi[i].cindex].id);
                    testAttrIds.sort(function(value1, value2) {
                        return parseInt(value1) - parseInt(value2);
                    });
                    if (!this.SKUResult[testAttrIds.join(';')]) {
                        this.keys[daiceshi[i].index].value[daiceshi[i].cindex].notClick = true;
                        this.keys[daiceshi[i].index].value[daiceshi[i].cindex].isActiveC = false;

                    } else {
                        this.keys[daiceshi[i].index].value[daiceshi[i].cindex].notClick = false;

                    }

                }


                if (haveChangedId.length === this.keys.length) {
                    let checked = [];
                    this.skuKeys.forEach((v, k) => {
                        if (haveChangedId.indexOf(k + '') > -1) {
                            checked.push(v)
                        }
                    });

                    this.stockGoods.forEach((v, k) => {
                        let temp = [];
                        v.goodsInfo.forEach((v1, k1) => {
                            temp.push(`${v1.id}_${v1.value}`)
                        })

                        if (diff(temp, checked).length === 0) {
                            this.checked = v;
                        }
                    });
                    //  this.$store.state.checked = this.checked;  
                    //  this.$store.state.result = this.result;  
                    this.cost = this.checked.sell_price
                    console.log(this.checked)
                    // 拼单商品库存为0
                    //    var _this= this
                    // Object.keys(_this.product_detail).forEach(function(item) {
                    //       var product_id=_this.product_detail[item].product_id
                    //         var quota_number=_this.product_detail[item].quota_number
                    //       if(product_id==_this.checked.goodsID){
                    //           if(quota_number==0){
                    //                this.$dialog.toast({
                    //                 mes: 'lnsufficient inventory',
                    //                 timeout: 1500
                    //             });
                    //           }
                    //       }
                    // });


                }

            } else {
                //设置属性状态
                this.checked = ''
                for (let i = 0; i < this.keys.length; i++) {
                    for (let j = 0; j < this.keys[i].value.length; j++) {
                        if (this.SKUResult[this.keys[i].value[j].id]) {
                            this.keys[i].value[j].notClick = false;

                        } else {
                            this.keys[i].value[j].notClick = true;
                            this.keys[i].value[j].isActiveC = false;

                        }
                    }

                }
            }
        }
    }
}
</script>