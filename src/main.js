import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'           
import router from './router'
// import env from './env'

// 定义一个mock的开关
const mock = false;
// 这里使用require  import是预编译加载,在编译的时候,
// import就会被加载进来,写入内存当中,而require执行中才会加载
if(mock){
  require('./mock/api');
}
// 根据前端的跨域方式做调整
// 后端域名与前端域名不同是要写成https://www.baidu.com
// 域名相同时候,用下面的写法
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL; 
// 设置请求响应拦截器
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg)
  }
});
//把axios挂载到VueAxios上面,以后就可以使用this直接调用了
Vue.use(VueAxios,axios);
// 生产环境
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
