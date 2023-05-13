const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TeamSchema = new Schema({
    user:{
        type: String
    },
    friends:{
        type: Object
    },
}, {
    collection: 'Teams'
})

module.exports = mongoose.model('Teams', TeamSchema)