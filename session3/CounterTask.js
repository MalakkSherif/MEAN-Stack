import express from 'express';

const app = express();


let counter = 0;
app.get('/counter', (req,res) =>{
    counter++;
    res.send(`Counter: ${counter}`);
})

app.get('/reset', (req, res)=>{
    counter = 0;
    res.send(`Counter reseted`);
})


app.listen(6000, ()=>{ 
    console.log('Listening on port 6000....')
})