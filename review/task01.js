// Viết hàm đảo ngược chuỗi
/*function reverse(str) {
    let result = "";
    let len = str.length;
    for (let i = len - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

console.log(reverse("jack pham"));*/

// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
/*
function capitalize(str) {
    var result = "";
    let len = str.length;
    if (str[0] >= 'a' && str[0] <= 'z'){
        result += String.fromCharCode(str.charCodeAt(0) - 32);
    }else{
        result += str[0];
    }
    for (let i = 1; i < len; i++){
        if (str[i] >= 'a' && str[i] <= 'z'){
            if (str[i-1] == ' '){
                result += String.fromCharCode(str.charCodeAt(i) - 32);
            }else{
                result += str[i];
            }
        }else{
            result += str[i];
        }
    }

    return result;
}

console.log(capitalize("jack pham"));*/


// Viết hàm lấy extension của một file

/*
function getExtensionFilename(filename) {
    let result = "";
    let index = -1;
    let len = filename.length;
    for (let i = len - 1; i >= 0; i--) {
        if (filename[i] === '.'){
            index = i + 1;
            break;
        }
    }
    if (index !== -1){
        for (let i = index; i < len; i++){
            result += filename[i];
        }
    }
    return result;
}

console.log(getExtensionFilename('hauphvn.doc'));*/

// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
/*
function findMax(a,b,c){
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c)
}

console.log(findMax(-6,5,34));
*/

// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
/*
function startWith(str){
    let strMatch = 'Java';
    let lenMath = strMatch.length;
    let len = str.length;
    if (len >= lenMath){
        for (let i = 0; i < lenMath ; i++){
            if (strMatch[i] !== str[i]){
                return false;
            }
        }
    }
    return true;
}

console.log(startWith("Jdava fsdfds dfsdf"));*/

/*
function findMaxDiff(arr) {
    /!*
      - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  *!/
    let result = 0;
    let len = arr.length;
    let temp = 0;
    if (len >= 2){
        arr.reduce(function (a, b) {
            temp = Math.abs(b - a);
            if (temp > result){
                result = temp;
            }
            return b;
        },0)
    }
    return result;
}

console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));*/

//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

/*
function equal_pt(str){
    let countCharP = 0;
    let countCharT = 0;
    let len = str.length;
   if (len < 1){
       let result = 'empty string';
       return result;
   }else{
       for (let i = 0; i < len; i++){
           switch (str[i]) {
               case 'p':
                   countCharP++;
                   break;
               case 't':
                   countCharT++;
                   break;
           }
       }
       if ((countCharT - countCharP) === 0) {
           return true;
       }
       return false;
   }
}

console.log(equal_pt(''));*/

/*
function first(array, n) {
    // viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì
    // trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
    // Tham số:
    //	- array: mảng gốc
    //	- n: số phần tử trả về

    let len = array.length;
    let result = [];
    let lenForLoop = Math.min(n, len);
    if (isNaN(lenForLoop)){
        if (len > 0){
           return array[0];
        }
    } else{
        for (let i = 0; i < lenForLoop; i++){
            result.push(array[i]);
        }
    }

    return result;
}

console.log((first([7, 9, 0, -2])));*/

/*
function omitCharAt(str, n) {
    //Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
    //Lưu ý cho chuối 'abcd' :
    // 		element    'a'|'b'|'c'|'d'
    //		index 	    0	|	1	|	2	|	3
    //  n = 4 thì chuỗi trả về là 'acd'
    //  n = 1 ------------------- 'acd'
    //  n = 2 ------------------- 'abd'



}
console.log(omitCharAt("Hello Quang Dat", 8));*/
/*

function nearestTo100(a, b){
    return (Math.abs(100 - a) > Math.abs(100 -b)) ? b : a;
}

console.log(nearestTo100(89,170));*/
/*
function checkInt(number1, number2) {
    // Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào.
    // Nếu có 1 số âm và một số dương thì trả về true. Các trường hợp khác trả về false. Số 0 là số không âm cũng không dương
    // Tham số:
    // - number1: số nguyên thứ nhất
    // - number2: số nguyên thứ hai
    return (number1 * number2 < 0) ? true : false;
}

console.log(checkInt(-1, 2));//true
console.log(checkInt(2, 6));//false*/

/*function difference(n) {
//Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
    return (n > 13) ? ((n - 13) * 2) : (13 - n);
}

console.log(difference(19));//12
console.log(difference(3));//10
console.log(difference(1));//12
console.log(difference(20));//14*/

