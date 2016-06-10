/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    // For example:
    // m = 3, n = 4
    // 1  2 | 3  4  5
    // The "|" is the separator, the "2" is sepLeft, "3" is sepRight.

    var sepLeft = null;
    var sepRight = head;
    var curr = head;
    var prev = null;
    var next = null;

    while (--m) {
        n--;
        sepLeft = curr;
        sepRight = curr.next;
        curr = sepRight;
    }

    while (n--) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    sepRight.next = curr;

    if (sepLeft) {
        sepLeft.next = prev;
    } else {
        return prev;
    }

    return head;
};

module.exports = reverseBetween;
