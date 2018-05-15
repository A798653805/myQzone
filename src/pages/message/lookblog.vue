<template>
  <div class="view-blog-box">
    <div class="title-box">
      <div class="title">
        博客
      </div>
    </div>
    <div class="aticle-box">
      <div class="aticle-title">
        {{blog.title}}
      </div>
      <div class="aticle-funtion">
        <div class="date">{{blog.date}}</div>
        <div class="author">{{blog.author}}</div>
        <div class="funtion-btn">
          <el-button type="primary" @click="editArticle">编辑</el-button>
          <el-button type="danger" @click="delArticle">删除</el-button>
        </div>
      </div>
      <div class="blog-contetn" v-html="blog.content"></div>
    </div>
  </div>
</template>
<style lang="less">
  .view-blog-box {
    position: relative;
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
    .aticle-box {
      padding-top: 10px;
      .aticle-title {
        text-align: center;
        font-size: 22px;
        padding-top: 20px;
      }
      .aticle-funtion {
        display: flex;
        justify-content: space-between; // align-content: center;
        align-items: center;
        padding-top: 20px;
        .date,.author{
          color: #606266
        }
      }.blog-contetn{
        padding-top: 20px;
        padding: 20px 10px 0;
        color:#303133;
      }
    }
  }

</style>

<script>
  import moment from 'moment';
  import {
    verify
  } from "../../components/utils/verify";
  export default {
    data() {
      return {
        blog: {
          title: '',
          content: '',
          date: '',
          author: '',
          id: ''
        }
      }
    },
    methods: {
      getInfo() {
        this.axios.get(`/api/blog/blogcontent?_id=${this.$route.query._id}`).then(res => {
          if (verify(res.flag)) {
            this.blog.title = res.data.title;
            this.blog.content = res.data.content;
            this.blog.date = moment(res.data.date).format('YYYY-MM-DD');
            this.blog.author = res.data.author;
          }
        }).catch(e => console.log(e));
      },
      editArticle(){
        this.$router.push({
          path: `/home/addblog?_id=${this.$route.query._id}`
        })
      },
      delArticle(){
        this.axios.post('/api/blog/delblog',{
          id: this.$route.query._id
        }).then(res=>{
          if(verify(res.flag)){
            this.$message({
              message: res.message,
              type: 'error'
            });
            this.$router.push({
              name: 'message'
            })
          }
        })
      }
    },
    created() {
      // console.log(this.$route)
      this.getInfo();
    }
  }

</script>
