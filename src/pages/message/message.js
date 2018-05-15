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
    }
  },
  created() {
    this.getBlogList();
  }
}

export {blog};