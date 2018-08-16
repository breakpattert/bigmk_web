


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
}

.addtocart {
    font-size: 0.32rem;
    background-color: #ff7800;
    color: #fff;
    height: 1.1rem;
    /* line-height: 55px; */
}

.empty {
    height: 1.1rem;
}
</style>

<template>
    <div v-if="promo=='' || promo==undefined">
        <!-- 底部 -->
        <div class="empty"></div>
        <yd-flexbox class="footer">
            <div class="message" style="width:22%;">
                <yd-flexbox direction="vertical" class="now" @click.native="chatnow(true_name,img,seller_id)">
                    <yd-flexbox-item><img src="../../assets/images/not_refactoring/cart_icon_chat_default.png" alt=""></yd-flexbox-item>
                    <yd-flexbox-item class="chat">Chat Now</yd-flexbox-item>
                </yd-flexbox>
            </div>
            <div class="message" style="width:22%;">
                <yd-flexbox direction="vertical" class="now">
                    <div @click="favorite()">
                        <yd-flexbox-item v-if="user_id==null">
                            <i class="iconfont icon-favorites" style="font-size: 0.6rem;color: #3d3d40;"></i>
                        </yd-flexbox-item>
                        <yd-flexbox-item v-if="usrfavorite==false && user_id!=null">
                            <i class="iconfont icon-favorites" style="font-size: 0.6rem;color: #3d3d40;"></i>
                        </yd-flexbox-item>
                        <yd-flexbox-item v-if="usrfavorite==true && user_id!=null">
                            <i class="iconfont icon-favorites_fill" style="font-size: 0.6rem;color: #ff4500;"></i>
                        </yd-flexbox-item>
                        <yd-flexbox-item class="chat">Favorite</yd-flexbox-item>
                    </div>
                </yd-flexbox>
            </div>
            <yd-flexbox-item class="addtocart" style="line-height: 1.1rem;">
                <a href="javascript:void(0);" @click="join" style="width: 100%;height: 100%;display: inline-block;">Add to Cart</a>
            </yd-flexbox-item>
            <yd-flexbox-item class="buynow" style="line-height: 1.1rem;">
                <a href="javascript:void(0);" @click="immediately" style="width: 100%;height: 100%;display: inline-block;">Buy Now</a>
            </yd-flexbox-item>

        </yd-flexbox>
    </div>
</template>
 <script type="text/javascript">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            session: [],
            favorites: [],
            type: '',
            promo: '',
            usrfa: '',
            usrfavorite: '',
            active_id: '',
            id: '',
            seller_id: '',
            img: '',
            true_name: '',
            user_id: user_id,
        }
    },
    created() {//这个方法Vue会自动调用
    }, computed: {
        ...mapGetters([
            'checked', 'goods_info', 'result'
        ]),
    },
    watch: {
        goods_info() {
            this.seller_id = this.goods_info.seller_id
            this.img = "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/" + this.goods_info.seller.img
            this.true_name = this.goods_info.seller.true_name
              this.promo = this.goods_info.promo
            this.usrfa = this.goods_info.usrfavorite
            this.usrfavorite = this.goods_info.usrfavorite
            if (this.usrfavorite == 1) {
                this.usrfavorite = true
            }
            if (this.usrfavorite == 2) {
                this.usrfavorite = false
            }
            // this.path()
        },

    },
    methods: {
        ...mapActions([
            'toChangeSwitch'
        ]),
        
        // 收藏
        favorite() {
            if (user_id == null) {
                window.location.href = '/login.html'
            } else {
                var _this = this
                var goods_id = _this.goods_info.id
                console.log(goods_id, _this.user_id)
                _this.usrfavorite = !_this.usrfavorite
                var param = qs.stringify({ goods_id: goods_id, type: _this.usrfavorite ? 1 : 2,user_id:_this.user_id});
                service.post(api.contract + 'api/v1/user/addOrCancel',param).then(res => {
                })

            }


        },
        //加入购物车
        join() {
            var goods_id = this.checked.goodsID;
            var type = this.goods_info.type;
            var goods_num = this.result;
            if (goods_num == '') {
                goods_num = 1
            }
            var cargo = this.goods_info.id
            if (this.checked.store_nums != 0) {

                if (user_id == null) {
                    window.location.href = '/login.html'
                } else {
                    if (JSON.stringify(this.goods_info.spec_array) == '{}') {
                        this.toChangeSwitch(true)
                    }
                    if (!goods_id && JSON.stringify(this.goods_info.spec_array) != '{}') {
                        // alert("请选择规格")
                        // this.$dialog.toast({
                        //     mes: 'Please select variation first',
                        //     timeout: 1500
                        // });

                        this.toChangeSwitch(true)


                    }
                    if (goods_id != undefined) {
                        this.toChangeSwitch(true)
                        // axios.post("goods/joinCart?web_access=web", {
                        //     user_id: user_id,
                        //     goods_id: goods_id,
                        //     type: type,
                        //     goods_num: goods_num
                        // }).then(res => {
                        //     this.shop = res.data.data.count
                        //     this.$dialog.toast({
                        //         mes: 'Added to cart',
                        //         timeout: 1500
                        //     });

                        // });
                    }
                }
            } else {
                this.$dialog.toast({
                    mes: 'Understock',
                    timeout: 1500
                });
            }



        },
        // 立刻购买 
        immediately() {
            var result = this.result;
            if (result == '') {
                result = 1
            }
            var id = this.checked.goodsID;
            var type = this.goods_info.type;

            if (this.goods_info.promo == 'quota') {
                var promo = ''
                var active_id = ''
            } else {
                var promo = this.goods_info.promo
                var active_id = this.goods_info.active_id;
            }

            var cargo = this.goods_info.id
            if (this.checked.store_nums != 0) {
                if (user_id == null) {
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
                        // window.location.href = "/site/order2?id=" + cargo + '&type=' + type + '&promo=' + promo + '&active_id=' + active_id + '&result=' + result + '&nature=' + 1;
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
                        // window.location.href = "/site/order2?id=" + id + '&type=' + type + '&promo=' + promo + '&active_id=' + active_id + '&result=' + result + '&nature=' + 1;
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
        chatnow(true_name, img, seller_id) {

            chat(true_name, img, "82000" + seller_id)
        }
    }

};

</script>