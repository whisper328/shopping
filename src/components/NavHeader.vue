<template>
  <div class="header">
      <div class="nav-topbar">
        <div class="container">
          <div class="topbar-menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MUNI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topbar-user">
             <a href="javascript:;">登录</a>
            <a href="javascript:;">注册</a>
            <a href="javascript:;" class='my-cart'><span class="icon-cart"></span>购物车</a>
          </div>
        </div>
      </div>
      <div class="nav-header">
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu"></div>
          <div class="header-search"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'nav-header'
}
</script>

<style lang='scss'>
// @import './assets/scss/base.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;
    .container{
    // width: 1226px;
    // margin-left: auto;
    // margin-right: auto;
    display: flex;
    justify-content: space-between;
    a{
      display: inline-block;
      color:#B0B0B0;
      margin-left: 17px;
    }
    .my-cart{
      width: 110px;
      background-color: #FF6600;
      text-align: center;
      color: #FFFFFF;
      .icon-cart{
        display:inline-block;
        width: 16px;
        height: 12px;
        background: url('/imgs/icon-cart-checked.png') no-repeat center;
        background-size: contain;
        margin-right: 4px;
      }
    }
  }
  .nav-header{
    .container{
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
    }
  }
  }
  
}
</style>