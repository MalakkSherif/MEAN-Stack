import mongoose from 'mongoose';
import validator from "validator";

const { isEmail } = validator;

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
        validate:[
            isEmail, 'Invalid email format'
        ]
    },
    password:{
        type: String,
        required: true
    },
    token: String,
    role: {
        type: String,
        enum:['user','admin'],
        default: 'user'
    }

})

const userModel = mongoose.model('User', userSchema)

export default userModel;