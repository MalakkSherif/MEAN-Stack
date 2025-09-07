const express = require('express')
const courseRouter = require('./routes/course.route')
const userRouter = require('./routes/user.route')
const connection = require('./db/connection')
const path = require('node:path')

const app = express()

app.use(express.json())



app.use('/api/courses',courseRouter)
app.use('/api/users',userRouter)

app.use('/uploads', express.static(path.join(__dirname,'uploads'))) // 'C:\Users\it legend\OneDrive\Documents\MEAN-Stack NTI Summer Course\NodeJs & MongoDB\day3\courses-app\uploads'

// app.use('/about',(req,res,next)=>{
//     console.log(req.url,req.method)
//     next()
// })

connection()


app.listen(3000,()=>{
    console.log('Listening on port 3000')
})