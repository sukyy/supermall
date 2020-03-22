<template>
  <div>
    <nav-bar class="cart-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <h2>购物车</h2>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "Cart",
    components:{
      NavBar
    }
  }
</script>

<style scoped>

  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
