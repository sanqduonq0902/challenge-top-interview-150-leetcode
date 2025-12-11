function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;
    return divideAndConquer(lists, 0, lists.length - 1);
};

function divideAndConquer(lists: Array<ListNode | null>, left: number, right: number): ListNode | null {
    if (left === right) return lists[left];

    const mid = Math.floor((left + right) / 2);
    const l = divideAndConquer(lists, left, mid);
    const r = divideAndConquer(lists, mid + 1, right);

    return merge(l, r);
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1);
    let tail = dummy;

    while (l1 && l2) {
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
