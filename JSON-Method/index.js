'use strict';
console.log("Task from CoderX online");

// var readlineSync = require('readline-sync');
// var studentList = [];
// var fs = require('fs');
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// while (true){
//     console.log("1.Show all students\n" +
//         "2.Create a new student\n" +
//         "3.Save & Exit\n");
//     var choosen = (parseInt(readlineSync.question("Your chose: ")));
//
//     switch (choosen) {
//         case 1:
//             console.log("List all of students: ");
//             console.log(studentList);
//             break;
//         case 2:
//             var name = readlineSync.question("Your name: ");
//             var age = parseInt(readlineSync.question("Your age: "));
//             var student = new Student(name, age);
//             studentList.push(JSON.stringify(student));
//             break;
//         case 3:
//             fs.writeFile("./data.txt",studentList, function (err) {
//                 console.log("vao day");
//                 if (err){
//                     console.log("Finally! Can not save these student. ")
//                 } else{
//                     console.log("Success!");
//                 }
//             });
//
//             break;
//         default:
//             return;
//     }
//     console.log("\n");
// }

console.log("-----------Ex 01----------------");
/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */
const fs = require('fs');

let rawdata = fs.readFileSync('./data.json');
let data = JSON.parse(rawdata);
console.log(data.name);
data.members = [{name: 'jackpham',major: 'developer',job: 'student'}];
let dataStr = JSON.stringify(data);
fs.writeFileSync('./data.json',dataStr);
