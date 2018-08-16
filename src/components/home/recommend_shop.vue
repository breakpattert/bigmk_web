
<!-- 推荐店铺.............................. -->
<template>
    <div class="recommend Categories">
        <div class="Categories_t">
          	<img src="../../assets/images/not_refactoring/recommendshop_icon_trimming_left.png" alt="" >
            <span class="tst" style=" color:#f43e87;">Recommend Shop</span>
          	<img src="../../assets/images/not_refactoring/recommendshop_icon_trimming_right.png" alt="" >
        </div>
        <!--<yd-flexbox v-if="success!=true" style="border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;background-color: #fff;">
                    <yd-flexbox-item style="height: 175px;border-right: 1px solid #f2f2f2; "></yd-flexbox-item>
                    <yd-flexbox-item  style="height: 175px;"></yd-flexbox-item>
                </yd-flexbox>-->
        <div class="Structure">

            <div class="Listss" v-for="(item,index) in Shop" :key="index">
                <yd-flexbox class="Shop">
                    <div class="Icons">
                        <img :src="Imgstr+item.img" :onerror="seller">
                    </div>
                    <yd-flexbox-item class="mars">{{item.true_name}}</yd-flexbox-item>
                </yd-flexbox>
                <a :href="'/'+item.true_name.replace(/ /g,'_')">
                    <yd-flexbox class="plumage">
                        <img v-for="(items,indexs) in item.goods" :key="indexs" :src="Imgstr+items.img" :onerror="acquiescence" class="big" v-if="indexs===0">
                        <yd-flexbox-item class="Product">
                            <yd-flexbox direction="vertical">
                                <yd-flexbox-item class="my" v-for="(items,indexs) in item.goods" :key="indexs" v-if="indexs>0"> <img :src="Imgstr+items.img" :onerror="acquiescence"></yd-flexbox-item>
                            </yd-flexbox>
                        </yd-flexbox-item>
                    </yd-flexbox>

                </a>
            </div>

            </yd-flexbox>
        </div>
        <div class="interval"></div>
    </div>
</template>
<script type="text/babel">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            Shop: [],
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
            // address: address,
            acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            seller: 'this.src="' + require('../../assets/images/not_refactoring/prouct.jpg') + '"',
            success: '',
        }
    },
    created() {//这个方法Vue会自动调用
        this.getCategory()
    },
    methods: {
        getCategory() {
            service.get(api.contract + 'api/v1/home/getShopList').then(res => {
                var _this = this
                _this.Shop = res.data.data
                _this.success = res.data.success
                // console.log(res.data.data[0].goods[0].img)
                // 第一次循环
                _this.Shop.forEach(function(item) {
                    var goods = item.goods;
                    // console.log(goods)
                    // 第二次循环
                    goods.forEach(function(rem) {
                        var aa = rem.img
                        // console.log(aa)
                        item.my = aa
                    });

                });
            })
        }
    }

}
</script>
<style>
.recommend {
    font-weight: 700;
}

.Shop {
    height: 0.62rem;
    margin: 0.2rem 0.2rem 0.16rem 0.2rem
}

.Listss {
    border: 0.02rem solid #f2f2f2;
    border-right: none;
    width: 50%;
    display: inline-block;
}

.Shop .Icons {
    width: 0.64rem;
    height: 0.64rem;
    margin-right: 0.16rem;
}

.Shop .Icons img {
     width: 0.64rem;
    height: 0.64rem;
}

.Shop .mars {
    font-size: 0.24rem;
    color: #3d3d40;
    line-height: 0.32rem;
}

.plumage {
    margin: 0 0.2rem 0.28rem 0.2rem;
}

.plumage .big {

    height:2.2rem;
    width: 60%;
    margin-right: 0.2rem;
}

.little {
    height:2.2rem;
    width: 28%;
    margin-left: 2%;
}


.recommend .botts {
    border-bottom:0.02rem solid #f2f2f2;
}

.Product {
   height:2.2rem;
    width: 30%;
}

.Product img {
    height: 100%;
    width: 100%;
}

.my {
    height: 50%;
}
</style>
