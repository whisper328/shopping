<template>
  <div>
    this is homes
    <nav-header></nav-header>
    <nav-footer></nav-footer>
    <router-view></router-view>
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
