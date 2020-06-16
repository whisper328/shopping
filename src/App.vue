<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'App',
  data(){
    return {
      res:{}
    }
  },
  components: {
  },
  mounted(){
    //
    // storage.setItem('a',1)
    // storage.setItem('abc',{a:1},'user');
    // storage.clear("a")
    // storage.clear("a",'user')
    // 本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    })
  }
}
</script>

<style>

</style>
