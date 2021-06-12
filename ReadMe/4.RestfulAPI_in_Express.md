## Express js introduction (expressjs.com)
- create a demo project
    - mkdir express-demo
    - cd express-demo
    - npm init --yes
    - npm i express
    - now express added to your project
- Express is a popular framework which is used for RESTFUL web servises
- it have methods - get() post() pud() delete()
- go to expressjs.com to see the documentation

## nodemon (node monitor)
- everytime i change in the file, i need to cancel the port and again type
- node index.js
- without restarting the server we can do that using the library nodemon
- npm i -g nodemon
- After installing the package, you just have to type
    - nodemon index.js instead node index.js
## Environment Variable
- Before all the port number is Hard coded
- But once it is hosted in real server, then this Hard coded port will not work 
- so we can set PORT instead of hard coded value
-   ```
        const express = require('express');
        const app = express();
        app.get('/',(req,res) => {
            res.send('hello world');
        });
        app.get('/api/courses',(req,res) => {
            res.send([1,2,3,23]);
        });
        const port = process.env.PORT || 3000
        app.listen(port, ()=> console.group(`Listeing on port $port...`));
    ```
- Now set the Environment Variable Dynamically
- export PORT=5000
- then run the js file   
## ROUTE 
- Till now we are not passing any parameter in the request
- now we will pass some paremeter in the request
- ```
     app.get('/api/courses/:id',(req,res) => {
            res.send(req.params.id);
        });
  ```
- If you will type **http://localhost:5000/api/courses/2** in browser   
- YOu will see the 2 print in the response in browser   
**MULTIPLE PARAMETERS**  
- ```
    app.get('/api/post/:year/:month',(req,res) => {
    res.send(req.params);
    });
  ```
- If you type **http://localhost:5000/api/post/2020/jan** and hit the browser
- you will see this response
- {"year":"2020","month":"jan"}  
- We can sort the response on the basis of result
- ```
    app.get('/api/post/:year/:month',(req,res) => {
        res.send(req.query);
    });
  ```
- Now Type **http://localhost:5000/api/feed/2020/jan?shortby=name** in browser
- You will see response {"shortby":" name"}

## Handiling HTTP GET request
- For example please check the js file in below
- programs/express-demo/handlingHttpGetRequest.js  
## Handiling HTTP POST request
- For example please check the js file in below
- programs/express-demo/handlingHttpPostRequest.js  
- In this POST api, we will add one more course to the course list using POST method
- **How to Test POST method**
    - Run the above js file in command line
    - export PORT=5000
    - nodemon handlingHttpPostRequest.js
    - Open postman
    - Select POST method
    - pass value in body as raw JSON { "id":10,"name":"Mohanty"}
    - Now hit the get request in browser, you will see the added course in the list
    - Hit http://localhost:5000/api/courses/
## Input Validation
- For this we can use one NPM package name : joi
- install joi in your node module
- npm i joi
- For the exact version followed in this application, use below command
- npm i joi@13.1.0
- Now run the inputValidation.js file using nodemon inputValidation.js
- **How To ehck in Postman**
    - Open postman
    - Select POST method
    - pass value in body as raw JSON { }
    - Now hit the get request in browser, you will see the added course in the list
    - Hit http://localhost:5000/api/courses/   
    - YOu will get error
    - Now pass value in body as raw JSON { "name":"df" }
 ## HTTP Put Request
 - Check the handlingHttpPutRequest.js file in express-demo
 - **How To ehck in Postman**
    - Open postman
    - Select PUT method
    - pass value in body as raw JSON { "name":"Sibaprasad" }
    - Now hit the get request in browser, you will see the added course in the list
    - Hit http://localhost:5000/api/courses/1   
    - THe value will be updated
 ## HTTP Delete Request
 - Check the handlingHttpDeletRequest.js file in express-demo
 - **How To ehck in Postman**
    - Open postman
    - Select DELET method
    - Now hit the get request in browser, you will see the added course in the list
    - Hit http://localhost:5000/api/courses/1   
    - The course 1 will be delete
