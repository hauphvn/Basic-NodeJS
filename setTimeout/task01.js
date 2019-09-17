/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
function fnA() {
    console.log("Hello CoderX");
}
function doAfter(fnA, x) {
    setTimeout(fnA,x);
}

doAfter(fnA,3000);