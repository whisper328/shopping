import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    'status':0,
    'data':{
        'id|10086-20086':0,
        'username':'@name',
        'email':'admin@51purse.com',
        'phone':null,
        'role':0,
        'createTime':1479048325000,
        'updateTime':1479048325000
    }
});