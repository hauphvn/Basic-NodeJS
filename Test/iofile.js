var fs = require('fs');

// fs.readFile("input.txt", function (err, buf) {
//     console.log(buf.toString());
// });

// fs.readFile("not-found.txt","utf-8",(err, data)=>{
//     if (err) {console.log(err)}
//     console.log(data);
// });

var data = "phạm văn hậu dasdasd pham";

fs.writeFile("output.txt",data,(err)=>{
    if (err) {console.log(err);}
    console.log("Successfully Written to File.");
    console.log(data);
});