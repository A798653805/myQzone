<template>
  <div class="photo-box">
    <div class="title-box">
      相册
    </div>
    <div class="creat-photoList">
      <el-button @click="dialogFormVisible=true" class="creat-photoList-btn">新建相册</el-button>
      <el-dialog title="新建相册" :visible.sync="dialogFormVisible" :center="true">
        <el-form :model="form">
          <el-form-item label="相册名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="上传图片">
            <span>我上传不分</span>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">完 成</el-button>
        </div>
      </el-dialog>
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
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相1册名称</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :page-size="15" :total="16">
      </el-pagination>
    </div>
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
          name: ''
        }
      }
    }
  }

</script>
