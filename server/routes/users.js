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
  // console.log('uname');
  var unameInfo = {
    username: req.body.username
  }
  // console.log(unameInfo);
  User.find(unameInfo,function (err,doc) {
    if(err) {
      console.log(err);
    }else{
      console.log(doc.length);
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

module.exports = router;
