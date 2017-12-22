<template>
  <div class="emoji-box">
    <el-button ></el-button>
    <emoji v></emoji>
  </div>
</template>

<style lang="less">

</style>

<script>
import emoji from '../components/emoji/emoji.vue'
export default {
  components: {
    emoji
  },
  methods: {
    show: false
  }
}
</script>

