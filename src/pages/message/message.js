import { verify } from "../../components/utils/verify";
import moment from "moment";
let blog = {
  data() {
    return {
      BlogList: [],
    };
  },
  methods: {
    goNewBlog(){
      this.$router.push({
        name: 'addblog'
      })
    },
    getBlogList(){
      this.axios.post('/api/blog/bloglist').then((res)=>{
        console.log(res);
        if(verify(res.flag)){
          this.BlogList = res.data.map(item=>{
            item.created_time = moment(item.created_time).format("YYYY-MM-DD")
            return item
          });
          console.log(this.BlogList)
        }
      })
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
        //编辑
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
              type: 'error'
            });
            this.getBlogList();
          }
        })

      }
    }

  },
  created() {
    this.getBlogList();
  }
}

export {blog};