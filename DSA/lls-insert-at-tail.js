/** Given the pointer to the head node of a linked list and an integer to add to the list
 * Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node.
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
function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  newNode.next = null;
  // console.log(head)
  if (head === null) head = newNode;

  let currNode = head;


  while (currNode) {
    if (currNode != newNode && currNode.next === null) currNode.next = newNode;
    currNode = currNode.next;
  }
  return head;
}
