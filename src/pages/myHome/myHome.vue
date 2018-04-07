<template>
  <div class="myhome-box">
    <overview></overview>
    <div class="dynamic-box">
      <ul>
        <li v-for="item in items">
          <dywindow name="小少爷" msg="不想弄" :goodNum="item.goods"></dywindow>
        </li>
      </ul>
    </div>
   <msg-board></msg-board>
  </div>
</template>

<style lang="less">
  @import url('./less/myHome.less');
</style>

<script>
  import {
    myHome
  } from "./myHome";

  export default myHome

</script>
