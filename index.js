require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postRoute = require('./src/routes/posts.route')
const userRoute = require('./src/routes/users.route')
const ER = require('./src/middlewares/errorHandler')

//mongodb connection
const connect = async ()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongoDB')}catch(error){
        console.log(error)
    }
}

connect();

const app = express();
app.use(express.json());

app.use('/api/v1/posts' , postRoute);
app.use('/api/v1/users' , userRoute);

app.use(ER);







app.listen(4000,()=>{
    console.log('server on http://localhost:4000')
})
