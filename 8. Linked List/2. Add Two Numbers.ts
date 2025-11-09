function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(-1);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x1 = l1 ? l1.val : 0;
    const x2 = l2 ? l2.val : 0;

    const sum = x1 + x2 + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}
