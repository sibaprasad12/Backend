const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('hello world');
});
app.get('/api/courses',(req,res) => {
    res.send([1,2,3,23]);
});
app.listen(3000, ()=> console.group('Listeing on port 3000...'));