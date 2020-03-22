<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <h2>首页</h2>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar

    },
    created() {
      //请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
      })
    }
  }
</script>

<style >
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
