<template>
  <div>
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <h2>分类</h2>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "Category",
    components:{
      NavBar
    }
  }
</script>

<style scoped>

  .category-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
