# Node Module System
- setTimeout()
- clearTimeout()
- setInterval()
- clearInterval()
  
- These are the global objects in javascript
- In javascript WIndow object contain all other objects
-  ```
    console.log("message");
    is nothing but
    window.console.log("message");
    if you declare a variable, that is also present in window, we can access the variable using the window object
```
- Similarly, instead of window, node js uses global, that means we can access all the variables using the global object in Node js

## require()
- require is the same as import in java
- require(../folder/filename) instead of import
- it uses to import a module
- 
```
    const logger = require('./logger')
    logger.log('message');
```
- You can import only a function without imorting the whole module
- ```
        module.exports = log
        log('message');
```
- Here we are not importing the logger module, we are importing only the log function

## Module wrapper function
- ```
    (function(export,require,module,_filename,_dirname ){
         var url = 'www.abc.asas.com'   
         function log(message){
             // send a HTTP request
             console.log(message);
         }
         module.exports = log;
    })
```    
- we can write the function in much simpler code
- ```
console.log(_filename);
console.log(_dirname);
var url = 'www.abc.asas.com'   
         function log(message){
             // send a HTTP request
             console.log(message);
         }
         module.exports = log;
```
## Path Module (https:
- look at the modules in the link https://nodejs.org/dist/latest-v12.x/docs/api/
- for details of path module
- https://nodejs.org/dist/latest-v12.x/docs/api/path.html
- ```
        const path = require('path');
        var pathObj = path.parse(_filename);
        console.log(pathObj);
    ```

## OS module (https://nodejs.org/dist/latest-v12.x/docs/api/os.html)
- ```
    const os = require('os');
    var totalMemory = os.totalmem();
    var freeMemory = os.freemem();
    console.log('total memory: '+totalMemory);
    ```

## File module (https://nodejs.org/dist/latest-v12.x/docs/api/fs.html)
- const fs = require('fs');
- every method  have synchronous and asynchronous version
- ```
    const fs = require('fs');
    // synchronous access of file
    vonst files = fs.readdirSync('./');
    console.log(files)
    // asynchronous access of file
    fs.readdir('./',function(err,files){
        if(err) 
            console.log('Error',err);
        else
            console.log('Result',files);    
    })
    ```
- In the above code snippet, you can see there 2 methods for readdir
- readdirSync() => used as Synchronous method
- readdir() => used as Asynchronous method 
- **NOTE: always prefer to use Asychronous method**
## Event (https://nodejs.org/dist/latest-v12.x/docs/api/events.html)
- Signal that something has happened
- It raise an event once some event occur.
It is one type of listener or observer
-   ```
        const EventEmitter = require('events');
        const emitter = new EventEmitter();
        // register a listener
        emitter.on('messageLoged', function(arg){
            console.log('Listener Called');
        });
        emitter.emit('event');
    ```
-  EventEmitter is a class

## Event Argument
- We can pass different argument in the emit method
-   ```
        const EventEmitter = require('events');
        const emitter = new EventEmitter();
        // register a listener
        emitter.on('messageLoged', function(arg){
            console.log('Listener Called', arg);
        });
        emitter.emit('event',1,"log message");
    ```
- Its always preferable to pass argument as object
-   emitter.emit('event',{id:1, url: 'www.abcd.com'});  
## Extending EventEmitter
## HTTP (https://nodejs.org/dist/latest-v12.x/docs/api/http.html)
- This package have all the methods to handle the network request
-   ```
        const http = require('http');
        const Server = http.createServer();
        server.on('connection',(socket) =>{
            console.log('New connection');
        });
        server.listen();
        console.log('Listening on port 3000...');
    ```
- execute the above code and type localhost:3000 in the browser
- you will see the new COnnection inlog    
- server.emit(), server.add(), server.on()
- For actual Request and Response Object
- ```
        const http = require('http');
        const Server = http.createServer((req,res)=>{
            if(req.url === '/'){
                res.write('Hello World');
                res.end();
            }
        });
    ```
- After this code execute node filename.js
- now hit the link in browser http://localhost:3000/
- you will see hello world in browser
- if you want to load specific json files in a specific url do likethis
-   ```
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end()
    }
    ```
- Now type http://localhost:3000/api/courses in browser
    