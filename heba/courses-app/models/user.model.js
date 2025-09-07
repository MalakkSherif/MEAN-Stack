const mongoose = require('mongoose')
const {isEmail} = require('validator')

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min: 3
    },
    lastName:{
        type: String,
        required: true,
        min: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [ isEmail, 'Invalid Email Format'] // aaa123@bb.com
    },
    password:{
        type: String,
        required: true
    },
    token: String,
    role:{
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },
    avatar: {
        type: String,
        default: '/uploads/profile.jpg'
    }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel