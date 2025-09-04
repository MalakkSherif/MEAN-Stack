export let posts = [
    {id: 1, title: 'post1', content: 'content1'},
    {id: 2, title: 'post2', content: 'content2'},
    {id: 3, title: 'post3', content: 'content3'},
    {id: 4, title: 'post4', content: 'content4'},
]

export function modifyPosts(value){ 
    posts = value; 
}