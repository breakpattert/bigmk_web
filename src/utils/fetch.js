import axios from 'axios';
import { Toast } from 'mint-ui';

const service = axios.create({
    timeout: 5000,
    withCredentials: false
});

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//拦截器处理集中请求的报错信息
service.interceptors.request.use(config => {
	var safe_token =getCookie('bigmk_wap_ut');
	if (safe_token){
      config.headers.Authorization = 'Bearer ' + safe_token;
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	 }
    return config;
}, function(error) {
    return Promise.reject(error);
});

service.interceptors.response.use(response => {
    var suc = response.data.success;
    var resCode = response.data.code;

    if(resCode == 10000 || suc == true){
    	return response;
    }
    
    else if(resCode == 401){
    	gotoLogin();
    	return Promise.reject('401');
    }else{
//  	ToastError();
    	return Promise.resolve(response);
    }
    
}, function(e) {    
    if(e.response.status == 401){
        gotoLogin();
    }else{
    	ToastError();
    }
    return Promise.reject(e);
});

function gotoLogin(){
    console.log('onSessionLost')
}
function getCookie(c_name){
				if (document.cookie.length>0)
					{
				var c_start=document.cookie.indexOf(c_name + "=")
					  if (c_start!=-1)
					    { 
					    c_start=c_start + c_name.length+1 
					    var c_end=document.cookie.indexOf(";",c_start)
					    if (c_end==-1) c_end=document.cookie.length
					    return unescape(document.cookie.substring(c_start,c_end))
					    } 
  						}
						return ""
}
function ToastError(){
	Toast({
		message: '邀请信息超时，请重新分享',
		duration: 5000
	});
}

export default service;
