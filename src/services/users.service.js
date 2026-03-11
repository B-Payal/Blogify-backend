const User = require('../models/users.model')

const createUser = async (postData)=>{
    const d = await User.create(postData)
    return d;
    
}

module.exports = {createUser}