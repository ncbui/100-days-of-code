
/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let currA = headA;
  let currB = headB;

  while (currA) {
    currB = headB;
    while (currB) {
      if (currA === currB) return currA.data;
      currB = currB.next;
    }
    currA = currA.next;
  }

  return;
}
