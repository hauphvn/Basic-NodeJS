/*
* Write a function count from 1 to 10 return a promise
* */

function countFrom(a,b){
    return new Promise(function (resolve, reject) {
        let i = a;
        let mySetInterval = setInterval(function () {
            console.log(i);
            if (i == b){
                clearTimeout(mySetInterval);
                resolve();
            }
            i++;
        },b);
    });
}

countFrom(1,10).then(function () {
    console.log("Done");
});