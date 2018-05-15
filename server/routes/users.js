var express = require('express');
var router = express.Router();
var User = require('../models/user');
let verify = require('../utils/token');
const data = require('../utils/data');
let jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function (req,res) {
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

router.post('/uname', function (req,res) {
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

router.post('/login',function (req,res) {
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

router.post('/getname',function (req,res) {
  let user = verify(req.cookies.token)
  console.log(user)
  if(user){
    var userInfo = {
      _id: user
    }
     User.findOne(userInfo, function (er, doc) {
       if (er) {
         console.log(er);
       } else {
         res.json(data(200,{flag:true,nickname:doc.nickname,introduction:doc.introduction}))
       }
    })
  }else{
    res.json(data(200,{flag: false,message: '登录过期'}));
  }
})

module.exports = router;
