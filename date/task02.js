/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
    let numFirst = (new Date(fromDate)).getTime();
    let numSecond = (new Date(toDate)).getTime();
    return (((numSecond - numFirst)/(1000*60*60*24)).toFixed(0));
}

var start = new Date('2018/05/17');
var end = new Date();

console.log(diff(start, end));

