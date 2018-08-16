


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
    border-bottom: 0.02 solid #e6e7eb;
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
</style>


<template>
    <div>

        <div style="background-color: #fff;"><img src="../../assets/images/not_refactoring/orderconfirmation_image_address.png" alt="" style="width: 100%;">
        </div>
        <div style="height: 0.28rem;"></div>
        <div v-if="cart2_list" v-for="(v, k) in cart2_list" :key="k">
            <div class="promo">{{v.shop_name}}</div>
            <!-- 商品 -->
            <div class="article" v-for="(vv, kk) in v.goods_list">
                <yd-flexbox>
                    <div><img :src="vv.img"></div>
                    <yd-flexbox-item>
                        <yd-flexbox direction="vertical">
                            <yd-flexbox-item class="declare">{{vv.name}}
                            </yd-flexbox-item>

                            <yd-flexbox-item class="measure" v-if="vv.spec_array">
                                <span v-for="spec in vv.spec_array">{{`${spec.name}: ${spec.value}`}}</span>
                            </yd-flexbox-item>

                            <yd-flexbox-item>
                                <yd-flexbox>
                                    <yd-flexbox-item v-if="promo=='time'" style="font-size: 0.32rem;color: #ff4500">₱{{(vv.sell_price-vv.reduce).toFixed(2)}}</yd-flexbox-item>
                                    <yd-flexbox-item v-if="promo!='quota' && promo!='time'" style="font-size: 0.32rem;color: #ff4500">₱{{vv.sell_price}}</yd-flexbox-item>
                                    <yd-flexbox-item v-if="promo=='quota'" style="font-size: 0.32rem;color: #ff4500">₱{{vv.sell_price-vv.reduce}}</yd-flexbox-item>
                                    <yd-flexbox-item style="text-align: right;font-size: 0.32rem;color: #3d3d40">x{{vv.count}}
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
                    <yd-flexbox-item style="font-size:  0.28rem;color: #3d3d40;text-align: right;">₱{{cart2_delivery[parseInt(v.seller_id)].toFixed(2)}}</yd-flexbox-item>
                </yd-flexbox>
            </div>
            <div class="freight" v-if="v.coupon.length > 0">
                <yd-flexbox>
                    <yd-flexbox-item style="font-size:  0.28rem;color: #6d6e73;">Coupons</yd-flexbox-item>
                    <yd-flexbox-item style="font-size:  0.28rem;color: #3d3d40;text-align: right">{{getCouponsV(v.seller_id, 1)}}</yd-flexbox-item>
                    <!-- 优惠券 -->
                    <yd-button @click.native="toShowC(v.coupon, v.seller_id)"><img src="../../assets/images/not_refactoring/productdetails_icon_more_default.png" alt="" style="vertical-align: baseline;">
                    </yd-button>
                </yd-flexbox>
            </div>

            <div class="freight" v-if="v.coupon.length > 0">
                <yd-flexbox>
                    <yd-flexbox-item style="font-size:  0.28rem;color: #6d6e73;">Save</yd-flexbox-item>
                    <yd-flexbox-item style="font-size:  0.28rem;color: #3d3d40;text-align: right;">-₱{{getCouponsV(v.seller_id, 2).toFixed(2)}}</yd-flexbox-item>
                </yd-flexbox>
            </div>
            <div class="freight boxs">
                <yd-flexbox>
                    <yd-flexbox-item style="font-size:  0.28rem;color: #6d6e73;">Amount</yd-flexbox-item>
                    <yd-flexbox-item style="font-size:  0.28rem;color: #ff4500;text-align: right;">₱{{v.goods_sum.toFixed(2)}}</yd-flexbox-item>
                </yd-flexbox>
            </div>
            <!-- 留言 -->
            <yd-cell-item style="    padding-bottom: 0.2rem;">
                <yd-input slot="right" v-model="v.remark" :name="'kk['+v.seller_id+']'" placeholder="Leave a message for the seller" class="seller"></yd-input>
            </yd-cell-item>

        </div>

        <!-- 付款方式 -->
        <div class="freight">
            <yd-flexbox>
                <yd-flexbox-item style="font-size:  0.28rem;color: #6d6e73;">Payment Method</yd-flexbox-item>
                <yd-flexbox-item style="font-size:  0.28rem;color: #3d3d40;text-align: right;">Cash On Delivery
                    <!-- <img src="../../../assets/images/wap_products/productdetails_icon_more_default.png" alt="" style="vertical-align: baseline;"> -->
                </yd-flexbox-item>
                <yd-popup v-model="show1" position="center" width="70%">
                    <div style="background-color: #fff;padding:  0.28rem;border-radius: 0.2rem;">
                        <yd-radio-group v-model="radio5" size="30">
                            <yd-radio val="1" style="line-height: 0.6rem;padding-bottom: 0.36rem">
                                <span style="font-size: 16px;">Cash On Delivery</span>
                            </yd-radio>
                            <yd-radio val="2" style="line-height: 0.6rem;padding-bottom: 0.36rem">
                                <span style="font-size: 0.32rem;">Customer pick-up</span>
                            </yd-radio>

                        </yd-radio-group>
                    </div>
                </yd-popup>
            </yd-flexbox>
        </div>

        <div class="base">
            <!-- 备注 -->
            <div class="remark">To:{{addresss}}</div>
            <!-- 确认下单 -->
            <div class="affirm">
                <yd-flexbox class="affirml">
                    <yd-flexbox-item class="Payment">Actual Payment:
                        <span style="font-size: 0.36rem;color: #ff4500;padding-left: 0.08rem;">₱{{get_final_sum.toFixed(2)}}</span>
                    </yd-flexbox-item>
                    <div class="present" style="    width: 36%;" @click="go_submit" :disabled="isDisable">Submit Order</div>
                    <!-- <div class="qutu" v-if="promo=='quota'" style="    width: 36%;" @click="go_submit" :disabled="isDisable">Submit Order</div> -->
                </yd-flexbox>
            </div>
        </div>
        <div style=" height: 2rem;"></div>
        <yd-popup v-model="showC" position="bottom" height="60%">
            <yd-flexbox class="Select">
                <yd-flexbox-item>Select Coupon</yd-flexbox-item>
                <div @click.native="showC = false"><img src="../../assets/images/not_refactoring/cart_icon_close_default.png" alt="" @click.native="showC = false"></div>
            </yd-flexbox>

            <yd-flexbox class="frame" v-for="(vv, kk) in coupons" :key="kk">

                <div><input type="radio" name="radio" @change="cRadio(coupon_seller_id, vv)" :checked='getIsChecked(coupon_seller_id, vv.voucher_str_id)' class="Promotions"></div>
                <yd-flexbox-item>
                    <yd-flexbox direction="vertical" style="padding-left: 0.16rem;">
                        <yd-flexbox-item class=" moneys">{{vv.value_text}}</yd-flexbox-item>
                        <yd-flexbox-item class="used" v-if="vv.limit_text">{{vv.limit_text}}</yd-flexbox-item>
                        <yd-flexbox-item class="used" v-if="vv.range_text">Can be used on：{{vv.range_text}}</yd-flexbox-item>
                        <yd-flexbox-item class="used" v-if="vv.valid_time">Valid Time：{{vv.valid_time}}</yd-flexbox-item>
                    </yd-flexbox>
                </yd-flexbox-item>
            </yd-flexbox>

        </yd-popup>

    </div>
