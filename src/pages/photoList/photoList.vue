<template>
  <div class="photo-list-box">
    <div class="title-box">
      相册
    </div>
    <div class="function-box">
      <el-button type="primary" @click="dialogFormVisible= true">上传图片</el-button>
      <el-button @click="goList">返回列表</el-button>
      <el-button type="danger" @click="bactchdel" v-show="!delflag">批量删除</el-button>
      <el-button type="danger" v-show="delflag" @click="delPic">确认删除</el-button>
      <el-button v-show="delflag" @click="delflag=false">取消删除</el-button>
    </div>
    <div class="photo-list-item" v-for="item in dataPath" :key="item._id">
      <img class="photo-img" :src="item.photo_path" alt="">
      <p class="title" v-show="!delflag">{{item.created_time}}</p>
      <el-checkbox-group class="title" v-show="delflag" v-model="checkList">
        <el-checkbox :label="item._id">{{item.created_time}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <el-dialog title="上传图片" :visible.sync="dialogFormVisible" :center="true">
      <el-upload action="/api/photo/upload" ref="upload" list-type="picture-card" :multiple="true" :before-upload="beforeImgUpload"
        :on-success="uploadSuccess" :on-remove="handleRemove">
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
  import moment from 'moment';
  export default {
    data() {
      return {
        dialogFormVisible: false,
        photoPath: [],
        dataPath: [],
        delflag: false,
        checkList: []
      }
    },
    methods: {
      handleRemove(file, fileList) {
        this.photoPath = this.photoPath.filter(item => item != file.response.data.data);
      },
      beforeImgUpload(file) {
        const arr = ['image/jpeg', 'image/png'];

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
        this.axios.post('/api/photo/submitData', {
          data: this.photoPath,
          id: this.$route.query._id
        }).then((res) => {
          if (verify(res.flag)) {
            this.$message({
              message: res.message,
              type: 'success'
            })
            this.photoPath = this.photoPath.filter(item => item == 0);
            this.$refs.upload.clearFiles();
            this.dialogFormVisible = false;
            this.getPic();
          }
        })
      },
      getPic() {
        this.axios.get(`/api/photo/getpic?_id=${this.$route.query._id}`).then(res => {

          if (verify(res.flag)) {
            if (res.data) {
              this.dataPath = res.data.map(item => {
                item.created_time = moment(item.created_time).format("YYYY-MM-DD");
                return item;
              })
            }else{

            }
          }
        })
      },
      goList() {
        this.$router.push({
          name: 'photo'
        })
      },
      bactchdel() {
        this.delflag = true;
      },
      delPic() {
        if (this.checkList.length > 0) {
          this.axios.post('/api/photo/delpic', {
            photoList: this.checkList
          }).then(res => {
            if (verify(res.flag)) {
              this.$message({
                message: res.message,
                type: 'success'
              });
              this.getPic();
            }
          });
        } else {
          this.$message({
            message: '请选择删除的照片'
          })
        }
      }
    },
    created() {
      this.getPic();
    }
  }

</script>
