/** Given the pointer to the head of a linked list, an integer, and position
 * insert this node at the desired position and return the head node.
 * 
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
function insertNodeAtPosition(head, data, position) {
  let currNode = head;

  for (let currPosition = 0; currPosition < position; currPosition++) {
    if (currPosition === position - 1) {
      let newNode = new SinglyLinkedListNode(data);
      newNode.next = currNode.next;
      currNode.next = newNode;
      break;
    }
    currNode = currNode.next;
  }
  return head;
}
