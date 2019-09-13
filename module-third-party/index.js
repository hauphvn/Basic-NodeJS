/**
 * 1. Check file package.json bạn sẽ thấy module password-generator nằm trong danh sách dependencies
 * 2. Đọc cách dùng module này dưới đây
 * https://www.npmjs.com/package/password-generator
 * 3. Tìm hiểu cách require một 3rd-party module trên repl.it: https://repl.it/site/blog/npm
 * 4. Require module này và tạo ra 1 password ngẫu nhiên có 8 ký tự, dạng dễ nhớ
 */

var generatePassword = require('password-generator');

var myPassword = generatePassword(8);
console.log(myPassword);


console.log("-------------Ex 02---------------");
/**
 * 1. Sử dụng module `markdown` (https://www.npmjs.com/package/markdown) để chuyển đổi đoạn text (viết bằng markdown) sau sang html
 * 2. Tìm hiểu xem markdown là cái gì (dev nên biết về markdown)
 */
var markdown = require('markdown').markdown;
var markdownText = 'Hello *Coders.Tokyo*!';
console.log(markdown.toHTML(markdownText));

console.log("-------------Ex 03---------------");
/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */

/*
* Tìm hiêu sơ về @hapi/joi module
* Cho phép ta thực hiện validate data
* Ví dự ta validating a email do người dùng nhập
* */
// const Joi = require('@hapi/joi');
var readlineSync = require('readline-sync');


//Tạo một schema cho viec validation
// const schema = Joi.object().keys({
//     email: Joi.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
// });
const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
});

var cusEmail = readlineSync.question("Nhap email: ");
var cus = {
    email: cusEmail
};

schema.validate(cus, function (error, value) {
    if (error){
        console.log("Email sai dinh dang");
    }else{
        console.log("Email dung dinh dang");
    }
});
