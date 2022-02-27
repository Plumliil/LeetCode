// 2016. 增量元素之间的最大差值
// 给你一个下标从 0 开始的整数数组 nums ，
// 该数组的大小为n,请你计算nums[j]-nums[i]能求得的最大差值 ，
// 其中 0 <= i < j < n 且 nums[i] < nums[j] 。
// 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。

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