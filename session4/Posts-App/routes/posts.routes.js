import express from 'express'
import * as post from '../controllers/posts.controller.js'
import {validation} from '../middlewares/validation.js'



let router = express.Router();


//Get all posts
router.route('/')
    .get(post.getAllPosts)
    .post(validation,post.addPost);

router.route('/:postId')
    .patch(validation,post.updatePost)
    .delete(post.deletePost);

// Reverse posts
router.get('/reversePosts',post.reversePosts);


// Search post by id
router.get('/searchPostById/:postId',post.searchPostById)

export default router;
