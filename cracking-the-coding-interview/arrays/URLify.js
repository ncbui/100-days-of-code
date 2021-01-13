/** Given a string and the true length of the string, 
 * replace all the spaces with '%20'
 * 
 * Returns a string
 */



// pointer problem, two pointers to track indices

// What happens if str is empty? True length = 0
// what happens if str is just spaces? True length = 0

const URLify = (str, length) => {
  if (!length) return str;

  let replaced = str.split(''); // work with an array, join later

  let EndIdx = replaced.length - 1
  let i = EndIdx; // this will remain the same until we hit the first letter

 // start from end index, 
 // find the first non-space character, add it to end
 // move forward, if !space, add to end, if space, add '%20' instead


  for (let j = EndIdx; j >= 0; j--) {
    // TODO: optimize
    if (/\S/.test(replaced[j])) {
      replaced[i] = replaced[j];
      i--;
    } else if (/\s/.test(replaced[j]) && i !== EndIdx) {
      replaced[i] = '%20';
      i--;
    }
    if (j === 0) return replaced.splice(i+1).join('');
  }
}


console.log(URLify('Mr John Smith    ', 13)) // Mr%20John%20Smith
