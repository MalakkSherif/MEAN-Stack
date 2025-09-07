const express = require('express')
const userController = require('../contollers/user.controller')
const verifyToken = require('../middlewares/verifyToken')
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'uploads')
    },
    filename: function(req,file,cb){
        // console.log(file.mimetype.split('/')[1])
        let ext = file.mimetype.split('/')[1]
        let fileName = `user-${Date.now()}.${ext}` 
        cb(null,fileName)
    }
})

const fileFilter = function (req,file,cb){
    let type = file.mimetype.split('/')[0]
    // console.log(type)
    if(type !== 'image') return cb(new Error('This file is not an image'), false)

    cb(null,true)
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

let router = express.Router()

router.route('/')
        .get(verifyToken, userController.getAllUsers)

router.route('/register')
        .post(upload.single('avatar'), userController.register)

router.route('/login')
        .post(userController.login)

module.exports = router