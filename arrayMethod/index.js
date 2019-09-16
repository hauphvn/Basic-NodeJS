console.log("-------------Task 06");

function has(array, value) {
    for (item of array){
        if (item === value){
            return true;
        }
    }
    return false; //value is not exists
}
// Testing
console.log(has([1,2,3], 1))// expect : true
console.log(has([1,2,3], 4))// expect : false
