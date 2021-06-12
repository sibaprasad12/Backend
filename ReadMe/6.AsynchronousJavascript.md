# Asynchronous Javascript
## Synchronous Vs Asynchronous 
- 
## Pattern For dealing with Asynchronous Code
- There are 3 patterns to handle aync call in javascript
 - Callback
 - Promises
 - Async/await
## Callbacks
- 
## Callback Hell
- a
## Named Functions to Rescue
- a
## Promises
- Promises is bettwe way to handle async call in javascript
- It Holds the eventual result of an asynchronous operation
- When Async operation complets it either return result or error
- ```
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
  ```
- A promise object, promises the user that it will return result or error
- resolve, reject are two function which is used to pass result and error
- Promise object have two methods named **catch** and **then**
- **catch** - It is used to catch the error
- **then** - It is used to handle the result
## Replacing callbacks with Promises
- see the code inside program/async/5promiseexample.js
## Consuming Promises
- see the code inside program/async/5promiseexample.js
## Creating Settled Promises
- see the code inside program/async/6promise-api.js
## Running Parallel Promises
- To run multiple promises in parlell 
- Promise.all([p1,p2])
.then(result => console.log('result is '+result))
.catch(error => console.log('Error is '+error));
- The result will be available in array
## Race

## Async and Wait
- Its bettwe approch to handle async call
- In promise, we make a chain of then call
- But in async call, we just await the promises and then make the call
-```
    async function displayCommits(){
        try{
            const user  = await getUser(1);
            const repos  = await getRepositories(user.gitHubUsername);
            const commits  = await getCommits(repos[0]);
            console.log(commits);
        }
        catch(err){
            console.log('Error is '+err);
        }
    }
    ```
- In this approach there is no catch method to catch the erorr.
- So we put all the code inside the try block to catch the errors.    
## Exercise
- a  