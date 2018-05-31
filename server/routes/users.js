var express = require('express');
var router = express.Router();
var User = require('../models/user');
let verify = require('../utils/token');
const data = require('../utils/data');
let jwt = require('jsonwebtoken');
let Photo = require('../models/photo');
const Blog = require('../models/blog');
let Mood = require('../models/mood');
let PhotoList = require('../models/photoList');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',(req,res) =>{
  var userInfo = {
    username: req.body.username,
    password: req.body.password,
    nickname: req.body.nickname,
    introduction: req.body.introduction
  }
  var monInsert = new User(userInfo);
  monInsert.save(function (err) {
    if(err){
      console.log(err);
    }else {
      console.log('success');
    }
  });
  res.json({
    code:'200',
    data:{
      flage:true,
    },
    message:'成功'
  })
  console.log('register');
})

router.post('/uname', (req,res)=> {
  var unameInfo = {
    username: req.body.username
  }
  User.find(unameInfo,function (err,doc) {
    if(err) {
      console.log(err);
    }else{
      console.log(doc);
     if(doc.length !== 0) {
       res.json({
         code: '200',
         data: {
           flag: true,
         },
         message: '数据存在'
       });
     }else{
       res.json({
         code:'200',
         data:{
           flag:false
         },
         message:'数据不存在'
       })
     }
    }
  });
})

router.post('/login',(req,res)=> {
  var userInfo = {
    username: req.body.username,
    password: req.body.password
  };
  console.log(userInfo);
  User.findOne(userInfo,function (err,doc) {
    if(err) {
      console.log(err)
    }else{
      console.log(doc)
      if(doc){
        console.log(doc._id)
        var token = jwt.sign({user:doc._id}, global.secret, {
                    expiresIn: 60*60*24  // 24小时过期
                })
        res.cookie('token', token,{
          maxAge: 6000000,
          httpOnly: true //有助于防范xxs攻击
        })
        res.json({
          code: 200,
          data:{
            flag:true,
            token: token
          },
          message:'登陆成功'
        });
      }else{
        res.json({
          code: 200,
          data: {
            flag: false
          },
          message: '账号密码不正确'
        });
      }
    }
  });
})

router.post('/getname',(req,res)=> {
  let user = verify(req.cookies.token)
  if(user){
    var userInfo = {
      _id: user
    }
     User.findOne(userInfo, function (er, doc) {
       if (er) {
         console.log(er);
       } else {
         res.json(data({flag:true,nickname:doc.nickname,introduction:doc.introduction}))
       }
    })
  }else{
    res.json(data({flag: false,message: '登录过期'}));
  }
})

router.post('/sendinfo',(req,res)=>{
  const user = verify(req.cookies.token);
  const info = {
    nickname: req.body.nickname,
    introduction:req.body.introduction
  };
  if(user){
    User.findOne({
      _id: user
    },(err,doc)=>{
      doc.nickname = info.nickname;
      doc.introduction = info.introduction;
      doc.save();
      res.json(data({
        flag: true,
        message: '修改成功'
      }))
    })
  }else{
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
  
})


router.post('/getphotoinfo',(req,res)=>{
  const user = verify(req.cookies.token);
  const info = {
    photo:0,
  };
  if(user){
    PhotoList.find({
      user_id: user,
      is_remove: 0
    }).exec((err,doc)=>{
      doc.forEach(item=>{
        info.photo += item.photo_num
      });
      res.json(data({
        flag: true,
        data: info.photo
      }))
    })
  }else{
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/getbloginfo', (req, res) => {
  const user = verify(req.cookies.token);
  const info = {
    blog: 0,
  };
  if (user) {
    Blog.find({
      user_id: user,
      is_remove: 0
    }).exec((err, doc) => {
       info.blog=doc.length
      res.json(data({
        flag: true,
        data: info.blog
      }))
    })
  } else {
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/getmoodinfo', (req, res) => {
  const user = verify(req.cookies.token);
  const info = {
    mood: 0,
  };
  if (user) {
    Mood.find({
      user_id: user,
      is_remove: 0
    }).exec((err, doc) => {
      console.log(doc);
      info.mood = doc.length
      res.json(data({
        flag: true,
        data: info.mood
      }))
    })
  } else {
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})


module.exports = router;
