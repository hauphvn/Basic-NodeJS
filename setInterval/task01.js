/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s,
 * sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
    let myInterval = setInterval(function () {
        if (x == 0){
            clearTimeout(myInterval);
            console.log("Happy new year");
        }else{
            console.log(x);
            x--;
        }
    },1000);

}

countDown(5);

