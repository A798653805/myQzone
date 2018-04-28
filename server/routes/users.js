var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');



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
  console.log(req.session);
  User.find(userInfo,function (err,doc) {
    if(err) {
      console.log(err)
    }else{
      if(doc.length > 0){
        var token = jwt.sign(userInfo, "LISHAOSHIYIGEHAOBAOBAO",{
                    expiresIn: 60*60*24  // 24小时过期
                })
        req.session.token = token;
        console.log(req.session);
        // res.cookie('token', token,{
        //   maxAge: 600000,
        //   // httpOnly: true //有助于防范xxs攻击
        // })
        res.json({
          code:'200',
          data:{
            flag:true,
            token: token
          },
          message:'登陆成功'
        });
      }else{
        res.json({
          code: '200',
          data: {
            flag: false
          },
          message: '账号密码不正确'
        });
      }
    }
  });
})

module.exports = router;
