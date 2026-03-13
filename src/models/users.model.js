const mongoose  = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true , 
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
} , {timestamps:true});

userSchema.pre('save' , async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try{
        this.password = await bcrypt.hash(this.password , 10);
    }catch(err){
        next(err);
    }
})

const User = mongoose.model('User' , userSchema)

module.exports = User;