const p = new Promise((resolve, reject) =>{
    // kick off some async work
    // here you can do network call, database operation etc
    // To look more like async call, we will call the set timeout with delay
    setTimeout( () =>{
        // resolve(1); // pass the value when you get result
        reject(new Error('Error message'))// when it failed to get result
    },2000);
    
    
});

p.then(result => console.log('result is '+result))
.catch(err => console.log('Error ',err.message));