// var fs = require('fs');
// var co = require('co');
//
// function readFilePromise(path) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(path, {encoding:'utf-8'}, function (err, data) {
//             if (err){
//                 reject(err);
//             } else{
//                 resolve(data);
//             }
//         });
//     });
// }

// co(function* () {
// Cach 1:
// var data1 = yield readFilePromise('input1.txt');
// var data2 = yield readFilePromise('input2.txt');
// return [data1,data2];
// Cach 2
//     var listData = yield [
//         readFilePromise('input1.txt'),
//         readFilePromise('input1.txt')
//     ];
//     return listData;
//
// }).then(function (values) {
//     console.log(values);
// }).catch(function (err) {
//     console.log(err);
// });

//Truong hop ta muon co return 1 function:
// var readFiles = co.wrap(function* (files) {
//     var values = yield files.map(function (item) {
//         return readFilePromise(item);
//     });
//     return values;
// });
// readFiles(['input1.txt', 'input2.txt'])
//     .then(function (values) {
//         console.log(values);
//     }).catch(function (err) {
//         console.log(err);
// });
/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
];
var co = require('co');
var axios = require('axios');

// function readUrls(path){
//     return new Promise(function (resolve, reject) {
//         axios.get(path, function (response) {
//             resolve(response);
//         })
//     })
// }
// Cách 1: Sử dụng vòng lặp for
var data = [];
// for (item of urls){
//     axios.get(item)
//         .then(function (value) {
//             // console.log(value.data);
//             data.push(value.data);
//             console.log(data.length);
//         });
// }

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

var download =  co.wrap(function* (urls){
    var values = yield urls.map(function (item) {
        return axios.get(item);
    });
    return values;
});
download(urls)
    .then(function (x) {
        data.push(x);
        console.log(x);
    }).catch(function (err) {
    console.log(err);
});

//Truong hop ta muon co return 1 function:
// var readFiles = co.wrap(function* (files) {
//     var values = yield files.map(function (item) {
//         return readFilePromise(item);
//     });
//     return values;
// });
// readFiles(['input1.txt', 'input2.txt'])
//     .then(function (values) {
//         console.log(values);
//     }).catch(function (err) {
//         console.log(err);
// });