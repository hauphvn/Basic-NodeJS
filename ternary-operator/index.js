console.log("------------Ex 01--------------");

var age = 19;
var canDrive;

// Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
// if (age > 16) {
//     canDrive = 'yes';
// } else {
//     canDrive = 'no';
// }

// Viết lại ở đây
age > 16 ? canDrive = 'yes' : canDrive = 'no';
console.log(canDrive);

console.log("------------Ex 02--------------");
// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
    var b;
    if (a > 0) {
        b = 1;
    } else if (a < 0) {
        b = 2;
    } else {
        b = 3;
    }
    return b;
}

function doSomethingTernary(a) {
    var b;
    a > 0 ? (b = 1) : (a<0 ? b = 2: b = 3);
    return b;
}

// Test 2 hàm trên với cùng đầu vào
console.log(doSomething(-1));
console.log(doSomethingTernary(-1));

console.log("---------");
console.log(doSomething(1));
console.log(doSomethingTernary(1));

console.log("---------");
console.log(doSomething(0));
console.log(doSomethingTernary(0));