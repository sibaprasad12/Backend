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
    // console.log(result);
}

createCourse('Node Js','Mosh',['Backend','Backend'],true);
createCourse('React Js','React',['React','FrontEnd'],true);

async function getCourses(){
    const courses = await Course.find();
    console.log(courses);
}

// filter
async function getFilteredCourses(){
    const courses = await Course
    .find({author:'Mosh',isPublished: true})
    .limit(10)
    .sort({name:1})
    .select({name:1,tags: 1});
    console.log(courses);
}

// getCourses();
getFilteredCourses();