/** Given a sorted linked list, in ascending order
 *  Delete nodes and return a sorted list with each distinct value in the original list.
 */


/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
  if (head === null) return;

  let currNode = head;
  while (currNode) {
    if (currNode.next != null && currNode.data === currNode.next.data) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  return head;
}
