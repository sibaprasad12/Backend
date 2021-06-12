const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=> console.log('Connected to MongoDb'))
.catch(err =>console.log('Could not Connected to MongoDb '+err));