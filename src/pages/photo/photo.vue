<template>
  <div class="photo-box">
    <div class="title-box">
      相册
    </div>
    <div class="creat-photoList">
      <el-button type="primary" @click="dialogFormVisible=true" class="creat-photoList-btn">新建相册</el-button>
    </div>
    <div class="photo-list">
      <div class="photo-item" v-for="item in photoList" :key="item._id" @click="goPhoto(item._id)">
        <div class="photo">
          <img class="photo-img" :src="item.cover" alt="">
          <div class="photo-name">
            <div class="name">{{item.title}}</div>
            <el-button type="text" @click.stop="delList(item._id)">删除</el-button>
            <el-button type="text" @click.stop="editList(item._id,item.title)">编辑</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :page-size="15" :total="16">
      </el-pagination>
    </div>
    <el-dialog title="新建相册" :visible.sync="dialogFormVisible" :center="true">
      <el-form :model="form" :rules="rules">
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
  import {
    verify
  } from "../../components/utils/verify";
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          title: ''
        },
        id: '',
        photoList: [],
        rules:{
          title:[{
            // required: true,
            message: '请输入相册名称',
            triger: 'blur'
          }],
        }
      }
    },
    methods: {
      createPhotoList() {
        this.axios.post('/api/photo/addList', {
          title: this.form.title,
          id: this.id
        }).then(res => {
          if (verify(res.flag)) {
              this.$message({
                message: res.message,
                type: 'success'
              });
              this.dialogFormVisible = false;
              this.form.title = '';
              this.id = ''
              this.getPhotoList();
            
          }
        })
      },
      getPhotoList(){
        this.axios.post('/api/photo/getList').then(res=>{
          if (verify(res.flag)) {
            this.photoList = res.data
          }
        })
      },
      delList(id){
        console.log(id);
        this.axios.post('/api/photo/delList',{
          id: id
        }).then((res)=>{
          if(verify(res.flag)){
            this.$message({
              message:res.message,
              type:'success'
            });
            this.getPhotoList();
          }
        })
      },
      goPhoto(id){
        this.$router.push({
          path: `/home/photoList?_id=${id}`
        })
      },
      editList(id,title){
        this.id = id;
        this.form.title = title;
        this.dialogFormVisible = true;
      }
      
    },
    created(){
      this.getPhotoList();
    }
  }

</script>
