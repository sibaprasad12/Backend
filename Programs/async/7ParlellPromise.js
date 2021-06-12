console.log('Before Async Operation');

const p0 = new Promise((resolve) =>{
    setTimeout(() =>{
        console.log('Async Operation 0....');
        resolve(0); 
    },2000);
});

const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log('Async Operation 1....');
        resolve(1);
        // reject(1);
    },2000);
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log('Async Operation 2....');
        resolve(2);
    },2000);
});

// Promise.all([p1,p2])
// .then(result => console.log('result is '+result))
// .catch(error => console.log('error is '+error));

Promise.race([p0,p1,p2])
.then(result => console.log('result is '+result))
.catch(error => console.log('error is '+error));

console.log('After Async Operation');