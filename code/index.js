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

// 844. 比较含退格的字符串
// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，
// 如果两者相等，返回 true 。# 代表退格字符。
// 注意：如果对空文本输入退格字符，文本继续为空。
var backspaceCompare = function (s, t) {
    function fn(arg) {
        let ans = '';
        let n=0;
        for(let i=arg.length-1;i>=0;i--){
            if(arg[i]==='#'){
                n++
            }else if(n>0){
                n--
            }else{
                ans=ans+arg[i]
            }
        }
        return ans;
    }
    return fn(s)===fn(t)
};
// var backspaceCompare = function(s, t) {
//     function fn(arg) {
//         let str=[...arg];
//         let res=[];
//         for(let i=0;i<str.length;i++){
//             if(str[i]!=='#'){
//                 res.push(str[i])
//             }else{
//                 res.pop()
//             }
//         }
//         return res.join('')
//     }
//     let strs=fn(s);
//     let strt=fn(t);
//     return strs===strt
// };
// s = "ab##", t = "c#d#"
// s = "a#c", t = "b"
// s = "ab#c", t = "ad#c"
s="bxj##tw"
t="bxj###tw"
console.log(backspaceCompare(s, t));