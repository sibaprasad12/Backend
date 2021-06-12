const express = require('express');
const app = express();

const courses = [
    {id: 1, name:'Course 1'},
    {id: 2, name:'Course 2'},
    {id: 3, name:'Course 3'},
    {id: 4, name:'Course 4'},
    {id: 5, name:'Course 5'},
];

app.get('/',(req,res) => {
    res.send('hello world');
});

app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id===parseInt(req.params.id));
    if(!course) 
        res.status(404).send('The course with the Given id is not available');
    else
        res.send(course); 
});

app.get('/api/post/:year/:month',(req,res) => {
    res.send(req.params);
});

app.get('/api/feed/:year/:month',(req,res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000
app.listen(port, ()=> console.group('Listeing on port '+port+'...'));

