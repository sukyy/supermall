<template>
    <div class="tab-bar">
      <tab-bar-item>
        <div slot="img">
          <img src="assets/logo.png" class="img">
        </div>
        <div slot="title">
          <span>首页</span>
        </div>
      </tab-bar-item>

      <tab-bar-item>
        <div slot="img">
          <img src="https://i1.hdslb.com/bfs/face/c850c18ae6b507d0ef34837f53a51090b6a7451f.jpg@68w_68h.webp" class="img">
        </div>
        <div slot="title">
          <span>首页</span>
        </div>
      </tab-bar-item>

      <tab-bar-item>
        <div slot="img">
          <img src="https://i1.hdslb.com/bfs/face/c850c18ae6b507d0ef34837f53a51090b6a7451f.jpg@68w_68h.webp" class="img">
        </div>
        <div slot="title">
          <span>首页</span>
        </div>
      </tab-bar-item>

      <tab-bar-item>
        <div slot="img">
          <img src="https://i1.hdslb.com/bfs/face/c850c18ae6b507d0ef34837f53a51090b6a7451f.jpg@68w_68h.webp" class="img">
        </div>
        <div slot="title">
          <span>首页</span>
        </div>
      </tab-bar-item>

    </div>
    
</template>

<script>
  import TabBarItem from "components/common/tabbar/TabBarItem"
    export default {
        name: "TabBar",
      components:{
        TabBarItem
      }
    }
</script>

<style >
  .img{
    width: 40px;
    height: 40px;
  }

</style>
