var a = 1;

function foo() {
    var a = 2;
    return a;
}

function bar() {
    a = 2;
    return a;
}

foo();
console.log(a); // Kết quả? 1
bar();
console.log(a); // Kết quả? 2
// Giải thích vì sao kết quả dòng 14
// lại khác 16 bằng tiếng Việt hoặc tiếng Anh
/*
* Because foo func created a new variable inside itself, so that variable is local scope.
* The bar func used global scope variable so that action have made value of 'a'.
* */