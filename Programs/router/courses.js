const express = require('express');
const router = express.Router(); 

const courses = [
    {id: 1, name:'Course 1'},
    {id: 2, name:'Course 2'},
    {id: 3, name:'Course 3'},
    {id: 4, name:'Course 4'},
    {id: 5, name:'Course 5'},
];

router.get('/',(req,res) => {
    res.send('hello world');
});

router.get('/',(req,res) => {
    res.send(courses);
});

router.get('/:id',(req,res) => {
    const course = courses.find(c => c.id===parseInt(req.params.id));
    if(!course) 
        res.status(404).send('The course with the Given id is not available');
    else
        res.send(course); 
});

router.post('/',(req,res) => {

    // how we will handle using joi
    const schema = {
        name: joi.string().min(3).required()
    }
    const result = joi.validate(req.body,schema);
    console.log(result);

    // we can simplify the logic below using joi like this
    if(result.error){
      //  res.status(400).send(result.error);
      // this is for specific error
        res.status(400).send(result.error.details[0].message);
        return
    }

    if(!req.body.name || req.body.name.length < 3){
        // 404 Bad Request
        res.status(400).send('Name is Required and it must be more than 3 characters');
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.get('/api/feed/:year/:month',(req,res) => {
    res.send(req.query);
});

// PUT request
router.put('/:id',(req,res) => {
    // Look up the course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the Given id is not available');
    // validate 
    // If invalid, return 404 - Bad Request
     
    const result = validateCourse(req.body);
    const {error} = validateCourse(req.body);
    if(error){
        //  res.status(400).send(result.error);
        // this is for specific error
          res.status(404).send(error.details[0].message);
          return
      }
    // Update Course
    // Return Updated 
    course.name =req.body.name;
    res.send(course);
});

function validateCourse(course){
    const schema = {
        name: joi.string().min(3).required()
    }
    return joi.validate(course,schema);
}

module.export = router