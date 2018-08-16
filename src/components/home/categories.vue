
<!-- 分类。。。。。。。。。。。。。。-->
<template>
     <div class="Categories">
        <div class="Categories_t">
            <img src="../../assets/images/not_refactoring/categories_icon_trimming_left.png" alt="">
            <span class="tst"> Categories</span>
            <img src="../../assets/images/not_refactoring/categories_icon_trimming_right.png" alt="">
        </div>
<!--
         <yd-flexbox v-if="code!=200" style="border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;background-color: #fff;">
            <yd-flexbox-item style="height: 150px;border-right: 1px solid #f2f2f2; "></yd-flexbox-item>
             <yd-flexbox-item style="height: 150px;border-right: 1px solid #f2f2f2; "></yd-flexbox-item>
            <yd-flexbox-item  style="height: 150px;"></yd-flexbox-item>
        </yd-flexbox>-->
        <div class="List">

            <div class="Lists  Listss" v-for="(item,index) in lonboArray" :key="index">
                <a :href="'/site/p_list/cname/'+item.pro_cate_name+'/cat/'+item.cate_id">
                    <div class="Beauty">{{item.cate_name.replace(/amp;/g,'')}}</div>
                    <img :src="Imgstr+item.cate_img" :onerror="acquiescence">
                </a>

            </div>

        </div>
        <div class="Categories_t">
            <a href="/site/sitemap">
                <span style=" color:#3d3d40;">See All</span>
              	<img src="../../assets/images/not_refactoring/flashsale_icon_seemore_default.png" alt="" class="seemore">
            </a>

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
            lonboArray: [],
            Imgstr: "https://bigmk-oss-001.oss-us-west-1.aliyuncs.com/",
              acquiescence: 'this.src="' + require('../../assets/images/not_refactoring/default.gif') + '"',
            code:'',
        }
    },
    created() {//这个方法Vue会自动调用
        this.getCategory()
    },
    methods: {
        getCategory() {
            // axios.post("index/getCategoryList?web_access=web").then(res => {
            //     // console.log(res)
            //     this.lonboArray = res.data.data
            //       this.success= res.data.success
            // });
             service.get(api.contract + 'api/v1/home/categoryBlock').then(res => {
                this.lonboArray = res.data.data
                  this.code= res.data.code
            })
        }
    }

}
</script>
<style>
.Categories {
    background-color: #fff;
    font-weight: 700;
}

.Categories_t {
    height: 0.96rem;
    text-align: center;
    color: #ff4500;
    font-size: 0.32rem;
    line-height: 0.96rem;
}

.Categories .Lists {
    height: 3rem;
    border: 0.02rem solid #f2f2f2;
    border-right: none;
    width: 33%;
    display: inline-block;
}

.Categories .Listss {
    border-bottom: none;
}

.tst {
    margin: 0 0.16rem;
}

.Categories_t img {
    vertical-align: middle;
}

.Beauty {
    height: 0.52rem;
    font-size: 0.28rem;
    color: #3d3d40;
    margin: 0.2rem 0.16rem 0.28rem 0.16rem
}

.Categories .List img {
    width: 100%;
    height: 1.72rem;
    padding: 0 0.24rem 0 0.24rem;
    margin-bottom: 0.44rem;
}
</style>
