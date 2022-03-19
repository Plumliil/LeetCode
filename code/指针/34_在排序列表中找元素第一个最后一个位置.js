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
    if (nums.length === 0 || nums[0] > target || nums[nums.length - 1] < target) return [-1, -1];
    let f = s = ans = 0;
    let len = nums.length;
    while (len-- > 0) {
        if (nums[f] === target) {
            s = f;
            for (; s < nums.length; s++) {
                if (nums[s] === target) {
                    ans = s;
                }
            }
            break;
        } else {
            f++;
        }
    }
    return f > s ? [-1, -1] : [f, ans];
};

nums = [5, 7, 7, 8, 8, 8, 10], target = 8;
// nums = [5,7,7,8,8,10], target = 6;
// nums = [], target = 0;
// nums = [1], target = 0;
// nums=[2,2],target=2
// nums = [1, 4], target = 4



console.log(searchRange(nums, target));




