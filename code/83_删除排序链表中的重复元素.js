// 83. 删除排序链表中的重复元素
// 给定一个已排序的链表的头 head ， 删除所有重复的元素，
// 使每个元素只出现一次 。返回 已排序的链表 。

// 将头节点保存

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function createList(arr) {
    let len = arr.length;
    let count = 0;
    let head = null;
    let tail = null;
    while (count < len) {
        if (!head) {
            head = tail = new ListNode(arr[count])
        } else {
            tail.next = new ListNode(arr[count]);
            tail = tail.next;
        }
        count++;
    }
    return head
}
var deleteDuplicates = function (head) {
    if (!head) {
        return head
    }
    let cur=head;
    while(cur.next){
        if(cur.val===cur.next.val){
            cur.next=cur.next.next
        }else{
            cur=cur.next
        }
    }
    // while (head.next) {
    //     if (head.val === head.next.val) {
    //         head.next = head.next.next;
    //     } else {
    //         head = head.next
    //     }
    // }

    // console.log(head.val);
    // console.log(head.next.val);
    // console.log(head.next.next);
    return head
};

// head = [1, 1, 2]
// head = [1, 2, 3, 4]
// head = [1]
head = [1, 1, 2, 3, 3]
// [1,2]

let newHead = createList(head);
// console.log(newHead);
console.log(deleteDuplicates(newHead));