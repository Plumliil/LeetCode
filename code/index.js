// // // 19.删除链表的倒数第N个结点
// // // 给你一个链表,删除链表的倒数第n个结点,并且返回链表的头结点。


// var removeNthFromEnd = function (head, n) {
//     if (!head) return head;
//     function getLen(head) {
//         let n = 1;
//         while (head.next) {
//             head = head.next;
//             n++
//         }
//         return n
//     }
//     let len = getLen(head);
//     let cur = head;
//     if (!head.next) return null;
//     for (let i = 1; i < len; i++) {
//         if (len - i === n) {
//             if (cur.next.next) {
//                 cur.next = cur.next.next;
//                 return head
//             }
//             cur.next = null;
//             return head;
//         } else {
//             cur = cur.next
//         }
//     }
// };

// const { createList } = require('./util/createList')
// // head = [1,3,4], n = 2;
// // head = [1, 2], n = 1;
// head = [1], n = 1;
// let newHead = createList(head);

// console.log(removeNthFromEnd(newHead, n));

// // console.log(newHead);

// // 203. 移除链表元素
// // 给你一个链表的头节点 head 和一个整数 val ，
// // 请你删除链表中所有满足Node.val==val的节点,并返回新的头节点 。

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */

// // /**
// //  * @param {ListNode} head
// //  * @param {number} val
// //  * @return {ListNode}
// //  */
// // var removeElements = function (head, val) {
// //     if (!head) return head
// //     let cur = head;
// //     while (cur) {
// //         if (cur.next) {
// //             if (head.val === val) {
// //                 head = head.next;
// //             }
// //             if (cur.next.val === val) {
// //                 if (cur.next.next) {
// //                     let temp=cur.next;
// //                     cur.next = cur.next.next;
// //                     cur=temp;
// //                 } else {
// //                     cur.next = null
// //                 }
// //             }
// //         }
// //         cur=cur.next;

// //     }
// //     return head.val === val ? null : head;
// // };

// // // head = [6,3,5,6], val = 6
// // // head = [7, 7, 7, 7], val = 7
// // // head=[1],val=1
// // // head = [], val = 1
// // head = [1, 2, 2, 1], val = 2
// // // head = [1, 3, 4, 5], val = 3

// // let nhead = createList(head);
// // console.log(removeElements(nhead, val));
// // // console.log(nhead);



// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// // while循环
// var reverseString = function (s) {
//     let temp = null;
//     let i=0,
//         len=s.length,
//         n=len/2;
//     while(i<n){
//         temp=s[i];
//         s[i]=s[len-i-1];
//         s[len-i-1]=temp
//         i++;
//     }
//     console.log(s);
//     return s
// };


// 209. 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 
// [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
// 如果不存在符合条件的子数组，返回 0 。


var minSubArrayLen = function (target, nums) {
    const len = nums.length;
    let s = f = sum = 0;
    let ans = len + 1;
    while (f < len) {
        sum += nums[f++];
        while (sum >= target) {
            ans = ans < f - s ? ans : f - s;
            sum -= nums[s++]
        }
    }
    return ans > len ? 0 : ans
};

target = 7, nums = [2, 3, 1, 2, 4, 3];

minSubArrayLen(target, nums)