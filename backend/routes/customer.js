const express = require('express');
const router = express.Router();
const mysql = require('../mysql/index');
router.get("/",async (req,res)=>{
    //const customerList=[];
    let page = !Number(req.query.page)?1:Number(req.query.page);   
    let pageUnit = !Number(req.query.pageUnit)?10:Number(req.query.pageUnit);
    let offset=(page-1)*pageUnit;
    
    let customerList = await mysql.query("customerList",[offset,pageUnit])
                        .then(result=>result);
    let count = await mysql.query("customerCount").then(result=>result);
    count = count[0].cnt;
    res.send({customerList,count});
    
});
//router.get("",(res,req)=>{});
router.post("/",(req,res)=>{
    mysql.query("insertCustomer",req.body)
    .then(result=>res.send(result));
    
});

router.put("/:id",(req,res)=>{
    mysql.query("updateCustomer",[req.body,req.params.id])
    .then(result=>res.send(result));
});

router.delete("/:id",(req,res)=>{
    mysql.query("deleteCustomer",req.params.id)
    .then(result=>res.send(result));
});

module.exports = router;