<template>
  <div class="comment-box">
    <div class="comments">
      <div class="comments-left">
        <p class="name">{{name}}:</p>
        <p class="date">16:40</p>
      </div>
      <div class="comments-rig">
        {{msg}}
      </div>
      <el-button type="text" class="reply-btn" @click="repGetFouse">回复</el-button>
    </div>
    <el-input
      type="textarea"
      size="small"
      ref="text"
      :rows="rows"
      :autosize="false"
      :autofocus="autosizeFlag"
      @focus="showStatus"
      @blur="replyLostFouse">
    </el-input>
    <el-button
      class="btn"
      v-if="subFlage&&!replyFlage"
      type="primary">
      发表
    </el-button>
    <el-button
      class="btn"
      v-if="replyFlage"
      type="primary"
      >回复
    </el-button>
  </div>
</template>

<style lang="less">
  @import url('./comment.less');
</style>

<script>
  export {default} from './comment.js'
</script>
