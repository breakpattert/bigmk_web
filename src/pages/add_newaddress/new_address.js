
'use strit';
import Vue from 'vue'
import app from './new_address.vue'
import '../../../static/flexible.js'

import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);

//import '../../assets/alljs/mui.min.js'

//import VueClipboards from 'vue-clipboards';
//
//Vue.use(VueClipboards);
//Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app}
})

