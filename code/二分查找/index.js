// 34. 在排序数组中查找元素的第一个和最后一个位置


// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums === []) return [-1, -1]
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] > target) {
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            if (nums[mid] === nums[mid - 1]) {
                return [mid - 1, mid]
            } else if (nums[mid] === nums[mid + 1]) {
                return [mid, mid + 1]
            } else {
                return [mid, mid]
            }
        }
    }
    return [-1, -1]
};
// nums = [5, 7, 7, 8, 8, 10], target = 8;
// nums = [5,7,7,8,8,10], target = 6
nums = [], target = 0

console.log(searchRange(nums, target));