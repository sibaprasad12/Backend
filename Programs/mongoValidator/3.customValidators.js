const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/playground') is depricated
mongoose.connect("mongodb://localhost/playground", { useNewUrlParser:  true, useUnifiedTopology: true })
.then(()=> console.log('Connected to MongoDb'))
.catch(err =>console.log('Could not Connected to MongoDb '+err));


const courseSchema = new mongoose.Schema({
    name: {
        type:String, 
        required: true,
        minlength: 5,
        maxlength: 25
        // match: /pattern/
    },
    category:{
        type: String,
        required: true,
        enum: ['Web','Mobile','Network']
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function(v){
                return v && v.length > 0;
            },
            message: 'Acourse must have atleast one Tag'
        }
    },
    date: {type: Date,default: Date.now},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {return this.isPublished},
        min: 100,
        max: 200
    }
});

const Course = mongoose.model('Course',courseSchema);

async function createCourse(name,category,author,tags,isPublished,price){ 

    const course = new Course({
        name:name,
        category: category,
        author: author,
        tags:tags,
        isPublished : isPublished,
        price: price
    });
try{ 
    await course.validate(); 
}
catch(ex){
    console.log(ex.message);
}
    
    // console.log(result);
}

createCourse('Node Js','Web','Mosh',null ,true,123);
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