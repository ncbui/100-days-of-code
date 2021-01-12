/** Given a string, determine if it has all unique characters
 * 
 * Returns boolean
 */

 const ASCII_MAX = 126;    // standard
 const ASCII_XT_MAX = 256; // extended

const isUniqueMap = (str) => {
  // is string longer than all possible characters?
  if (str.length > ASCII_XT_MAX) return false;

  let char = new Map();

  for (let c of str) {
    if (char.has(c)) {  // runtime: O(n)
      return false;
    } else {
      char.set(c);      // runtime: O(1)
    }
  }
  return true;
}
// total runtime: O(n) where n = letters in string

console.log("isUniqueMap('aaaa')", isUniqueMap('aaaa'));
console.log("isUniqueMap('laie')", isUniqueMap('laie'));


/** Bonus: Cannot use additional data structures */

const isUniqueNoMoreDSA = (str) => {
  if (str.length > ASCII_XT_MAX) return false;

  // for each letter, check every letter in str for a match
  for (let i = 0; i < str.length ; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) return false;
    }
  }

  return true;
} 
// total runtime: O(n^2) where n = letters in string

console.log("isUniqueNoMoreDSA('aaaa')", isUniqueNoMoreDSA('aaaa'));
console.log("isUniqueNoMoreDSA('laie')", isUniqueNoMoreDSA('laie'));


/** Bonus: In O(n log n) 
 * 
 * Note:
 * Array.sort() uses insertion sort for length < 10, else uses quick sort
 * insertion sort runtime:  O(n^2)
 * quick sort runtime: O(n log n)
 *
 * worst case, runtime is O(n log n)
 */

const isUniqueSort = (str) => {
  const splitStr = str.split('').sort();   // runtime: O(n log n), see Array.sort() note for runtime
  
  for (let i = 1; i < str.length; i++) {
    if (splitStr[(i - 1)] === splitStr[i] || splitStr[(i + 1)] === splitStr[i]) return false;
  }                                        // runtime: O(n)

  return true;
}
// total runtime: O((n log n) + n), amortizes to O(n log n)

console.log("isUniqueSort('aaaa')", isUniqueSort('aaaa'));
console.log("isUniqueSort('laie')", isUniqueSort('laie'));