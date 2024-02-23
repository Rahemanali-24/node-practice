const express= require('express');

const router = express.Router();

const HighScore = require('../models/highscore');


router.get('/',async(req,res)=>{
    try{
        const highScores = await HighScore.find().sort({score:-1}).limit(10);
        res.send(highScores);
    }catch(error){
        res.status(500).send(error);
    }
})


module.exports = router;
