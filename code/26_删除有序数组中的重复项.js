// 26. 删除有序数组中的重复项
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
// splice方法 消耗内存和时间
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};
// 双指针for 内存消耗较小
var removeDuplicates1 = function (nums) {
    let len = nums.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== nums[j]) {
            nums[++j] = nums[i]
        }
    }
    return j + 1
};
// 双指针while 内存消耗更大
var removeDuplicates2 = function (nums) {
    if (nums && nums.length < 0) {
        return 0
    }
    let low = 0;
    let fast = 1;
    let n = nums.length;
    while (fast < n) {
        // console.log(n);
        if (nums[low] !== nums[fast]) {
            nums[++low] = nums[fast]
        }
        fast++
    }
    return low + 1
};


let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
console.log(removeDuplicates1(nums));
console.log(removeDuplicates2(nums));