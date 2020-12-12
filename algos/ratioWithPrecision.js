/** Given an array of integers, 
 * calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal. 
 * 
 * Given: -4 3 -9 0 4 1
 * Expect: 
 * 0.500000
 * 0.333333
 * 0.166667
 * */

function plusMinus(arr) {
  let length = arr.length;
  let freq = {
    "positive": 0,
    "negative": 0,
    "zero": 0
  };

  arr.forEach(val => {
    if (val > 0) {
      freq["positive"]++
    } else if (val < 0) {
      freq["negative"]++
    } else {
      freq["zero"]++
    };
  });

  console.log((freq.positive / length).toFixed(6));
  console.log((freq.negative / length).toFixed(6));
  console.log((freq.zero / length).toFixed(6));
}