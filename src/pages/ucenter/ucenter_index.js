
'use strit';
import Vue from 'vue'
import app from './ucenter_index.vue'
import '../../../static/flexible.js'
import '../../assets/allcss/mui/css/mui.min.css';
import '../../assets/allcss/mui/css/icons-extra.css';
//import '../../assets/allcss/sw_style.css'
import '../../assets/allcss/ucentercss/ucenter.css'
import '@/assets/alljs/mobile.js';
//import VueClipboards from 'vue-clipboards';
//
//Vue.use(VueClipboards);
//Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})

