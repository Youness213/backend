const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
    user:{
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }, 
    due: {
        type: Date
    },
    status: {
        type: String
    },
    priority: {
        type: Number
    },
}, {
    collection: 'projects'
})

module.exports = mongoose.model('projects', projectSchema)