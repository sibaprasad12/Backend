const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/playground') is depricated
mongoose.connect("mongodb://localhost/playground", { useNewUrlParser:  true, useUnifiedTopology: true })
.then(()=> console.log('Connected to MongoDb'))
.catch(err =>console.log('Could not Connected to MongoDb '+err));



const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date,default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse(name,author,tags,isPublished){
    const course = new Course({
        name:name,
        author: author,
        tags:tags,
        isPublished : isPublished
    });

    const result = await course.save();
    console.log(result);
}

createCourse('React Js','React',['React','FrontEnd'],true);