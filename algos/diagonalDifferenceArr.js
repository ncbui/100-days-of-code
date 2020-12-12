/** Given a matrix, return the absolute difference between the sums of the matrix's two diagonals as a single integer.
 * 
 * @param {*} arr 
 * 
 * Given: 
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 * 
 * Expect: 15
 */


function diagonalDifference(arr) {

  // build an array for primary and secondary sums
  let diff = [[], []];

  for (let r = 0; r < arr.length; r++) {
    diff[0].push(arr[r][r]);
    diff[1].push(arr[r][arr.length - 1 - r]);
  }

  // reduce each array
  diff = diff.map(arr => arr.reduce((sum, val) => sum + val));

  // 
  return Math.abs(diff.reduce((diff, val) => val - diff));
}