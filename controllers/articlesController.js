const Post = require('../models/postModel')

const getPosts = async (req,res) => {
    const posts = await Post.find();
    res.status(200).json(posts)
}

const getPostById = async (req,res) => {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
}

const addPost = async (req,res) => {
    const post = await Post.create({
        title: req.body.title,
        article: req.body.article
    })
    res.status(201).json(post)
}

const editPost = async (req,res) => {
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(400);
        throw new console.error('Post not found');
    }

    const updatedpost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedpost)
}

const deletePost = async (req,res) => {
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(400);
        throw new console.error('Post not found');
    }

    await post.remove()
    res.status(200).json({id: req.params.id})
}





module.exports = {getPosts, addPost, editPost, deletePost, getPostById}