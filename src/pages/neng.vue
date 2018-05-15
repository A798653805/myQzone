<template>
  <div class="emoji-box">
    <el-input v-model="data"></el-input>
    <el-button @click="seleted">哈哈哈</el-button>
    <emoji v-if="show" @selected="selectEmoji"></emoji>
    <p v-html="emoji(data)"></p>
    <quill-editor v-model="data2"></quill-editor>
    <p v-html="data2"></p>
    {{data2}}

  </div>
</template>

<style lang="less">

</style>

<script>
import emoji from '../components/emoji/emoji.vue';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

 export default {
  components: {
    emoji,
  quillEditor
  },
  data(){
    return {
      show: false,
      data: '',
      data2: ''
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

