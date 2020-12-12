/** Given a reference to the head of a sorted doubly-linked list and an integer, 
 * insert it at the proper location to maintain the sort.
 * 
 * @param {*} head 
 * @param {*} data 
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
function sortedInsert(head, data) {
  let currNode = head;
  let newNode = new DoublyLinkedListNode(data);

  while (currNode) {
    if (currNode.data > data) {
      if (currNode === head) { // head
        newNode.prev = null;
        newNode.next = currNode;
        currNode.prev = newNode;
        head = newNode;
        break;
      } else { // body
        newNode.prev = currNode.prev;
        currNode.prev.next = newNode;
        newNode.next = currNode;
        break;
      }
    }

    if (currNode.next === null) {
      currNode.next = newNode;
      newNode.prev = currNode;
      newNode.next = null;
    }
    currNode = currNode.next;
  }

  return head;
}
