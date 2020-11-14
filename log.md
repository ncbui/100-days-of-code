# 100 Days Of Code - Log

### Day 1: 9 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Implemented a singly linked list as a class. Added methods to calculate the means recursively and iteratively. Wrote jest tests.

**Thoughts:**  Struggled to get recursive summation to work; originally set base case to `return;`, but needed to `return 0;`. 

**Link to work:** [Linked Lists - recursive mean](DSA/00-recursive-mean.js) [[*test*](DSA/00-recursive-mean.test.js)]

### Day 2: 10 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Extended Day 1's class and added common linked list methods.

**Thoughts:** Found myself writing the same logic to traverse the lls, so i made that into an internal function. Internal functions helped me abstract away common patterns to focus on the tricky parts. LLs are incredibly efficient when adding and removing from the head `runtime O(1)`, less so when operating on nodes further into the LLs `runtime O(n)`; great to implement a stack. A LL can also be good for queues if it were doubly linked. 

**Link to work:** [Linked Lists - common methods](DSA/01-linked-list-singly.js) [[*test*](DSA/01-linked-list-singly.test.js)]

### Day 3: 11 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Changed methods to throw error objects, per [Joyent's Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors). Wrote Jest test to catch error objects, passing anonymous arrow functions per [Jest documentation for .tothrowError()](https://jestjs.io/docs/en/expect#tothrowerror).   

**Thoughts:** I forgot to add expression to stop code execution on exception. I opted to throw error objects to try my hand at writing tests for exceptions. These methods would be called by an outer function with error handling, they do not include try/catch blocks to avoid burying the error. When writing jest tests for fn that throw without catching, we need to pass that fn to jest as a callback, so jest can prepare to catch the error before asserting. Runtime exceptions are supercharged returns, they can stop the entire callstack when throw.

**Link to work:** [Linked Lists - common methods](DSA/01-linked-list-singly.js) [[*test*](DSA/01-linked-list-singly.test.js)]

### Day 4: 13 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Revisted code for warbler. Fixed CSS for hero header so image responsively adjusts. Following/Following refreshes same page. Added more to README. 

**Thoughts:** There's a readjustment curve when jumping back into a codebase and picking up languages after a long break. I've created a branch of this but I wnder if I should fork instead? Spent today re-visiting old TODOs to reaquaint myself with the code. 

**Link to work:** [Warbler on *GitHub*](https://github.com/ncbui/Warbler/tree/ncbui-refactor) 
