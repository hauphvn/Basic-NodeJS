var a = 1;

var b = {
    a: 2,
    foo: function() {
        console.log(this.a);
    }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
/*
* At foo function use this keyword, so program will get 'a' variable inside itself.
* In other way, at row 10, we call the foo func 'a' variable was already initialized.
* At row 12, fooCopy was just assigned to the foo function of b, so 'a' var is not initialized.
* */