const express  =  require('express');
const validUrl =  require('valid-url');
const shortid  =  require('shortid');
const config = require('config');

const router = express.Router();


const Url = require('../url');

router.post('/shorten',async (req,res)=>{
    const {longUrl} = req.body;
    const baseUrl = config.get('baseUrl');
    
    const urlCode = shortid.generate();
    //check long url
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({longUrl});
            if(url){
                res.json(url);
            }
            else{
                const shortUrl = baseUrl + '/' + urlCode;
                const url  = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date:new Date()
                });
                await url.save();
                res.json(url);
            }
        }catch(err){
            console.log(err);
            res.status(500).json('Server error')
        }
    }
    else{
        res.status(401).json('invalid Long url');
    }
})










module.exports = router;