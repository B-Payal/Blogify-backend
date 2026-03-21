const jwt = require('jsonwebtoken');


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

module.exports={practiceTokenGeneration}