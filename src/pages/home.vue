<template>
  <div>
    <!-- this is homes -->
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
    
  </div>
</template>

<script>
import NavHeader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
export default {
  name: "navhome",
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style></style>
