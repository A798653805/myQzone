var express = require('express');
var router = express.Router();

const User = require('../models/user');
const verify = require('../utils/token');
const data = require('../utils/data');
const Message = require('../models/message');
const Friend = require('../models/friend');

router.get('/findfriend', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    User.findOne({
      username: req.query.username
    }).exec((err, doc) => {
      if (doc) {
        res.json(data({
          flag: true,
          data: doc
        }))
      } else {
        res.json(data({
          flag: true,
          message: '没有相关信息'
        }))
      }
    })
  } else {
    res.json(data({
      flag: fasle,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/addfriend', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    const info = {
      user_id: user,
      friend_id: req.body.friendId
    }
    new Message(info).save();
    res.json(data({
      flag: true,
      message: '发送请求成功'
    }))
  } else {
    res.json(data({
      flag: fasle,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/getmessage', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    Message.find({
      status: 2,
      friend_id: user
    }).populate('user_id').exec((err, doc) => {
      if (doc.length > 0) {
        res.json(data({
          flag: true,
          data: doc
        }))
      }else{
        res.json(data({
          flag: true,
          message: '没有信息'
        }))

      }
    })
    console.log(user)
  } else {
    res.json(data({
      flag: fasle,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/handlemessage', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    const info = {
      status: req.body.status,
      _id: req.body.id
    };
    Message.find({
      _id: info._id
    }).findOne((err, doc) => {
      if (info.status == 0) {
         doc.status=info.status;
         doc.save();
        res.json(data({
          flag: true,
          message: '已拒绝'
        }))
      } else {
        console.log(doc);
        doc.status = info.status;

        doc.save();
        new Friend({
          user_id: doc.user_id,
          friend_id: doc.friend_id
        }).save();
        new Friend({
          user_id: doc.friend_id,
          friend_id: doc.user_id
        }).save();
        res.json(data({
          flag: true,
          message: '添加成功'
        }))
      }
    })
  } else {
    res.json(data({
      flag: false,
      message: 'token过期。请重新登录'
    }))
  }
})

router.post('/getfriend',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Friend.find({
      user_id: user,
      is_remove: 0
    }).populate('friend_id').exec((err,doc)=>{
      if(doc.length>0){
        res.json(data({
          flag: true,
          data: doc
        }))
      }else{
        res.json(data({
          flag: true,
          message: '没有数据'
        }))
      }
    })
  }else{
    res.json(data({
      flag: false,
      messsage: 'token过期，请重新登录'
    }))
  }
})

router.post('/delfriend',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Friend.findOne({
      user_id: user,
      friend_id: req.body.friendId
    }, (err, doc) => {
      doc.is_remove = 1;
      doc.save()
    });

    Friend.findOne({
      friend_id: user,
      user_id: req.body.friendId
    },(err, doc) => {
      doc.is_remove = 1;
      doc.save()
    })
    res.json(data({
      flag: true,
      message: '删除成功'
    }))
  }else{
    res.json({
      flag: false,
      message:'token过期，请重新登录'
    })
  }
})

module.exports = router;
