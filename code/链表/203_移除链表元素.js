// 203. 移除链表元素
// 给你一个链表的头节点 head 和一个整数 val ，
// 请你删除链表中所有满足Node.val==val的节点,并返回新的头节点 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeElements = function (head, val) {
    let newL=new ListNode(0,head);
    let cur=newL;
    while (cur.next) {
        if(cur.next.val===val){
            cur.next=cur.next.next;
            continue;
        }
        cur=cur.next;
    }
    return newL.next;
};

// head = [6,3,5,6], val = 6
// head = [7, 7, 7, 7], val = 7
// head=[1],val=1
// head = [], val = 1
head = [1, 2, 2, 1], val = 2
// head = [1, 3, 4, 5], val = 3

const {createList} =require('../util/createList')
let nhead = createList(head);
console.log(removeElements(nhead, val));
// console.log(nhead);
