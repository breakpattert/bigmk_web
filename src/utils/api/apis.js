var env = require('../env.js');
var baseUrl = env.baseUrl;//在上一个页面module.exports=env所以通过env。的方法可以得到baseUrl
//es6l里面用const常量定义api对象这几个api是后台给的
const api = {
//	commonContract: baseUrl + '/api/v1/help/categories/seller',
	// 领红包
//	+ '/bmk/bapi.php/index/slideList?web_access=web
	contract: baseUrl,
//	// 领现金
//	code: baseUrl + '/mate/invite_code/get'
}

export { api }