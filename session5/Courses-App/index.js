import express from 'express';
import courseRouter from './routes/course.route.js'
import userRouter from './routes/user.route.js'
import connection from './db/dbConnection.js'

const app = express();

app.use(express.json());

app.use('/api/courses', courseRouter)
app.use('/api/users', userRouter)

connection()

app.all('/{*any}',(req,res)=>{
    res.status(404).json({message: 'This resource is not found'})
})

app.listen(9000, ()=>{
    console.log('Listening on port 9000....')
})






