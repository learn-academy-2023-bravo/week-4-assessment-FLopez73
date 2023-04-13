// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrayContaining", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron",
  ]
  it("will have first value removed and matches even if recived contains values in diffrent order", () => {
    expect(arrayContaining(colors1)).not.toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    )
    expect(arrayContaining(colors2)).not.toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    )
  })
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
//Pseudocode:
// input:An array
// output: An arrray with the first value removed and the rest of the values shuffled.
// create a function arrayContaining that takes in an array as a parameter.
//declare a variable newArray to store the array without the first element or zero indexed value by using the .slice method and passing an argument of one to cut out the string at the zero index.
//I had to look up how to shuffle remaming array elements in random order. I used the fisher yates shuffle algorithm to accomplish this. By running a for loop that lets the index be the length od the array so it starts from the end of the array and iterates through the array down to the zero index in decrements of 1.
// declare a variable that randomizes the shuffle of using Math.floor and Math.random methods. Math.random generates a random floating number which we had 1 to. Then that cloat is passed as an argument in Math.floor that rounds down that float to the nearest whole number.
// by using desctructuring the index and the index of declared variable 'j' are interchanged.
// return the newArray with the shuffled elements.

// https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
const arrayContaining = (array) => {
  const newArray = array.slice(1)
  for (let i = newArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// PASS  ./code-challenges.test.js
// arrayContaining
//   ✓ will have first value removed and matches even if recived contains values in diffrent order (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.458 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.51s.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("voteTally", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  const votes2 = { upVotes: 2, downVotes: 33 }
  it("takes in an object with two key pair values and returns a number", () => {
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})
// // ReferenceError: voteTally is not defined

// 88 |   const votes2 = { upVotes: 2, downVotes: 33 }
// 89 |   it("takes in an object with two key pair values and returns a number", () => {
// > 90 |     expect(voteTally(votes1)).toEqual(11)
//    |     ^
// 91 |     expect(voteTally(votes2)).toEqual(-31)
// 92 |   })
// 93 | })

// at Object.expect (code-challenges.test.js:90:5)

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total
// Snapshots:   0 total
// Time:        0.609 s, estimated 1 s

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
// pseudocode:
// input:an object
// output:a number that is the addition of both key pair values in object.
//create a function that takes in an object.
//declare a variable that utulizes destructuring to assing upvotes to the upVote value and downvotes to downVote value. By using the method Object.values to iterate and return an array of the numbers.
// return the final vote count by subtracting the values stored in upvotes and downvotes.

const voteTally = (value) => {
  const [upvotes, downvotes] = Object.values(value)
  return upvotes - downvotes
}
// PASS  ./code-challenges.test.js
// voteTally
//   ✓ takes in an object with two key pair values and returns a number (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.54 s
// Ran all test suites.
// ✨  Done in 2.16s.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDups", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
  it("takes in two arrays and combines them while removing any duplicates from the new array", () => {
    expect(noDups(dataArray1, dataArray2)).toEqual([
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined",
    ])
  })
})
// FAIL  ./code-challenges.test.js
// voteTally
//   ✓ takes in an object with two key pair values and returns a number (3 ms)
// noDups
//   ✕ takes in two arrays and combines them while removing any duplicates from the new array (1 ms)

// ● noDups › takes in two arrays and combines them while removing any duplicates from the new array

//   ReferenceError: noDups is not defined

//     137 |   const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
//     138 |   it("takes in two arrays and combines them while removing any duplicates from the new array", () => {
//   > 139 |     expect(noDups(dataArray1, dataArray2)).toEqual([
//         |     ^
//     140 |       "array",
//     141 |       "object",
//     142 |       "number",

//     at Object.expect (code-challenges.test.js:139:5)

// Test Suites: 1 failed, 1 total
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
// pseudocode:
// input: two arrays
// output: one array with both values combined and has no duplicates.
// create a function 'noDups" to take in two arrays.
// declare a variable comboArray that will store the added arrays. add the arrays by using the .concat method.
// I was able to do a little research and find the constructor method new Set that creates a new Set object omitting any duplicates that can take an array as an argument.
// declare a variable uniqueArray to store the object values into an array by using the spread operator to copy and new Set to pass comboArray as the argument to delete any duplicates.
//return uniqueArray with both arrays combined and duplicates deleted.

//https://www.w3schools.com/js/js_object_sets.asp

const noDups = (array1, array2) => {
  const comboArray = array1.concat(array2)
  const uniqueArray = [...new Set(comboArray)]
  return uniqueArray
}
// PASS  ./code-challenges.test.js
// noDups
//   ✓ takes in two arrays and combines them while removing any duplicates from the new array (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.642 s
// Ran all test suites.
// ✨  Done in 3.04s.
