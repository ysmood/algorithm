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
var detectCycle = function (head) {
    var slow, fast;

    slow = fast = head;

    while (fast) {
        fast = fast.next;

        if (!fast) return null;

        fast = fast.next;
        slow = slow.next;

        if (slow === fast) break;
    }

    if (!fast) return null;

    // This is the key step
    slow = head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};