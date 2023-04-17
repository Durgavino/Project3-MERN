
const { Schema, model } = require('mongoose');
const bycrpt = require('bcrypt');
const sleepSchema = require("./Sleep");
// const jwt=require('jsonwebtoken');
// const joi=require('joi');
// const passcomplex=require('joi-password-complexity');


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
   // sleepdata: sleepSchema
}
);

// userSchema.methods.ispassword=function(){
//     const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"10d"})
//     return token
// };

// const User=mongoose.model('user,userSchema');

// const validate=(data)=>{
//     const schema=joi.object({
//         username:joi.string().required().label("username"),
//         email:joi.string().required.label("email"),
//         password:passcomplex().required.label("password")
//     })
// }


userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const salt = 10;
        this.password = await bycrpt.hash(this.password, salt);
    }
    next();
})

userSchema.methods.isCorrectPassword = async function (password) {
    return bycrpt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;