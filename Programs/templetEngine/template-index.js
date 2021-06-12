const startUpDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require('morgan'); 
const joi = require('joi');
const logger = require('../logger/logger'); 
const express = require('express'); 
const app = express();

app.set('view engine','pug');
app.set('views','../views');
startUpDebugger('Application Started...');

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startUpDebugger('Morgan Enabled...');
}

// database work
dbDebugger('Database connected...');

const courses = [
    {id: 1, name:'Course 1'},
    {id: 2, name:'Course 2'},
    {id: 3, name:'Course 3'},
    {id: 4, name:'Course 4'},
    {id: 5, name:'Course 5'},
];

app.get('/',(req,res) => {
    res.render('index',{title:'My express App', message: 'My Message'});
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));