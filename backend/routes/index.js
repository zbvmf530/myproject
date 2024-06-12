var express = require('express');
var path= require("path");
var router = express.Router();
// const mysql = require('../mysql/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/prod', function(req, res, next){
  let data = [
    {no:1,name:'키보드',price:2000},
    {no:2,name:'마우스',price:3000},
    {no:3,name:'모니터',price:4000}
  ]
  res.render('productList', {list : data});
  //res.send(data);
  //res.end();
})

// router.get('/customer', async function(req,res,next){
//   let data = await mysql.query("customerList").then(result=>result);
//   res.render('customerList', {list : data});
// })

router.get('/filedownload', function(req, res, next){
  const filepath = 'D:/upload/9aa21754bf898353607d0c7facb63647';  
  const filename = 'goobne.png'
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 
  res.sendFile(filepath);
})

module.exports = router;
