const express = require('express');
const joi = require('joi');
const app = express();
const courses = require('../router/courses')
const home = require('../router/home')
app.use(express.json());
app.use('/api/course',courses);
app.use('/',home);

app.use('/api/courses',courses);
const port = process.env.PORT || 3000
app.listen(port, ()=> console.group('Listeing on port '+port+'...'));

