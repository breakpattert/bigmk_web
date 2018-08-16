
'use strit';
import Vue from 'vue'
import app from './forgotpassword.vue'
//import '../../../static/flexible.js'
import '../../assets/allcss/mui/css/mui.min.css';
import '../../assets/allcss/site.css'
//import VueClipboards from 'vue-clipboards';
//
//Vue.use(VueClipboards);
//Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})

