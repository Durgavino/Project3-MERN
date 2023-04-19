const express = require('express');
const Sleep = require('../models/Sleep');
const router= express.Router();

router.get('/',async(req,res)=>{
    const { name, email, passsword}=req.body;
    try{
        const dispdata=await Sleep.find({}).limit(5);
       
               res.status(201).json(dispdata);
    }
    catch(err){
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports=router;