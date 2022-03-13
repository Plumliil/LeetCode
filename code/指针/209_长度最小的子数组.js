// 209. 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 
// [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
// 如果不存在符合条件的子数组，返回 0 。


var minSubArrayLen = function (target, nums) {
    const len = nums.length;
    let s = f = sum = 0;
    let ans = len + 1;
    while (f < len) {
        sum += nums[f++];
        while (sum >= target) {
            ans = ans < f - s ? ans : f - s;
            sum -= nums[s++]
        }
    }
    return ans > len ? 0 : ans
};

target = 7, nums = [2, 3, 1, 2, 4, 3];

minSubArrayLen(target, nums)