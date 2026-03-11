const userService = require('../services/users.service');

const createNewUser = async (req,res , next)=>{
    try{
    const newData = await userService.createUser(req.body);
    return res.status(201).json({success:true , data:newData});}
    catch(err){
        next(err);
    }
}

module.exports= {createNewUser};