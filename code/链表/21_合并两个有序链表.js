// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。 



var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2
    }
};


const { createList } = require('../util/createList')

l1 = [1, 2, 4], l2 = [1, 3, 4]
l1 = createList(l1)
l2 = createList(l2)
// mergeTwoLists(l1,l2)
console.log(mergeTwoLists(l1, l2));
// console.log(l1,l2);