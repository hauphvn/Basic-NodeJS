console.log("----------Ex 01------------");

/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    let index = 0;
    for (let i = 1; i< arr.length; i++){
        if (arr[index] < arr[i]){
            index = i;
        }
    }
    console.log(arr[index]);

}

max([5, 6, 9]); // 9

console.log("----------Ex 02------------");

/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
    if (typeof (x) == "boolean"){
        return x;
    } else if (typeof (x) == "string") {
        if (x == ''){
            return false;
        }
        return true;
    } else if (typeof (x) == "undefined"){
        return false;
    }else if (typeof (x) == "object") {
        return false;
    }else if (typeof (x) == "number"){
        console.log("vao so");
        if (x == 0 || isNaN(x)){
            return false;
        }
        return true;
    }
    else {return true;}
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([]));
console.log(isTruthy(1));

console.log("----------Ex 03------------");

/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
    if (score >=0){
        if (score >= 0 && score < 5){
            return 'C';
        } else if (score >= 5 && score < 7){
            return 'B';
        } else if (score >= 7 && score <= 10){
            return 'A';
        }
    }
}

console.log(grade(4)); // C
console.log(grade(5)); // B