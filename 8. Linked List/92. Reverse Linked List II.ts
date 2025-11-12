function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummy = new ListNode(-1, head);
    let beforeLeft = dummy;

    for (let i = 1; i < left; i++) {
        beforeLeft = beforeLeft.next!;
    }

    let prev = null;
    let curr = beforeLeft.next;
    let tail = curr;

    for (let i = left; i <= right; i++) {
        const next = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = next;
    }

    beforeLeft.next = prev;
    tail!.next = curr;

    return dummy.next;
};