const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/playground') is depricated
mongoose.connect("mongodb://localhost/playground", { useNewUrlParser:  true, useUnifiedTopology: true })
.then(()=> console.log('Connected to MongoDb'))
.catch(err =>console.log('Could not Connected to MongoDb '+err));


const courseSchema = new mongoose.Schema({
    name: {type:String, required: true},
    author: String,
    tags: [String],
    date: {type: Date,default: Date.now},
    isPublished: Boolean
});



const Course = mongoose.model('Course',courseSchema);

async function createCourse(name,author,tags,isPublished){ 

    const course = new Course({
        // name:name,
        author: author,
        tags:tags,
        isPublished : isPublished
    });
try{
    
    // const result = await course.save();
    // console.log(result);
    await course.validate();

// below is the another opion

    // course.validate((err) =>{
    //     if(err){
    //         console.log('Erro occured, dont proceed database operation');
    //     }
    //     else{
    //         console.log('No Error, do the database operation');
    //     }
    // });


}
catch(ex){
    console.log(ex.message);
}
    
    // console.log(result);
}

createCourse('Node Js','Mosh',['Backend','Backend'],true);
// createCourse('React Js','React',['React','FrontEnd'],true);

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