const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const router= express.Router();

router.post('/signup',async(req,res)=>{
    const { name, email, passsword}=req.body;
    try{
        const oldUser=await User.findOne({email});
        if(oldUser){
            return res.status(409).json({ message: 'User with email already exists' });
        
        }
        const user=new User({name,email,password});
        await user.save();
        const token=jwt.sign({userId:user._id},process.env.JWTPRIVATEKEY,{expiresIn:'10d'});
        res.status(201).json({ message: 'User created', token });
    }
    catch(err){
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports=router;