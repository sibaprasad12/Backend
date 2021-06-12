console.log('Before');
const user = getUser(1);
 console.log(user);
console.log('After');

// callbacks
// promises
// Async/ await

function getUser(id){
    setTimeout(() =>{
        console.log('Reading User from Database');
    },2000)
    return 1
}


