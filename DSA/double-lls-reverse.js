/** Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place.
 *  Return a reference to the head node of the reversed list.
 *  Note: The head node might be NULL to indicate that the list is empty.
 */


/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
  if (head === null) return;

  let currNode = head;

  while (currNode) {
    if (currNode.next === null) head = currNode;
    [currNode.prev, currNode.next] = [currNode.next, currNode.prev];
    currNode = currNode.prev;
  }

  return head;
}

