// // 19.删除链表的倒数第N个结点
//  // 给你一个链表,删除链表的倒数第n个结点,并且返回链表的头结点。

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    let newL=new ListNode(0,head);
    let cur=newL;
    let curNum=1;
    function getSz(head) {
        let len=1;
        let cur=head;
        while(cur.next){
            len++;
            cur=cur.next;
        }
        return len
    }
    let len=getSz(head);
    while(cur.next){
        if(curNum++===len-n+1){
            cur.next=cur.next.next;
            continue;
        }
        cur=cur.next;
    }
    return newL.next
};
const {createList} =require('../util/createList')
head = [1,3,4], n = 1;
// head = [1,2,3,4,5], n = 2
// head = [1, 2], n = 1;
// head = [1], n = 1;
// head = [], n = 1;
let newHead = createList(head);

console.log(removeNthFromEnd(newHead, n));
