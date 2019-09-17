/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
const MAX_DAY_OF_BORROW = 15;
var book =[
    {
        id: 0,
        name: "java",
        author: "authorJava"
    },
    {
        id: 1,
        name: "nodejs",
        author: "authorNodejs"
    },
    {
        id: 2,
        name: "golang",
        author: "authorGolang"
    }
];
var reader = [
    {
        id: 0,
        name: 'jack',
        borrowing:[]
    },
    {
        id: 1,
        name: 'bob'
    }
];
var borrow = [
    {
        id: 0,
        listBooks: [],
        id_reader:0,
        startDay: new Date(),
        endDay: (new Date()).setTime((startDay.getTime() + (MAX_DAY_OF_BORROW*1000*60*60*24))),
        status: true,
        returnDay: ""
    }
];

function createReader(){

}
// to be continues......
