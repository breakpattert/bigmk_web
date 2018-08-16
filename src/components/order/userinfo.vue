


<style>
.box {
    background-color: #fff;
    padding: 0.28rem;
}

.relation_t {

    font-size: 0.32rem;
    color: #3d3d40;
    margin-left: 0.28rem;
}

.location {
    font-size: 0.32rem;
    color: #6d6e73;
}

.location .map {
    margin-right: 0.28rem;
}

.province {
    padding-left: 0.72rem;
    padding-right: 0.72rem;
    font-size: 0.24rem;
    color: #6d6e73;
    margin: 0.08rem 0px 0px 0;
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

.address {
    text-align: center;
    background-color: #fff;
    height: 2rem;
}

.addan {
    color: #ff4500;
    font-size: 0.32rem;
    border: 0.02rem solid #ff4500;
    border-radius: 0.32rem;
    line-height: 0.64rem;
    padding: 0.2rem 0.30rem;
}

.Quota {
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #f6ebff;
    font-size: 14px;
    color: #613eff;
    padding: 0px 0.28rem;
}
</style>


<template>
    <div>
        <yd-flexbox class="Quota" v-if="quotas.area_type==1">
            <div><img src="../../assets/images/not_refactoring/quotadetails_icon_quotametro.png" alt="" style="vertical-align: middle;"></div>
            <div>Group buy Metro Manila Only</div>
        </yd-flexbox>
        <yd-flexbox class="Quota" v-if="quotas.area_type==3">
            <div><img src="../../assets/images/not_refactoring/quotadetails_icon_quotametro.png" alt="" style="vertical-align: middle;"></div>
            <div>Group buy GMA Only</div>
        </yd-flexbox>
        <div class="box">
            <yd-flexbox class="address" v-if="manage==''">
                <yd-flexbox-item>
                    <a href="/ucenter/address_add">
                        <span class="addan">Add an Adddress</span>
                    </a>
                </yd-flexbox-item>
            </yd-flexbox>

            <div v-for="(item,index) in manage" :key="index" v-if="item.id==id">
                <!-- <div v-for="(item,index) in manage" :key="index" v-if="index <1 && extent > 0 && room ==undefined"> -->
                <div>
                    <yd-flexbox class="relation">
                        <div><img src="../../assets/images/not_refactoring/orderconfirmation_icon_contact_default.png" alt=""></div>
                        <yd-flexbox-item>
                            <yd-flexbox direction="vertical" class="relation_t">
                                <yd-flexbox-item>{{item.accept_name}}</yd-flexbox-item>
                                <yd-flexbox-item style=" margin: 4px 0 10px 0;">{{item.mobile}}</yd-flexbox-item>
                            </yd-flexbox>
                        </yd-flexbox-item>
                    </yd-flexbox>

                    <yd-flexbox class="location" @click.native="showt">

                        <div class="map"><img src="../../assets/images/not_refactoring/orderconfirmation_icon_address_default.png" alt=""></div>
                        <yd-flexbox-item>
                            <yd-flexbox direction="vertical" class="" style=" word-break: break-all;">
                                <yd-flexbox-item>{{item.province_val}},{{item.city_val}},{{item.area_val}},{{item.address}}</yd-flexbox-item>
                            </yd-flexbox>
                        </yd-flexbox-item>

                        <div>
                            <a href="javascript:void(0)"><img src="../../assets/images/not_refactoring/orderconfirmation_icon_addressskip_default.png" alt=""></a>
                        </div>
                    </yd-flexbox>
                </div>
            </div>

        </div>
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
            show2: false,
            radio5: 3,
            extent: '',
            manage: [],
            room: undefined,
            address: '',
            id: '',
            ids: '',
        }

    }, created() {

    }, computed: {
        ...mapGetters([
            'quotas',
        ]),


    }, watch: {


    },
    mounted() {
        // this.site()
        this.possess()
    },
    methods: {
        possess() {
            // this.id = window.localStorage.id
            // 获取用户所有地址信息，渲染一条下单到页面
            // var param = qs.stringify({ jsonData: cart2 });
            service.get(api.contract + 'api/v1/user/myAddress').then(res => {
                this.manage = res.data.data
                this.extent = res.data.data.lengt
                this.success = res.data.success
                var _this = this
                _this.manage.forEach(function(item) {
                    var is_default = item.is_default;
                    var id = item.id;
                    var province = item.province_id;
                    var address = item.address
                    if (is_default == 1) {
                        if (window.localStorage.id == undefined) {
                            _this.id = id
                        } else {
                            _this.id = window.localStorage.id
                        }
                        _this.$store.state.address_id = id
                        _this.$store.state.address = address
                        _this.$store.state.province = province
                        let nothing1 = {
                            id: id,
                            address: address,
                        }
                        _this.address = address
                        localStorage.setItem('sitet', JSON.stringify(nothing1))
                    }

                });
            })

        },
        showt() {
            // 用户选择一条地址，渲染一条下单到页面
            //用户选中地址id
            window.location.href = "/ucenter/address?order=1"


        }
    },
}
</script>


