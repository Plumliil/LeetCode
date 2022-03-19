
// 904. 水果成篮

// 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，其中 fruits[i] 是第 i 棵树上的水果 种类 。

// 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

// 你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
// 你可以选择任意一棵树开始采摘，你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。
//  采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
// 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。
// 给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。


// /**
//  * @param {number[]} fruits
//  * @return {number}
//  */
// var totalFruit = function (fruits) {
//     let start = end = 0;
//     let set=new Set();
//     let ans=0;
//     let len=fruits.length;
//     while(start<len){
//         set.add(fruits[end]);
//         if(set.size<=2){
//             ans=Math.max(ans,end-start+1);
//         }else{
//             let count=1;
//             while(fruits[end-1]===fruits[end-1-count]){
//                 count++;
//             }
//         }
//     }
// };


// // fruits = [1, 2, 3, 2, 2];
// // fruits = [0,1,2,2]
// fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
// totalFruit(fruits)


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