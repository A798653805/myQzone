var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function (req,res) {
  var pwd = req.body.password;
  var userInfo = {
    username: req.body.username,
    password: req.body.password
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
    password: 0
  };
  console.log(req.body);
  User.find(userInfo,function (err,doc) {
    if(err) {
      console.log(err)
    }else{
      if(doc.length > 0){
        console.log(doc[0].username)
        res.cookie('user',{
          username:doc[0].username,
          password:doc[0].password
        },{
          maxAge: 600000,
          httpOnly: true //有助于防范xxs攻击
        })
        res.json({
          code:'200',
          data:{
            flag:'true'
          },
          message:'登陆成功'
        });
      }else{
        res.json({
          code: '200',
          data: {
            flag: 'falase'
          },
          message: '账号密码不正确'
        });
      }
    }
  });
})

module.exports = router;
