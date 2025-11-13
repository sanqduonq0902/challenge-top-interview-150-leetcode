function partition(head: ListNode | null, x: number): ListNode | null {
  const beforeHead = new ListNode(-1);
  const afterHead = new ListNode(-1);

  let before = beforeHead;
  let after = afterHead;
  let curr = head;

  while (curr) {
    if (curr.val < x) {
      before.next = curr;
      before = before.next;
    } else {
      after.next = curr;
      after = after.next;
    }

    curr = curr.next;
  }

  after.next = null;
  before.next = afterHead.next;

  return beforeHead.next;
}
