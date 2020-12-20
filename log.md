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

### Day 5: 16 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Added tests to Warbler

**Thoughts:** Added more tests for warbler's user model

**Link to work:** [Warbler on *GitHub*](https://github.com/ncbui/Warbler/tree/ncbui-refactor) 

### Day 6: 18 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Deployed Warbler with a Heroku database. Added more tests. Changed styling to match latest Twitter trend.

**Thoughts:** Added more tests for warbler's user models. Added first tests for message models. I've picked the lower hanging fruits with the login page and landing page. Every few months I have to decide between sticky and fixed positioning and will spend a bit looking it up, only to consistently forget the differences. So it goes.

**Link to work:** [Warbler on *GitHub*](https://github.com/ncbui/Warbler/tree/ncbui-refactor) [demo](https://cb-warbler-2020.herokuapp.com/login)


### Day 7: 23 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Rithm Hackathon: Getting to know D3.js and building snake in js. 

**Thoughts:** Feeling a bit nostalgic while playing with this data visualization library. The declarative, object-oriented, animation-capable D3 is definitely a step up from manually cleaning data in Excel and making static dataviz with R.

D3's data visualization methods abstract away the need to track whether data corresponds with DOM elements and seems to actively sort data into groups, or selections, even as data is filtered or manipulated. It strikes me that this is similar to giving each datum/DOM element pairing a state (*enter*, *update*, *exit*) and allowing users to act on datum based on its state. TODO: How does D3 efficiently monitor selections?

**Link to work:** [OO Snake on *GitHub*](https://github.com/ncbui/JS-OO-Snake) 

### Day 8: 24 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Built a schema to drop/create a PSQL database, seeded it with data.

**Thoughts:** I wrote a simple SQL query for a challenge, and wanted to put together a database to confirm that the query works as intended. Having sample data to play with helped me catch unexpected things, like nulls sorting before timestamps when I ORDERed by date DESC. This was a fairly quick to build on this template for other dbs and have a place to play with complex queries.

**Link to work:** [PSQL Schema*](PSQL/Fundraising.sql) 

### Day 9: 25 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Worked on firstDuplicate and firstNotRepeating algos. Added a snake subclass (easy mode snake) that avoids walls (but sometimes eats itself when trapped in a corner). Added start button and styling. Set up a github page for the game.

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 9: 27 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Added snakeDoublePrime subclass that bends the rules a bit. Added dropdown menu to give player choices between different modes.

**Thoughts:** Slower progress today.

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 10: 28 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Added snakeChaos subclass that randomly changes directions every 12 steps. Added drop down menu that selects between Snake classes. 

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 11: 30 November 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: fixed an infinite loop with snakeDoublePrime by setting a limit on how many direction changes snakeDoublePrime can attempt. Manage event handlers on start button so that additional games cannot start while a game is in progress

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 12: 1 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Game can now toggle between single player and two player modes. Added info about snakes to page.

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 


### Day 13: 2 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: SnakeNPC avoids players now. Researching algos to help snake find pellets

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 14: 3 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Worked on a full stack movie app. Starting with an Express server 

**Thoughts:** It feels like 8900 years since I've worked on an Express server. I spent more time planning and design. I'm starting with backend before frontend to hopefully save some work on the frontend. Not mentioned in GH is the use of Insomnia to explore both the IMDB api and my newly built server. 

**Link to work:** [IMApi on GH](https://github.com/ncbui/IMApi) 

### Day 15: 4 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Added DB to the app and started React portion. Started building out voting functionality. 

**Link to work:** [IMApi on GH](https://github.com/ncbui/IMApi) 


### Day 16: 7 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Array questions on HackerRank

**Link to work:** 

### Day 17: 9 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: LinkedList questions on HackerRank

**Link to work:** 

### Day 18: 10 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Algorithm problems and linked list problems from Hackerrank

**Link to work:** 

### Day 19: 15 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Adding a method for snakeNPC to find the closest pellet

**Thoughts:** Using vector math to brute force to make a proof of concept here. Brute force currently includes using Pythogorean's theorem to find distance and using the a vector to guide snakeNPC's new direction.

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 20: 16 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Adding a method for snakeNPC to find the closest pellet. Completed a techscreen that emphasized array manipulation.

**Thoughts:** Finishing up with this brute force proof of concept. Vector math isn't working as expected and leading to a bug where the snake disappears entirely. I'm on the lookout for algorithms that could be used in this context. 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 20: 17 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Looking for an algorithm to find the nearest pellet.

**Thoughts:** Based on the answers to [this stack overflow Q](https://stackoverflow.com/questions/1901139/closest-point-to-a-given-point), I did a bit of research on implementation of (1) simple spiral search, (2) nearest neighbor search (D. Knuth dubbed post-office problem), (3) point location using Trapezoidal Maps and Voronoi Diagrams. 


My previous attempt was a naive implementation of the nearest neighbor search; I could improve it be tracking just the closest instead of using a object to track all distances. Determining the nearest neighbor with my solution was O(n) to computer distances for all points and O(n) to compute the minimum (not needed if we track just the closest instead of all distances).

    Took some time to look into a variant of it, kNN, which forms the base for one of the simplest ML algos according to Patrick Winston [(Intro to ML nearest neighbor lecture)](https://www.youtube.com/watch?v=09mb78oiPkA&ab_channel=MITOpenCourseWare). 

Simple spiral search algo may be the simplest solution for a discrete 2d space with such a small number of pellets. But it is essentially an approximation approach to the NNS. I'm not sure about the time/space complexity of this. Best case, the head and pellet are close by, worst case the closest pellets are across the screening and the spiral would loop multiple times to find it. But it would only need one seed point to do so, so would this amortize to O(1)?

point location with voronoi diagrams requires computational power to create the diagrams but allows for incredibly fast search. Found a js implementation to construct voronoi diagrams: [gorhill](https://github.com/gorhill/Javascript-Voronoi). I could pass food pellets as sites to the voronoi object, query for the cell containing snake's head, and find the pellet associated with that cell.  Diagram creation time would be O(n log n), which is negligible for 3 sites. Query time O(log n) where n = number pellets. 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 21: 18 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Refactored the food detection method for snake NPC. Looked into approximate nearest neighbors, stumbled upon vector models as a means of any-angle path planning, a subset of pathfinding. 

**Thoughts:** Is it overkill to implement point location and pathfinding algo for such a small 2D space? Or is it easier to try and test these algos because it's such a small space.

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 


### Day 22: 19 December 2020
<!-- ##### (delete me or comment me out) -->

**Today's Progress**: Read Amit Patel's [Pathfinding with A*](http://theory.stanford.edu/~amitp/GameProgramming/) and [Heuristic blog](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html). 

**Thoughts:** I've been working on a movement-only algorithm (taking the local environment into consideration at each step) instead of a true pathfinding algorithm. On a grid like the Snake game, where the game world is constantly changing based on player movement and pellets constantly reappear or disappear, expensive pathfinding computations quickly become obsolete and pathfinding algos are less useful. 

Still, Manhattan distance is the standard heuristic for a square grid that allows movement in 4 directions according to Amit Patel. Maybe this is the reason for the bugginess of snakeNPC. I'm using Euclidean, diagonal distance to determine the nearest pellet. But that doesn't always translate in movement, because snakeNPC would have to take many more steps to follow that diagonal. In chess terms, a Euclidean heuristic would be the best choice if snakeNPC was a Queen. But snakeNPC is actually a Rook, and Manhattan heuristic is the standard for that.
    function heuristic(node) =
        dx = abs(node.x - goal.x)
        dy = abs(node.y - goal.y)
        return D * (dx + dy)

Amit's heuristic page also offers a way to break ties by preferring paths by calculating a cross product between a straight line to the goal and the current path. Making note of it here to explore how it could be used to smooth out snakeNPC's path.
    dx1 = current.x - goal.x
    dy1 = current.y - goal.y
    dx2 = start.x - goal.x
    dy2 = start.y - goal.y
    cross = abs(dx1*dy2 - dx2*dy1)
    heuristic += cross*0.001


**Link to work:** NA


