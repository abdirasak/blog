const Post = require('../models/postModel')

const getPosts = async (req,res) => {
    const posts = await Post.find();
    res.status(200).json(posts)
}

const addPost = async (req,res) => {
    const post = await Post.create({
        title: req.body.title,
        article: req.body.article
    })
    res.status(201).json(post)
}

const editPost = (req,res) => {
    res.send('Edit Articles')
}

const deletePost = (req,res) => {
    res.send('Delete Articles')
}





module.exports = {getPosts, addPost, editPost, deletePost}