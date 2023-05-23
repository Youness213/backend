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
    startdue: {
        type: Date
    }, 
    enddue: {
        type: Date
    },
    status: {
        type: String
    },
    priority: {
        type: String
    },
    visibility: {
        type: String
    },
    creator: {
        type: String
    },
    AchivedBy: {
        type: String
    },
}, {
    collection: 'projects'
})

module.exports = mongoose.model('projects', projectSchema)