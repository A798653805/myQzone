<template>
  <div class="photo-list-box">
    <div class="title-box">
      相册
    </div>
    <div class="function-box">
      <el-button type="primary" @click="dialogFormVisible= true">上传图片</el-button>
      <el-button type="danger">批量删除</el-button>
    </div>
    <div class="photo-list-item">
      <img class="photo-img" src="static/imgs/home_bg.jpg" alt="">
      <p class="title">时间</p>
    </div>
    <el-dialog title="上传图片" :visible.sync="dialogFormVisible" multiple="true" :limit="15" :center="true">
      <el-upload action="/api/photo/upload" list-type="picture-card" :before-upload="beforeImgUpload" :on-success="uploadSuccess"
        :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitData">完 成</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less">
  @import url('./photoList.less');

</style>

<script>
  import {
    verify
  } from "../../components/utils/verify";
  export default {
    data() {
      return {
        dialogFormVisible: false,
        photoPath: []
      }
    },
    methods: {
      handlePictureCardPreview() {},
      handleRemove(file, fileList) {
        this.photoPath = this.photoPath.filter(item => item != file.response.data.data);
      },
      beforeImgUpload(file) {
        const arr = ['image/jpeg', 'image/png']
        const Filetype = file.type;
        console.log(Filetype)
        if (arr.indexOf(Filetype) < 0) {
          this.$message({
            message: '只能上传png,jpeg格式'
          })
          return false;
        }
        return true;
      },
      uploadSuccess(res, file, fileList) {
        this.photoPath.push(res.data.data);
      },
      submitData() {
        this.post('/api/photo/submitData', {
          data: this.photoPath
        }).then((res) => {
          if (verify(res.flag)){
            console.log(res.message);
          }
        })
      }
    }
  }

</script>
