const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const verifyToken = async (req,res,next)=>{
    // console.log(req.headers.authorization)
    let authHeader = req.headers.authorization
    // console.log(authHeader.split(' ')[1])
    let token = authHeader.split(' ')[1]

    if(token){
        let data = jwt.verify(token, 'JWT_SECRET_KEY')
        // console.log(data)
        let loggedInUser = await User.findById(data.id)
        // console.log(loggedInUser)
        req.role = loggedInUser.role
        next()
    }else{
        res.status(401).json({error: 'Unathorized'})
    }
}


module.exports = verifyToken