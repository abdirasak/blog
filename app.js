const express = require('express');
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')
const {getPosts,  addPost, editPost, deletePost} = require('./controllers/articlesController')
const PORT = 9090;


connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.get('/api/posts', getPosts)
app.post('/api/posts', addPost)
app.put('/api/posts/:id', editPost)
app.delete('/api/posts/:id', deletePost)

app.listen(PORT, () => console.log(`listening server on port ${PORT}`))

