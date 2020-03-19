<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center" >主页</div>
    </nav-bar>

    <router-view/>

    <tab-bar ></tab-bar>

  </div>
</template>

<script>
import NavBar from "../components/common/navbar/NavBar"
import TabBar from "../components/common/tabbar/TabBar"

export default {
  name: 'Home',
  components: {
    NavBar,
    TabBar

  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

