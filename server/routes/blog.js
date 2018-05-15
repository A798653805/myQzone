var express = require('express');
var router = express.Router();
const User = require('../models/user');
const verify = require('../utils/token');
const Blog = require('../models/blog');
const data = require('../utils/data');
const UserB = require('../models/user-blog');


/* GET home page. */
router.post('/newblog',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    const info = {
      title: req.body.title,
      content: req.body.content,
      user_id: user
    };
    User.findOne({
      _id: user
    }).exec((err,doc)=>{
      info.author = doc.nickname;
      const mongoInsert = new Blog(info);
      mongoInsert.save();
      res.json(data(200,{flag:true,message:'发表成功'}));
    })
  }else{
    res.json(data(200, {
      flag: false,
      message: '登录过期'
    }));
  }
})


router.post('/blogList',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Blog.find({
      user_id: user
    }).exec((err,doc)=>{
      res.json(data(200,{
        flag: true,
        data:doc
      }))
    })
  }else{
    res.json(data(200, {
      flag: false,
      message: '登录过期'
    }));
  }
})

router.get('/blogcontent', (req, res) => {
  console.log(req,111);
  
})

module.exports = router;

