"""
Detect a cycle in a linked list. Note that the head pointer may be 'None' if the list is empty.

A Node is defined as: 
 
    class Node(object):
        def __init__(self, data = None, next_node = None):
            self.data = data
            self.next = next_node
"""


def has_cycle(head):
    if head is None:
        return 0
    else:
        currNode = head
        visited = set()
        
        while currNode:
            if currNode in visited: 
                return 1
            else: 
                visited.add(currNode)
                currNode = currNode.next
        else:
            return 0