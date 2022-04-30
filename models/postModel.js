const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title']
    },

    article: {
        type: String,
        required: [true, 'Please add article']
    }
})

module.exports = mongoose.model('Post', postSchema)