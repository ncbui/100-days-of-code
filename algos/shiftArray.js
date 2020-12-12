/** Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
 * 
 * @param {*} a: array
 * @param {*} d: number
 */
// Complete the rotLeft function below.
function rotLeft(a, d) {

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

  for (let times = 1; times <= d; times++) {
    a = _shiftOnce(a)
  }

  return a;
}