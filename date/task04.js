/**
 * Tính số ms chênh lệch giữa 2 date object bất kì
 */
function diffMs(a, b) {
    let firstDate = new Date(a);
    let secondDate = new Date(b);
    return Math.abs(firstDate.getTime() - secondDate.getTime());
}
// viết ví dụ để kiểm tra

let day01 = new Date('2019/09/17');
let day02 = new Date('2019/09/16');
console.log(diffMs(day01,day02));