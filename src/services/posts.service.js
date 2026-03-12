const Post = require('../models/post.model')


const createPost = async (postData)=>{
    const newData = await Post.create(postData);
    return newData
}
const getPost = async(req)=>{
   
    const {author , limit=10 , page=1 , sortBy} = req.query;
    const filter = {};
    if(author){
    filter.author = author;
    }
    const limitBy = Number(limit);
    const pageNum = Number(page);
    const skipvalue = (pageNum-1)*limitBy;
    const sortByOption = {};
    if(sortBy){
        const [field , order] = sortBy.split(':');
        sortByOption[field] = order ===des?-1:1;
    }else{
        sortByOption.createdAt = -1;
    }
    
    
    const data = await Post.find(filter)
    .sort(sortByOption)
    .skip(skipvalue)
    .limit(limitBy)
    .populate('author' , 'username');
    return data
    
}

const getById = async(postId)=>{
    const data = await Post.findById(postId).populate('author' , 'username');
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