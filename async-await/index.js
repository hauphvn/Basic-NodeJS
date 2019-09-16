var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path,{encoding: 'utf-8'}, function (err, data) {
            if (err){
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}

//Neu ta khong dung node-co, generator function, yield, ta co the su dung tu khoa async
async function readFileAsync() {
    let data1 = await readFilePromise('../Test/input.txt');
    let data2 = await readFilePromise('../Test/input1.txt');
    let data3 = await readFilePromise('../Test/input2.txt');

    return [data1, data2, data3];
}

readFileAsync().then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});