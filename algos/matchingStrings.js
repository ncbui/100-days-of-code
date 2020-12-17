/** Given a list of strings and a list of queries we want to find
 * For each query string, determine how many times it occurs in the list of input strings. 
 * Return an array of the results.
 * 
 */

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {

  let counter = {};

  for (let q of queries) counter[q] = 0;

  strings.filter(s => counter[s] >= 0).forEach(s => counter[s]++);

  let qCount = queries.map(q => counter[q]);

  return qCount;
}