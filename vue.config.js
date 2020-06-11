module.exports = {
    devServer:{
        host:'localhost',
        port:'8080',
        // 当你访问/api时会被拦截,然后代理访问到目标target设置的地址
        proxy:{
            '/api':{
                target:"www.baidu.com",
                // 是否将主机头地址更改为目标地址
                changeOrigin:false,
                parthRewrite:{
                    'api':''
                }
            }
        }
    }
}