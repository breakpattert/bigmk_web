
'use strit';
import Vue from 'vue'
import app from './grouplist.vue'
import '../../../static/flexible.js'
import '../../assets/allcss/mui/css/mui.min.css';
//import '../../assets/allcss/sw_style.css'
//import '../../assets/allcss/site.css'
//import VueClipboards from 'vue-clipboards';
//
//Vue.use(VueClipboards);
//Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})

