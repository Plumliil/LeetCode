// 136. 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// // 说明：
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNumber = function(nums) {
//     let len=nums.length;
//     for(let i=0;i<len;i++){
//         // console.log(i,nums.lastIndexOf(nnums[i]));
//         if(i!==nums.lastIndexOf(nums[i])){
//             // console.log(i);
//             let i1=i;
//             let i2=nums.lastIndexOf(nums[i]);
//             console.log(i1,i2);
//             nums.splice(i1,1);
//             console.log(nums);
//             // i=i-2;
//             // i--;
//             // nums.splice(i2,1)
//             // nums.splice(nums.lastIndexOf(nums[i]),1)
//             // console.log(nums.lastIndexOf(nums[i]));
//             // return nums[i]
//         }
//     }
//     return nums
// };

// let arr=[4,1,2,1,2]
// let arr1=[2,2,1]
// console.log(singleNumber(arr1));
// // 输出: 4


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