
// 26.有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 栈
// 将括号另一对存在数组里，用到的时候取出来删除
/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function (s) {
    const obj = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    for (let p of s) {
        if (obj[p]) {
            if (stack.pop() !== obj[p]) return false;
        } else {
            stack.push(p);
        }
    }
    return stack.length === 0;
};
// let s = "([]{})";
// let arr = [1, 2, 3, 4, 5]
// // console.log(arr.indexOf(3));
// console.log(isValid(s));
