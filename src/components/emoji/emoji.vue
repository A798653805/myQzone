<template>
  <div class="emoji">
    <ul class="emoji-controller">
      <li v-for="(pannel,index) in pannels" @click="changeActive(index)" :class="{'active': index === activeIndex}">{{ pannel }}</li>
    </ul>
    <ul class="emoji-container">
      <li v-for="(emojiGroup, index) in emojis" style="padding: 0" :key="index" v-if="index === activeIndex">
        <a href="javascript:;" v-for="(emoji, index) in emojiGroup" :key="index" @click="selectItem(emoji)">
          <span class="emoji-item" :title="emoji" :class="'sprite-' + getPureName(emoji)"></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import data from './emoji-data.js'

  export default {
    name: 'emoji',
    data() {
      return {
        emojiData: data,
        pannels: ['表情', '自然', '物品', '地点', '符号'],
        activeIndex: 0
      }
    },
    methods: {
      changeActive(index) {
        this.activeIndex = index
      },
      getPureName(name) {
        return name.replace(/:/g, '')
      },
      selectItem(emoji) {
        this.$emit('selected', emoji)
      }
    },
    computed: {
      emojis() {
        return this.pannels.map(item => {
          return Object.keys(this.emojiData[item])
        })
      }
    },
    created () {
    }
  }

</script>

<style lang='less' scoped>
  @import url('emoji');
 
</style>