</template>


<script type="text/babel">
import { mapGetters } from 'vuex'
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            showC: false,
            coupon_seller_id: 0,
            coupons: [],
            check_coupons: [],
            input1: '',
            payment: [],
            promo: '',
            information: '',
            addresss: '',
            address_ids: '',
            show1: false,
            radio5: 1,
            isDisable: 0,
            obj: {},
        }
    },
    computed: {
        ...mapGetters([
            'cart2_list', 'cart2_list_sum', 'cart2_list_delivery_sum', 'cart2_delivery', 'cart2_checked_coupons', 'address', 'address_id'
        ]),
        get_final_sum() {
            let c_v = 0
            this.check_coupons.forEach((v, k) => {
                if (v.voucher_value) c_v += Number(v.voucher_value)
            })
            return this.cart2_list_sum + this.cart2_list_delivery_sum - c_v
        }

    },
    mounted() {
        var _this = this;
        _this.fu();
        setTimeout(function() {
            _this.remarks();
        }, 300);
    },
    watch: {
        address_id() {
            // 地址id
            this.address_ids = this.address_id
        },
        address() {
            // 地址
            this.addresss = this.address
        },
        cart2_list() {
            var argumen = JSON.parse(localStorage.getItem('str1'));
            this.promo = argumen.promo
            this.$dialog.loading.close();
        },
        cart2_checked_coupons() {
            this.check_coupons = this.cart2_checked_coupons
        }

    },
    methods: {
        remarks() {
            var _this = this
            _this.cart2_list.forEach(function(item, index) {
                var goods_list = item.goods_list
                goods_list.forEach(function(val, index) {
                    val.remark = ""
                    //    console.log(val.remark,222)
                });
            });
            let nothing1 = {
                id: _this.cart2_list[0].goods_list[0].goods_id,
                name: _this.cart2_list[0].goods_list[0].name,
            }

            localStorage.setItem('order', JSON.stringify(nothing1))
        
        },
        fu() {
            var information = JSON.parse(localStorage.getItem('sitet'));
            // this.information = information.address
        },
        toShowC(value, id) {
            this.coupons = value
            this.coupon_seller_id = id
            this.showC = true
        },
        cRadio(id, value) {
            let temp = []
            this.check_coupons.forEach((v, k) => {
                if (parseInt(k) === parseInt(id)) {
                    temp[parseInt(k)] = value
                } else {
                    temp[parseInt(k)] = v
                }
            })
            this.check_coupons = []
            this.check_coupons = temp
        },
        getCouponsV(id, type) {
            let e = ''
            this.check_coupons.forEach((v, k) => {
                if (parseInt(k) === parseInt(id)) e = type === 1 ? v.value_text : v.voucher_value
            })
            return e
        },
        getIsChecked(s_id, id) {
            let t = false
            this.check_coupons.forEach((v, k) => {
                if (parseInt(k) === parseInt(s_id) && Number(v.voucher_str_id) === Number(id)) t = true
            })
            return t
        },
        go_submit() {
            // console.log(this.cart2_list);return;
            var _this = this
            var obj = {};
            _this.cart2_list.forEach(function(item, index) {
                var seller_id = item.seller_id
                //  seller_id="a"+seller_id
                //  console.log(seller_id)
                obj["" + seller_id] = item.remark
                //   obj.concat(obj)
                // series.push(obj)
                // Object.assign(obj, obj);

            });
            // if(_this.obj==undefined){
            //     _this.obj==''
            // }
            // console.log()
            let temp = []
            _this.check_coupons.forEach((v, k) => {
                temp.push(v)
            })
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

            // var url = location.search; //获取url中"?"符后的字串 
            // var theRequest = {};
            // if (url.indexOf("?") != -1) {
            //     var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
            //     var strs = str.split("&");
            //     for (var i = 0; i < strs.length; i++) {
            //         theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            //     }

            // }
            var argumen = JSON.parse(localStorage.getItem('str1'));
            var information = JSON.parse(localStorage.getItem('sitet'));
            var obj = JSON.stringify(obj);
            var jsonData = localStorage.getItem('cart2')
            // 购物车下单
            var Message = [{
                seller_id: '129'
            }]
            var nat = localStorage.nat
            if (_this.isDisable == 0) {
                _this.isDisable++
                if (argumen.nature == 0) {
                    var param = qs.stringify({
                        jsonData: jsonData,
                        payment_id: 16,
                        address_id: _this.address_ids,
                        device: 2,
                        postscripts: obj,
                    });
                    service.post(api.contract + 'api/v1/cart/createOrderCart', param).then(res => {
                        var error = res.data.msg
                        var succeed = res.data.code
                        var order_id = res.data.data.order_id
                        if (succeed == '200') {
                            _this.isDisable = 0
                            window.location.href = "successful_order.html?marking=1&id=" + order_id;
                        } else {
                            _this.$dialog.toast({
                                mes: error,
                                timeout: 5000
                            });
                        }
                    })


                }
                // 商品详情下单
                if (argumen.nature == 1) {
                    var param = qs.stringify({
                        payment_id: 16,
                        address_id: _this.address_ids,
                        id: argumen.id,
                        num: argumen.result,
                        type: argumen.type,
                        promo: argumen.promo,
                        active_id: argumen.active_id,
                        device: 2,
                        postscripts: obj,
                    });
                    service.post(api.contract + 'api/v1/cart/createOrderBn', param).then(res => {
                        var succeed = res.data.code
                        var error = res.data.msg
                        var order_id = res.data.data.order_id
                        if (succeed == '200') {
                            _this.isDisable = 0
                            window.location.href = "successful_order.html?marking=1&id=" + order_id;
                        } else {
                            _this.$dialog.toast({
                                mes: error,
                                timeout: 5000
                            });
                        }
                    })

                }
            } else {
                _this.$dialog.toast({
                    mes: 'Submit Again',
                    timeout: 5000
                });
            }
        }
    }
}
</script>
