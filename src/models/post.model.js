const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type:String,
        required:[true , "A title is required for the post."],
        unique:true,
        trime:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
} , {timestamps:true})


//creating model--ctor=>provides interface which let sus interact with the database making CRUD possible

const Post = mongoose.model('Post',postSchema);
//mongoose takes th ename and looks for plural lowercase collection name in db
module.exports=Post;