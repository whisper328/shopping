let baseURl;
// process.env.NODE_ENV 是获取当前js进程中的一些变量
// 这种方式使用的是跨域如jsonP跨域,cros跨域,如果使用代理就可以不用使用这个方法
switch (process.env.NODE_ENV) {
  case 'development':
      baseURl = 'http://dev-mall-pre.springboot.cn/api'
    break;
    case 'test':
      baseURl = 'http://test-mall-pre.springboot.cn/api'
    break;
    case 'production':
        baseURl = 'http://mall-pre.springboot.cn/api'
      break;
  
  default:
    baseURl = 'http://mall-pre.springboot.cn/api'
    break;
}

export default {
  baseURl,
};
