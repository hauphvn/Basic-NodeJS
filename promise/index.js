// var fs = require('fs');
//
// function readFileTest(path) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(path,{encoding:'utf-8'}, function (err, data) {
//             if (err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }
//
// readFileTest('input.txt')
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (error) {
//     console.log(error);
// });

// ------------------------------------------

var request = require('request');


 // * Viết function `load` nhận vào 1 tham số là 1
 // * đường link dạng string, trả về 1 promise sao cho khi gọi:
 // * load('some url').then(function(body) {
 // *   console.log('Done', body);
 // * });
 // * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 // * Sau 30' không làm được thì có thể lên Slack hỏi
 // */

function  load(path) {
    return new Promise(function (resolve, reject) {
        request(path, function (error, response, body) {
            if (error){
                reject(error);
            }else{
                resolve(body);
            }
        });
    });
}

load('https://jsonplaceholder.typicode.com/todos/1')
.then(function (body) {
    console.log('Done', body);
})
.catch(function (err) {
    console.log(err);
});