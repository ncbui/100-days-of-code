// Given a string s consisting of small English letters, 
// find and return the first instance of a non-repeating character in it. 
// If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {

  function firstNotRepeatingCharacter(s) {
    if (s.length === 0) return "_";

    // count
    let count = {}
    for (let ltr of s) {
      count[ltr] ? count[ltr]++ : count[ltr] = 1;
    }

    // filter count object for non-repeating instances
    Object.keys(count).forEach(key => {
      if (count[key] > 1) delete count[key]
    }
    )
    Object.keys(count).forEach(key => count[key] = s.indexOf(key));
    if (Object.keys(count).length === 0) return "_"

    // sort what's left and return the instance with the lowest idx
    let nonRIdx = Object.values(count).sort((a, b) => a < b);
    return s[nonRIdx[0]]
  }

}