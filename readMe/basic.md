# Basic Introduction to Backend

- The front-end is the code that is executed on the client side. This code (typically HTML, CSS, and JavaScript) runs in the user’s browser and creates the user interface.
- The back-end is the code that runs on the server, that receives requests from the clients, and contains the logic to send the appropriate data back to the client. The back-end also includes the database, which will persistently store all of the data for the application. This article focuses on the hardware and software on the server-side that make this possible.

## What is Client ?

- The clients are anything that send requests to the back-end.
- They are often browsers that make requests for the HTML and JavaScript code that they will execute to display websites to the end user.
- However, there are many different kinds of clients: they might be a mobile application, an application running on another server, or even a web enabled smart appliance.

## What is Server ?

## What is HTTP (Hypertext Transfer Protocol) ?

- HTTP used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network.
- The transfer of resources happens using TCP (Transmission Control Protocol). In viewing this webpage, TCP manages the channels between your browser and the server (in this case, codecademy.com)
- TCP is used to manage many types of internet connections in which one computer or device wants to send something to another.
- HTTP is the command language that the devices on both sides of the connection must follow in order to communicate.
- HyperText Transfer Protocol it is an application side protocol used for transmitting hypermedia documents like HTML. HTTP transfers data over TCP connection between client and server (Let’s not go in deep about it, we can add a new blog on it).
- HTTP transfers plain text over the connection which can be read by someone who has access to your connection. For example, if you are exchanging data over shared wifi one can sniff your data using sniffers(Will add a blog on how Wireshark can be used for sniffing the data).
- Let’s limit the information of HTTP up to this point only.

## What is HTTPS ?

- [For More Details Follow](https://love2dev.com/blog/how-https-works/)

## What is Request ?

## What is Response ?

## What is REST (REpresentational State Transfer) ?

- REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.
- REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.
- We will go into what these terms mean and why they are beneficial characteristics for services on the Web.

## What is SOAP ?

- SOAP relies exclusively on XML to provide messaging services.
- Microsoft originally developed SOAP to take the place of older technologies that don’t work well on the internet such as the Distributed Component Object Model (DCOM) and Common Object Request Broker Architecture (CORBA).
- These technologies fail because they rely on binary messaging.
- The XML messaging that SOAP employs works better over the internet.

## API

- API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
- Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.
- An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.

## Different methods used in web service

| HTTP Verb | CRUD | Entire Collection (e.g. /customers) | Specific Item (e.g./customers/{id}) |
|-----------|------|-------------------------------------|-------------------------------------|
| POST | Create | 201 (Created), 'Location' header with link to /customers/{id} containing new ID. | 404 (Not Found), 409 (Conflict) if resource already exists..|
| GET | Read | 200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists. | 200 (OK), single customer. 404 (Not Found), if ID not found or invalid.|
| PUT | Update/Replace | 405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection. | 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.|
|PATCH | Update/Modify | 405 (Method Not Allowed), unless you want to modify the collection itself.| 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.|
|DELETE | Delete | 405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable. | 200 (OK). 404 (Not Found), if ID not found or invalid.|

## REST API - Response Codes and Statuse

|Code|Status|Description|
|----|------|-----------|
|200| OK | The request was successfully completed.|
|201 | Created | A new resource was successfully created.|
|400|Bad Request | The request was invalid.|
|401|Unauthorized|The request did not include an authentication token or the authentication token was expired.|
| 403| Forbidden | The client did not have permission to access the requested resource.|
| 404 | Not Found | The requested resource was not found.|
| 405 | Method Not Allowed | The HTTP method in the request was not supported by the resource. For example, the DELETE method cannot be used with the Agent API.|
| 409 | Conflict | The request could not be completed due to a conflict. For example,  POST ContentStore Folder API cannot complete if the given file or folder name already exists in the parent location.|
| 500 | Internal Server Error | The request was not completed due to an internal error on the server side.|
| 503 | Service Unavailable | The server was unavailable.|