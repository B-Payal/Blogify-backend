const User = require('../models/users.model')

const createUser = async (postData)=>{
    console.log(postData)
    const d = await User.create(postData)
    console.log(d.fullName)
    return d;
    
}

module.exports = {createUser}