# 100 Days Of Code - Log

### Day 0: 9 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Implemented a singly linked list as a class. Added methods to calculate the means recursively and iteratively. Wrote jest tests.

**Thoughts:**  Struggled to get recursive summation to work; originally set base case to `return;`, but needed to `return 0;`. 

**Link to work:** [Linked Lists - recursive mean](DSA/00-recursive-mean.js) [[*test*](DSA/00-recursive-mean.test.js)]

### Day 1: 10 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Extended Day 1's class and added common linked list methods.

**Thoughts:** Found myself writing the same logic to traverse the lls, so i made that into an internal function. Internal functions helped me abstract away common patterns to focus on the tricky parts. LLs are incredibly efficient when adding and removing from the head `runtime O(1)`, less so when operating on nodes further into the LLs `runtime O(n)`; great to implement a stack. A LL can also be good for queues if it were doubly linked. 

**Link to work:** [Linked Lists - common methods](DSA/01-linked-list-singly.js) [[*test*](DSA/01-linked-list-singly.test.js)]
