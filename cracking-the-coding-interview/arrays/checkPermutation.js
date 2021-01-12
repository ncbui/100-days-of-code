/** Given two strings, decide if one is a permutation of the other
 * 
 * Returns boolean
 */

 // will this be using all ASCII characters?
 // what if both strings are empty? assuming true 
 // is this case sensitive? assuming yes
 // aab, aba TRUE
 // abc, abc TRUE
 // abc, adcb FALSE
 // adc, abc FALSE
 // abc, ABC FALSE

 // two options
 // sort strings, convert to same case and compare. runtime: O((n log n) + 1)
 // iterate through each string and count. runtime: O(n + n)

 const checkPermutationSort = (str1, str2) => { 
   if (str1.length !== str2.length) return false;
   if (!str1 && !str2) return true;

   s1 = str1.split('').sort().join('');   // runtime: O(n log n)
   s2 = str2.split('').sort().join('');   // runtime: O(n log n)

   console.log({s1, s2})
   return s1 === s2;
 }

 // total runtime: O(2 * (n log n)), amortizes to O(n log n)

// console.log("checkPermutationSort('cba','bca')", checkPermutationSort('cba','bca'));  // true
// console.log("checkPermutationSort('','')",checkPermutationSort('',''));        // true
// console.log("checkPermutationSort('asc','asdf')",checkPermutationSort('asc','asdf')); // false

const checkPermutationMap = (str1, str2) => {
  let count = {};

  for (let l of str1) {
    count[l] = (count[l] || 0) + 1;  // runtime: O(1)
  }
  
  for (let m of str2) {
    count[m] = (count[m] || 0) - 1;  // runtime: O(1)
    
    if (count[m] < 0) return false; // runtime: O(1)
    if (!count[m]) delete count[m]; // runtime: O(1)
  }

  return Object.keys(count).length === 0;
}

console.log("checkPermutationMap('cba', 'bca')", checkPermutationMap('cba', 'bca'));  // true
console.log("checkPermutationMap('', '')", checkPermutationMap('', ''));        // true
console.log("checkPermutationMap('asc', 'asdf')", checkPermutationMap('asc', 'asdf')); // false
