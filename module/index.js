// -------------ex 01--------------
console.log("// -------------ex 01--------------");
/**
 * 1. Require module math
 * 2. Sử dụng method `add` để tính tổng 2 số bất kì
 * 3. Log ra kết quả phép tính tổng ở trên
 */

var math = require('./math');

console.log(math.add(4,5));

// -------------ex 02--------------
console.log("// -------------ex 02--------------");
/**
 * 1. Thêm method multiply vào module `math` nhận vào 2 số bất kì, trả về tích 2 số
 * 2. Require module math và tính tích 2 số bất kì dùng method multiply đã tạo ở trên
 * 3. Log ra kết quả
 */

console.log(math.multiply(5,6));


// -------------ex 03--------------
console.log("// -------------ex 03--------------");
/**
 * 1. Thêm method `sum` cho module `math`, nhận vào 1 array các số, trả về tổng các số
 * 2. Require module math và sử dụng method sum để tính tổng 1 array các số bất kì
 * 3. Log kết quả
 */

var arr = [1,2,3,4,5,5];
console.log(math.sum(arr));

// -------------ex 04--------------
console.log("// -------------ex 04--------------");

/**
 *  1. Tạo module `circle.js` export 1 constructor function tên là Circle
 *  2. Circle có 3 property là x, y, radius (toạ độ x, y và bán kính)
 *  3. Circle có 1 method là isOverlapped (overlap là chồng lấn, đè lên nhau), trả về -1 nếu 2 hình tròn này đè lên nhau, trả về 1 nếu 2 hình tròn không đụng nhau, trả về 0 nếu 2 hình tròn tiếp xúc nhau.
 *  4. Test thử
 */
var Circle = require('./circle');
var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);
console.log(circle1.isOverlapped(circle2));

var circle3 = new Circle(0, 0, 3);
console.log(circle1.isOverlapped(circle3));

var circle4 = new Circle(5, 5, 1);
console.log(circle1.isOverlapped(circle4));