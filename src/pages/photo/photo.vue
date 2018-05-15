<template>
  <div class="photo-box">
    <div class="title-box">
      相册
    </div>
    <div class="creat-photoList">
      <el-button type="primary" @click="dialogFormVisible=true" class="creat-photoList-btn">新建相册</el-button>
    </div>

    <div class="photo">
      <div class="photo-list">
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称
              <el-button type="text">删除</el-button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :page-size="15" :total="16">
      </el-pagination>
    </div>
    <el-dialog title="新建相册" :visible.sync="dialogFormVisible" :center="true">
        <el-form :model="form">
          <el-form-item label="相册名称" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createPhotoList">完 成</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<style lang="less">
  @import url('./less/photo.less');

</style>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          title: ''
        }
      }
    },
    methods: {
      createPhotoList() {
        this.axios.post('/api/photo/addList',{
          title: this.form.title
        }).then(res=>{
          if(res.u_flag){
            this.$message({
              message:'亲~相册名已经重复了，换一个吧',
              type:'error'
            })
          }else{
            this.$message({
              message: '恭喜创建完成啦！',
              type: 'success'
            })
          }
        })
      }
    }
  }

</script>
