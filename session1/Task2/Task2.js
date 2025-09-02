async function getPosts(){
    var data= await fetch('https://jsonplaceholder.typicode.com/posts/1')
    var posts=await data.json()
    console.log(posts)
}
getPosts()

async function createPosts(){
    var data= await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    var posts=await data.json()
    console.log(posts)
}
createPosts()

async function putPosts(){
    var data= await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    var posts=await data.json()
    console.log(posts)
}
putPosts()

async function deletePosts(){
    var data = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    });
    var post=await data.json()
    console.log(post)
}
deletePosts()