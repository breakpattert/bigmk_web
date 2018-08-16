


<!--搜索-->
<template>
    <div>
        <!--搜索-->
        <yd-cell-group>
            <yd-cell-item style="height: 0.6rem;">
                <i slot="left" class="iconfont icon-back_" style="    font-size: 0.4rem;margin-right: 0.12rem;"></i>
                <select slot="left" style="height: 100%;border: none;background: #c7c7c7;padding: 0.1rem;" class="testSelect">
                    <option value="Product">Product</option>
                    <option value="Shop">Shop</option>
                </select>
                <yd-input slot="right" v-model="input6" placeholder="Bigmk.ph" style="background-color: rgba(0,0,0,.1);"></yd-input>
                <span slot="right" style="    padding-left: 0.2rem;" @click="seek">Search</span>
            </yd-cell-item>
        </yd-cell-group>
        <!--搜索记录 -->
        <div style="padding: 0 0.2rem;">
            <div style="font-size: 0.3rem;">Search History</div>
            <div style="margin-top: 0.2rem;margin-bottom: 0.6rem;">
                <span style="color: #3cb371;border: 1px solid #3cb371; border-radius: 0.3rem;padding: 0.1rem;">99999</span>
                <span style="color: #3cb371;border: 1px solid #3cb371; border-radius: 0.3rem;padding: 0.1rem;">99999</span>
            </div>
        </div>
        <div style="height: 0.4rem;background-color: #f2f2f2;"></div>
    </div>
</template>

<script>
import '@/assets/alljs/jquery-3.2.1.min.js';
// import header from '../../components/commonality/headline.vue'
// import opinion from '../../components/opinion/opinion.vue';
export default {
    data() {
        return {
            input6: ''
        }
    },
    components: {
        // 'v-header': header,
        // 'v-opinion': opinion,
    },
    created() {
    //   this.seek()

    },
    methods: {
        seek(){
          
           console.log(this.input6) 
           console.log(  $('.testSelect option:selected') .val()) 
        }
    }
};

</script>

<style>
.yd-cell-box .yd-cell:after {
    border: none;
}

.yd-cell-item .yd-cell-right {
    min-height: 0.6rem;
}

.yd-cell-box {
    margin-bottom: 0;
    margin: 0.1rem 0;
}
</style>