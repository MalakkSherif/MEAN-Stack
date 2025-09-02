import http from 'node:http';

let users = [
    {id: 1, name: 'malak', age: 21},
    {id: 2, name: 'raghad', age: 22},
    {id: 3, name: 'basmala', age: 21},
    {id: 4, name: 'Amira', age: 21},
]

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.url ==='/' && req.method === 'GET'){
        res.end(JSON.stringify(users));
    }else if(req.url === '/' && req.method === 'POST'){
        req.on('data', (data)=>{
            let newUser = JSON.parse(data);
            newUser.id = users.length ? users[users.length -1].id +1 : 1;
            users.push(newUser);
            res.end(JSON.stringify(newUser));
        })
    }else if(req.url.startsWith('/') && req.method === 'PUT'){
        let id = Number(req.url.split('/')[1]);
        let user = users.find(i => i.id === id);
        req.on('data', (data)=>{
            let updatedUser = JSON.parse(data)
            user.name= updatedUser.name;
            user.age = updatedUser.age;
            res.end(JSON.stringify(users));
        })
    }else if(req.url.startsWith('/') && req.method === 'DELETE'){
        let id = +req.url.split('/')[1];
        users = users.filter(i => i.id !== id);
        res.end(JSON.stringify(users));
    }else if(req.url === '/sortAllUsersByName' && req.method === 'GET'){
        let sortedUsers = users.sort((a,b) => a.name.localeCompare(b.name));
        res.end(JSON.stringify(sortedUsers));
    }else if (req.url.startsWith('/searchUserById') && req.method === 'GET'){
        let id = Number(req.url.split('/')[2]);
        let foundUser = users.find( i=> i.id === id);
        res.end(JSON.stringify(foundUser));
    }
});

server.listen(7000, ()=>{
    console.log('Listening on port 7000....')
})