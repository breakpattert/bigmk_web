
'use strit';
import Vue from 'vue'
import app from './couponslist.vue'
import '../../../static/flexible.js'

//import '../../assets/alljs/mui.min.js'
import '../../assets/alljs/mui.pullToRefresh.js'
import '../../assets/alljs/mui.pullToRefresh.material.js'
//import VueClipboards from 'vue-clipboards';
//
//Vue.use(VueClipboards);
//Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})

