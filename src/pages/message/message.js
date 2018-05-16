import { verify } from "../../components/utils/verify";
import moment from "moment";
let blog = {
  data() {
    return {
      BlogList: [],
      currentPage: 1,//当前页码
      pageSize: 15,
      total: 0,
      search: '',
      nodata: false
    };
  },
  methods: {
    goNewBlog(){
      this.$router.push({
        name: 'addblog'
      })
    },
    getBlogList(){
      this.axios.post('/api/blog/bloglist',{
        pageSize: this.pageSize,
        pageNum: this.currentPage,
        title: this.search
      }).then((res)=>{
        console.log(res);
        if(verify(res.flag)){
          if(res.data){
            this.BlogList = res.data.map(item => {
              item.created_time = moment(item.created_time).format("YYYY-MM-DD")
              return item
            });
            this.total = res.total;
          }else{
            this.nodata = true
          }
        }
      })
    },
    handleCurrentChange(val){     
      this.getBlogList();
    },
    goBlogContent(data){
      this.$router.push({
        path: `/home/lookBlog?_id=${data}`
      })
    },
    operation(command){
      let status = command.split(' ')[0];
      let id = command.split(' ')[1];
      if (status == 0) {
        this.$router.push({
          path: `/home/addblog?_id=${id}`
        })
      }else{
        this.axios.post('/api/blog/delblog',{
          id: id
        }).then(res=>{
          if(verify(res.flag)){
            this.$message({
              message: res.message,
              type: 'success'
            });
            if(this.total%this.currentPage == 0){
              this.currentPage -= 1;
            this.getBlogList();               
            }
          }
        })
      }
    },
  },
  created() {
    this.getBlogList();
  }
}

export {blog};