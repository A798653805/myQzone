<template>
    <div class="home">
       <topheader></topheader> 
    </div>
</template>

<script>
import Topheader from '../../components/topheader/topheader.vue'

export default {
  components: {
      Topheader,
  }
}
</script>

<style lang="less">
    @import url('./less/home.less');
</style>
