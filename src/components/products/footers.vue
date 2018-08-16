

<style>
.footer {
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
}

.messag {
    width: 20%;
}

.chat {
    font-size: 0.2rem;
    color: #6d6e73;
    margin: 0.04rem 0 0.12rem 0;
}

.now {
    border-right: 0.02rem solid #f2f2f2;
}

.now img {
    padding-top: 0.12rem;
}

.buynow {
    font-size: 0.32rem;
    background-color: #ff4500;
    color: #fff;
    height: 1.1rem;
    /* line-height: 55px; */
    padding: 0px;
}

.empty {
    height: 1.1rem;
}
</style>

<template>
    <div>
        <div v-if="promo=='time'">
            <!-- 底部 -->
            <div class="empty"></div>
            <yd-flexbox class="footer">
                <div class="message" style="width:22%;">
                    <yd-flexbox direction="vertical" class="now" @click.native="chatnow(seller_id,img,true_name)">
                        <yd-flexbox-item><img src="../../assets/images/not_refactoring/cart_icon_chat_default.png" alt=""></yd-flexbox-item>
                        <yd-flexbox-item class="chat">Chat Now</yd-flexbox-item>
                    </yd-flexbox>
                </div>
                <div class="message" style="width:22%;">
                    <yd-flexbox direction="vertical" class="now">
                        <div @click="favorite()">
                            <yd-flexbox-item v-if="user_id==''"><img src="../../assets/images/not_refactoring/cart_icon_favourite_default.png" alt=""></yd-flexbox-item>
                            <yd-flexbox-item v-if="usrfavorite==false && user_id!=''"><img src="../../assets/images/not_refactoring/cart_icon_favourite_default.png" alt=""></yd-flexbox-item>
                            <yd-flexbox-item v-if="usrfavorite==true && user_id!=''"><img src="../../assets/images/not_refactoring/cart_icon_favourite_pressed.png" alt=""></yd-flexbox-item>
                            <yd-flexbox-item class="chat">Favorite</yd-flexbox-item>
                        </div>
                    </yd-flexbox>
                </div>
                <!-- <yd-flexbox-item class="addtocart"> <a href="javascript:void(0);"  @click="join">Add to Cart</a></yd-flexbox-item> -->
                <yd-flexbox-item class="buynow" style="line-height:1.1rem;">
                    <a href="javascript:void(0);" v-if="initia >0" @click="immediately" style="width: 100%;height: 100%;display: inline-block;">Buy Now</a>
                    <a href="javascript:void(0);" v-if="initia <= 0" @click="speak" style="width: 100%;height: 100%;display: inline-block;">Buy Now</a>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>

        <div v-if="promo=='quota'">
            <!-- 底部 -->
            <div class="empty"></div>
            <yd-flexbox class="footer">
                <div class="message" style="width:18%;">
                    <yd-flexbox direction="vertical" class="now" @click.native="chatnow(true_name,img,seller_id)">
                        <yd-flexbox-item><img src="../../assets/images/not_refactoring/cart_icon_chat_default.png" alt=""></yd-flexbox-item>
                        <yd-flexbox-item class="chat">Chat Now</yd-flexbox-item>
                    </yd-flexbox>
                </div>
                 <!-- <div class="message" style="width:22%;">
                         <yd-flexbox direction="vertical" class="now">
                            <div @click="favorite()">
                                <yd-flexbox-item v-if="user_id==''"><img src="~assets/images/wap_products/cart_icon_favourite_default.png" alt=""></yd-flexbox-item>
                                <yd-flexbox-item v-if="usrfavorite==false &&user_id!=''"><img src="~assets/images/wap_products/cart_icon_favourite_default.png" alt=""></yd-flexbox-item>
                                <yd-flexbox-item v-if="usrfavorite==true &&user_id!=''"><img src="~assets/images/wap_products/cart_icon_favourite_pressed.png" alt=""></yd-flexbox-item>
                                 <yd-flexbox-item class="chat">Favorite</yd-flexbox-item> 
                            </div>
                        </yd-flexbox> 
                    </div>  -->
                <!-- 创建拼团 -->

                <yd-flexbox-item class="addtocart" v-if="joinq=='2'">
                    <a href="javascript:void(0);" @click="immediately()" style="font-size:0.28rem;padding-top: 0.12rem;width: 100%;height: 100%;display: inline-block; background: linear-gradient(to right, #ff7600, #ff4700);">
                        <div>₱{{sell_price}}</div>
                        <div>Buy Solo</div>
                    </a>
                </yd-flexbox-item>
                <yd-flexbox-item class="buynow" v-if="joinq=='2'">
                    <a href="javascript:void(0);" @click="creation()" style="font-size:0.28rem;padding-top: 0.12rem;width: 100%;height: 100%;display: inline-block; background: linear-gradient(to right, #9f3fff, #623eff) ;">
                        <div>₱{{quota_price}}</div>
                        <div>{{people}} Person Group Buy</div>
                        <!-- <div>Start Group Buy</div> -->
                    </a>
                </yd-flexbox-item>

                <yd-flexbox-item class="addtocart" v-if="joinq=='1'" style="    line-height: 1.1rem;">
                    <div @click="ftsc()">Invite Friends</div>
                </yd-flexbox-item>

                <yd-flexbox-item class="addtocart" v-if="joinq=='3'"@click.native="creation()" style="font-size: 0.28rem;    padding: 0.14rem 0px;width: 100%;height: 100%;display: inline-block; background: linear-gradient(to right, #9f3fff, #623eff) ;">
                    <div>₱{{quota_price}}</div>
                    <div >Join Group buy</div>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
    </div>
