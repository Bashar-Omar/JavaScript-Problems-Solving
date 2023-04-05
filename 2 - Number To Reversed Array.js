// The First Solution
/* 
function convert(n) {
  // Convert To String
  let str = n.toString();
  // Convert To Array
  let arr = str.split("");
  // Convert All Elements To Number
  arr = arr.map((x) => +x);
  // Reverse Yhe Array
  arr = arr.reverse();
  return arr;
}
*/

// The Second Solution
/* 
function convert(n) {
  return n
    .toString()
    .split("")
    .map((x) => +x)
    .reverse();
}
*/

// The Third Solution
/*
function convert(n) {
  // Convert To String
  let str = n.toString();
  // Create Empty Array
  let emptyArray = [];
  for (let i = 0; i < str.length; i++) {
    emptyArray.push(+str[i]);
  }
  // Reverse Array
  let result = emptyArray.reverse();
  return result;
}
*/

// The Fourth Solution
/*
function convert(n) {
  // Convert To String
  let str = n.toString();
  // Create Empty Array
  let emptyArray = [];
  for (let i = 0; i < str.length; i++) {
    emptyArray.unshift(+str[i]);
  }
  // Reverse Array
  return emptyArray;
}
*/

// My Solution
/*
function convert(n) {
  return Array.from(String(n), Number).reverse();
}
*/

// Examples
console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]
