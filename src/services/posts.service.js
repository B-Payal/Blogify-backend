const Post = require('../models/post.model')


const createPost = async (postData)=>{
    const newData = await Post.create(postData);
    return newData
}
const getPost = async(req)=>{
    const limit = req.query.limit;
    const page = req.query.page;
    const data = await Post.find({});
    if(limit && page){
        const start = (page-1)*limit;
        const end = page*limit;
        const paginatedData = data.slice(start,end);
        return paginatedData;
    }
    return data
    
}

const getById = async(postId)=>{
    const data = await Post.findById(postId);
    return data
}

const updatePost = async(postId , obj)=>{
    const data = await Post.findByIdAndUpdate(postId , obj , {new:true , runValidators:true});
    return data
}

const deletePost = async(postId)=>{
    const data = await Post.findByIdAndDelete(postId);
    return data
}
module.exports = {createPost , getPost , getById , updatePost , deletePost}