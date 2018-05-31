let express = require('express');
let router = express.Router();
let User = require('../models/user');
let verify = require('../utils/token');
let data = require('../utils/data');
let Msg = require('../models/msg');


router.post('/sendmsg',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    let target = req.body.target;
    if(target!=''){
      new Msg({
        user_id: user,
        target: target,
        content: req.body.content
      }).save();
       res.json(data({
         flag: true,
         message: '留言成功'
       }))
    }else{
       new Msg({
         user_id: user,
         target: user,
         content: req.body.content
       }).save();
       res.json(data({
         flag: true,
         message: '留言成功'
       }))
    }
  }else{
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/getmsg',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Msg.find({
      target: user,
      is_remove: 0
    }).sort({
      'created_time': -1
    }).populate('user_id').exec((err,doc)=>{
      res.json(data({
        flag: true,
        data: doc
      }))
    })
  }else{
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/delmsg',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Msg.findOne({
      _id: req.body.id
    }).exec((err,doc)=>{
      doc.is_remove = 1;
      doc.save();
      res.json(data({
        flag: true,
        message: '删除成功'
      }))
    })
  }else{
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})



module.exports = router;

