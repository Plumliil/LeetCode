// 977. 有序数组的平方
// 给你一个按 非递减顺序 排序的整数数组 nums，
// 返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 暴力
// var sortedSquares = function (nums) {
//     let res=nums.map(item=>Math.pow(item,2));
//     return res.sort((a,b)=>a-b)
// };
// 双指针
var sortedSquares = function (nums) {
    let len=nums.length-1;
    let l=0;
    let r=len;
    let res=[]
    while(l<=r){
        let pl=Math.pow(nums[l],2);
        let pr=Math.pow(nums[r],2);
        if(pl<pr){
            res[len--]=pr;
            r--;
        }else{
            res[len--]=pl;
            l++
        }
    }
    return res
};
nums = [-4, -1, 0, 3, 10]
sortedSquares(nums)