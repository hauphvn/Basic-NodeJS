/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại,
 * có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên
 * (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả)
 * hoặc 1 phần số điện thoại
 */
'use strict';
var contacts = [];
var readlineSync = require('readline-sync');
const pathFile = './contact.json';
const fs = require('fs');
var fileData = fs.readFileSync(pathFile);

function showMenu() {
    console.log("1. Entering into a new contact");
    console.log("2. Fixing a contact");
    console.log("3. Deleting a contact");
    console.log("4. Finding a contact");

    let choose = readlineSync.question("> ");
    switch (choose) {
        case '1':
            enteringData();
            showMenu();
            break;
        case '2':
            let number1 = (readlineSync.question("Enter into a number phone: "));
            updateData(number1);
            showMenu();
            break;
        case '3':
            let number2 = (readlineSync.question("Enter into a number phone: "));
            deleteData(number2);
            showMenu();
            break;
        case '4':
            findData();
            showMenu();
            break;
        default:
            break;
    }
}

function loadData() {
    contacts = JSON.parse(fileData);
}

function enteringData() {
    let name = (readlineSync.question("Your name: ")).toLowerCase();
    let phone = (readlineSync.question("Your phone: "));
    let contact = {
        name: name,
        phone: phone
    };
    contacts.push(contact);
    let json = JSON.stringify(contacts);
    fs.writeFileSync(pathFile, json);
}

function updateData(phone) {
    let index = 0;
    var contact = contacts.find(function (item) {
        if (item.phone === phone) {
            return true;
        } else {
            index++;
            return false;
        }
    });

    if (typeof (contact) == "undefined") {
        console.log("Number is not exists");
    } else {
        console.log("Enter into new information: ");
        contacts[index].name = (readlineSync.question("Your name: ")).toLowerCase();
        contacts[index].phone = (readlineSync.question("Your phone: "));
        let json = JSON.stringify(contacts);
        fs.writeFileSync(pathFile, json);
    }
}

function deleteData(number2) {
    let index = 0;
    var contact = contacts.find(function (item) {
        if (item.phone === number2) {
            return true;
        } else {
            index++;
            return false;
        }
    });

    if (typeof (contact) == "undefined") {
        console.log("Number is not exists");
    } else {
        contacts.splice(index,1);
        let json = JSON.stringify(contacts);
        fs.writeFileSync(pathFile, json);
    }
}

function findData() {
    console.log("1. Finding by name: ");
    console.log("2. Finding by number phone: ");
    let chose = readlineSync.question("> ");

    switch (chose) {
        case '1':
            let name = (readlineSync.question("Name: ")).toLowerCase();
            let resultListByName = contacts.filter(function (item) {
                return item.name === name;
            });
                console.log("---------Results list---------");
                for (let x of resultListByName){
                    console.log(x. name+" : "+ x.phone);
                }
                console.log("---------//---------");
            break;
        case '2':
            let phone = ((readlineSync.question("Phone: ")));
            let resultListByPhone = contacts.filter(function (a) {
                return a.phone.search(phone) === 0;
            });
                console.log("---------Results list---------");
                for (let x of resultListByPhone){
                    console.log(x. name+" : "+ x.phone);
                }
                console.log("---------//---------");
            break;
    }
}

function main() {
    loadData();
    showMenu();

}

main();