let express = require('express');
let router = express.Router();
let User = require('../models/user');
let PhotoList = require('../models/photoList');
let verify = require('../utils/token');
let multiparty = require('multiparty');
let data = require('../utils/data');

router.post('/upload', (req, res) => {
  // let user = verify(req.cookies.token);
  // if(user){
  //   let photoInfo = {

  //   }
  // }
})

router.post('/addList', (req, res) => {
  let user = verify(req.cookies.token);
  if (user) {
    let photoList = {
      user_id: user,
      title: req.body.title,
      _id: req.body.id
    };
    if (photoList._id) {
      PhotoList.findOne({
        _id: photoList._id
      }).exec((err, doc) => {
        doc.title = photoList.title;
        doc.save();
        res.json(data({
          flag: true,
          message: '修改成功'
        }))
      })
    } else {
      let photoListInsert = new PhotoList({
        user_id: user,
        title: photoList.title
      });
      photoListInsert.save();
      res.json(data({
        flag: true,
        message: '创建完成'
      }))
    }
  } else {
    res.json(data({
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/getList', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    PhotoList.find({
      user_id: user,
      is_remove: 0
    }).exec((err, doc) => {
      if (doc.length > 0) {
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
      flag: false,
      message: 'token过期，请重新登录'
    }))
  }
})

router.post('/delList', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    PhotoList.findOne({
      _id: req.body.id,
      is_remove: 0
    }).exec((err, doc) => {
      doc.is_remove = 1;
      doc.save();
      res.json(data({
        flag: true,
        message: '删除成功'
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
