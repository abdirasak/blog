const getArticles = (req,res) => {
    res.send('Get Articles')
}

const addArticle = (req,res) => {
    res.send('Add Articles')
}

const editArticle = (req,res) => {
    res.send('Edit Articles')
}

const deleteArticle = (req,res) => {
    res.send('Delete Articles')
}





module.exports = {getArticles, addArticle, editArticle, deleteArticle}