<template>
  <div class="myhome-box">
    <overview></overview>
    <div class="dynamic-box">
      <ul>
        <li v-for="item in mood" :key="item._id">
          <dywindow :name="item.user_id.nickname" :msg="item.content" :id="item._id" @del='delonly(item._id)' @good="good(item._id)"
          :goodNum="item.good_num.length"></dywindow>
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
