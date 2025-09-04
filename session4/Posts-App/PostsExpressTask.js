import express from 'express';
import postRouter from './routes/posts.routes.js'

const app = express();

app.use(express.json());

app.use('/api/posts',postRouter)

app.listen(8000, ()=>{
    console.log('Listening on port 8000....')
})








