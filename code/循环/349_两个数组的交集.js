// 349. 两个数组的交集
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。
// 输出结果中的每个元素一定是 唯一 的。
// 我们可以 不考虑输出结果的顺序 。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function (nums1, nums2) {
    if(nums1.length===0||nums2.length===0) return [];
    let len1 = nums1.length;
    let len2 = nums2.length;
    let set = new Set();
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (nums1[i] === nums2[j]) {
                set.add(nums1[i])
            }
        }
    }
    console.log([...set]);
    return set.size > 0 ? [...set] : [];
};


nums1 = [1,2,2,1], nums2 = [2,2]
// nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]


intersection(nums1, nums2)