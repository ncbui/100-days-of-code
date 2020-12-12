/** Given a pointer to the head of a linked list, insert a new node before the head
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
