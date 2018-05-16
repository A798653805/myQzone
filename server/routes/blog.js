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
        res.json(data({
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
          res.json(data({
            flag: true,
            message: '修改成功'
          }));
        })
      }

    })
  } else {
    res.json(data({
      flag: false,
      message: '登录过期'
    }));
  }
})

router.post('/blogList', (req, res) => {
  const user = verify(req.cookies.token);
  if (user) {
    let info = {
      pageNum: req.body.pageNum,
      pageSize: req.body.pageSize,
      title: req.body.title
    }
    if (info.title!= '') {
      let reg = new RegExp(info.title, 'i');
      Blog.find({
        title: {
          $regex: reg
        },
        is_remove: 0
      }).skip((info.pageNum - 1) * info.pageSize).limit(info.pageSize).exec((err, doc) => {
            Blog.find({
              title: {
                $regex: reg
              },
              is_remove: 0
            }).exec((err, result) => {
              if (result.length > 0) {
                res.json(data({
                  flag: true,
                  data: doc,
                  total: result.length
                }))
              } else {
                res.json(data({
                  flag: true,
                  message: '没有相关数据'
                }))
              }
            })
          })
    }else{
      Blog.find({
        user_id: user,
        is_remove: 0
      }).skip((info.pageNum - 1) * info.pageSize).limit(info.pageSize).exec((err, doc) => {
        Blog.find({
          user_id: user,
          is_remove: 0
        }).exec((err, result) => {
          console.log(doc);
          if (result.length > 0) {
            res.json(data({
              flag: true,
              data: doc,
              total: result.length
            }))
          }else{
            res.json(data({
              flag: true,
              message: '没有相关数据'
            }))
          }
        })
      })
    }
  } else {
    res.json(data({
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
      res.json(data( {
        flag: true,
        data: doc
      }))
    })
  } else {
    res.json(data({
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
    res.json(data({
      flag: true,
      message: '删除成功'
    }))
  } else {
    res.json(data({
      flag: false,
      message: '登录过期'
    }));
  }
})

router.post('/isexist',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    Blog.findOne({
      title: req.body.title,
      user_id: user
    }).exec((err,doc)=>{
      if(doc){
        res.json(data({
          flag:true,
          u_flag: true,
          message: '该标题已经存在'
        }))
      }else{
        res.json(data({
          flag:true,
          u_flag: false,
          message: '该标题可以注册'
        }))
      }
    })
  }else{
    res.json(data({
      flag: false,
      message: '登录过期'
    }))
  }
})

module.exports = router;
