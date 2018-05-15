let express = require('express');
let router = express.Router();
let User = require('../models/user');
let PhotoList = require('../models/photoList');
let verify = require('../utils/token');
let multiparty = require('multiparty');

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
          res.json({
            code: 200,
            data: {
              u_flag: true
            }
          })
        }else{
          let photoListInsert = new PhotoList(photoList);
          photoListInsert.save();
          res.json({
            code: 200,
            data:{
               u_flag: false,
              message: '创建完成'
            }
          })
        }
      }
    })
  }
})

module.exports = router;
