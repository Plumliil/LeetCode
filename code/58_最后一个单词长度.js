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
