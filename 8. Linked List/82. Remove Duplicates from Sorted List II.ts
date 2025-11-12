function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      const value = curr.val;

      while (curr && curr.val === value) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
}
