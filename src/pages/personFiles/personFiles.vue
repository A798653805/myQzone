<template>
  <div class="person-box">
    <div class="title-box">
      个人信息
    </div>
    <div class="function-btn">
      <el-button @click="disable = false">修改信息</el-button>
    </div>
    <div class="person-info">
      <el-form :model="form"  label-width="100px"  class="demo-ruleForm">
        <el-form-item label="昵称" prop="nickname">
          <el-input :disabled="disable" v-model="form.nickname"></el-input>
        </el-form-item>
        <el-form-item label="个人简介" prop="introduction">
          <el-input :disabled="disable" v-model="form.introduction"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="disable" @click="sendInfo">完成</el-button>
          <el-button :disabled="disable" @click="disable=false">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
</template>

<style lang="less">
  @import url('./less/personFiles.less');

</style>

<script>
import { verify } from '../../components/utils/verify';
export default {
  data(){
    return {
      disable: true,
      form:{
        nickname: '',
        introduction: '',
      }
    }
  },
  methods: {
    getinfo(){
      this.axios.post('/api/users/getname').then(res=>{
        if(verify(res.flag)){
          this.form.nickname = res.nickname;
          this.form.introduction = res.introduction;
        }
      })
    },
    sendInfo(){
      this.axios.post('/api/users/sendinfo',{
        nickname: this.form.nickname,
        introduction: this.form.introduction
      }).then(res=>{
        if(verify(res.flag)){
          this.$message({
            message: res.message,
            type: 'success'
          });
          this.getinfo();
          this.disable = !this.disable;
          location.reload();
        }
      })
    }
  },
  created(){
    this.getinfo();
  }
}
</script>
