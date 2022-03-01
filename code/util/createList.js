function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function createList(arr) {
    let len = arr.length;
    let head = null,
        tail = null;
    for (let i = 0; i < len; i++) {
        if (!head) {
            head = tail = new ListNode(arr[i]);
        } else {
            tail.next = new ListNode(arr[i]);
            tail = tail.next
        }
    }
    return head;
}

module.exports={createList}