const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  
    //if(req.cookies && req.cookies.account){
    if(req.session.is_logined){
      const member = JSON.parse({userid: req.session.userid});
      console.log(member);
      return res.send(member);
    }
    //}
    else{res.send(401);}
  });



  module.exports = router;