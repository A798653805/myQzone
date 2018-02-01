export default {
  props:{
    msg: {
      type: String
    },
    name: {
      type: String
    },
    autosizeFlag: {
      type: Boolean
    }
  },
  data() {
    return {
      rows: 1,
      subFlage: false,
      replyFlage: false,
    }
  },
  methods:{
    /**
     * 评论框获取焦点时，改变显示状态
     */
    showStatus() {
      this.getFouse()
      this.rows = 3;
      this.subFlage = true;
    },
    /**
     * 回复时输入框状态
     */
    replyLostFouse() {
      if (this.replyFlage) {
        this.rows = 1;
        this.replyFlage = false;
        this.subFlage = false;
      }
    },
    /**
     * 回复获取焦点
     */
    repGetFouse() {
      this.getFouse();
      this.replyFlage = true;
    },
    /**
     * 获取焦点
     *
     */
    getFouse() {
      this.$refs.text.focus();
    }
  }
}
