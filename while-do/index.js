console.log("--------ex 01");
/**
 * Sử dụng vòng lặp while in ra màn hình các số chẵn nhỏ hơn 100
 * theo thứ tự giảm dần
 */
let n = 98;
while (n > 0){
    (n % 2 == 0) ? console.log(n) : "";
    n = n -2;
}

console.log("--------ex 02");
/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất 
 * của 3 và 5 trong khoảng từ 0 đến 1000
 */
let i = 1000;
while (i > 0){
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i);
        break;
    }
    i--;
}

console.log("------------ex 03");
/**
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');
var result;
do {
    result = readline.question('Nhập vào mật khẩu');
    if (result == secretPassword){
        result = "Welcome!";
        console.log(result);
        break;
    }else{
        result = "Wrong password";
        console.log(result);
    }
}while (result !== secretPassword);




/**
 * Viết đoạn chương trình yêu cầu người dùng nhập
 * vào mật khẩu (để login vô máy tính chẳng hạn),
 * nếu người dùng nhập sai, hiển thị ra "Wrong password",
 * nhập đúng thì hiển thị ra "Welcome!"
 */

