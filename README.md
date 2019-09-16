# Jack's Blog
This is a mini project about basic NodeJs.  
### Requirement
- OS: Ubuntu 18
- Install NodeJs on Linux
``$ sudo apt-get install nodejs``(1)  
To check version of Nodejs: ``$ node -v``  
When you run command (1) that is also install **npm**.  
To check version of npm: ``$ npm -v``  


### What is the 'module'
 Module is a file .js and inside this file have to define a code ``module.exports = [nameA]``  
 When another .js file want to use that file have to define a code ``nameA = require('that file')``.  
 
 To using any module built in NodeJS:  
 ``var fsy = require('fs')``  
 with:  ``fsy`` : in your option, ``fs``: this is a NodeJS's module.  
 
 You can read others module at: [here](https://nodejs.org/en/docs/).  
 
 ### Module is built by third party  
 To install:  
 1. Installing nmp (done when you installed nodejs)  
 2. Initialize npm for your project: ``$: npm init``
 3. By tap enter for all default.  
 4. After input info your project, in your project will be add a **package.json** file.  
 5. Installing which module third party you want with:  ``$ npm install [name modele] --save`` , (*--save* means that module will be stored your project)  
  
### JSON Method

- Converting Object to String:  
``JSON.stringify(nameObject)``  

- Converting String to Object:  
``JSON.parse(nameString)``  

### Sync vs Async
- Synchronous: Assume that, you have 2 tasks A and B. If you use Sync, you will only done task A and then 
you make task B.  
- Asynchronous: Similar you also have 2 above task. But during task A going on, you can make task B without wait 
task A done.  


### Callback hell
- This is concept that show a hard code, more loop, terrible reading....  

### Promise  

### Async await
- If inside a function use multip promise function, I have to put ``async`` in front of that function.  

 

