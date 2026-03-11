const postServices = require('../services/posts.service')

const createPost = async (req,res , next)=>{
    try{
    const postData = await postServices.createPost(req.body);
    res.status(201).json({
        success:'true',
        data:postData
    })}catch(err){
        next(err)
    }
}

const getAllPosts = async (req,res,next)=>{
    try {
        const allPosts = await postServices.getPost(req);
        res.status(200).json({
            success:'true',
            data:allPosts
        })
        
    } catch (error) {
        next(error);
        
    }
}

const getPostsById = async (req,res,next)=>{
    try {
        const {postId} = req.params;
        const data = await postServices.getById(postId);
        if(!data){
            return res.status(404).json({
                success:'false',
                error:{message:`Post with id ${postId} not found`}

            })
        }
        res.status(200).json({
            success:'true',
            data:data

        })
        
    } catch (error) {
        next(error)
        
    }
}

const updatePost = async (req,res , next)=>{
    try{
    const postId = req.params.postId
    const updatedObj = req.body;
    const updatedPost = await postServices.updatePost(postId , updatedObj);
    if(!updatedPost){
        return res.status(404).send({
            success:false,
            errpor:{message:`Post with id ${postId} not found`}

        })
    }
    res.status(200).json({
        success:true,
        data:updatedPost
    })}catch(err){
        next(err)
    }
}


const deletePost = async (req,res , next)=>{
    try {
        const {postId} = req.params;
        const d  = await postServices.deletePost(postId);
        if(!d){
            return res.status(404).json({
                success:false,
                error:{message:`Post with ${postId} doesn't exist`}
            })
        }
        res.status(204).json({
            success:true,
            message:"post deleted successfully"

        })
        
    } catch (error) {
        next(error)
        
    }
}
module.exports={createPost , getAllPosts , getPostsById , updatePost , deletePost};