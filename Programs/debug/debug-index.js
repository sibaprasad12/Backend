const startUpDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require('morgan'); 
const joi = require('joi');
const logger = require('../logger/logger'); 
const express = require('express'); 
const app = express();

startUpDebugger('Application Started...');

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startUpDebugger('Morgan Enabled...');
}

// database work
dbDebugger('Database connected...');

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));