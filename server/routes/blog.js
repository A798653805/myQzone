var express = require('express');
var router = express.Router();
const User = require('../models/user');
const verify = require('../utils/token');
const Blog = require('../models/blog');
const data = require('../utils/data');
const UserB = require('../models/user-blog');


/* GET home page. */
router.post('/newblog', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    const info = {
      title: req.body.title,
      content: req.body.content,
      user_id: user
    };
    User.findOne({
      _id: user
    }).exec((err, doc) => {
      info.author = doc.nickname;
      if (!req.body.id) {
        const mongoInsert = new Blog(info);
        mongoInsert.save();
        res.json(data(200, {
          flag: true,
          message: '发表成功'
        }));
      }else{
        Blog.findOne({
          _id: req.body.id
        }).exec((err,doc)=>{
          doc.title = info.title;
          doc.content = info.content;
          doc.save();
          res.json(data(200, {
            flag: true,
            message: '修改成功'
          }));
        })
      }

    })
  } else {
    res.json(data(200, {
      flag: false,
      message: '登录过期'
    }));
  }
})


router.post('/blogList', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    Blog.find({
      user_id: user
    }).exec((err, doc) => {
      const list = doc.filter(item => item.is_remove == 0)
      res.json(data(200, {
        flag: true,
        data: list
      }))
    })
  } else {
    res.json(data(200, {
      flag: false,
      message: '登录过期'
    }));

  }
})

router.get('/blogcontent', (req, res) => {
  const user = verify(req.cookies.token)
  if (user) {
    Blog.findOne({
      _id: req.query._id
    }).exec((err, doc) => {
      res.json(data(200, {
        flag: true,
        data: doc
      }))
    })
  } else {
    res.json(data(200, {
      flag: false,
      message: '登录过期'
    }));
  }
})

router.post('/delblog', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    console.log(req.body.id);
    Blog.findOne({
      _id: req.body.id
    }).exec((err, doc) => {
      doc.is_remove = 1;
      doc.save()
    })
    res.json(data(200, {
      flag: true,
      message: '删除成功'
    }))
  } else {
    res.json(data(200, {
      flag: false,
      message: '登录过期'
    }));
  }
})

module.exports = router;
