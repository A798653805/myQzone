import Comment from '../comment/comment.vue'

let dynamic = {
  props: {
    msg: {
      type: String
    },
    name: {
      type: String
    },
    goodNum: {
      type: Number,
      default: 0,
    }
  },
  components: {
    Comment
  },
  data() {
    return {
      niceNum: this.goodNum,
      autosizeFlag: false
    }
  },
  methods: {

    /**
     * 点赞功能
     */
    touchNice() {
      this.niceNum++;
    },
    /**
     *
     */
    autoFocus(){
      console.log(this.$refs.comment);
      this.$refs.comment.getFouse()
    }
  }
}

export {dynamic}
