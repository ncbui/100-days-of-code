const { LinkedList, Node } = require("./00-recursive-mean");

/** LinkedListMore: connects nodes in singly linked list 
*/

class LinkedListMore extends LinkedList {

  constructor(vals = []) {
    super(vals);
  }

  /** getAt(idx): get val at idx. 
   * TODO: throw specific error types instead of generic
  */

  getAt(idx = 0) {
    if (idx > this.length) {
      throw new Error("Error: Index cannot be greater than length of the list");
    };
    if (this.length === 0) {
      throw new Error("Error: Cannot get from an empty list");
    };

    if (idx === 0) {
      return this.head.val;
    } else {
      const node = this._traverseTo(idx);
      return node.val
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) {
      throw new Error("Error: Index does not exist in list");
    };

    if (idx === 0) {
      this.head.val = val;
    } else {
      const node = this._traverseTo(idx);
      node.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) {
      throw new Error("Error: Cannot create a sparse list");
    };

    let insert = new Node(val);

    if (this.length === 0) {
      this.push(val);
    } else {
      if (idx === this.length) {
        this.tail.next = insert;
        this.tail = insert;
      }
      let prev = this._traverseTo(idx - 1);
      insert.next = prev.next;
      prev.next = insert;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("Error: Cannot pop from an empty list");
    };

    const popped = this.removeAt(this.length - 1);
    return popped.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("Error: Cannot shift from an empty list");
    }

    const popped = this.removeAt();
    return popped.val;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx = 0) {
    if (idx > this.length || this.length === 0) {
      throw new Error("Error: Index does not exist in this list")
    }

    let removed;

    if (this.length === 1) {                           // list of 1-item
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else if (idx === 0) {                            // longer than 1-item
      removed = this.head;                             // start 
      this.head = removed.next;
    } else {                                           // middle and end
      let prev = this._traverseTo(idx - 1);
      removed = prev.next
      prev.next = prev.next.next;
      if (idx === this.length - 1) this.tail = prev;   // just end
    }

    this.length--;
    return removed;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!val) {
      throw new Error("Error: Cannot create a node without a value");
    }
    
    let newNode = new Node(val);

    if (this.length === 0) {
      this.push(val);
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }



  /** _traverseTo(idx, head): get node at idx to head */

  _traverseTo(idx, head = this.head) {
    let i = 0;
    let node = head;

    while (i < idx) {
      node = node.next;
      i++;
    }
    return node;
  }

}

module.exports = LinkedListMore;