var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expss' });
});

router.post('/user',function (req,res) {
  res.send('cheng');
})

module.exports = router;
