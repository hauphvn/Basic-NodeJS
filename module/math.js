function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function sum(arr){
    var result = 0;
    for (x of arr){
        result += x;
    }
    return result;
}

module.exports = {add,multiply, sum};