
const { Schema, model } = require('mongoose');
const bycrpt = require('bcrypt');
const sleepSchema = require("./Sleep");


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
    Sleep:[{
        type:Schema.Types.ObjectId,
        ref:"Sleep"
    }]
}
);

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