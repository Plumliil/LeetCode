// 125. 验证回文串
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。
// reverse()
// indexOf()判断两边
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let strs = s.toLowerCase().match(/[a-z0-9]+/g);
    if (!strs) return true;
    let str = strs.join('');
    let comp = str.split('').reverse().join('');
    return str === comp;
};
var isPalindrome1 = function (s) {
    let strs = s.toLowerCase().match(/[a-z0-9]+/g)
    if (!strs) return true;
    let len = strs.length,
        str = '';
    for (let i = 0; i < len; i++) {
        str += strs[i]
    }
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.indexOf(str[str.length - i - 1])) return false;
    }
    return true
};
var isPalindrome2 = function (s) {
    let strs = s.toLowerCase().match(/[a-z0-9]+/g).join('')
    if (!strs) return true;
    let arr=[];
    console.log(strs);
    for(let i=0;i<strs.length;i++){
        if(arr.includes(strs[i])){
            console.log(arr.includes(strs[i]));
            if(arr.pop()!==strs[i]) return false
        }else{
            arr.push(strs[i])
        }
    }
    console.log(arr);
    console.log(strs);
    return true
};


let str1 = "A man, a plan, a canal: Panama";
let str2 = "race a car";
console.log('1', isPalindrome(str1));
console.log('2', isPalindrome1(str1));
console.log('3', isPalindrome2(str1));