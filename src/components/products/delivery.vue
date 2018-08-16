


<style>
/* 配送地址选择 *。。。。。。。。。。。。 */

.to {
    margin: 0.16rem 0.19rem 0.16rem 0;
}

.fee span {
    color: #ff4500;
}

.Manila {
    text-align: left;
}

.methods {
    font-size: 0.28rem;
    text-align: center;
    color: #6d6e73;
    line-height: 0.96rem;
    padding: 0 0.32rem;
    border-bottom: 0.02rem solid #dcdde0;
    vertical-align: middle;
    margin-bottom: 0.28rem;
}

.Radio {
    display: block;
    padding: 0 0.28rem 0.48rem 0.28rem;
    margin-left: 0.16rem;
    line-height: 0.48rem;
}

.Specification {

    overflow: auto;
}
</style>

<template>
    <!-- /* 配送方式选择 *。。。。。。。。。。。。 */ -->
    <yd-flexbox-item>
        <yd-flexbox class="fee to" @click.native="show2 = true">
            <yd-flexbox-item class="Manila">To
                <span v-if="!area_name">Manila</span>
                <span>{{area_name}}</span>
                <!-- <span v-if="addss!=null">{{addss}}1</span> -->
            </yd-flexbox-item>
            <div>
                <i class="iconfont icon-more1" style="color: #3d3d40;font-size: 0.4rem;"></i>
            </div>
        </yd-flexbox>
        <yd-popup v-model="show2" position="bottom" height="60%" class="Specification">
            <!-- <yd-button type="warning" style="margin: 30px;" @click.native="show2 = false">Close Bottom Popup</yd-button>  -->
            <yd-flexbox class="methods">
                <div style="width: 22%;"></div>
                <yd-flexbox-item style="text-align: right;">Shipping To</yd-flexbox-item>
                <yd-flexbox-item @click.native="show2 = false" style="text-align: right;"><img src="../../assets/images/not_refactoring/cart_icon_close_default.png" alt="" style="vertical-align: middle;"></yd-flexbox-item>
            </yd-flexbox>

            <div class="Specification" style="height:330px;">
                <yd-radio-group v-model="radio5" v-for="(item,index) in address" :key="index" color="#ff4500" @click.native="list(item),show2 = false">
                    <yd-radio :val="item.area_id" class="Radio">
                        <span style="font-size: 14px;color: #3d3d40;">{{item.area_name}}</span>
                    </yd-radio>
                </yd-radio-group>
            </div>

        </yd-popup>
    </yd-flexbox-item>
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
            show2: false,
            radio5: '',
            address: [],
            i: "1",
            val: null,
            carriage: null,
            area_name: '',
            goodsID: '',
            addss: '',
            user_id: user_id,
        }
    }, computed: {
        ...mapGetters([
            'goods_info', 'checked', 'result'

        ])
    }, mounted() {
    },
    created() {

        this.site()
    }, watch: {
        radio5(val) {
            this.Pattern()
            // this.radio5=val
        },
        carriage() {
            this.$store.state.carriage = this.carriage
        },
        goods_info() {
            this.Pattern()

        },
        checked() {
            this.Pattern()

        },
    },
    methods: {
        list(node) {
            this.area_name = node.area_name

        },
        Pattern() {
            if (JSON.stringify(this.goods_info) != "{}") {
                let _this = this;
                var product_id = _this.checked.goodsID
                var array = _this.goods_info.spec_array
                var buy_num = _this.result
                if (buy_num == '') {
                    buy_num = '1'
                    if (JSON.stringify(_this.goods_info.spec_array) != "{}") {
                        if (product_id == undefined) {
                            product_id = _this.goods_info.spec_array.stockGoods[0].goodsID

                        }
                        let arr = []
                        let arr2 = []
                        let arr3 = []
                        let objects={}
                        arr.push(_this.goods_info.id)
                        arr2.push(product_id)
                        arr3.push(parseInt(buy_num))
                        objects['goods_id'] = arr
                        objects['product_id'] = arr2
                        objects['buy_num'] = arr3
                        var str = JSON.stringify(objects)
                        var param = qs.stringify({  jsonData: str ,province: _this.radio5 });
                        service.post(api.contract + 'api/v1/common/getShippingFee', param).then(res => {
                            _this.carriage = res.data.data
                            localStorage.setItem("sum_cost", _this.carriage.shippingcost[0].sum_cost)
                        })

                    }
                    if (JSON.stringify(_this.goods_info.spec_array) == "{}") {
                             let arr = []
                        let arr2 = []
                        let arr3 = []
                        let objects={}
                        arr.push(_this.goods_info.id)
                        arr2.push(0)
                        arr3.push(parseInt(buy_num))
                        objects['goods_id'] = arr
                        objects['product_id'] = arr2
                        objects['buy_num'] = arr3
                        var str = JSON.stringify(objects)
                        // let jData = { goods_id: _this.goods_info.id, product_id: 0, buy_num: buy_num };
                        // var str = JSON.stringify(jData)
                        var param = qs.stringify({ province: _this.radio5, jsonData: str });
                        service.post(api.contract + 'api/v1/common/getShippingFee', param).then(res => {
                            _this.carriage = res.data.data
                        })

                    }
                }

            }

        },
        site() {
            let _this = this;
            service.post(api.contract + 'api/v1/common/getChildrenByAreaId').then(res => {
                _this.address = res.data.data
                _this.radio5 = res.data.data[0].area_id
                _this.area_name = res.data.data[0].area_name
            })

        }
    }

}
</script>