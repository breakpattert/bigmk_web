// 'use strit';
import Vue from 'vue'
import app from './crowdordering_list.vue'
// YDUI
import 'vue-ydui/dist/ydui.flexible.js'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(YDUI);
// 字体图标
// import '../../assets/allcss/iconfont.css';

// import '../../../static/flexible.js'
Vue.config.productionTip = false

// console.log('process.env', process.env)

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
