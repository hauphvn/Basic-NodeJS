var fs = require('fs');
var axios = require('axios');

// fs.readFile(
//     './data.json',
//     { encoding: 'utf8'},
//     function(err, data) {
//         console.log('Data loaded from disk', data);
//
//         axios.get('https://jsonplaceholder.typicode.com/todos/1')
//             .then(function(res) {
//                 console.log('Data downloaded from url', res.data);
//             });
//     }
// );

/**
 * Sử dụng async await kết hợp với Promise
 * để viết lại đoạn code trên.
 * Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */
function readFile(path){
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, data) {
            if (err){
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}

async function readFileAsync() {
    let dataHardware = await readFile('data.json');
    let dataUrl;
    await (axios.get('https://jsonplaceholder.typicode.com/todos/1')).then(function (response) {
        dataUrl = response.data;
    });

    return [dataHardware, dataUrl];
}

readFileAsync().then(function (values) {
    console.log(values);
}).catch(function (err) {
    console.log(err);
});