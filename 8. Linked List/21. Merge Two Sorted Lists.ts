function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy: ListNode | null = new ListNode(-1);
  let curr: ListNode | null = dummy;
  let l1: ListNode | null = list1;
  let l2: ListNode | null = list2;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 ?? l2;

  return dummy.next;
}
