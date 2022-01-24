// 258. 各位相加
// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    if (num < 10) return num
    return num % 9 || 9
};

console.log(addDigits(38));