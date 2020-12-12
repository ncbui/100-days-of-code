/** Given five positive integers, 
 * Find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * 
 * 
 * Test case:
 * Given: 1 2 3 4 5
 * Expect: 10 14
 */

function miniMaxSum(arr) {

  let minMax = { min: 0, max: 0 }
  let sum = 0

  arr.forEach((val, idx) => {
    sum = arr.filter((val, i) => i !== idx).reduce((sum, val) => sum + val);
    if (minMax["min"] === 0 || sum < minMax["min"]) minMax["min"] = sum;
    if (minMax["max"] === 0 || sum > minMax["max"]) minMax["max"] = sum;
  }
  )

  console.log(minMax["min"], minMax["max"])
}
