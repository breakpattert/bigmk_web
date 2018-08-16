// 'use strit';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import Vue from 'vue'
import app from './successful_order.vue'
// YDUI
import 'vue-ydui/dist/ydui.flexible.js'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
Vue.use(YDUI);
import store from '../../assets/store/index'
Vue.config.productionTip = false
// 获取用户id
function getCookie(name){
    name = name + "="
    var start = document.cookie.indexOf(name),
        value = null;
    if(start>-1){
        var end = document.cookie.indexOf(";",start);
        if(end == -1){
            end = document.cookie.length;
        }
        value = document.cookie.substring(start+name.length,end);
    }
	// 全局声明user_id
	window.user_id = value;
    return value;
}
getCookie("user_id");

// console.log('process.env', process.env)

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app },
	 store
})
