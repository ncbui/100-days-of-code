# 100 Days Of Code - Log



### Day 1: 9 November 2020

**Today's Progress**: Implemented a singly linked list as a class. Added methods to calculate the means recursively and iteratively. Wrote jest tests.

**Thoughts:**  Struggled to get recursive summation to work; originally set base case to `return;`, but needed to `return 0;`. 

**Link to work:** [Linked Lists - recursive mean](DSA/00-recursive-mean.js) [[*test*](DSA/00-recursive-mean.test.js)]



### Day 2: 10 November 2020

**Today's Progress**: Extended Day 1's class and added common linked list methods.

**Thoughts:** Found myself writing the same logic to traverse the lls, so i made that into an internal function. Internal functions helped me abstract away common patterns to focus on the tricky parts. LLs are incredibly efficient when adding and removing from the head `runtime O(1)`, less so when operating on nodes further into the LLs `runtime O(n)`; great to implement a stack. A LL can also be good for queues if it were doubly linked. 

**Link to work:** [Linked Lists - common methods](DSA/01-linked-list-singly.js) [[*test*](DSA/01-linked-list-singly.test.js)]



### Day 3: 11 November 2020

**Today's Progress**: Changed methods to throw error objects, per [Joyent's Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors). Wrote Jest test to catch error objects, passing anonymous arrow functions per [Jest documentation for .tothrowError()](https://jestjs.io/docs/en/expect#tothrowerror).   

**Thoughts:** I forgot to add expression to stop code execution on exception. I opted to throw error objects to try my hand at writing tests for exceptions. These methods would be called by an outer function with error handling, they do not include try/catch blocks to avoid burying the error. When writing jest tests for fn that throw without catching, we need to pass that fn to jest as a callback, so jest can prepare to catch the error before asserting. Runtime exceptions are supercharged returns, they can stop the entire callstack when throw.

**Link to work:** [Linked Lists - common methods](DSA/01-linked-list-singly.js) [[*test*](DSA/01-linked-list-singly.test.js)]



### Day 4: 13 November 2020

**Today's Progress**: Revisted code for warbler. Fixed CSS for hero header so image responsively adjusts. Following/Following refreshes same page. Added more to README. 

**Thoughts:** There's a readjustment curve when jumping back into a codebase and picking up languages after a long break. I've created a branch of this but I wnder if I should fork instead? Spent today re-visiting old TODOs to reaquaint myself with the code. 

**Link to work:** [Warbler on *GitHub*](https://github.com/ncbui/Warbler/tree/ncbui-refactor) 



### Day 5: 16 November 2020

**Today's Progress**: Added tests to Warbler

**Thoughts:** Added more tests for warbler's user model

**Link to work:** [Warbler on *GitHub*](https://github.com/ncbui/Warbler/tree/ncbui-refactor) 



### Day 6: 18 November 2020

**Today's Progress**: Deployed Warbler with a Heroku database. Added more tests. Changed styling to match latest Twitter trend.

**Thoughts:** Added more tests for warbler's user models. Added first tests for message models. I've picked the lower hanging fruits with the login page and landing page. Every few months I have to decide between sticky and fixed positioning and will spend a bit looking it up, only to consistently forget the differences. So it goes.

**Link to work:** [Warbler on *GitHub*](https://github.com/ncbui/Warbler/tree/ncbui-refactor) [demo](https://cb-warbler-2020.herokuapp.com/login)




### Day 7: 23 November 2020

**Today's Progress**: Rithm Hackathon: Getting to know D3.js and building snake in js. 

**Thoughts:** Feeling a bit nostalgic while playing with this data visualization library. The declarative, object-oriented, animation-capable D3 is definitely a step up from manually cleaning data in Excel and making static dataviz with R.

D3's data visualization methods abstract away the need to track whether data corresponds with DOM elements and seems to actively sort data into groups, or selections, even as data is filtered or manipulated. It strikes me that this is similar to giving each datum/DOM element pairing a state (*enter*, *update*, *exit*) and allowing users to act on datum based on its state. TODO: How does D3 efficiently monitor selections?

**Link to work:** [OO Snake on *GitHub*](https://github.com/ncbui/JS-OO-Snake) 



### Day 8: 24 November 2020

**Today's Progress**: Built a schema to drop/create a PSQL database, seeded it with data.

**Thoughts:** I wrote a simple SQL query for a challenge, and wanted to put together a database to confirm that the query works as intended. Having sample data to play with helped me catch unexpected things, like nulls sorting before timestamps when I ORDERed by date DESC. This was a fairly quick to build on this template for other dbs and have a place to play with complex queries.

**Link to work:** [PSQL Schema*](PSQL/Fundraising.sql) 



### Day 9: 25 November 2020

**Today's Progress**: Worked on firstDuplicate and firstNotRepeating algos. Added a snake subclass (easy mode snake) that avoids walls (but sometimes eats itself when trapped in a corner). Added start button and styling. Set up a github page for the game.

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 9: 27 November 2020

**Today's Progress**: Added snakeDoublePrime subclass that bends the rules a bit. Added dropdown menu to give player choices between different modes.

**Thoughts:** Slower progress today.

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 10: 28 November 2020

**Today's Progress**: Added snakeChaos subclass that randomly changes directions every 12 steps. Added drop down menu that selects between Snake classes. 

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 11: 30 November 2020

**Today's Progress**: fixed an infinite loop with snakeDoublePrime by setting a limit on how many direction changes snakeDoublePrime can attempt. Manage event handlers on start button so that additional games cannot start while a game is in progress

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 12: 1 December 2020

**Today's Progress**: Game can now toggle between single player and two player modes. Added info about snakes to page.

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 




### Day 13: 2 December 2020

**Today's Progress**: SnakeNPC avoids players now. Researching algos to help snake find pellets

**Thoughts:** 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 14: 3 December 2020

**Today's Progress**: Worked on a full stack movie app. Starting with an Express server 

**Thoughts:** It feels like 8900 years since I've worked on an Express server. I spent more time planning and design. I'm starting with backend before frontend to hopefully save some work on the frontend. Not mentioned in GH is the use of Insomnia to explore both the IMDB api and my newly built server. 

**Link to work:** [IMApi on GH](https://github.com/ncbui/IMApi) 



### Day 15: 4 December 2020

**Today's Progress**: Added DB to the app and started React portion. Started building out voting functionality. 

**Link to work:** [IMApi on GH](https://github.com/ncbui/IMApi) 




### Day 16: 7 December 2020

**Today's Progress**: Array questions on HackerRank

**Link to work:** 



### Day 17: 9 December 2020

**Today's Progress**: LinkedList questions on HackerRank

**Link to work:** 



### Day 18: 10 December 2020

**Today's Progress**: Algorithm problems and linked list problems from Hackerrank

**Link to work:** 



### Day 19: 15 December 2020

**Today's Progress**: Adding a method for snakeNPC to find the closest pellet

**Thoughts:** Using vector math to brute force to make a proof of concept here. Brute force currently includes using Pythogorean's theorem to find distance and using the a vector to guide snakeNPC's new direction.

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 20: 16 December 2020

**Today's Progress**: Adding a method for snakeNPC to find the closest pellet. Completed a techscreen that emphasized array manipulation.

**Thoughts:** Finishing up with this brute force proof of concept. Vector math isn't working as expected and leading to a bug where the snake disappears entirely. I'm on the lookout for algorithms that could be used in this context. 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 20: 17 December 2020

**Today's Progress**: Looking for an algorithm to find the nearest pellet.

**Thoughts:** Based on the answers to [this stack overflow Q](https://stackoverflow.com/questions/1901139/closest-point-to-a-given-point), I did a bit of research on implementation of (1) simple spiral search, (2) nearest neighbor search (D. Knuth dubbed post-office problem), (3) point location using Trapezoidal Maps and Voronoi Diagrams. 


My previous attempt was a naive implementation of the nearest neighbor search; I could improve it be tracking just the closest instead of using a object to track all distances. Determining the nearest neighbor with my solution was O(n) to computer distances for all points and O(n) to compute the minimum (not needed if we track just the closest instead of all distances).

    Took some time to look into a variant of it, kNN, which forms the base for one of the simplest ML algos according to Patrick Winston [(Intro to ML nearest neighbor lecture)](https://www.youtube.com/watch?v=09mb78oiPkA&ab_channel=MITOpenCourseWare). 

Simple spiral search algo may be the simplest solution for a discrete 2d space with such a small number of pellets. But it is essentially an approximation approach to the NNS. I'm not sure about the time/space complexity of this. Best case, the head and pellet are close by, worst case the closest pellets are across the screening and the spiral would loop multiple times to find it. But it would only need one seed point to do so, so would this amortize to O(1)?

point location with voronoi diagrams requires computational power to create the diagrams but allows for incredibly fast search. Found a js implementation to construct voronoi diagrams: [gorhill](https://github.com/gorhill/Javascript-Voronoi). I could pass food pellets as sites to the voronoi object, query for the cell containing snake's head, and find the pellet associated with that cell.  Diagram creation time would be O(n log n), which is negligible for 3 sites. Query time O(log n) where n = number pellets. 

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 



### Day 21: 18 December 2020

**Today's Progress**: Refactored the food detection method for snake NPC. Looked into approximate nearest neighbors, stumbled upon vector models as a means of any-angle path planning, a subset of pathfinding. 

**Thoughts:** Is it overkill to implement point location and pathfinding algo for such a small 2D space? Or is it easier to try and test these algos because it's such a small space.

**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 




### Day 22: 19 December 2020

**Today's Progress**: Read Amit Patel's [Pathfinding with A*](http://theory.stanford.edu/~amitp/GameProgramming/) and [Heuristic blog](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html). 

**Thoughts:** I've been working on a movement-only algorithm (taking the local environment into consideration at each step) instead of a true pathfinding algorithm. On a grid like the Snake game, where the game world is constantly changing based on player movement and pellets constantly reappear or disappear, expensive pathfinding computations quickly become obsolete and pathfinding algos are less useful. 

Still, Manhattan distance is the standard heuristic for a square grid that allows movement in 4 directions according to Amit Patel. Maybe this is the reason for the bugginess of snakeNPC. I'm using Euclidean, diagonal distance to determine the nearest pellet. But that doesn't always translate in movement, because snakeNPC would have to take many more steps to follow that diagonal. In chess terms, a Euclidean heuristic would be the best choice if snakeNPC was a Queen. But snakeNPC is actually a Rook, and Manhattan heuristic is the standard for that.

```
    function heuristic(node) =
        dx = abs(node.x - goal.x)
        dy = abs(node.y - goal.y)
        return D * (dx + dy)
```

Amit's heuristic page also offers a way to break ties by preferring paths by calculating a cross product between a straight line to the goal and the current path. The cross product computes to zero if the paths line up and grows as the distance between vectors grow. Making note of it here to explore how it could be used to smooth out snakeNPC's path.

```
    dx1 = current.x - goal.x
    dy1 = current.y - goal.y
    dx2 = start.x - goal.x
    dy2 = start.y - goal.y
    cross = abs(dx1*dy2 - dx2*dy1)
    heuristic += cross*0.001
```

**Link to work:** NA



### Day 23: 20 December 2020

**Today's Progress**: Manhattan distance now used to ID closest pellet. Now uses absolute value to determine whether the horizontal or vertical distance is smallest. Added scoring functionality. Used canvasAPI to declare scores and winners. 

Read Amit Patel's [Dealing with moving obstacles](http://theory.stanford.edu/~amitp/GameProgramming/MovingObstacles.html)

**Thoughts:** Path is a lot smoother now, but snakeNPC is trapping itself once it gets even longer. Maybe I should incorporate some pathfinding logic to help snakeNPC ID and avoid convex traps.


**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 


### Day 24: 21 December 2020

**Today's Progress**: Worked on a hackerrank tech screen for the onramp applications

**Thoughts:** Screen involved questions related to data structure questions, CSS/HTML, and algo implementations. Struggled a bit with a treasure map algo to remove opposite directions, hit an aha moment when I switched to using a different data structure.


**Link to work:** NA



### Day 25: 4 January 2021

**Today's Progress**: DRYd up classes and methods with Snake OO. Worked on the minimum cost to convert to a magic square problem, got a interview prep plan down.

**Thoughts:** 
Spent a couple of hours on the magic square problem only to find that my approach was way too complicated. It turned out to be fairly straight-forward once I found the right approach. It's one of those pesky 'gotta know how to solve it to solve it' problems. General advice I've received for that is to grind leetcode and hackerrank problems until I'm familiar with them all. 

Saw an interesting statement: "First, solve the problem. Then, write the code," attributed to John Johnson


**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 26: 6 January 2021

**Today's Progress**: Applied to the , included some Ruby and Rails exposure. Interview prep for TW. 

**Thoughts:** 
Spent a couple of hours on the magic square problem only to find that my approach was way too complicated. It turned out to be fairly straight-forward once I found the right approach. It's one of those pesky 'gotta know how to solve it to solve it' problems. General advice I've received for that is to grind leetcode and hackerrank problems until I'm familiar with them all. 

Saw an interesting statement: "First, solve the problem. Then, write the code," attributed to John Johnson


**Link to work:** [Snake demo](https://ncbui.github.io/JS-OO-Snake/) [github](https://github.com/ncbui/JS-OO-Snake) 

### Day 27: 12 January 2021

**Today's Progress**: Working through behavioral and presentational bits of interview prep. Doing on array problems from Cracking the Coding Interview.

**Thoughts:** The personal is political and vice versa. The attempted coup by white supremacists on Jan 5, 2021 has nothing to do with code, but has many things to do with the coder. It's not shocking, but its impact is still heavy.


**Link to work:** [Arrays](arrays/)

### Day 28: 13 January 2021

**Today's Progress**: More progress with cracking the coding interview

**Thoughts:** I showed up. 


**Link to work:** [Arrays](arrays/)

### Day 29: 16 January 2021

**Today's Progress**: Working on a new portfolio with React. Laid out the App structure with router and switch.

**Thoughts:** My current portfolio is built as a SPA for github pages, mostly because ghp required more workarounds to mesh with React switches. I intend for this latest portfolio to be hosted on heroku and accessed through a custom domain.


**Link to work:** [Latest branch in Portfolio](/tree/heroku-review)

### Day 30: 17 January 2021

**Today's Progress**: More progress with portfolio. Spent a bit of time on Dribbble to find a theme to recreate

**Thoughts:** I spent a few hours on dribbble.com and awwwards.com browsing delightful and creative designs. 


**Link to work:** [Latest branch in Portfolio](/tree/heroku-review)

### Day 31: 18 January 2021

**Today's Progress**: Working on a cracking the coding interview problem and then did a flash review of a handful of DSAs and algos.

**Thoughts:** I really enjoyed the flash review process. Taking time with implementations has helped with understanding nuances for each concept. But the flash review really helped crystallize connections between concepts and sparked questions that led to further study. It also felt good to remember how much I've covered already and gives me a chance to integrate the new with the crystallized. I'm going to incorporate more flash review days. 


**Link to work:** [cracking-the-coding-interview repo](https://github.com/ncbui/cracking-the-coding-interview-6th)

### Day 32: 19 January 2021

**Today's Progress**: Working on a cracking the coding interview problems and did a bit of pair coding during a tech screen.

**Thoughts:** Not sure I did well during the tech screen, I spent less time implementing code and more time exploring requirements to the problem to eliminate certain algos until we got to a reasonable approach. Got to see more examples of how to make assumptions and reasonable shortcuts to take while virtually whiteboarding. 


**Link to work:** [cracking-the-coding-interview repo](https://github.com/ncbui/cracking-the-coding-interview-6th)

### Day 33: 20 January 2021

**Today's Progress**: Research to implement A* search algorithm and path recalculation.
**Thoughts:** 
Recalculation 
Use a stack to track path, stack runs from furthest to closest 
After every move, remove the node from the stack, if a direction change was required


If snake's future direction is not equal to its current direction,

"Implementation Note:
Store the path in reverse order: it is easy to remove the beginning of the path and splice in a new path with a different length; because both operations occur at the end of the array. Essentially you treat the array as a stack where the top element is the next move to make"

http://theory.stanford.edu/~amitp/GameProgramming/MovingObstacles.html

**Link to work:** [cracking-the-coding-interview repo](https://github.com/ncbui/cracking-the-coding-interview-6th)

### Day 34: 22 January 2021

**Today's Progress**: Working on linked list problems from cracking the coding interview

**Thoughts:** Linked lists can be used with arrays to implement hash tables. I'm especially mindful of designing optimal runtimes here. 
I currently have the removeDup method as a standalone function but I could just add it as a static class to the linked list class. 

**Link to work:** [cracking-the-coding-interview repo](https://github.com/ncbui/cracking-the-coding-interview-6th)

### Day 35: 23 January 2021

**Today's Progress**: Working on iterative and recursive solutions to a linked list problem. Updated project section to new portfolio. 

**Thoughts:** Two common strategies to recursion are (1) do while digging and (2) dig then do. With the Problem 2.2, the do while digging approach came pretty easily, but I'm having trouble with dig, then do on the way back up. 

**Link to work:** [cracking-the-coding-interview repo](https://github.com/ncbui/cracking-the-coding-interview-6th)

### Day 36: 24 January 2021

**Today's Progress**: More reading about the [implementation of A*](http://theory.stanford.edu/~amitp/GameProgramming/ImplementationNotes.html)

**Thoughts:**  This page describes what an implementation would involve, then compares and contrasts the performance of data structures that could be used. 
 
A* tracks two sets of data, a queue containing nodes to explore and a set containing explored nodes that point to its parent. The queue initializes with the current position. For each call, the first node is removed from queue and compared to explored set. If that item is not found, it is added to this explored set. This loop ends when the node removed from the frontier is the goal node.

I want to track each potential move by its location, its distance to  

**Link to work:** [cracking-the-coding-interview repo](https://github.com/ncbui/cracking-the-coding-interview-6th)

### Day 37: 25 January 2021

**Today's Progress**: Looked into priority queue implementations. Considered using an array and linked list and an n-ary tree. But found a neat way to use indexed arrays to implement binary heaps

 
**Thoughts:** 
 From [Ankita Masand's guide to Implementing Heaps](https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65):
 
 Given the index of a parent node, pIdx, its children can be found at index (2*pIdx + 1) and (2*pIdx + 2).

Given a child node, its parent can be found at i / 2.

**Link to work:** [cracking-the-coding-interview repo](https://github.com/ncbui/cracking-the-coding-interview-6th)

### Day 38: 27 January 2021

**Today's Progress**: Worked on a tech screen today involving calculating a monthly invoice based on a subscription model, making API calls and filtering data, and a written portion about debugging systems.

 
**Thoughts:** I felt pretty confident with the calculations and API call but blanked when I ran into debugging systems. 

**Link to work:** 

### Day 39: 29 January 2021

**Today's Progress**: Worked on a tech screen today involving calculating a monthly invoice based on a subscription model, making API calls and filtering data, and a written portion about debugging systems.

 
**Thoughts:** 

**Link to work:** 


### Day 40: 2 February 2021

**Today's Progress**: Worked on a tech screen involving checking whether a cell is still lit after a section is turned off. 

**Thoughts:** 

**Link to work:** 

### Day 41: 3 February 2021

**Today's Progress**: Continued to work on the problem from Day 40

**Thoughts:** Most frequently used language lately is profanity

**Link to work:** 

### Day 42: 4 February 2021

**Today's Progress**: More attempts at the problem from Day 40. Worked pathfinding with my snake game. 

**Thoughts:** Went searching for insights to this problem. Found variants of it that has helped with progress. Took a break to jump into snake game. Coming back to this project after a long break helped with cleaning up some of the code. 

**Link to work:** 