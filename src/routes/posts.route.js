const express = require('express');
const PostController = require('../controllers/posts.controller')

const router = express.Router();

router.post('/' , PostController.createPost)
router.get('/' , PostController.getAllPosts)
router.get('/:postId' , PostController.getPostsById)
router.patch('/:postId' , PostController.updatePost)
router.delete('/:postId' , PostController.deletePost)




module.exports = router;