


<!-- 拼单帮助详情 -->
  <style>
.contents {
    padding: 0px 14px;
}

.contents .imgis img {
    width: 100%;
}

.contents .imgis {
    font-size: 16px;
}
</style>
 
<template>
    <div>
        <div class="contents">
            <yd-flexbox>
                <yd-flexbox-item v-html="contents.content" class="imgis"></yd-flexbox-item>
            </yd-flexbox>
        </div>
    </div>
</template>
<script>

import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            contents: '',

        }
    },
    created() {//这个方法Vue会自动调用
        this.init()

    },
    mounted() {

    },
    methods: {

        init() {
            var url = location.search; //获取url中"?"符后的字串 
            var theRequest = {};
            if (url.indexOf("?") != -1) {
                var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；  
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                }
            }

            service.get(api.contract + 'api/v1/quota/help_detail?help_id=' + theRequest.id).then(res => {
                this.contents = res.data.data
            })

        },
    },

}
</script>
