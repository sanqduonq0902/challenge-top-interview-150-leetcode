function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let prev: ListNode | null = null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }   

    if (prev) prev.next = null;

    let left = sortList(head);
    let right = sortList(slow);

    return merge(left, right);
};

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1);
    let tail = dummy;

    while(l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        }
        else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 ?? l2;

    return dummy.next;
}
