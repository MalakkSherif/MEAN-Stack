import user from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import json from 'jsonwebtoken'


export const getAllUsers = async (req,res)=>{
    try{
        let users = await user.find({},{'__v':false, 'password':false})
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message: 'Error from server'})
    }

}

export const register = async (req,res)=>{
    try{
        const {firstName,lastName,email,password} = req.body
        let foundUser = await user.findOne({email:email})
        if(foundUser) return res.status(400).json({message: 'This email already exists, Login instead'})
        const hashedPassword = bcrypt.hashSync(password, 10)
        const newuser = new user({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        })
        newuser.token = json.sign({id:newuser._id},'JWT_SECRET_KEY',{expiresIn:'1m'})
        await newuser.save()
        res.status(201).json({message: 'User created successfully', userData:newuser})

    }catch(err){
        res.status(500).json({message: 'Error from server'})
    }
    
}

export const login = async (req,res)=>{
    try{
        const {email, password} = req.body
        let loggedinUser = await user.findOne({email : email})
        const comparedPassword = await bcrypt.compare(password,loggedinUser.password)
        if(loggedinUser && comparedPassword){
            const token = json.sign({id:newuser._id},'JWT_SECRET_KEY',{expiresIn:'1m'})
            res.status(200).json({message: `${loggedinUser.firstName} has logged in successfully`, token: token})
        }else{
            res.status(400).json({message: 'Email or password invalid'})
        }
    }catch(err){
        res.status(500).json({message: 'Error from server', error: err})
    }
    
}