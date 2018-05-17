<template>
  <div class="moods-box">
    <div class="title-box">
      说说
    </div>
    <div class="funtion-box">
      <el-button type="primary" @click="open = true">发表说说</el-button>
      <el-button type="danger" v-show="!delFlag">批量删除</el-button>
      <el-button type="danger" v-show="delFlag">确定删除</el-button>
      <el-button v-show="delFlag">取消删除</el-button>
    </div>
    <div class="mood-list">
      <div class="mood-item">
        <dywindow name="小少爷" msg="不想弄" :goodNum="1"></dywindow>   
      </div>
      <div class="mood-item">
        <dywindow name="小少爷" msg="不想弄" :goodNum="1"></dywindow>
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
        <el-button type="primary">发表</el-button>
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
      .mood-item{
        border: 1px solid #c0c9cc;
        border-radius: 4px;
        margin-top: 10px;
      }
    }
  }

</style>

<script>
import dywindow from '../../components/dynamic/dynamic.vue';
export default {
  components:{
    dywindow
  },
  data(){
    return{
      delFlag: false,
      open: false,
     form:{
       mood:''
     }
    }
  }
}
</script>
