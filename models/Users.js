const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    avatar: {
        type: String
    },
    first: {
        type: String
    },
    last: {
        type: String
    }, 
    email: {
        type: String
    },
    password: {
        type: String
    },
    status: {
        type: Boolean
    },
}, {
    collection: 'users'
})

module.exports = mongoose.model('users', UserSchema)