// 219. 存在重复元素 II
// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 
// i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；
// 否则，返回 false 。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 内存低，用时高
// 滑动数组
// 哈希表
var containsNearbyDuplicate = function (nums, k) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = len - 1; j > i; j--) {
            if (nums[i] === nums[j]) {
                if (Math.abs(j - i) <= k) {
                    return true;
                }
            }
        }
    }
    return false
};
var containsNearbyDuplicate1 = function (nums, k) {
    let len = nums.length;
    let set = new Array(k);
    for (let i = 0; i < len; i++) {
        if (!set.includes(nums[i])) {
            set.push(nums[i]);
            if (set.length > k) {
                set.splice(0, 1);
            }
        } else {
            return true
        }
    }
    return false
};

var containsNearbyDuplicate2 = function (nums, k) {
const set = new Set();
for(let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])) {
        return true;
    }
    set.add(nums[i]);
    if(set.size > k) {
        set.delete(nums[i - k]);
    }
}
return false;
}

let nums = [1, 2, 3, 1],
    k = 3;
let nums2 = [1, 0, 1, 1],
    k2 = 1;
let nums3 = [1, 2, 3, 1, 2, 3],
    k3 = 2;
let nums4 = [1],
    k4 = 1;

console.log(containsNearbyDuplicate1(nums, k));

// console.log(nums4.indexOf(1));
// console.log(nums4.lastIndexOf(1));