/*function pyString(String) {
    // Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
    // Tham số:
    // - String: chuỗi nhập vào lúc đầu.
    if (String.length >= 2){
        if (String[0] === 'P' && String[1] === 'y') {
            return String;
        }else{
            let result = "Py";
            result += String;
            return result;
        }
    }
}

console.log(pyString("Coders Tokyo"));//PyCoders Tokyo
console.log(pyString("PyHello"));//PyHello*/

/*
function toNextChar(str) {
    // Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
    // Tham số:
    // - String: chuỗi nhập vào ban đầu.
    let result = "";
    let len = str.length;
    for (let i = 0; i<len;i++){
        // console.log(str.charCodeAt(i));
        result += (String.fromCharCode(str.charCodeAt(i) + 1));
    }
    return result;
}
console.log(toNextChar('Hello'));//Ifmmp*/

/*
function newString(str, n) {
    let strTop = "";
    let strBottom = "";
    let len = str.length;
    if (len >= n) {
        for (let i = 0,j = len - n; i < n; i++,j++){
            strTop += str[i];
            strBottom += str[j];
        }
        strTop += strBottom;
    }
    return strTop;
}

// make New string from n character top and bottom from old string
console.log(newString('describle', 2));//dele
console.log(newString('describle', 5));//descrrible
*/

/*function middleArray(arr1,arr2){
    let result = [];
    result.push(arr1[1]);
    result.push(arr2[1]);
    return result;
}
// Make new array form the middle element of two array has length is 3'
console.log(middleArray([1,3,2],[4,5,6]));//[3,5]*/

/*function maxOfSumChain(arr,k){
    let len = arr.length;
    let sum = 0;
    let max = 0;
    let flag = 0;
    if (k <= len){
       for (let i = 0; i <= len - k; i++) {
           // console.log(maxOfSumChain([1,3,2,6,2],3))//11
           sum = 0;
           for (let j = i; flag < k; j++,flag++){
               sum += arr[j];
           }
           if (flag != 0){
               max = (max < sum) ? sum : max;
               flag = 0;
           }
       }

    }
    return max;
}
// Maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers'
console.log(maxOfSumChain([1,3,2],2))//5
// console.log(maxOfSumChain([1,3,2,6,2],3))//11*/
// console.log(maxOfSumChain([1,3,3,-2,4,9,6,2],5))//11

/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/
/*
function findMostFrequent(arr) {
// Viêt hàm tại đây!
    let len = arr.length;
    let result = [];
    result.push(arr[0]);
    let countMax = 1;
    let flag = 0;
    let count = 0;
    for (let i = 0; i < len - 1; i++) {
        count = 1;
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (arr[i] !== result[flag]) {
            if (count === countMax) {
                result.push(arr[i]);
                flag++;
            } else if (count > countMax) {
                result = [];
                result.push(arr[i]);
                countMax = count;
            }
        } else {
            countMax = (countMax < count) ? count : countMax;
        }
    }
    return result;
}*/

// console.log(findMostFrequent([1,2,3,4,1,2,2]));//[2]
// console.log(findMostFrequent([1, 1, 2, 2, 1]));//[1]
// console.log(findMostFrequent([ 0, 16, 23, 10, 7, 32, 36, 5, 38, 7, 31, 13, 23, 16, 14, 26, 13, 37, 36, 26 ]));//[7, 13, 16, 23, 26, 36]
// console.log(findMostFrequent([  11, 18, 28, 9, 25, 25, 33, 1, 0, 13, 10, 7, 39, 37, 31 ]));//[ 25 ]

/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

/*function rearrangeChar(str1, str2) {
// Viết hàm tại đây!
    let len1 = str1.length;
    let len2 = str2.length;
    let result = false;
    let i = 0;
    let count = 0;
    if (len1 === len2){
        for (i = 0; i < len1; i++) {
            count = 0;
            for (let j = 0;j< len2;j++){
                if (str1[i] === str2[j]){
                    count = 1;
                    break;
                }
            }
            if (count === 0){
                break;
            }
        }
    }
    if (i === len1 ){
        result = true;
    }
    return result;
}*/

// console.log(rearrangeChar('afaw','afaw'));//true
// console.log(rearrangeChar('fgagaawef23423','haefawf'));//false
// console.log(rearrangeChar('awef23f','n65u2r'));//false
// console.log(rearrangeChar('a32rbvw3','23berg'));//false

/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
    let len = arr.length;
    let result = 0;
    let temp = 0;
    for (let i = 0; i < len - 1; i++)
    {
        for (let j = i;j< len;j++) {
            temp = Math.abs(arr[i] - arr[j]);
            result = (result < temp) ? temp : result;
        }
    }
    return result;

}

console.log(findmaxDiff([1, 2, 3, 8, 9]));//8
console.log(findmaxDiff([1, 2, 3, 18, 9]));//17
console.log(findmaxDiff([13, 2, 3, 8, 9]));//11