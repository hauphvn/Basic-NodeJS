('use strict');
console.log("----------Ex 01");

/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request)
 * để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 *
 * Sử dụng console.time và console.timeEnd
 * để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */
var request = require('request');
console.time("Time this");
request('https://randomuser.me/api/', function (error, response, body) {
    console.log('body:', body);
});
console.timeEnd("Time this");

console.log("----------Ex 02");
/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra
 * màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

const axios = require('axios');
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos/1'),
        axios.get('https://jsonplaceholder.typicode.com/todos/2')
    ]).then(axios.spread((todo1Res, todo2Res) => {
        console.log(todo1Res.data);
        console.log(todo2Res.data);
    }));

