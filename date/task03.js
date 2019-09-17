/**
 * Viết hàm subtractDays trả về 1 ngày
 * trong quá khứ cách ngày được truyền vào n ngày
 */

function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0){
        return true;
    } else if (year % 400 == 0){
        return true;
    } else{
        return false;
    }
}
function subtractDays(date, n) {
    let myDay = new Date(date);
    let lastDay = new Date();
    lastDay.setTime(myDay.getTime() - (n*1000*60*60*24));
    console.log(lastDay);
}

subtractDays(new Date(), 5);

