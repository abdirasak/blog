const express = require('express');
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')
const {getPosts,  addPost, editPost, deletePost, getPostById} = require('./controllers/articlesController')
const PORT = 9090;

//db connection
connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//endpoints
app.get('/api/posts', getPosts)
app.get('/api/posts/:id', getPostById)
app.post('/api/posts', addPost)
app.put('/api/posts/:id', editPost)
app.delete('/api/posts/:id', deletePost)

app.listen(PORT, () => console.log(`listening server on port ${PORT}`))

