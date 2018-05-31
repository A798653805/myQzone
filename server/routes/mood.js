let express = require('express');
let router = express.Router();
let User = require('../models/user');
let verify = require('../utils/token');
let data = require('../utils/data');
let Mood = require('../models/mood');

router.post('/sendmood',(req,res)=>{
  const user = verify(req.cookies.token);
  console.log(req.body.content)
  if(user){
    new Mood({
      content: req.body.content,
      user_id: user
    }).save();
    res.json(data({
      flag: true,
      message: '添加成功'
    }))
  }else{
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})


router.post('/getmood',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Mood.find({
      user_id: user,
      is_remove: 0
    }).populate('user_id').sort({
      'created_time': -1
    }).exec((err,doc)=>{
      if(doc.length>0){
        res.json(data({
          flag: true,
          data: doc
        }))
      }
      else{
        res.json(data({
          flag: true,
          message: '没有相关信息'
        }))
      }
    })
  }else{
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))

  }
})


router.post('/delone',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Mood.findOne({
      _id: req.body.id
    },(err,doc)=>{
      doc.is_remove=1;
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

router.post('/good',(req,res)=>{
  const user = verify(req.cookies.token);
  if (user) {
    Mood.findOne({
      _id: req.body.id
    }, (err, doc) => {
      if(doc.good_num.indexOf(user)<0){
        doc.good_num.push(user);
        doc.save();
        res.json(data({
          flag: true,
          message: '点赞成功'
        }))
      }else{
        res.json(data({
          flag: true,
          u_data: true,
          message: '以点过赞。请勿重复点赞'
        }))
      }
      
    })
  } else {
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }

})



module.exports = router;

