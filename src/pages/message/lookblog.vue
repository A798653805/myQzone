<template>
  <div>3</div>
</template>
<script>
export default {
  created(){
    console.log(this.$route)
    this.axios.get('/api/blog/blogcontent',{
      params:{
      _id: this.$route.query._id
   }}).then(res=>{
      console.log(res);
    })
  }
}
</script>

