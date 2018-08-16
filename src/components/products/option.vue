


<style>
.option {

    background-color: #ffffff;
}

.productname {
    padding: 0.28rem 0.28rem 0.16rem 0px;
    font-size: 0.28rem;
    color: #343440;
}

.logistics .Sales {
    font-size: 0.32rem;
    color: #96989e;
    margin-bottom: 0.16rem;
}

.label span {
    margin-right: 0.08rem;
    background: -webkit-gradient(linear, left top, right top, from(#ff7800), to(#ff4500));
    background: linear-gradient(to right, #ff7800, #ff4500);
    border-radius: 0.02rem;
    font-size: 0.3rem;
    color: #fff;
    /* padding: 1px 2px; */
}

.label {
    margin-bottom: 0.16rem;
}

.Shipping {
    margin-bottom: 0.2rem;
}

.Shipping span {
    font-size: 0.3rem;
    color: #76ae76;
}

.count {
    padding: 0.36rem 0.28rem;
    border-top: 0.02rem solid #f2f2f2;
}

.yd-popup-bottom {
    /* overflow-y: scroll; */
}

.switch {
    text-align: left;
    background-color: #fab732;
    color: #fff;
    border-radius: 0.22rem;
    padding: 0.08rem 0.12rem;
    margin: 0.08rem 0;
    ;
}

.division {
    height: 0.28rem;
    background-color: #f2f2f2;
}















/* 拼单 */

.option {

    background-color: #ffffff;
}

.productname {
    padding: 0.28rem;
    font-size: 0.28rem;
    color: #343440;
}

.logistics .Sales {
    font-size: 0.32rem;
    color: #96989e;
    margin-bottom: 0.16rem;
    padding: 0 0.24rem;
}

.label span {
    margin-right: 0.08rem;
    background: -webkit-gradient(linear, left top, right top, from(#ff7800), to(#ff4500));
    background: linear-gradient(to right, #ff7800, #ff4500);
    border-radius: 0.02rem;
    font-size: 0.3rem;
    color: #fff;
    /* padding: 1px 2px; */
}

.label {
    margin-bottom: 0.16rem;
    padding: 0px 0.28rem;
}

.Shipping {
    margin-bottom: 0.2rem;
}

.Shipping span {
    font-size: 0.3rem;
    color: #76ae76;
}

.count {
    padding: 0.36rem 0.28rem;
    border-top: 0.02rem solid #f2f2f2;
}

.yd-popup-bottom {
    /* overflow-y: scroll; */
}

.switch {
    text-align: left;
    background-color: #fab732;
    color: #fff;
    border-radius: 0.22rem;
    padding: 0.08rem 0.12rem;
    margin: 0.08rem 0;
    ;
}

.division {
    height: 0.28rem;
    ;
    background-color: #f2f2f2;
}

.Quota {
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #f6ebff;
    font-size: 0.28rem;
    color: #613eff;
    padding: 0px 0.28rem;
    margin: 0.08rem 0px;
}

.joined {
    height: 0.96rem;
    background: url(../../assets/images/not_refactoring/quotadetails_img_quota.png) no-repeat;
    background-size: 100%;
    color: #fff;
    font-size: 0.28rem;
    padding: 0px 0.28rem;
}

.buyer {
    height: 1.28rem;
}

.affiliate {
    color: #fff;
    text-align: center;
    line-height: 0.64rem;
    height: 0.64rem;
    width: 1.3rem;
    background: url(../../assets/images/not_refactoring/quotadetails_btn_join.png) no-repeat;
    font-size: 0.32rem;
    /* background-size: 100%;  */
    margin-left: 0.16rem;
    padding: 0px 0.36rem;
}

.yd-btn-primary {
    /* color: #fff !important; */
    /* background-color: rgba(0, 0, 0, 0) !important; */
}

.person {
    color: #fff;
}

.tuxedo_list {
    height: 1rem;
    border-bottom: 1px solid #dcdde0;
    font-size: 0.32rem;
    padding: 0 0.28rem;
    color: #3d3d40;
}

.clocks {
    padding: 0.2rem 0.24rem;
    background-color: #332019;
    color: #ffffff;
    border-radius: 0.2rem;
}

.joins {
    margin: 0 auto;
    width: 2.2rem;
    height: 0.72rem;
    background: linear-gradient(to right, rgb(159, 63, 255), rgb(98, 62, 255));
    color: #fff;
    border-radius: 0.36rem;
    font-size: 0.32rem;
    line-height: 0.72rem;
}

.captain {
    border: 0.02rem solid #ffc600;
}

.expression {
    background-color: #ff8000;
    padding: 0.06rem;
    border-radius: 0.14rem;
    width: 1.2rem;
    color: #fff;
    position: absolute;
    top: 0.88rem;
    left: 0.6rem;
}

.buddha {
    vertical-align: middle;
    height: 0.88rem;
    width: 0.88rem;
    border-radius: 50%;
    margin-right: 0.27rem;
    margin-bottom: 0.2rem;
}


.nator {
    background-color: #ff8000;
    padding: 0.06rem;
    border-radius: 0.14rem;
    width: 1.2rem;
    color: #fff;
    position: absolute;
    top: 1.72rem;
}

.Customer {
    height: 0.6rem;
    line-height: 0.6rem;
    /* background-color: #f6ebff; */
    font-size: 0.28rem;
    color: #1f9947;
    padding: 0px 0.28rem;
    margin: 0.08rem 0px;
}


.lst {
    top: 60% !important;
    /* height:200px !important; */
}

.lsts {
    height: 20% !important;
}

.friends {
    line-height: 0.8rem;
    background-color: #ded6ff;
    font-size: 0.32rem;
    padding-left: 0.28rem;
    color: #613eff;
}
</style>


<template>
    <div v-if="goods_info">
        <div v-if="promo==''">
            <div style="background-color: #fff;  padding: 14px 14px 0 14px;">
                <div>
                    <yd-flexbox class="productname">
                        <yd-flexbox-item style="width: 88%;overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;word-wrap: break-word;word-break: normal;">{{goods_info.name}}</yd-flexbox-item>
                        <div>
                            <a href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&amp;t='+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');void(0)">
                                <div @click="participation" style="background-color: #fff;">
                                    <i class="iconfont icon-connection" style="    font-size: 0.4rem;"></i>
                                </div>
                            </a>
                        </div>

                    </yd-flexbox>
                    <yd-flexbox direction="vertical" class="logistics">
                        <yd-flexbox-item class="Sales">
                            <yd-flexbox>
                                <yd-flexbox-item>
                                    <span style="font-size: 16px;color: #ff4500">₱{{goods_info.sell_price}}
                                        <span style="font-size: 14px; color: #96989e;text-decoration:line-through ">₱{{goods_info.market_price}}</span>
                                    </span>
                                </yd-flexbox-item>
                                <yd-flexbox-item style="text-align: right;">Sales:{{goods_info.sale}}</yd-flexbox-item>
                            </yd-flexbox>
                        </yd-flexbox-item>

                        <yd-flexbox-item class="label">
                            <yd-flexbox>
                                <div class="switch">{{Math.floor(goods_info.sell_price/goods_info.market_price*100)}}% OFF</div>

                            </yd-flexbox>

                            <span>{{goods_info.is_cashondelivery==1?'COD':''}}</span>
                            <span>{{goods_info.is_shipping==1?'Free Shipping':''}}</span>
                        </yd-flexbox-item>
                        <yd-flexbox-item class="Shipping">
                            <i class="iconfont icon-logistics" style="color: #76ae76;font-size: 0.4rem;"></i>
                            <span>Shipping in 24 hours</span>
                        </yd-flexbox-item>

                    </yd-flexbox>
                </div>

            </div>
        </div>
        <div v-if="promo=='time'">
            <div style="background-color: #fff; padding: 0 0.28rem;">
                <yd-flexbox class="productname">
                    <yd-flexbox-item style="width: 88%;overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;word-wrap: break-word;word-break: normal;">{{goods_info.name}}</yd-flexbox-item>
                    <div>
                        <a href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&amp;t='+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');void(0)">
                            <div @click="participation" style="background-color: #fff;">
                                <i class="iconfont icon-connection" style="    font-size: 0.4rem;"></i>
                            </div>
                        </a>
                    </div>
                </yd-flexbox>
                <yd-flexbox direction="vertical" class="logistics">
                    <yd-flexbox-item class="Sales">Sales:{{goods_info.sale}}</yd-flexbox-item>
                    <yd-flexbox-item class="label">
                        <span>{{is_cashondelivery==1?'COD':''}}</span>
                        <span>{{is_shipping==1?'Free Shipping':''}}</span>
                    </yd-flexbox-item>
                    <yd-flexbox-item class="Shipping">
                        <i class="iconfont icon-logistics" style="color: #76ae76;font-size: 0.4rem;"></i>
                        <span>Shipping in 24 hours</span>
                    </yd-flexbox-item>

                </yd-flexbox>
            </div>
        </div>
        <!-- 拼团 -->
        <div v-if="promo=='quota'">
            <div style="background-color: #fff; ">
                <yd-flexbox direction="vertical">
                    <yd-flexbox-item class="friends">lnvite friends to place an order together</yd-flexbox-item>
                </yd-flexbox>
                <yd-flexbox class="productname">
                    <yd-flexbox-item>{{goods_info.name}}</yd-flexbox-item>
                </yd-flexbox>
                <yd-flexbox class="Quota" v-if="area==1">
                    <div><img src="../../assets/images/not_refactoring/quotadetails_icon_quotametro.png" alt="" style="vertical-align: middle;"></div>
                    <div>Group buy Metro Manila Only</div>
                </yd-flexbox>
                <yd-flexbox class="Quota" v-if="area==3">
                    <div><img src="../../assets/images/not_refactoring/quotadetails_icon_quotametro.png" alt="" style="vertical-align: middle;"></div>
                    <div>Group buy GMA Only</div>
                </yd-flexbox>
                <yd-flexbox class="Customer" v-if="is_pickup==1">
                    <div><img src="../../assets/images/not_refactoring/quotadetails_icon_pickup.png" alt="" style="vertical-align: middle;"></div>
                    <div>Free shipping for Customer Pick-up</div>
                </yd-flexbox>
                <yd-flexbox direction="vertical" class="logistics" style="    position: relative;">
                    <yd-flexbox-item class="Sales">Sales:{{goods_info.sale}}</yd-flexbox-item>
                    <yd-flexbox-item class="label">
                        <span>{{goods_info.is_cashondelivery==1?'COD':''}}</span>
                        <span>{{goods_info.is_shipping==1?'Free Shipping':''}}</span>
                    </yd-flexbox-item>
                    <div style="    position: absolute;right: 14px;top: 16px;">
                        <yd-flexbox>
                            <yd-flexbox-item>
                                <div @click="favorite()" style="">
                                    <yd-flexbox-item v-if="user_id==''"><img src="../../assets/images/not_refactoring/cart_icon_favourite_default.png" alt=""></yd-flexbox-item>
                                    <yd-flexbox-item v-if="usrfavorite==false && user_id!=''"><img src="../../assets/images/not_refactoring/cart_icon_favourite_default.png" alt=""></yd-flexbox-item>
                                    <yd-flexbox-item v-if="usrfavorite==true && user_id!=''"><img src="../../assets/images/not_refactoring/cart_icon_favourite_pressed.png" alt=""></yd-flexbox-item>
                                </div>
                            </yd-flexbox-item>
                            <yd-flexbox-item style="    margin-left: 10px;">
                                <a href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&amp;t='+encodeURIComponent(document.title),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');void(0)">
                                    <div @click="participation" style="background-color: #fff;"><img src="../../assets/images/not_refactoring/productdetails_icon_share_default.png" alt=""></div>
                                </a>
                            </yd-flexbox-item>
                            <!-- <yd-flexbox-item @click.native="show3 = true,enw()" style="margin-left: 10px;">
                                                                <div style="background-color: #fff;"><img src="~assets/images/wap_products/productdetails_icon_share_default.png" alt=""></div>
                                                            </yd-flexbox-item>  -->
                            <yd-popup v-model="show3" position="center" width="50%">
                                <!-- <yd-button type="danger" style="margin: 30px;" @click.native="show3 = false">Close Left Popup</yd-button> -->
                                <img :src="imgHost+codes" alt="">
                            </yd-popup>
                        </yd-flexbox>

                    </div>

                </yd-flexbox>

                <div>
                    <!-- 未参团详情............................................................................. -->
                    <yd-flexbox direction="vertical" class="article" v-if="isoinquota.is_join_quota==2">
                        <yd-flexbox-item>
                            <yd-flexbox class="joined">
                                <yd-button @click.native="show2 = true" style="background-color: rgba(0, 0, 0, 0) " v-if="list.length>2">
                                    <yd-flexbox>
                                        <yd-flexbox-item class="person">{{isoinquota.message1}}</yd-flexbox-item>
                                        <div><img src="../../assets/images/not_refactoring/quotadetails_icon_more_default.png" alt="" style="vertical-align: middle;"></div>
                                    </yd-flexbox>
                                </yd-button>
                                <yd-flexbox-item v-if="list.length<=2" class="person">{{isoinquota.message1}}</yd-flexbox-item>
                            </yd-flexbox>
                        </yd-flexbox-item>
                        <yd-flexbox-item style=" background-color: #fff; padding: 0px 14px; border-bottom: 1px solid #f2f2f2;" v-for="(item,index) in list" :key="index" v-if="index<2">
                            <yd-flexbox>
                                <yd-flexbox-item>
                                    <yd-flexbox class="buyer">
                                        <div><img :src="imgHost+item.user_head_ico" alt="" :onerror="acquiescence" style="vertical-align: middle; height: 44px; width: 44px;    border-radius: 50%;    margin-right: 6px;"></div>
                                        <yd-flexbox-item style="font-size: 14px;    color: #6d6e73;">{{item.user_name}}</yd-flexbox-item>
                                    </yd-flexbox>
                                </yd-flexbox-item>
                                <div>
                                    <yd-flexbox direction="vertical">
                                        <yd-flexbox-item style="color: #3d3d40;font-size: 14px;font-weight: 700;">{{item.message}}</yd-flexbox-item>
                                        <yd-flexbox-item style="color: #6d6e73;font-size: 12px;">
                                            Ends in:
                                            <yd-countdown :time="item.end_time.replace(/-/g, '/')" :done-text="finish">
                                                {%h}: {%m}: {%s}
                                            </yd-countdown>
                                        </yd-flexbox-item>
                                    </yd-flexbox>
                                </div>
                                <yd-button @click.native="show(item)" class="affiliate" style="padding: 0px; width: 64px;text-align: center;color: #fff;">Join</yd-button>
                            </yd-flexbox>
                        </yd-flexbox-item>

                        <yd-popup v-model="show1" position="center" width="90%">
                            <div style="background-color:#fff;border-radius: 20px;    text-align: center;">
                                <yd-flexbox class="tuxedo_list" style=" border: none;">
                                    <yd-flexbox-item style="text-align: center;background-color: #fff;    font-weight: 700;"> Join {{frame.user_name}}'s Group Buy</yd-flexbox-item>
                                    <yd-flexbox @click.native="show1 = false" style="text-align: right;"><img src="../../assets/images/not_refactoring/cart_icon_close_default.png" alt="" style="vertical-align: middle;"></yd-flexbox>
                                </yd-flexbox>
                                <div style="padding: 0 14px; margin-bottom: 6px;text-align: center;display: inline-block">
                                    <img v-for="(v,k) in frame.info" :key="k" :src="imgHost+v.user_head_ico" alt="" :onerror="acquiescence" style="vertical-align: middle; height: 44px; width: 44px;    border-radius: 50%;    margin-right: 6px;">
                                    <div id="buddha" style="display: inline-block;    padding-bottom: 0.12rem; " v-for="(item,index) in static">
                                        <img src="../../assets/images/not_refactoring/quota_icon_wait.png" alt="" class="buddha" style="margin-bottom: 0px;">
                                    </div>
                                    <div class="nator" style="    top: 1.5rem;">Originator</div>

                                </div>

                                <yd-flexbox direction="vertical" style="    padding-top: 10px;">
                                    <yd-flexbox-item style="text-align: center;height: 30px;font-size: 14px;color: #6d6e73;">{{frame.message}}</yd-flexbox-item>
                                    <yd-flexbox-item style="text-align: center;">
                                        <!-- <yd-countdown :time="frame.end_time" :done-text="finish">
                                                                                                                            <span style="color:#6d6f73;padding-left: 14px;font-size: 12px">Ends in:</span>
                                                                                                                            <span class="clocks">{%h}</span>&nbsp;:
                                                                                                                            <span class="clocks">{%m}</span>&nbsp;:
                                                                                                                            <span class="clocks">{%s}</span>
                                                                                                                        </yd-countdown> -->
                                        <div>
                                            <span style="color:#6d6f73;padding-left: 14px;font-size: 14px">Ends in:</span>
                                            <span class="clocks">{{hour}}</span>&nbsp;:
                                            <span class="clocks">{{min}}</span>&nbsp;:
                                            <span class="clocks">{{sec}}</span>
                                        </div>
                                    </yd-flexbox-item>
                                    <yd-flexbox-item style="text-align: center;margin: 22px 0;">
                                        <div class="joins" @click="Join()">Join</div>
                                    </yd-flexbox-item>
                                </yd-flexbox>
                                <div></div>
                            </div>
                        </yd-popup>
                        <div>
                            <yd-popup v-model="show2" position="bottom" height="60%" background-color="#f2f2f2">
                                <yd-flexbox class="tuxedo_list">
                                    <yd-flexbox-item style="text-align: right;background-color: #fff;"> Group Buy</yd-flexbox-item>
                                    <yd-flexbox-item @click.native="show2 = false" style="text-align: right;"><img src="../../assets/images/not_refactoring/cart_icon_close_default.png" alt="" style="vertical-align: middle;"></yd-flexbox-item>
                                </yd-flexbox>
                                <yd-flexbox-item style=" background-color: #fff; padding: 0px 14px;height: 326px;    overflow-y: scroll;">
                                    <yd-flexbox v-for="(item,index) in list" :key="index" style="border-bottom: 1px solid #f2f2f2;">
                                        <yd-flexbox-item>
                                            <yd-flexbox class="buyer">
                                                <div><img :src="imgHost+item.user_head_ico" :onerror="acquiescence" alt="" style="vertical-align: middle; height: 44px; width: 44px;    border-radius: 50%;    margin-right: 6px;"></div>
                                                <yd-flexbox-item style="font-size: 14px;    color: #6d6e73;">{{item.user_name}}</yd-flexbox-item>
                                            </yd-flexbox>
                                        </yd-flexbox-item>
                                        <div>
                                            <yd-flexbox direction="vertical">
                                                <yd-flexbox-item style="color: #3d3d40;font-size: 14px;font-weight: 700;">{{item.message}}:</yd-flexbox-item>
                                                <yd-flexbox-item style="color: #6d6e73;font-size: 12px;">
                                                    Ends in:
                                                    <yd-countdown :time="item.end_time.replace(/-/g, '/')" :done-text="finish">
                                                        {%h}: {%m}: {%s}
                                                    </yd-countdown>
                                                </yd-flexbox-item>
                                            </yd-flexbox>
                                        </div>
                                        <yd-flexbox @click.native="showt(item)" class="affiliate">Join</yd-flexbox>
                                    </yd-flexbox>
                                </yd-flexbox-item>
                            </yd-popup>

                        </div>
                    </yd-flexbox>

                    <!-- 已加入参团详情............................................................................. -->
                    <yd-flexbox direction="vertical" class="article" v-if="isoinquota.is_join_quota==1">
                        <yd-flexbox-item>
                            <yd-flexbox class="joined">
                                <yd-button @click.native="show2 = true" style="background-color: rgba(0, 0, 0, 0) ">
                                    <yd-flexbox>
                                        <yd-flexbox-item class="person">{{isoinquota.message1}}</yd-flexbox-item>
                                        <div style="color:#fff">{{isoinquota.message2}}</div>
                                    </yd-flexbox>
                                </yd-button>
                            </yd-flexbox>
                        </yd-flexbox-item>
                        <yd-flexbox direction="vertical" style="    width: 100%;">
                            <yd-flexbox-item style="width: 100%;text-align: center;">
                                <div style="position: relative;padding: 14px 14px 0px 14px;    display: inline-block;">
                                    <img v-for="(item,index) in info" :key="index" :src="imgHost+item.user_head_ico" :onerror="acquiescence" alt="" :class="{captain:index==0}" class="buddha">
                                    <div id="buddha" style="display: inline-block;" v-for="(item,index) in indicate">
                                        <img src="../../assets/images/not_refactoring/quota_icon_wait.png" alt="" class="buddha">
                                    </div>
                                    <div class="expression">Originator</div>
                                </div>
                            </yd-flexbox-item>
                            <yd-flexbox-item style="font-size: 14px;padding: 10px 0 14px 0;color: #6d6e73; text-align: center;">{{isoinquota.message3}}</yd-flexbox-item>
                            <yd-flexbox-item>
                                <yd-flexbox-item style="text-align: center;font-size: 14px;padding: 10px 0px 24px 0px;color: #6d6e73; ">
                                    <yd-countdown :time="isoinquota.end_time" :done-text="finish" :callback="fn">
                                        <span style="color:#6d6f73;font-size: 12px">Ends in:</span>
                                        <span class="clocks">{%h}</span>&nbsp;:
                                        <span class="clocks">{%m}</span>&nbsp;:
                                        <span class="clocks">{%s}</span>
                                    </yd-countdown>
                                </yd-flexbox-item>
                            </yd-flexbox-item>
                        </yd-flexbox>
                        <yd-popup v-model="show1" position="center" width="80%">
                            <yd-flexbox direction="vertical" style="background-color: #fff;text-align: center;font-size: 14px;color: #6d6e73;border-radius: 5px;line-height: 38px;">
                                <yd-flexbox-item style="padding-top: 10px;">Quota was out of date！</yd-flexbox-item>
                                <yd-flexbox-item style="border-bottom: 1px solid #f2f2f2;">you can create quota or join quota.</yd-flexbox-item>
                                <yd-flexbox-item @click.native="show1 = false" style="font-size: 16px;color: #ff4500;">ok</yd-flexbox-item>
                            </yd-flexbox>
                        </yd-popup>
                    </yd-flexbox>

                    <!-- 邀请入参团详情............................................................................. -->
                    <yd-flexbox direction="vertical" class="article" v-if="isoinquota.is_join_quota==3">
                        <yd-flexbox-item>
                            <yd-flexbox class="joined">
                                <yd-button @click.native="show2 = true" style="background-color: rgba(0, 0, 0, 0) ">
                                    <yd-flexbox>
                                        <yd-flexbox-item class="person">{{isoinquota.message1}}</yd-flexbox-item>
                                        <div style="color:#fff">{{isoinquota.message2}}</div>
                                    </yd-flexbox>
                                </yd-button>
                            </yd-flexbox>
                        </yd-flexbox-item>
                        <yd-flexbox direction="vertical" style="    width: 100%;">
                            <yd-flexbox-item style="width: 100%;text-align: center;">
                                <div style="position: relative;padding: 14px 14px 0px 14px;    display: inline-block;">
                                    <img v-for="(item,index) in info" :key="index" :src="imgHost+item.user_head_ico" :onerror="acquiescence" alt="" :class="{captain:index==0}" class="buddha">
                                    <div id="buddha" style="display: inline-block;" v-for="(item,index) in indicate">
                                        <img src="../../assets/images/not_refactoring/quota_icon_wait.png" alt="" class="buddha">
                                    </div>
                                    <div class="expression">Originator</div>
                                </div>
                            </yd-flexbox-item>
                            <yd-flexbox-item style="font-size: 14px;padding: 10px 0 14px 0;color: #6d6e73; text-align: center;">{{isoinquota.message3}}</yd-flexbox-item>
                            <yd-flexbox-item>
                                <yd-flexbox-item style="text-align: center;font-size: 14px;padding: 10px 0px 24px 0px;color: #6d6e73; ">
                                    <yd-countdown :time="isoinquota.end_time" :done-text="finish" :callback="fn">
                                        <span style="color:#6d6f73;font-size: 12px">Ends in:</span>
                                        <span class="clocks">{%h}</span>&nbsp;:
                                        <span class="clocks">{%m}</span>&nbsp;:
                                        <span class="clocks">{%s}</span>
                                    </yd-countdown>
                                </yd-flexbox-item>
                            </yd-flexbox-item>
                        </yd-flexbox>
                        <yd-popup v-model="show1" position="center" width="80%">
                            <yd-flexbox direction="vertical" style="background-color: #fff;text-align: center;font-size: 14px;color: #6d6e73;border-radius: 5px;line-height: 38px;">
                                <yd-flexbox-item style="padding-top: 10px;">Quota was out of date！</yd-flexbox-item>
                                <yd-flexbox-item style="border-bottom: 1px solid #f2f2f2;">you can create quota or join quota.</yd-flexbox-item>
                                <yd-flexbox-item @click.native="show1 = false" style="font-size: 16px;color: #ff4500;">ok</yd-flexbox-item>
                            </yd-flexbox>
                        </yd-popup>
                    </yd-flexbox>
                </div>
            </div>

        </div>
        <div class="division"></div>
        <!-- 优惠券 -->

        <!--<v-coupons></v-coupons>
                                        
                                        <div v-if="promo==undefined  && without !=0">
                                            <v-coupons></v-coupons>
                                        </div>-->
        <div class="option">
            <!-- 选择规格  specification-->
            <div>
                <v-specification></v-specification>
            </div>

            <!-- 方式 -->
            <yd-flexbox direction="vertical" class="Manner">
                <yd-flexbox-item class="fee">
                    shipping from
                    <span style="color: red;word-wrap: break-word; word-break: normal; "> {{address}}</span>
                    <span style="color: red;word-wrap: break-word; word-break: normal; " v-if="address==''"> Manila</span>
                </yd-flexbox-item>
                <!-- 运费计算 -->
                <v-delivery></v-delivery>

                <yd-flexbox-item class="fee">Shipping Fee:
                    <span v-if="carriage!='' && is_shipping=='0'">₱
                        <span>{{(carriage.shippingcost[0].sum_cost).toFixed(2)}}</span>
                    </span>
                    <span v-if="carriage!='' && is_shipping=='1'">₱
                        <span>0</span>
                    </span>
                </yd-flexbox-item>
            </yd-flexbox>
            <div class="division"></div>
            <!-- logo -->
            <yd-flexbox class="logo">
                <div><img :src="imgHost+img" :onerror="seller" alt=""></div>
                <yd-flexbox-item class="keimva" style="word-break: break-all;-webkit-line-clamp: 2;overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;">{{true_name}}</yd-flexbox-item>
                <div class="view">
                    <a :href="'/'+shop"> View Shop </a>
                </div>

            </yd-flexbox>
            <!-- 店铺热度 -->
            <yd-flexbox class="heat">
                <yd-flexbox-item>
                    <yd-flexbox direction="vertical" class="Sales">
                        <yd-flexbox-item>Sales</yd-flexbox-item>
                        <yd-flexbox-item class="quantity">{{sale}}</yd-flexbox-item>
                    </yd-flexbox>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <yd-flexbox direction="vertical" class="Sales">
                        <yd-flexbox-item>Rating</yd-flexbox-item>
                        <yd-flexbox-item class="quantity">{{ratting}}</yd-flexbox-item>
                    </yd-flexbox>
                </yd-flexbox-item>
                <yd-flexbox-item>
                    <yd-flexbox direction="vertical" class="Sales">
                        <yd-flexbox-item>Feedback</yd-flexbox-item>
                        <yd-flexbox-item class="quantity">{{comments}}</yd-flexbox-item>
                    </yd-flexbox>
                </yd-flexbox-item>
            </yd-flexbox>
            <div class="division"></div>
        </div>
    </div>
</template>

<script>
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'

import { mapGetters, mapActions } from 'vuex';
import coupons from './coupons';
import delivery from './delivery';
import specification from './specification';
export default {
    components: {
        'v-coupons': coupons,
        'v-delivery': delivery,
        'v-specification': specification,
    },
    data() {
        return {
            finish: 'Finish',
            joinq: '',
            promo: '',
            show2: false,
            show1: false,
            show3: false,
            imgHost: 'https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/',
            img: null,
            true_name: null,
            comments: null,
            ratting: null,
            sale: null,
            shop: null,
            without: '',
            is_cashondelivery: null,
            is_shipping: null,
            list: [],
            frame: [],
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            isoinquota: '',
            info: [],
            indicate: '',
            area: '',
            quotagoodsid: '',
            active_id: '',
            id: '',
            address: '',
            ids: '',
            static: null,
            minst: '',
            hour: '',
            min: '',
            sec: '',
            day: '',
            own_id: '',
            usrfavorite: '',
            is_pickup: '',
            goosid: '',
            activityid: "",
            codes: '',
            seller: 'this.src="' + require('../../assets/images/not_refactoring/prouct.jpg') + '"',
            user_id: user_id,
        }
    }, created() {//这个方法Vue会自动调用


    },
    computed: {
        ...mapGetters([
            'goods_info', 'carriage', 'total',
        ]),
    },
    watch: {
        goods_info() {
            this.promo = this.goods_info.promo
            this.id = this.goods_info.id
            this.argument()
            this.is_pickup = this.goods_info.seller.is_pickup
            if (this.goods_info.promo == 'quota') {
                this.area = this.goods_info.quota.area
                this.quotagoodsid = this.goods_info.quota.quota_goods_id
                this.ids = this.goods_info.id
                this.activityid = this.goods_info.quota.quota_activity_id
                this.path()
            }
            this.usrfavorite = this.goods_info.usrfavorite

            if (this.usrfavorite == 1) {
                this.usrfavorite = true
            }
            if (this.usrfavorite == 2) {
                this.usrfavorite = false
            }
            // this.user_id = user_id

        },
        carriage() {

        },
        total() {
            this.without = this.total

        },

    }, mounted() {

    },
    methods: {
        ...mapActions([
            'toChangeSwitch'
        ]),
        participation() {
            var imgs = this.goods_info.photo[0].img
            var name = this.goods_info.name
            let nothing1 = {
                imgs: imgs,
                name: name,
            }

            localStorage.setItem('str2', JSON.stringify(nothing1))
        },

        // 收藏
        favorite() {
            if (user_id == null) {
                window.location.href = '/login.html'
            } else {
                var _this = this
                var goods_id = _this.goods_info.id
                _this.usrfavorite = !_this.usrfavorite
                var param = qs.stringify({ goods_id: goods_id, type: 1, user_id: _this.user_id });
                service.post(api.contract + 'api/v1/user/addOrCancel', param).then(res => {
                })

            }

        },
        fn() {
            this.show1 = true
        },
        show(node) {
            var nowtime = this.goods_info.nowtime
            this.frame = node
            this.show1 = true
            this.static = parseInt(node.message.replace(/[^0-9]/ig, ""))
            var storage = window.localStorage;
            storage.quota_orders_id = this.frame.quota_orders_id
            var that = this
            setTimeout(() => {
                that.minst = nowtime.replace(/-/g, '/')
                // 后台返回当前时间
                var now = Date.parse(that.minst) / 1000;
                // 活动未开始倒计时            
                that.when = node.end_time.replace(/-/g, '/')
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

            }, 500);



        },
        showt(node) {

            this.frame = node
            this.show1 = true
            this.show2 = false
            // this.$store.quotaordersid=this.frame.quota_orders_id
            var storage = window.localStorage;
            storage.quota_orders_id = this.frame.quota_orders_id

        },
        Join(node) {
            this.show1 = false
            this.toChangeSwitch(true)
            this.$store.state.play = 'true'
        },
        path() {
            if (user_id == null) {
                window.location.href = "login.html"
            } else {
                var id = this.goods_info.id
                var quota_goods_id = this.goods_info.quota.quota_goods_id
                var _this = this

                service.get(api.contract + 'api/v1/group/groupInfo?goods_id=' + id + '&quota_goods_id=' + quota_goods_id).then(res => {
                    _this.list = res.data.data.list
                    _this.info = res.data.data.info
                    _this.joinq = res.data.data.is_join_quota
                    _this.$store.state.joinquota = _this.joinq
                    _this.isoinquota = res.data.data
                    _this.indicate = (_this.isoinquota.message2.split('/')[1]) - (_this.isoinquota.message2.split('/')[0])
                    //  _this.$store.state.people = res.data.data.list[0].people
                    _this.$store.state.orders_id = res.data.data.quota_orders_id
                })
            }



            // axios.post("/quota/quotaInfo?web_access=web", {
            //     goods_id: _this.ids,
            //     quota_goods_id: _this.quotagoodsid,
            //     user_id: user_id,
            //     lead_user_id: _this.own_id,
            // }).then(res => {
            //     _this.list = res.data.data.list
            //     _this.info = res.data.data.info
            //     _this.joinq = res.data.data.is_join_quota
            //     _this.$store.state.joinquota = _this.joinq
            //     _this.isoinquota = res.data.data
            //     _this.indicate = (_this.isoinquota.message2.split('/')[1]) - (_this.isoinquota.message2.split('/')[0])
            //     //  _this.$store.state.people = res.data.data.list[0].people
            //     _this.$store.state.orders_id = res.data.data.quota_orders_id


            // });



        },
        argument() {

            this.is_cashondelivery = this.goods_info.is_cashondelivery
            this.is_shipping = this.goods_info.is_shipping
            this.img = this.goods_info.s_img
            this.true_name = this.goods_info.true_name
            this.shop = this.goods_info.true_name.replace(/ /g, '_')
            this.comments = this.goods_info.comments
            this.sale = this.goods_info.sale
            this.ratting = this.goods_info.seller.ratting
            this.address = this.goods_info.seller.delivery_address_name


        }

    }
}
</script>



