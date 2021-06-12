const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));



const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
      type: authorSchema,
      required: true
  }
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function updateAuthorBysaveKeyword(courseId){
    const course = await Course.findById(courseId);
    course.author.name = 'Sibaprasad Mohanty';
    course.save();
}

async function updateAuthorByUpdateKey(courseId){
    const course = await Course.update({_id:courseId,
    $set:{
        'author.name': 'Satya Narayan Mohanty'
    }

    // to unset the property name
    // $unset:{
    //     'author.name': 'Satya Narayan Mohanty'
    // }

    }); 
}

async function listCourses() { 
  const courses = await Course
    .find()
    .populate('author','name - _id')
    .select('name author');
  console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My Website');
// create course with single author
// createCourse('Android', new Author({name:'Sibaprasad',bio:'sdfsdfsd',website:'www.author.com'}))
// create course with multiple authors
createCourse('Android', [
    new Author({name:'Siba',bio:'Good',website:'www.author.com'}),
    new Author({name:'satya',bio:'Best',website:'www.author.com'})
])
// listCourses();

// updateAuthorByUpdateKey('5f3a38a02d0b753d37e37731');