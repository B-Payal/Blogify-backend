const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator')
const User = require('../models/users.model')


const registerUser = async (req,res , next)=>{
 const errors = validationResult(req);
 if(!errors.isEmpty()){
  return res.status(400).json({success:false , errors:errors.array()})
 }
 try {
  const {username , email , password} = req.body;
  const user = await User.findOne({email})
  if(user){
     return res.status(409).json({
        success: false,
        error: { message: 'A user with this email already exists.' }
      });}

      const newUser = await User.create({
      username,
      email,
      password
    });

    res.status(201).json({
      success: true,
      data: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        password:password
        
      }
    });

    

  
  
 } catch (error) {
  next(error)
 }
}

const logoutUser = (req, res) => {
  // Clear the 'accessToken' cookie
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });

  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
};


const practiceTokenGeneration = (req,res)=>{
    const mockUser = {
    _id: '654a5b8f1c3d4e5f6a7b8c9d',
    username: 'testuser',
    role: 'user'
  };

  const payload={
    id:mockUser._id,
    username:mockUser.username

  }

  const secretKey = process.env.JWT_SECRET;
  const option={
    expiresIn:'1h'
  }

  const token = jwt.sign(payload , secretKey , option);

  res.status(200).json({
    message:"token generation successful",
    token:token
  })
}

module.exports={practiceTokenGeneration , registerUser}