// Elzer Solution
function findMissingLetterIn(givenLetters) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let start = alpha.indexOf(givenLetters[0]);
  for (let i = 0; i < givenLetters.length; i++) {
    if (givenLetters[i] !== alpha[start + i]) {
      return alpha[start + i];
    }
  }
  return "No Missing Letter In Sequence";
}

// My Solution
/* 
function findMissingLetterIn(givenLetters) {
  // Check If There Any input
  if (givenLetters.length === 0) {
    return "Empty input";
  }
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let start = alpha.indexOf(givenLetters[0]);
  let missingLetter = alpha
    .slice(start, start + givenLetters.length)
    .split("")
    .find((letter, index) => letter !== givenLetters[index]);
  if (missingLetter) {
    return missingLetter;
  }
  return "No Missing Letter In Sequence";
}
*/

// Examples
console.log(findMissingLetterIn("pqrtu")); // s
// console.log(findMissingLetterIn("defgi")); // h
// console.log(findMissingLetterIn("abcdeghi")); // f
// console.log(findMissingLetterIn("xyz")); // No Missing Letter In Sequence
