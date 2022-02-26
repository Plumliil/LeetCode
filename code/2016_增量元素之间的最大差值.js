// 258. 各位相加
// 给定一个非负整数 num，反复将各个位上的数字相加，
// 直到结果为一位数。

/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力 时间O(n²) 空间O(n)
// var maximumDifference = function (nums) {
//     let len = nums.length;
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         let j = i + 1;
//         for (j; j < len; j++) {
//             if (nums[j] > nums[i]) {
//                 arr.push(nums[j] - nums[i])
//             }
//         }
//     }
//     return arr.length === 0 ? -1 : arr.sort((a, b) => b - a)[0];
// };
// 改进 时间O(n²) 空间O(1)
var maximumDifference1 = function (nums) {
    let len = nums.length;
    let max = null;
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        for (j; j < len; j++) {
            if (nums[j] > nums[i]) {
                if (nums[j] - nums[i] > max) {
                    max = nums[j] - nums[i];
                }
            }
        }
    }
    return max === null ? -1 : max
};

// 时间O(n) 空间O(1)
var maximumDifference = function (nums) {
    let len = nums.length,
        ans = -1,
        premin = nums[0];
    for(let i=1;i<len;i++){
        if(nums[i]>premin){
            ans=Math.max(ans,nums[i]-premin);
        }else{
            premin=nums[i]
        }
    }
    return ans
};

// let nums = [7, 1, 5, 4];
// let nums = [9,4,3,2];
let nums = [1, 5, 2, 10]
console.log(maximumDifference(nums));