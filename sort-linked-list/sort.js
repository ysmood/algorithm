/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    if (!head || !head.next) return head;

    var sorted = head;
    var pointer;
    var prev;
    var next;

    // a -> b -> c
    // unsorted: b -> c
    //   sorted: a -> null
    head = head.next;
    sorted.next = null;

    while (head) {
        next = head.next;

        head.next = sorted;
        sorted = head;
        pointer = head;
        prev = null;

        while (pointer && pointer.next) {
            if (pointer.val > pointer.next.val) {
                if (prev === null)
                    sorted = pointer.next;

                prev = swap(prev, pointer);
            } else {
                break;
            }
        }

        head = next;
    }

    return sorted;
};


// before: x -> a -> b -> y
//  after: x -> b -> a -> y
function swap (x, a) {
    var b = a.next;
    var y = b.next;

    if (x) x.next = b;
    b.next = a;
    a.next = y;

    return b;
}

module.exports = insertionSortList;
