

<template>
    <div>
      8888888
    </div>
</template>


<script>
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            show2: false,
            recommend:[],
            total:'',
        }
    }, created() {
        this.reduced() 
    },
     computed: {
        ...mapGetters([
                'goods_info',
                
        ])
        },
        watch: {
        goods_info() {
            this.reduced()
            // console.log(this.goods_info)
            
        }

    },
    methods: {
      reduced() {
         
           var  goods_id =this.goods_info.id;
           var  seller_id=this.goods_info.seller_id;
            // console.log(this.goods_info)
             var param = qs.stringify({ goods_id:goods_id,seller_id:seller_id,user_id:188 });
            service.post(api.contract + 'api/v1/voucher/goodsInfoVoucher', param).then(({ status, data }) => {
               this.recommend = res.data.data
                this.$store.state.total= res.data.error_code
            })
           
        }
    }
}
</script>
