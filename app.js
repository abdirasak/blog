const express = require('express');
const dotenv = require("dotenv").config();
const colors = require('colors')
const connectDB = require('./config/db')
const {getArticles,  addArticle, editArticle, deleteArticle} = require('./controllers/articlesController')
const PORT = 9090;
const app = express();

connectDB()

app.get('/api/articles', getArticles)
app.post('/api/articles', addArticle)
app.put('/api/articles/:article_id', editArticle)
app.delete('/api/articles/:article_id', deleteArticle)

app.listen(PORT, () => console.log(`listening server on port ${PORT}`))

