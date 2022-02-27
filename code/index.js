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