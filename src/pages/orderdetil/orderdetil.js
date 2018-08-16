
'use strit';
import Vue from 'vue'
import app from './orderdetil.vue'
import '../../../static/flexible.js'
import '../../assets/allcss/mui/css/mui.min.css';
import '../../assets/allcss/mui/css/icons-extra.css';
//import '../../assets/allcss/sw_style.css'
import '../../assets/allcss/ucentercss/ucenter.css'
//import '../../assets/alljs/mui.pullToRefresh.js'
//import '../../assets/alljs/mui.pullToRefresh.material.js'
//import VueClipboards from 'vue-clipboards';
//
//Vue.use(VueClipboards);
//Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})

