const http = require('http');
const Server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end()
    }
});

Server.listen(3000);
console.log('listening on port 3000');