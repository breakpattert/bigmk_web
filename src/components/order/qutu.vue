<style>
.promo {
    background-color: #fff;
    font-size: 0.28rem;
    color: #3d3d40;
    line-height: 0.96rem;
    padding-left: 0.28rem;
}

.article {
    border-top: 0.02rem solid #f2f2f2;
    padding: 0.28rem;
    background-color: #fff;
}

.article img {
    width: 1.88rem;
    height: 1.88rem;
    margin-right: 0.16rem;
}

.declare {
    /* font-weight: 400;  */
    font-size: 0.28rem;
    color: #3d3d40;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.measure {
    font-size: 0.24rem;
    color: #96989e;
    margin: 0.08rem 0 0.4rem 0;
}

.freight {
    background-color: #fff;
    font-size: 0.28rem;
    color: #3d3d40;
    line-height: 0.96rem;
    padding: 0 0.28rem;
    border-top: 0.02rem solid #f2f2f2;
}

.boxs {
    border-bottom: 0.02rem solid #f2f2f2;
}

.seller {
    background-color: #fff;
    border-radius: 0.12rem;
}

.seller p {
    font-size: 0.28rem;
    color: #c2c4cc;
    background-color: #f5f5f5;
    border-radius: 0.12rem;
    line-height: 0.72rem;
    padding-left: 0.28rem;
}

.remark {
    padding: 0.16rem 0.28rem;
    color: #ff7800;
    background-color: #ffe4cc;
    font-size: 0.28rem;
    border-bottom: 0.02rem solid #dcdde0;
}

.affirm {
    /* position: fixed; */
    bottom: 0px;
}

.affirml {

    bottom: 0px;
    padding-left: 0.28rem;
    line-height: 0.98rem;
}

.Payment {
    font-size: 0.28rem;
    color: #3d3d40;
}

