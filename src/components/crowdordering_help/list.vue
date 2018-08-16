


<!-- 拼单帮助列表 -->
<style>
body {
    background-color: #fff;
}

.herades {
    width: 100%;
    position: fixed;
    z-index: 10;
    font-size: 0.36rem;
    background-color: #ffffff;
    text-align: center;
    padding: 0.2rem 0.28rem;
    top: 0px;
    border-bottom: 0.02rem solid #f2f2f2;
}

.superior {
    position: relative;
}

.details {
    font-size: 0.36rem;
    color: #3d3d40;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.superior {
    margin-right: 0.08rem;
}

.herades .iconfont {
    font-size: 0.52rem;
    font-weight: 700;
    color: #6d6e73;
}

.lis {
    height: 0.96rem;
    background-color: #ffffff;
    padding: 0px 0.28rem;
    line-height: 0.96rem;
    font-size: 0.28rem;
    color: #3d3d40;
    border-bottom: 0.02rem solid #f2f2f2;
}
</style>

<template>
    <div>

        <!--<div style=" height: 1.2rem;"></div>-->
        <a :href="'help_particulars.html?id='+item.id" v-for="(item,index) in list" :key="index">
            <yd-flexbox class="lis">
                <yd-flexbox-item style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.name}}</yd-flexbox-item>
                <div>
                    <i class="iconfont icon-552cc1babd9aa" style="font-size: 28px;"></i>
                </div>
            </yd-flexbox>
        </a>
    </div>
</template>

 <script type="text/javascript">
import { mapGetters } from 'vuex'
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            list: [],
        }
    },
    created() {
        this.lis()
    },
    watch: {


    },
    methods: {
        lis() {

            service.get(api.contract + 'api/v1/quota/help_list').then(res => {
                this.list = res.data.data
            })

        },

    }
}



</script>
