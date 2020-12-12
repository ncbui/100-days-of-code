/** Given a 6x6 matrix
 * Calculate the hourglass sum for every hourglass in matrix, then print the maximum hourglass sum.
 * 
 * The array will always be 6 x 6
 * 
 * Given:
 * -9 -9 -9  1 1 1
 *  0 -9  0  4 3 2
 * -9 -9 -9  1 2 3
 *  0  0  8  6 6 0
 *  0  0  0 -2 0 0
 *  0  0  1  2 4 0
 * 
 * Hourglass sums are: 
 * -63, -34, -9, 12,
 * -10,   0, 28, 23,
 * -27, -11, -2, 10,
 *   9,  17, 25, 18
 * 
 * Expect highest sum:  28
 * From hourglass:
 * 0 4 3
 *  1
 * 8 6 6
 */

function hourglassSum(arr) {

  function _hourglassHelper(arr, r, c) {
    let sum = arr[r][c] + arr[r - 1][c - 1] + arr[r - 1][c] +
      arr[r - 1][c + 1] + arr[r + 1][c - 1] + arr[r + 1][c] + arr[r + 1][c + 1];
    return sum;
  }

  let sumsOfHG = {};
  let r = 1;
  let c = 1;

  while (r <= 4) {
    c = 1;
    while (c <= 4) {
      let sum = _hourglassHelper(arr, r, c);
      sumsOfHG[`${r}${c}`] = sum;
      c++;
    }
    r++;
  }

  return Object.values(sumsOfHG).sort((a, b) => b - a)[0]
}