var express = require('express');
var router = express.Router();
const user = require('../controller/user')
const lable = require('../controller/lable')
const article = require('../controller/article')
const cos = require('../controller/cos')
const comment = require('../controller/comment')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.use(user)
router.use(cos)
router.use(lable)
router.use(article)
router.use(comment)
module.exports = router;