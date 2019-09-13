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
 Module is a file .js and inside this file have to define a code ``module.exports [nameA]``  
 When another .js file want to use that file have to define a code ``nameA = require('that file')``.  
 
 To using any module built in NodeJS:  
 ``var fsy = require('fs')``  
 with:  ``fsy`` : in your option, ``fs``: this is a NodeJS's module.  
 
 You can read others module at: [here](https://nodejs.org/en/docs/).  
 
 