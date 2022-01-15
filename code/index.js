// 14.最长公共前缀
// 取出一个 和另外的进行对比
// 两层for循环 第一层控制对比次数 第二层控制对比内容
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < strs[0].length && j < strs[i].length; j++) {
            if (strs[0][j] !== strs[i][j]) {
                break
            }
        }
        ans = ans.substring(0, j);
        if (ans === '')
            return ans;
    }
    return ans;
};

// let arr = ["flower", "flow", "floight"];
// let arr2 = ["dog", "racecar", "car"];
// let arr3 = ['abcd', 'abc'];
// let arr4 = ["cir", "car"];
// let arr5 = ["allowerha", "allowha", "hghtaa"];
// console.log(longestCommonPrefix(arr));


// ==================================================================================


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


// ==================================================================================


// 35.搜索插入的位置
// 二分法
// 比较法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分
var searchInsert = function (nums, target) {
    let l = 0,
        r = nums.length - 1,
        ans = nums.length;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            ans = mid;
            r = mid - 1;
        }
    }
    return ans;
};
// 比较
var searchInsert2 = function (nums, target) {
    let result = nums.indexOf(target);
    if (result === -1) {
        for (let i = 0; i < nums.length; i++) {
            if (target < nums[i]) return i;
        }
        return nums.length
    }
    return result;
};

// let nums = [1, 3, 5],
//     target = 6;
// console.log(searchInsert(nums, target));



// 2129:给你一个字符串 title ，它由单个空格连接一个或多个单词组成，每个单词都只包含英文字母。请你按以下规则将每个单词的首字母 大写 ：

// 如果单词的长度为 1 或者 2 ，所有字母变成小写。
// 否则，将单词首字母大写，剩余字母变成小写。
// 请你返回 大写后 的 title 。

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    title = title.toLowerCase().split(' ');
    for (let i = 0; i < title.length; i++) {
        if (title[i].length > 2) {
            title[i] = title[i][0].toUpperCase() + title[i].slice(1, title[i].length)
        } else {
            title[i] = title[i]
        }
    }
    return title.join(' ');
};
// let title = "i capiTalIze tHe titLe";
// console.log(capitalizeTitle(title));

// 28. 实现 strStr()
// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
};
// let haystack = "hello", needle = "ll";
// // let haystack = "aaaaa", needle = "bba";
// // let haystack = "", needle = "";
// console.log(strStr(haystack,needle));

// 58. 最后一个单词的长度
// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

/**
 * @param {string} s
 * @return {number}
 */
// 反向遍历
// trim()方法
var lengthOfLastWord = function (s) {
    s = s.trim().split(' ');
    return s[s.length - 1].length
    // for(let i=s.length-1;i>=0;i--){
    //     if(s[i]!==''){
    //         return s[i].length
    //     }
    // }    
};
// let s = "   fly me   to   the moon  ";
// // let s = "Hello World";

// console.log(lengthOfLastWord(s));


// 66. 加一
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
//  var plusOne = function(digits) {
//     const len = digits.length;
//     for(let i = len - 1; i >= 0; i--) {
//         digits[i]++;
//         digits[i] %= 10;
//         if(digits[i]!=0)
//             return digits;
//     }
//     digits = [...Array(len + 1)].map(_=>0);;
//     digits[0] = 1;
//     return digits;
// };

// let digits = [9,9];
// // let digits = [4,3,2,1];
// console.log(plusOne(digits));
// // console.log(8%10);