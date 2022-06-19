const express = require('express');
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware');
const {getPosts,  addPost, editPost, deletePost, getPostById} = require('./controllers/postController')
const {currUser, login, register} = require('./controllers/userController')
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

//user enpoint
app.post('/api/users', register)
app.post('/api/users/login', login)
app.get('/api/users/me',  currUser)

//error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`listening server on port ${PORT}`))

