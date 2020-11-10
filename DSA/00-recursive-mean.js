/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: connects nodes in singly linked list */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** meanRecursive(): return the mean of all values in a linked list*/

  meanRecursive() {
    if (!this.length) return 0;

    return this._recursion(this.head);
  }

  _recursion(head) {
    if (head === null) return 0;

    return (head.val / this.length) + this._recursion(head.next);
  }
  // /** meanRecursive(): return the mean of all values in a linked list
  //  * 
  //  * runtime: O(n), where n = items in list
  // */

  // meanRecursive() {
  //   if (!this.length) return 0;

  //   return this._recursion(this.head);
  // }

  // _recursion(head) {
  //   if (head === null) return 0;

  //   return (head.val / this.length) + this._recursion(head.next);
  // }

  /** mean(): return an mean of all values in the list 
   * 
   * runtime: O(n), where n = items in list
  */

  mean() {
    if (this.length === 0) return 0;

    let sum = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }

    return sum / this.length;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.tail === null) {
      // if list is empty, add first node
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // adds node to existing tail
      this.tail = newNode;      // sets tail to newest node
    }

    this.length++;
    // runtime: O(n), has to traverse to all nodes to reach end
  }
}

module.exports = LinkedList;