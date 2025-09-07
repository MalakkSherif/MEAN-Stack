import jwt from 'jsonwebtoken'
import user from '../models/user.model.js'


const verifyToken = async (req,res,next)=>{
    let authHeader = req.headers.authorization
    let token = authHeader.split(' ')[1]
    if(token){
        let data = jwt.verify(token,'JWT_SECRET_KEY')
        console.log(data)
        let loggedInUser = await user.findById(data.id)
        console.log(loggedInUser)
        req.role = loggedInUser.role
        next()
    }else{
        res.status(401).json({error: 'Unauthorized user'})
    }
}

export default verifyToken