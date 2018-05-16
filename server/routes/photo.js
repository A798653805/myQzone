let express = require('express');
let router = express.Router();
let User = require('../models/user');
let PhotoList = require('../models/photoList');
let verify = require('../utils/token');
let multiparty = require('multiparty');
let data = require('../utils/data');

router.post('/upload',(req,res)=>{
  // let user = verify(req.cookies.token);
  // if(user){
  //   let photoInfo = {

  //   }
  // }
})

router.post('/addList',(req,res)=>{
  let user = verify(req.cookies.token);
  if(user){
    let photoList = {
      user_id: user,
      title: req.body.title,
    };
    PhotoList.findOne({title:photoList.title},(err,doc)=>{
      if(err){
        console.log(err)
        res.json({
          code: 403
        })
      }else{
        if(doc){
          res.json(data({
            flag: true,
            u_flag: true,
            message: '相册已存在'
          }))
        }else{
          let photoListInsert = new PhotoList(photoList);
          photoListInsert.save();
          res.json(data({
            flag: true,
            u_flag: false,
            message: '创建完成'
          }))

        }
      }
    })
  }
})

router.post('/getList',(req,res)=>{
  const user = verify(req.cookies.token);
  if(user){
    PhotoList.find({
      user_id: user
    }).exec((err,doc)=>{
      if(doc.length>0){
        res.json(data({
          flag: true,
          data: doc
        }))
      }else{
        res.json(data({
          flag:true,
          message:'没有先关信息'
        }))
      }
    })
  }else{
    res.json(data({
      flag:false,
      message: 'token过期，请重新登录'
    }))
  }
})

module.exports = router;
