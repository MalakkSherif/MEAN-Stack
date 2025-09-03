import express from 'express';

const app = express();

app.use(express.json());

app.listen(8000, ()=>{
    console.log('Listening on port 8000....')
})

let posts = [
    {id: 1, title: 'post1', content: 'content1'},
    {id: 2, title: 'post2', content: 'content2'},
    {id: 3, title: 'post3', content: 'content3'},
    {id: 4, title: 'post4', content: 'content4'},
]

//Get all posts
app.get('/', (req,res)=>{
    // res.send(items)
    res.json(posts);
})

// Add post
app.post('/', (req,res)=>{
    let newPost = req.body;
    newPost.id = posts.length ? posts[posts.length - 1].id +1 : 1;
    posts.push(newPost);
    res.json(posts);
})

// Update post
app.patch('/:postId', (req,res)=>{
    let id = +req.params.postId;
    let post = posts.find(i => i.id === id);
    let updatedFields = req.body;
    post={...post, ...updatedFields};
    posts = posts.map(obj => obj.id === id ? post : obj);
    res.json(posts);
})

// Delete post
app.delete('/:postId', (req,res)=>{
    let id = +req.params.postId;
    posts = posts.filter(i => i.id !== id);
    res.json(posts);
})


// Reverse posts
app.get('/reversePosts', (req,res) => {
    posts = posts.reverse();
    res.json(posts);
})


// Search post by id
app.get('/searchPostById/:postId', (req,res)=>{
    let id = +req.params.postId;
    let foundPost = posts.find(i => i.id === id);
    res.json(foundPost);
})



