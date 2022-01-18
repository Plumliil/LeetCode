// 387. 字符串中的第一个唯一字符
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。


/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
};

let s1 = "leetcode"
// 返回 0

let s2 = "loveleetcode"
// 返回 2

let s3 = 'llllll'

let s4 = 'aabb'
console.log(firstUniqChar(s3));