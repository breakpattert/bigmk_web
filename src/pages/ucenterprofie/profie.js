
'use strit';
import Vue from 'vue'
import app from './profie.vue'
import '../../../static/flexible.js'
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);
import '../../assets/allcss/mui/css/mui.min.css';
import '../../assets/allcss/mui/css/icons-extra.css';
//import '../../assets/allcss/sw_style.css'
import '../../assets/allcss/ucentercss/ucenter.css'
//import VueClipboards from 'vue-clipboards';
//
//Vue.use(VueClipboards);
//Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})

