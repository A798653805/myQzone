<template>
  <div class="add-blog-box">
    <div class="title-box">
      <div class="title">
        发表文章
      </div>
    </div>
    <div class="add-blog">
      <el-form ref="form" :model="blogForm" :rules="rules" label-width="80px">
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="blogForm.title" class="blog-title" maxlength="60"></el-input>
          <span class="remind">最多可以输入60个字符</span>
        </el-form-item>
        <el-form-item label="文章内容" class="quill-box" prop="content">
          <quill-editor v-model="blogForm.content" :options="editorOption" ></quill-editor>
        </el-form-item>
      </el-form>
      <div class="submit">
        <el-button type="primary" @click="addBlog">发表</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .add-blog-box {
    position: relative;
    height: 480px;
    padding: 10px;
    background: #fff;
    border-radius: 3px;
    .title-box {
      padding-bottom: 4px;
      border-bottom: 1px solid #606266;
      .title {
        font-size: 22px;
      }
    }
    .add-blog {
      padding: 18px 0;
      .remind {
        font-size: 12px;
        color: #f56c6c;
      }
      .blog-title {
        width: 720px;
      }
      .quill-box {
        height: 300px;
      }
      .quill-editor {
        width: 864px;
        height: 200px;
        border-radius: 4px;
        
      }
      .ql-snow .ql-picker{
        height: auto;
      }
    }
    .submit {
      text-align: center;
    }
  }

</style>


<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {
    quillEditor
  } from 'vue-quill-editor'
  export default {
    components: {
      quillEditor,
    },
    data() {
      let validateUname = (rule, value, callback) => {
        this.axios.post('/api/users/uname', {
          username: this.blogForm.title
        }).then((res) => {
          if (res.flag) {
            callback(new Error('文章标题已存在'));
          } else {
            callback();
          }
        }).catch((err) => {
          console.log(err);
          return false;
        })
      }
      return {
        blogForm: {
          title: '',
          content: ''
        },
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'header': [1, 2, 3, 4, 5, 6] }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'color': [] }, { 'background': [] }]
            ]
          }
        },
        rules: {
          title: [{
            required: true,
            message: '请输入文章标题',
            trigger: 'blur'
          }, {
            validator: validateUname,
            trigger: 'blur'
          }],
          content: [{
            required: true,
            message: '请输入文章内容',
            trigger: 'blur',
          }]
        }
      }
    },
    methods: {
      addBlog(){
        this.axios.post('/api/blog/newblog',{
          title: this.blogForm.title,
          content: this.blogForm.content
        }).then(res=>{
          this.$message({
            message:res.message,
            type:'success'
          });
          this.$router.push({
            name: 'message'
          })
        })
      }
    }
  }

</script>
