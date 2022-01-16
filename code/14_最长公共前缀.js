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

