<<<<<<< HEAD
// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createList(arr) {
    let head = null,
        tail = null;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (!head) {
            head = tail = new ListNode(arr[i]);
        } else {
            tail.next = new ListNode(arr[i]);
            tail = tail.next
        }
    }
    return head
}

// let arr=[2,4,3]

// console.log('createList(arr)',createList(arr));

var mergeTwoLists = function (list1, list2) {
    console.log(list1);
    console.log(list2);
    let head = null,
        tail = null;
    let temp = null;
    while (list1 || list2) {
        if (!head) {
            head=tail=new ListNode(list1.val);
        }else{
            if(head<=list2.val&&list1.next.val<=list2.next.val){
                temp=list1.next;
                list1.next=list2;
                list2.next=temp;
                list1=list1.next;
                list2=list2.next;
            }
        }
    }
    return head
};

l1 = [1, 2, 4], l2 = [1, 3, 4]

// [1,1,2,3,4,4]

let list1 = createList(l1);
let list2 = createList(l2);

console.log(mergeTwoLists(list1, list2));
=======
// 2016. 增量元素之间的最大差值
// 给你一个下标从 0 开始的整数数组 nums ，
// 该数组的大小为n,请你计算nums[j]-nums[i]能求得的最大差值 ，
// 其中 0 <= i < j < n 且 nums[i] < nums[j] 。
// 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力 时间O(n²) 空间O(n)
// var maximumDifference = function (nums) {
//     let len = nums.length;
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         let j = i + 1;
//         for (j; j < len; j++) {
//             if (nums[j] > nums[i]) {
//                 arr.push(nums[j] - nums[i])
//             }
//         }
//     }
//     return arr.length === 0 ? -1 : arr.sort((a, b) => b - a)[0];
// };
// 改进 时间O(n²) 空间O(1)
var maximumDifference1 = function (nums) {
    let len = nums.length;
    let max = null;
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        for (j; j < len; j++) {
            if (nums[j] > nums[i]) {
                if (nums[j] - nums[i] > max) {
                    max = nums[j] - nums[i];
                }
            }
        }
    }
    return max === null ? -1 : max
};

// 时间O(n) 空间O(1)
var maximumDifference = function (nums) {
    let len = nums.length,
        ans = -1,
        premin = nums[0];
    for(let i=1;i<len;i++){
        if(nums[i]>premin){
            ans=Math.max(ans,nums[i]-premin);
        }else{
            premin=nums[i]
        }
    }
    return ans
};

// let nums = [7, 1, 5, 4];
// let nums = [9,4,3,2];
// let nums = [1, 5, 2, 10]
console.log(maximumDifference(nums));
>>>>>>> f4660880e50f45980831bd88836fba8ea821e965
