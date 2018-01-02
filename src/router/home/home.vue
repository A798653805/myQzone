<template>
  <div class="home">
    <home-header></home-header>
    <home-nav></home-nav>
    <home-body>
      <router-view/>
    </home-body>
  </div>
</template>

<script>
  export {
    default
  }
  from './home.js'

</script>

<style lang="less">
  @import url('./less/home.less');

</style>
