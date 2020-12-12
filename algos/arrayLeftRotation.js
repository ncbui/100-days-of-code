/** Given an array  of  integers and a number, perform that number of left rotations on the array.
 *  Return the updated array to be printed as a single line of space-separated integers.
 * 
 * 
 * Test case
 * Given: [1, 2, 3, 4, 5], 5
 * Expect: [5, 1, 2, 3, 4]
 */

function rotLeft(a, d) {
  for (let times = 1; times <= d; times++) {
    a = _shiftOnce(a)
  }

  return a;
}

function _shiftOnce(a) {
  let tmp = a[0];
  for (let i = 0; i < a.length; i++) {
    if (i === a.length - 1) {
      a[i] = tmp;
    } else {
      a[i] = a[i + 1];
    }
  }
  return a;
}