const express = require('express');

const router = express.Router();
const Url = require('../url');

// get request

// rediect to long or original url

router.get('/:code',async (req,res)=>{
    try{
        const url  = await Url.findOne({urlCode:req.params.code});
        if(url){
            res.redirect(url.longUrl);
        }
        else{
            res.status(404).json("no url found");
        }
    }catch(err){
        console.log(err);
        res.status(500).json("server error");
    }
})


module.exports = router;