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
