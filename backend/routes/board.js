const express = require('express');
const router = express.Router();
const mysql = require('../mysql/index');
const multer = require('multer');
const upload = multer({ dest: 'd:/upload/' });
router.get("/",  async (req,res)=>{
    let page = !Number(req.query.page)?1:Number(req.query.page);   
    let pageUnit = !Number(req.query.pageUnit)?10:Number(req.query.pageUnit);
    let offset=(page-1)*pageUnit;

    let pageNo;
    isNaN(Number(req.query.page))
    ?pageNo  = 0
    :pageNo = (Number(req.query.page)-1)*10;

    let boardList = await mysql.query("boardList",[offset,pageUnit])
                    .then(result=>result);
    let count = await mysql.query("boardCount").then(result=>result);
    count = count[0].cnt;
    res.send({boardList,count});
    // res.send(boardList);
});

 router.get("/:no", async (req,res)=>{
    let board = await mysql.query("getBoard",req.params.no)
                            .then(result=>result);
    
    test(board,res);
    // board.data.filename
    
   
});
function test(brd,response){
    console.log(brd);
    
    const filepath = 'D:/upload/'+brd[0].uploadfilename; 
    const filename = brd[0].filename;
    console.log(filename);
    response.setHeader('Content-Disposition', `attachment; filename=\"${filename}\";`); // 이게 핵심 
    response.type('png').sendFile(filepath);
    response.send(brd);
}

router.post("/",upload.single('avatar'), (req,res)=>{
    // 첨부파일이 있으면
    let data = {...req.body};
    if(req.file != null){
        data.filename = req.file.originalname;
        data.uploadfilename = req.file.filename;
    }
    mysql.query("insertBoard",data)
    .then(result=>res.send(result));
});


router.put("/:no",(req,res)=>{
    mysql.query("updateBoard",[req.body,req.params.no])
    .then(result=>res.send(result));
 });

 router.delete("/:no",(req,res)=>{
    mysql.query("deleteBoard",req.params.no)
    .then(result=>res.send(result));
});

module.exports = router;