</template>

 <script type="text/javascript">
//  import {myfun} from '../../../assets/js/Share'
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'

import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            session: [],
            type: null,
            promo: '',
            joinq: '',
            collect: '',
            initia: '',
            usrfavorite: '',
            quota_price: '',
            sell_price: '',
            active_id: '',
            id: '',
            quota_goods_id: '',
            seller_id: '',
            img: '',
            true_name: '',
            user_id: '',
            people: '',
             user_id: user_id,
        }
    },
    created() {//这个方法Vue会自动调用
       

    }, computed: {
        ...mapGetters([
            'checked', 'goods_info', 'result', 'joinquota', 'initiates',

        ]),
    },
    watch: {
        joinquota() {

            this.joinq = this.joinquota
        },
        initiates() {
            this.initia = this.initiates

        },
        goods_info() {
            this.seller_id = this.goods_info.seller_id
            this.img = "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/" + this.goods_info.seller.img
            this.true_name = this.goods_info.seller.true_name
              this.promo = this.goods_info.promo
            if (this.promo == 'quota') {
                this.sell_price = this.goods_info.sell_price
                this.quota_price = this.goods_info.quota.quota_price
                this.people = this.goods_info.quota.people
            }

            this.usrfavorite = this.goods_info.usrfavorite
            if (this.usrfavorite == 1) {
                this.usrfavorite = true
            }
            if (this.usrfavorite == 2) {
                this.usrfavorite = false
            }
        }
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
       
        // 收藏/取消收藏
        favorite() {
            if (user_id == null) {
                window.location.href = '/login.html'
            } else {
                var _this = this
                var goods_id = _this.goods_info.id
                _this.usrfavorite = !_this.usrfavorite
                var param = qs.stringify({ goods_id: goods_id, type: 1,user_id:_this.user_id});
                service.post(api.contract + 'api/v1/user/addOrCancel',param).then(res => {
                })

            }


        },
        // 立刻购买 
        immediately() {

            var chaining = window.location.href;
            localStorage.setItem("chaining", chaining);

            this.$store.state.play = 'false'
            var result = this.result;
            if (result == '') {
                result = 1
            }
            var id = this.checked.goodsID;
            var type = this.goods_info.type;

            if (this.goods_info.promo == 'quota') {
                var promo = ''
                var active_id = ''
                // var quota_goods_id = this.goods_info.quota.quota_goods_id;
            } else {
                var promo = this.goods_info.promo
                var active_id = this.goods_info.active_id;

            }
            var cargo = this.goods_info.id
            if (this.checked.store_nums != 0) {
                if (user_id == '') {
                    window.location.href = '/login.html'


                } else {
                    if (!id && JSON.stringify(this.goods_info.spec_array) != '{}') {

                        // this.$dialog.toast({
                        //     mes: 'Please select variation first',
                        //     timeout: 1500
                        // });
                        this.toChangeSwitch(true)
                    }
                    if (JSON.stringify(this.goods_info.spec_array) == '{}') {
                        // window.location.href = "/simple/cart2"
                        let nothing1 = {
                            id: cargo,
                            type: type,
                            promo: promo,
                            active_id: active_id,
                            result: result,
                            nature: 1
                        }
                        this.toChangeSwitch(true)
                        localStorage.setItem('str1', JSON.stringify(nothing1))

                    }
                    if (id != undefined) {
                        // window.location.href = "/simple/cart2"
                        var nothing2 = {
                            id: id,
                            type: type,
                            promo: promo,
                            active_id: active_id,
                            result: result,
                            nature: 1
                        }
                        localStorage.setItem('str1', JSON.stringify(nothing2))
                        this.toChangeSwitch(true)
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
            var chaining = window.location.href;
            localStorage.setItem("chaining", chaining);
            var result = this.result;
            if (result == '') {
                result = 1
            }
            var id = this.checked.goodsID;
            // var type = this.goods_info.type;
            // var promo = this.goods_info.promo;
            // var active_id = this.goods_info.active_id;
            var cargo = this.goods_info.id
            var stock = this.goods_info.store_nums;
            // var storage = window.localStorage;
            var quota_goods_id = this.goods_info.quota.quota_goods_id;

            if (this.checked.store_nums != 0 && stock != 0) {
                if (user_id == '') {
                   window.location.href = '/login.html'
                } else {
                    if (!id && JSON.stringify(this.goods_info.spec_array) != '{}') {
                        // this.$dialog.toast({
                        //     mes: 'Please select variation first',
                        //     timeout: 1500
                        // });
                        this.toChangeSwitch(true)

                    }
                    // 无规格
                    if (JSON.stringify(this.goods_info.spec_array) == "{}") {
                        this.toChangeSwitch(true)
                        // window.location.href = "/simple/cart2"
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
                        this.toChangeSwitch(true)
                        // window.location.href = "/simple/cart2"
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
                }
            } else {
                this.$dialog.toast({
                    mes: 'Understock',
                    timeout: 1500
                });
            }

        },
        // 聊天
        chatnow(true_name, img, seller_id) {

            chat(true_name, img, "82000" + seller_id)
        }
    }

};

</script>