import express from 'express';
import courseRouter from './routes/course.route.js'


const app = express();

app.use(express.json());

app.use('/api/courses', courseRouter)

app.listen(9000, ()=>{
    console.log('Listening on port 9000....')
})






