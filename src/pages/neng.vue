<template>
  <div class="emoji-box">
    <el-input v-model="data"></el-input>
    <el-button @click="seleted">哈哈哈</el-button>
    <emoji v-if="show" @selected="selectEmoji"></emoji>
    <p v-html="emoji(data)"></p>
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
  data(){
    return {
      show: false,
      data: ''
    }
  },
  methods: {
    seleted() {
      this.show = !this.show;
    },
    selectEmoji (code) {
      this.show = false
      this.data += code
      console.log(this.value);
    },
  }
}
</script>

