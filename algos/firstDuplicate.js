// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// [2, 1, 3, 5, 3, 2] => 3

// Given array, with multiple duplicates
// Iterate to find duplicates
// Track all duplicates by index & value
  // obj with all duplicates; more space, have to determine lowest later
  // Set w lowestEle, check before writing; saves space
// Return lowest index

// SIMPLE OBJECT MEMORY
function firstDuplicate(a) {

  let memory = {};

  for (let i = 0; i < a.length; i++) {
    if (memory.hasOwnProperty(a[i])) return a[i];
    memory[a[i]] = i;
  }
  return -1;
}

