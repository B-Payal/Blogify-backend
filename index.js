require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postRoute = require('./src/routes/posts.route')
const userRoute = require('./src/routes/users.route')
const ER = require('./src/middlewares/errorHandler')
const connect = require('./src/config/db')

connect();

const app = express();
app.use(express.json());

app.use('/api/v1/posts' , postRoute);
app.use('/api/v1/users' , userRoute);

app.use(ER);







app.listen(3000,()=>{
    console.log('server on http://localhost:4000')
})
