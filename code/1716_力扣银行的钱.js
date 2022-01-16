// 1716. 计算力扣银行的钱
// Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱。
// 最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。
// 在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。
// 给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。

// 遍历求和
// 等差数列求和

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let num = 0;
    let res = null;
    for (let i = 1; i <= n; i++) {
        if (i <= 7) {
            res += i + num;
        } else {
            n = n - 7;
            i = 0;
            num += 1;
        }
    }
    return res
};
var totalMoney1 = function (n) {
    let weeks = Math.floor(n / 7);
    let days = n % 7;
    console.log('weeks', weeks);
    console.log('days', days);
    return n % 7 === 0 ?
        28 * weeks + weeks * (weeks - 1) / 2 * 7 :
        weeks * 28 + weeks * (weeks - 1) / 2 * 7 + days * (2 * weeks + days + 1) / 2;

};
let n1 = 4,
    n2 = 10,
    n3 = 20;
console.log('++', totalMoney(175));
console.log('--', totalMoney1(175));