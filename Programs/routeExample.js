const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('hello world');
});
app.get('/api/courses/:id',(req,res) => {
    res.send(req.params.id);
});

app.get('/api/post/:year/:month',(req,res) => {
    res.send(req.params);
});

app.get('/api/feed/:year/:month',(req,res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000
app.listen(port, ()=> console.group('Listeing on port '+port+'...'));

