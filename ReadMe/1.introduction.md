# NodeJs Documentation and Tutorial

## What is Node ?
- Node is not a Framework, not a language.
- Node.js is a JavaScript runtime environment. 
- It provides environment to run Javascript in server.
- Before node, js can only run on the browser's Javascript Engines ( Internet explorer uses chacka, Chrome uses V8 , mozila uses spider monkey Javascript Engines)
- To run Javascript in standalone application, node came into picture. It provides environment to execute Javascript code
- Like Java needs JVM to compile and execute java classes, likewise Node Js provides environment for Javascript to execute.
- Ryan Dahl  is the creater of Node Js.
- He took Googles V8 javascript engine which is the fastest and embeded inside the Microsoft's C++ program which is known as Node Js.  
  
## Advantage of Javascript  
- Great for prototyping and agile development
- Superfast and highly scalable
- Node js uses asynchronous programming.
- Javascript is everywhere
- Cleaner and more consistent codebase
- Large ecosystem of open-source libs
  
## Why node js
  
**Here is how PHP or ASP handles a file request:**.  
- Sends the task to the computer's file system.
- Waits while the file system opens and reads the file.
- Returns the content to the client.
- Ready to handle the next request.
  
**Here is how Node.js handles a file request:**
- Sends the task to the computer's file system.
- Ready to handle the next request.
- When the file system has opened and read the file, the server returns the content to the client.
- Node.js eliminates the waiting, and simply continues with the next request.
- Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
- In NOde a single THread handle all request
- If it query a database, that time the thread doesnot have to wait, The request wil execute another request and put a message in Event Queue.
- Node should not be used for CPU intensive apps like Video ENcoding, image maniipulation
- 


