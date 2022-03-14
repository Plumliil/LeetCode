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

// 904. 水果成篮

// 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，其中 fruits[i] 是第 i 棵树上的水果 种类 。

// 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

// 你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
// 你可以选择任意一棵树开始采摘，你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。
//  采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
// 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。
// 给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。


/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let start = end = 0;
    let set=new Set();
    let ans=0;
    let len=fruits.length;
    while(start<len){
        set.add(fruits[end]);
        if(set.size<=2){
            ans=Math.max(ans,end-start+1);
        }else{
            let count=1;
            while(fruits[end-1]===fruits[end-1-count]){
                count++;
            }
        }
    }
};


// fruits = [1, 2, 3, 2, 2];
// fruits = [0,1,2,2]
fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
totalFruit(fruits)
