<template>
  <div class="moods-box">
    <div class="title-box">
      说说
    </div>
    <div class="funtion-box">
      <el-button type="primary" @click="open = true">发表说说</el-button>
    </div>
    <div class="mood-list" v-for="item in moodList" :key="item._id">
      <div class="mood-item">
        <dywindow :name="item.user_id.nickname" :msg="item.content" :id="item._id" @del='delonly(item._id)' @good="good(item._id)"
          :goodNum="item.good_num.length"></dywindow>
      </div>
    </div>
    <el-dialog title="发表说说" :visible.sync="open" :center="true">
      <el-form :model="form">
        <el-form-item label="说说">
          <el-input v-model="form.mood"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="open = false">取 消</el-button>
        <el-button type="primary" @click="sendMood">发表</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less">
  .moods-box {
    background: #ffffff;
    padding: 10px;
    border-radius: 4px;
    overflow: hidden;
    min-height: 400px;
    .title-box {
      border-bottom: 1px solid #303133;
      font-size: 22px;
      color: #303133;
      padding-bottom: 4px;
    }
    .funtion-box {
      padding-top: 10px;
    }
    .mood-list {
      padding-top: 10px;
      .mood-item {
        border: 1px solid #c0c9cc;
        border-radius: 4px;
        margin-top: 10px;
      }
    }
  }

</style>

<script>
  import dywindow from '../../components/dynamic/dynamic.vue';
  import {
    verify
  } from '../../components/utils/verify';
  export default {
    components: {
      dywindow
    },
    data() {
      return {
        delFlag: false,
        open: false,
        form: {
          mood: ''
        },
        moodList: [],
        goodNum: 0,
        comment: []
      }
    },
    methods: {
      sendMood() {
        this.axios.post('/api/mood/sendmood', {
          content: this.form.mood
        }).then(res => {
          if (res.flag) {
            this.$message({
              message: '发表成功',
              type: 'success'
            })
            this.getMood();
          }
        })
        this.open = false;
      },
      getMood() {
        this.axios.post('/api/mood/getmood').then(res => {
          if (verify(res.flag)) {
            if (res.data) {
              this.moodList = res.data.map(item => item);
            }
          }
        })
      },
      delonly(id) {
        this.axios.post('/api/mood/delone', {
          id: id
        }).then(res => {
          if (verify(res.flag)) {
            this.$message({
              message: res.message,
              type: 'success'
            })
            this.getMood()
          }
        })
      },
      good(id) {
        this.axios.post('/api/mood/good', {
          id: id
        }).then(res => {
          if (verify(res.flag)) {
            if (res.u_data) {
              this.$message({
                message: res.message,
                type: 'error'
              })
            } else {
              this.$message({
                message: res.message,
                type: 'success'
              });
              //  this.getMood()
              location.reload();
            }
          }
        })
      },
      // comment(id){
      
      // }
    },
    created() {
      this.getMood();
    }
  }

</script>
