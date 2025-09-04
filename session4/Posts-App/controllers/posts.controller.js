import {posts, modifyPosts} from '../data/posts.js';
import {validationResult} from 'express-validator';


export const getAllPosts = (req,res)=>{
    // res.send(items)
    res.json(posts);
}

export const addPost = (req,res)=>{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message: 'Bad Request', Errors: errors.array()});
    }
    let newPost = req.body;
    newPost.id = posts.length ? posts[posts.length - 1].id +1 : 1;
    posts.push(newPost);
    res.json(posts);
}

export const updatePost = (req,res)=>{
    let id = +req.params.postId;
    let post = posts.find(i => i.id === id);
    if(!post) return res.status(404).json({Error: 'Post not found'});
    let updatedFields = req.body;
    post={...post, ...updatedFields};
    modifyPosts(posts.map(obj => obj.id === id ? post : obj));
    res.json(posts);
}

export const deletePost = (req,res)=>{
    let id = +req.params.postId;
    let post = posts.find(i => i.id === id);
    if(!post) return res.status(404).json({Error: 'Post not found'});
    modifyPosts(posts.filter(i => i.id !== id));
    res.json(posts);
}

export const reversePosts = (req,res) => {
    modifyPosts(posts.reverse());
    res.json(posts);
}

export const searchPostById = (req,res)=>{
    let id = +req.params.postId;
    let foundPost = posts.find(i => i.id === id);
    if(!foundPost) return res.status(404).json({Error: 'Post not found'});
    res.json(foundPost);
}