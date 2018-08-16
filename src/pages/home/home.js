// 'use strit';
import Vue from 'vue'
import app from './home.vue'
// YDUI
import 'vue-ydui/dist/ydui.flexible.js'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(YDUI);
Vue.config.productionTip = false


new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
