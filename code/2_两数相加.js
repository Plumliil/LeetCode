// 2. 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function createLinkList(arr) {
    let L = new Node(null);
    let p = L;
    arr.forEach(v => {
        p.next = new Node(v);
        p = p.next
    });
    return L;
}

// let arr1 = [2, 4, 3];
// let arr2 = [5, 6, 4];
// let link1 = createLinkList(arr1);
// let link2 = createLinkList(arr2);

// console.log(link1,link2);
// console.log(link1.next);

function traverseLinkList(L) {
    var p = L.next;
    while (p) {
        console.log(p.val);
        p = p.next;
    }
}

// traverseLinkList(link1)

// var addTwoNumbers = function (l1, l2) {
//     let p1 = l1.next,
//         p2 = l2.next,
//         v1 = '',
//         v2 = '';
//     let ans = []
//     while (p1) {
//         v1 += p1.data
//         p1 = p1.next
//     }
//     while (p2) {
//         v2 += p2.data
//         p2 = p2.next
//     }
//     let v = [...(parseInt(v1) + parseInt(v2)).toString()].reverse()
//     v = v.forEach(item => {
//         item = parseInt(item);
//         ans.push(item)
//     })
//     return ans
// };
var addTwoNumbers = function (l1, l2) {
    if (!l1 && !l2) return null;
    let head = null,
        tail = null;
    let sum = 0;
    let remainder = 0;
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        sum = n11 + n2 + remainder;
        remainder = Math.floor(sum / 10);
        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10);
            tail=tail.next
        }
        if(l1){
            l1=l1.next
        }
        if(l2){
            l2=l2.next
        }
    }
    if(remainder) tail.next=new ListNode(1);

    return head
};

l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];
let link1 = createLinkList(l1);
let link2 = createLinkList(l2);
// addTwoNumbers(link1, link2)
console.log(addTwoNumbers(link1, link2));