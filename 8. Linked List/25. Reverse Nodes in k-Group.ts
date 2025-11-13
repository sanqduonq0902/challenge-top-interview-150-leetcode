function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let count = 0;
  let curr = head;

  while (curr && count < k) {
    curr = curr.next;
    count++;
  }

  if (count < k) return head;

  let prev = null;
  curr = head;

  for (let i = 0; i < k; i++) {
    const next = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = next;
  }

  head!.next = reverseKGroup(curr, k);

  return prev;
}
