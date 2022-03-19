// 34_在排序列表中找元素第一个最后一个位置
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
    function range(mid,nums,target,flag) {
        while(nums[mid]===target){
            if(flag){
                mid=mid+1;
            }else{
                mid=mid-1;
            }
        }
        return mid;
    }
    let len = nums.length - 1;
    let l = 0,
        r = len;
    while (l <= r) {
        let mid=Math.floor(l+(r-l)/2);
        if(nums[mid]>target){
            r=mid-1;
        }else if(nums[mid]<target){
            l=mid+1;
        }else{
            let nl,nr;
            
            nl=range(mid,nums,target,false)+1;
            nr=range(mid,nums,target,true)-1;
            console.log(nl,nr);
            return [nl, nr];
        }
    }
    return [-1,-1]
};

nums = [5, 7, 7, 8, 8, 10], target = 8;
// nums = [5,7,7,8,8,10], target = 6;
// nums = [], target = 0;
// nums = [1], target = 0;
// nums=[2,2],target=2
// nums = [1, 4], target = 4

console.log(searchRange(nums, target));