.present {
    font-size: 0.32rem;
    color: #fff;
    background: linear-gradient(to right, #ff7800, #ff4500);
    padding: 0px 4%
}

.qutu {
    font-size: 0.32rem;
    color: #fff;
    background: linear-gradient(to right, #9f3fff, #623eff);
    padding: 0px 4%
}

.yd-btn-primary {
    background-color: #fff;
}



































/* 优惠券 */

.Select {
    font-size: 700;
    padding: 0 0.28rem;
    font-size: 0.28rem;
    color: #6d6e73;
    text-align: center;
    line-height: 0.96rem;
    /* border-bottom: 1px solid #dcdde0; */
}

.Select img {
    vertical-align: middle;
}

.Radio {
    font-size: 700;
    display: block;
    padding: 0.28rem 0px;
    margin-left: 0.16rem;
    line-height: 0.48rem;
    border-bottom: 0.02rem solid #e6e7eb;
}

.money {
    font-size: 0.32rem;
    color: #3d3d40;
    margin-bottom: 0.16rem;
}

.Promotions {
    width: 0.5rem;
    height: 0.5rem;
}

.frame {
    padding: 0px 0.28rem 0.28rem 0.28rem;
    line-height: 0.5rem;
    border-top: 0.02rem solid #f2f2f2;
}

.moneys {
    font-weight: 700;
    font-size: 0.32rem;
    color: #3d3d40;
    padding: 0.28rem 0 0 0;
}

.used {
    font-size: 0.28rem;
}

.frame .inpots {
    padding-top: 0.2rem;
}

.base {
    width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: #fff;
}

.yd-cell-right {
    margin-top: 0.2rem;
}

.freights {
    background-color: #fff;
    font-size: 0.28rem;
    color: #3d3d40;


    border-top: 0.02rem solid #f2f2f2;
}

.pick {
    font-size: 0.32rem;
    padding: 0.1rem 0px;
    font-size: 0.32rem;
    color: #96989e;
}

.addss {
    color: #000;
}
</style>


<template>
    <div>
        <div style="background-color: #fff;"><img src="../../assets/images/not_refactoring/orderconfirmation_image_address.png" alt="" style="width: 100%;">
        </div>
        <div style="height: 14px;"></div>
        <!-- 付款方式 -->
        <div class="freights">
            <yd-radio-group v-model="radio2" color="#ff4500" v-for="(v, k) in payment" :key="k">
                <yd-radio :val="v.id" @click.native="list(v)" style="display: block;padding: 0.32rem 0.2rem;    border-bottom: 1px solid #f2f2f2;">
                    <yd-flexbox-item style="font-size: 14px;color: #3d3d40;display: inline-block;">{{v.name}}</yd-flexbox-item>
                </yd-radio>

            </yd-radio-group>

        </div>
        <yd-flexbox direction="vertical" v-if="id=='17'" style="background-color: #fff;padding: 0px 0.2rem;    border-bottom: 0.02rem solid #f2f2f2;">
            <yd-flexbox-item class="pick">Pick Address:</yd-flexbox-item>
            <yd-flexbox-item class="addss">{{brunswick}}</yd-flexbox-item>
            <yd-flexbox-item class="pick">Business hours:</yd-flexbox-item>
            <yd-flexbox-item class="addss">{{business_time}}</yd-flexbox-item>
            <yd-flexbox-item class="pick">Pick-up time:</yd-flexbox-item>
            <yd-flexbox-item class="addss" style="padding-bottom: 0.2rem;">Please pick-up in {{pickup_time}} days</yd-flexbox-item>
        </yd-flexbox>
        <div>
            <div class="promo">{{quotas.true_name}}</div>
            <!-- 商品 -->
            <div class="article">
                <yd-flexbox>
                    <div><img :src="imgHost+quotas.goods_img"></div>
                    <yd-flexbox-item>
                        <yd-flexbox direction="vertical">
                            <yd-flexbox-item class="declare">{{quotas.goods_name}}
                            </yd-flexbox-item>

                            <yd-flexbox-item class="measure">
                                <span>{{quotas.spec_array}}</span>
                            </yd-flexbox-item>

                            <yd-flexbox-item>
                                <yd-flexbox>
                                    <yd-flexbox-item style="font-size: 0.32rem;color: #ff4500">₱{{quotas.goods_price}}</yd-flexbox-item>

                                    <yd-flexbox-item style="text-align: right;font-size: 0.32rem;color: #3d3d40">x{{quotas.num}}
                                    </yd-flexbox-item>
                                </yd-flexbox>
                            </yd-flexbox-item>
                        </yd-flexbox>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>

            <!-- 结算明细 -->
            <div class="freight">
                <yd-flexbox>
                    <yd-flexbox-item style="font-size: 0.28rem;color: #6d6e73;">Shipping Fee</yd-flexbox-item>
                    <yd-flexbox-item style="font-size: 0.28rem;color: #3d3d40;text-align: right;" v-if="address_ids!=''">₱{{delivery}}</yd-flexbox-item>

                </yd-flexbox>
            </div>

            <div class="freight boxs">
                <yd-flexbox>
                    <yd-flexbox-item style="font-size: 0.28rem;color: #6d6e73;">Amount</yd-flexbox-item>
                    <yd-flexbox-item style="font-size: 0.28rem;color: #ff4500;text-align: right;" v-if="address_ids!=''">₱{{payments}}</yd-flexbox-item>
                </yd-flexbox>
            </div>

        </div>

        <!-- 留言 -->
        <yd-cell-item>
            <yd-input slot="right" v-model="input1" placeholder="Leave a message for the seller" class="seller"></yd-input>
        </yd-cell-item>
        <!-- <div class="base" style="    word-break: break-all;"> -->
        <!-- 备注 -->
        <!-- <div class="remark">To:{{addresss}}</div> -->
        <!-- 确认下单 -->
        <div style=" height: 60px;"></div>
        <div class="affirm base">
            <yd-flexbox class="affirml">
                <yd-flexbox-item class="Payment">Actual Payment:
                    <span style="font-size: 0.36rem;color: #ff4500;padding-left: 0.08rem;" v-if="address_ids!=''">₱{{payments}}</span>
                </yd-flexbox-item>

                <div class="qutu" style="width: 36%;    line-height: 0.56rem;" @click="go_submit()" :disabled="isDisable">Submit Group Buy</div>
            </yd-flexbox>
        </div>
    </div>
    <!-- <div style=" height: 100px;"></div> -->

    </div>
</template>


<script type="text/babel">
import { mapGetters } from 'vuex'
import { diff } from '../../assets/help/utils'
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            showC: false,
            input1: '',
            payment: [],
            promo: '',
            show1: false,
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            delivery: '',
            delivers: '',
            amount: '',
            payments: '',
            paymentss: '',
            information: '',
            address_ids: '',
            addresss: '',
            freight: '',
            radio2: 16,
            brunswick: '',
            business_time: '',
            pickup_time: '',
            id: '',
            isDisable: false,
        }
    },
    computed: {
        ...mapGetters([
            'quotas', 'carriage', 'address', 'cart2_delivery', 'address_id', 'province'
        ]),

    },
    mounted() {
        this.fu()

    },
    watch: {
        province() {
            this.charge()

        },
        cart2_delivery() {

        },
        quotas() {
            this.payment = this.quotas.payment
            if (this.payment.length == 2) {
                this.brunswick = this.payment[1].pickup_address.province + this.payment[1].pickup_address.city + this.payment[1].pickup_address.area + this.payment[1].pickup_address.address
                this.business_time = this.payment[1].pickup_address.business_time
                this.pickup_time = this.payment[1].pickup_address.pickup_time
            }
        },
        address_id() {
            // 地址id
            this.address_ids = this.address_id


        },
        address() {
            // 地址
            this.addresss = this.address


        },
    },
    methods: {
        fu() {
            var information = JSON.parse(localStorage.getItem('sitet'));
            // this.information = information.address

        },
        // 计算运费
        charge() {
            var argumen = JSON.parse(localStorage.getItem('str1'));
            let arr = []
            let arr2 = []
            let arr3 = []
            let objects = {}
            arr.push(argumen.goods_id)
            arr2.push(argumen.products_id)
            arr3.push(argumen.num)
            objects['goods_id'] = arr
            objects['product_id'] = arr2
            objects['buy_num'] = arr3
            var jsonData = JSON.stringify(objects);
            var param = qs.stringify({ jsonData: jsonData, province: this.province, });
            service.post(api.contract + 'api/v1/common/getShippingFee', param).then(res => {
                this.delivery = (res.data.data.shippingcost[0].sum_cost).toFixed(2)
                this.deliverys = res.data.data.shippingcost[0].sum_cost.toFixed(2)
                this.amount = this.quotas.goods_price * this.quotas.num
                if (this.amount < 0) {
                    this.amount = 0
                }
                this.payments = (parseFloat(this.amount) + parseFloat(this.delivery)).toFixed(2)
            })
            // axios.post("/cart/getShippingFee?web_access=web", {
            //     province: this.province,
            //     goods_id: argumen.goods_id,
            //     product_id: argumen.products_id,
            //     buy_num: argumen.num,
            //     user_id: user_id,
            // }).then(res => {
            //     this.delivery = (res.data.data.shippingcost[0].sum_cost).toFixed(2)
            //     this.deliverys = res.data.data.shippingcost[0].sum_cost.toFixed(2)
            //     this.amount = this.quotas.goods_price * this.quotas.num
            //     if (this.amount < 0) {
            //         this.amount = 0
            //     }
            //     this.payments = (parseFloat(this.amount) + parseFloat(this.delivery)).toFixed(2)
            //     // this.paymentss = parseInt(this.amount) + parseInt(this.delivery)

            // });
        },
        list(node) {
            this.id = node.id
            if (node.id == 17) {
                this.delivery = 0
                this.payments = (parseFloat(this.amount) + parseFloat('0')).toFixed(2)
            } else {
                this.delivery = this.deliverys
                this.payments = (parseFloat(this.amount) + parseFloat(this.delivery)).toFixed(2)
            }

        },

        go_submit() {
            // let temp = []
            // this.check_coupons.forEach((v, k) => {
            //     temp.push(v)
            // })
            // 获取支付方式
            // axios.post('cart/getPaymentList?web_access=web', {
            //     user_id: user_id,
            //     is_cashondelivery: 0,
            //     is_banktobank: 0,
            // }).then(res => {
            //     this.payment = res.data.data

            // });
            // 提交订单

            // var address = window.localStorage;
            // var id = address.id;


            var argumen = JSON.parse(localStorage.getItem('str1'));
            var information = JSON.parse(localStorage.getItem('sitet'));
            var goods_id = argumen.id
            var products_id = argumen.products_id
            var quota_goods_id = argumen.quota_goods_id
            var num = argumen.result
            // 拼单下单


            if (this.isDisable == false) {
                if (argumen.nature == 3) {
                    if (argumen.quota_orders_id == '') {
                        // 创建拼单
                        if (this.address_ids == '') {
                            this.$dialog.toast({
                                mes: 'Please select the address',
                                timeout: 5000
                            });
                        } else {
                            var param = qs.stringify({
                                goods_id: argumen.goods_id,
                                products_id: argumen.products_id,
                                quota_goods_id: argumen.quota_goods_id,
                                num: argumen.num,
                                type: 2,
                                address_id: this.address_ids,
                                pay_type: this.radio2,
                                device: 2,
                                message: this.input1,

                            });
                            service.post(api.contract + 'api/v1/group/createGroup', param).then(res => {
                                var sStorage = window.localStorage;
                                var obj = res.data.data
                                var str = JSON.stringify(obj);
                                //存入 
                                sStorage.obj = str;
                                var msg = res.data.msg
                                var code = res.data.code
                                if (code == '200') {
                                    this.isDisable = true
                                    window.location.href = "successful_order.html?marking=2&Name=" + this.quotas.goods_name + "&price=" + this.quotas.goods_price;
                                } else {
                                    this.$dialog.toast({
                                        mes: msg,
                                        timeout: 5000
                                    });
                                }
                            })

                        }

                    } else {
                        // 加入拼单
                        if (this.address_ids == '') {
                            this.$dialog.toast({
                                mes: 'Please select the address',
                                timeout: 3000
                            });
                        } else {

                            var param = qs.stringify({
                                goods_id: argumen.goods_id,
                                products_id: argumen.products_id,
                                quota_goods_id: argumen.quota_goods_id,
                                num: argumen.num,
                                type: 1,
                                address_id: this.address_ids,
                                pay_type: this.radio2,
                                quota_orders_id: argumen.quota_orders_id,
                                device: 2,
                                message: this.input1,

                            });
                            service.post(api.contract + 'api/v1/group/createGroup', param).then(res => {
                                var sStorage = window.localStorage;
                                var obj = res.data.data
                                var str = JSON.stringify(obj);
                                //存入 
                                sStorage.obj = str;
                                var msg = res.data.msg
                                var code = res.data.code
                                if (code == '200') {
                                    this.isDisable = true
                                    window.location.href = "successful_order.html?marking=2&Name=" + this.quotas.goods_name + "&price=" + this.quotas.goods_price ;
                                } else {
                                    this.$dialog.toast({
                                        mes: msg,
                                        timeout: 3000
                                    });
                                }
                            })

                            // axios.post('/quota/createQuota?web_access=web', {
                            //     user_id: user_id,
                            //     goods_id: argumen.goods_id,
                            //     products_id: argumen.products_id,
                            //     quota_goods_id: argumen.quota_goods_id,
                            //     num: argumen.num,
                            //     type: 1,
                            //     address_id: this.address_ids,
                            //     pay_type: this.radio2,
                            //     quota_orders_id: argumen.quota_orders_id,
                            //     device: 2,
                            //     message: this.input1,
                            // }).then(res => {

                            //     var sStorage = window.localStorage;
                            //     var obj = res.data.data
                            //     var str = JSON.stringify(obj);
                            //     //存入 
                            //     sStorage.obj = str;
                            //     var error = res.data.error
                            //     var succeed = res.data.success
                            //     if (succeed == true) {
                            //         this.isDisable = true
                            //         // window.location.href = "/simple/cart3?Name=" + this.quotas.goods_name + "&price=" + this.quotas.goods_price + "&marking=2";
                            //     } else {
                            //         this.$dialog.toast({
                            //             mes: error,
                            //             timeout: 3000
                            //         });
                            //     }
                            // });
                        }


                    }
                }
            } else {
                this.isDisable = false
                this.$dialog.toast({
                    mes: 'Submit Again',
                    timeout: 5000
                });
            }


        }
    }
}
</script>
