const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller')
const {body} = require('express-validator')



const registerationRule = [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({min:6}).withMessage('must be atleast 6 characters'),
    body('username').notEmpty().withMessage('username is required')
]

router.post('/register' , registerationRule , controller.registerUser)
router.get('/practice-token' , controller.practiceTokenGeneration )

module.exports =router;