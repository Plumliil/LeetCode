// 217. 存在重复元素
// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；
// 如果数组中每个元素互不相同，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate1 = function (nums) {
//     let len = nums.length;
//     let arr=[];
//     for (let i = 0; i < len; i++) {
//         if(arr.includes(nums[i])){
//            return true 
//         }else{
//             arr.push(nums[i])
//         }
//     }
//     return false
// };
// var containsDuplicate2 = function (nums) {
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         if(nums.lastIndexOf(nums[i])!==i){
//             return true
//         }
//     }
//     return false
// };
// var containsDuplicate = function (nums) {
//     // let len = nums.length;
//     let map = new Map();
//     for (let i of nums) {
//         if(map.has(i)){
//             return true
//         }else{
//             map.set(i)
//         }
//     }
//     return false
// };
var containsDuplicate = function (nums) {
    // let len = nums.length;
    let map = new Map();
    for (let i of nums) {
        if(map.has(i)){
            return true
        }else{
            map.set(i)
        }
    }
    return false
};
let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
let nums1 = [1, 2, 3, 4];
// 输出：true

console.log(containsDuplicate(nums1));