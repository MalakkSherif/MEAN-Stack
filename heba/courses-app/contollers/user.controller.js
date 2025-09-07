const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const getAllUsers = async (req, res) => {
    try {
        let users = await User.find({}, { '__v': false, 'password': false })
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'Error from Server'})
    }
}


const register = async (req, res) => {
    try {
        // console.log(req.file)

        const { firstName, lastName, email, password ,role} = req.body

        const user = await User.findOne({ email: email })
        if (user) return res.status(400).json({ message: 'Email already exist, login instead' })

        const hashedPassword = bcrypt.hashSync(password, 10)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            avatar : req.file.filename
        })

        const token = jwt.sign({id: newUser._id}, 'JWT_SECRET_KEY',{expiresIn: '1h'})
        newUser.token = token

        await newUser.save()

        res.status(201).json({ message: 'User Created', data: newUser })
    } catch (err) {
        res.status(500).json({ message: 'Error from Server' })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body

        let user = await User.findOne({ email: email })
        const comparedPassword = await bcrypt.compare(password, user.password)

        if (user && comparedPassword) {
            const token = jwt.sign({id: user._id}, 'JWT_SECRET_KEY',{expiresIn: '1h'})
            res.status(200).json({ message: 'Logged in successfully', token: token })
        } else {
            res.status(400).json({ message: 'Email or password Invalid' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Error from Server' })
    }

}



module.exports = {
    getAllUsers,
    register,
    login
}