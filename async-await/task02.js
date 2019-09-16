const axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1. Có sử dụng await trong vòng lặp nên biến res phải đợi có kết quả trả về nó mới
// chạy qua url tiếp theo.
// Hàm 1 không chạy callback nên thời gian chạy sẽ lâu hơn.
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

// 2. Như ta biết thì map method là một callback, mà ở đây có sử dụng Promise để gom
// tấc cả các promise trả ra của map method, nên có thể chạy song song, dẫn đến hàm 2 chạy nhanh hơn hàm 1.
async function fetchUrlsParallel(urls) {
    const results = await Promise.all(
        urls.map(function(url) {
            return axios.get(url);
        })
    );
    return results;
}

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

console.time("Normal time: ");
fetchUrls(urls).then(() => console.log('Done'));
console.timeEnd("Normal time: ");
console.time("Parallel time: ");
fetchUrlsParallel(urls).then(() => console.log('Done 2'));
console.timeEnd("Parallel time: ");