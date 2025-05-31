"use strict";
//test file
console.log("hello!");
let user01 = {
    name: 'Ivan',
    login: 'Vantuz',
    level: 'junior',
    target: 'GAME',
    age: 15
};
let obj = { a: 10, b: 20, c: 15 };
let i;
for (i in user01) {
    console.log(i + ':' + user01[i]);
}
let fn1 = function (x, y) {
    let str = String(x * y);
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += Number(str[i]);
    }
    return String(res);
};
console.log(fn1(124, 83));
// test new commit
