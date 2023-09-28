// const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];

// // logs the whole array
//  console.log(fruits);

// // // logs the first element
//  console.log(fruits[0])

// // // logs the last element
//  console.log(fruits[4])

// // // not in the array
//  console.log(fruits[5])

// // // Array methods

// // // Push/Pop, doing stuff to the end of the array
// // // adds an item to the end of an array
//  fruits.push('pineapple');

//  console.log(fruits);

// // // because we pushed pineapple, it's now there
//  console.log(fruits[5])

//  console.log(fruits.pop());
//  console.log(fruits);
// // because we popped pineapple, it's no longer there
//  console.log(fruits[5])

// // Shift/Unshift, doing stuff to the beginning of the array
// // unshift adds to the beginning of the array
//  fruits.unshift('cherry')
//  console.log(fruits);

// // // shift removes the element at the beginning of the array
//  fruits.shift();
//  console.log(fruits);

// // // slice/splice are for getting subsets of the array.

// // // slice is a pure function/method, gives a subset of the array, doesn't modify the array
// // // providing 1 number starts at that index and goes to the end.
//  console.log(fruits.slice(3))
// // // providing 2 numbers gives you a subset of the first index up to but not including the second index provided
//  console.log(fruits.slice(1, 4))

// // splice method
// // splice is a impure function/method, gives a subset of the array, and splices it out
//  console.log(fruits.splice(0)) // rips everything out of the array.
//  console.log(fruits.splice(0, 2)) // rips out the first two items
//  console.log(fruits);
//  console.log(fruits);
//  console.log(fruits.splice(2, 0, 'papaya', 'tomato'))
//  console.log(fruits);

// // arrays are passed by reference
//  const salad = fruits;

//  console.log(fruits);
//  console.log(salad);

//  fruits.push('passionfruit');

// // both of these are the same reference
// console.log(fruits);
// console.log(salad);
// console.log(fruits === salad);

// let num1 = 5;

// let num2 = num1;

// num2--;
// console.log(num1);
// console.log(num2);

// const copy = [...fruits];
// console.log(copy === fruits);
// copy.push('something');

// console.log(copy);
// console.log(fruits);

// const numbers = [11000, 324, 34, 6, 99999, 10, 15];
// console.log(Math.max(...numbers));

// const people = ["Glenn", "Jessica", "Matt", "Abdoul", "Xavier", "Frank", "Thomas", "Peter", "Jaime"];
// const peopleCopy = ["Glenn", "Jessica", "Matt", "Abdoul", "Xavier", "Frank", "Thomas", "Peter", "Jaime"];

// for (let i = 0; i < people.length; i++) {
//   console.log(i);
//   console.log("Hi " + people[i]);
// }

// for (let i = people.length - 1; i >= 0; i-=2) {
//   console.log(i);
//   console.log("Hi " + people[i]);
// }

// let keepPlaying = true;
// while(keepPlaying) {
//   keepPlaying = confirm("Do you want to keep playing?")
// }

// console.log("Hi Glenn");
// console.log("Hi Jessica");
// console.log("Hi Matt");
// console.log("Hi Abdoul");
// console.log("Hi Xavier");
// console.log("Hi Frank");
// console.log("Hi Thomas");

// const name = "Michael";
// for(let i = 0; i < name.length; i++) {
//   if(name[i] === 'a') {
//     break;
//   }
//   console.log(name[i])
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Hello")
// }

// const secretWord = "hello";

// while(true) {
//   const guess = prompt("Guess the secret word.");
//   if (guess === secretWord) {
//     alert("You win!");
//     break;
//   } else {
//     alert("Try again!")
//   }
//}


// const myInstruments = ["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"];

// const first = myInstruments.shift();

// console.log(first);

// Create an array named myInstruments that contains the following instruments: flute, clarinet, saxophone, trumpet, and trombone.
// Show Answer
// const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
// Write code to transform it into ["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"].
// Hint: You can directly modify an index or use methods like push and unshift!
// Show Answer
// // This is one possible solution.
// myInstruments.push("tuba");
// myInstruments.push("bassoon");
// myInstruments.splice(2, 1);
// myInstruments.unshift("saxophone");
// For the following prompts, write a function according to the description. Test your code as you write it by calling the function in the browser console.

// getFirstInstruments(instruments: string[]) returns the first instrument.
// Example: getFirstInstrument(myInstruments) >>> "saxophone"
// Show Answer
// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string} the first instrument
//  */
// function getFirstInstrument(instruments) {
//   return instruments[0];
// }
// getLastInstrument(instruments: string[]) returns the last instrument.
// Example: getLastInstrument(myInstruments) >>> "bassoon"
// Show Answer
// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string} the last instrument
//  */
// function getLastInstrument(instruments) {
//   return instruments[instruments.length - 1];
// }
// getFirstAndLastInstruments(instruments: string[]) returns a new array containing the first and last instruments without modifying the original array.
// Example: getFirstAndLastInstruments(myInstruments) >>> ["saxophone", "bassoon"]
// Show Answer
// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string[]} the first and last instruments
//  */
// function getFirstAndLastInstruments(instruments) {
//   const output = [];
//   output.push(instruments[0]);
//   output.push(instruments[instruments.length - 1]);
//   return output;

//   // Some other ways to do this:
//   // return [instruments[0], instruments[instruments.length - 1]];
//   // OR
//   // return [instruments[0], instruments.at(-1)];
//   // OR
//   // return [getFirstInstrument(instruments), getLastInstrument(instruments)];
// }
// getFirstThreeInstruments(instruments: string[]) returns the first three instruments without modifying the original array.
// Example: getFirstThreeInstruments(myInstruments) >>> ["saxophone", "flute", "clarinet"]
// Hint: Use a loop to push items into a new array.

// Show Answer
// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string[]} the first three instruments
//  */
// function getFirstThreeInstruments(instruments) {
//   const output = [];
//   output.push(instruments[0]);
//   output.push(instruments[1]);
//   output.push(instruments[2]);
//   return output;

//   // Can you think of other ways to do this?
// }

// // Here's one way to do it with a loop:
// function getFirstThreeInstrumentsWithLoop(instruments) {
//   const output = [];
//   for (let i = 0; i < 3; i++) {
//     output.push(instruments[i]);
//   }
//   return output;
// }
// getTInstruments(instruments: string[]) returns all instruments that start with the letter "t" without modifying the original array.
// Example: getTInstruments(myInstruments) >>> ["trumpet", "trombone", "tuba"]
// Hint: As you are iterating through the array, what do you need to check for before adding to the output array?

// Show Answer
// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string[]} all instruments that start with "t"
//  */
// function getTInstruments(instruments) {
//   const output = [];
//   for (let i = 0; i < instruments.length; i++) {
//    const instrument = instruments[i];
//     // Remember we can also use string indexes!
//     if (instrument[0] === "t") { 
//       output.push(instrument);
//     }
//   }
//   return output;
// }
// (Challenge) getLongestNamedInstrument(instruments: string[]) returns the instrument with the longest name.
// Example: getLongestNamedInstrument(myInstruments) >>> "saxophone"
// Hint: Keep track of the instrument with the longest name you have seen so far as you iterate through the array. When should that information be updated?

// Show Answer
// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string} the instrument with the longest name
//  */
// function getLongestNamedInstrument(instruments) {
//   let longestInstrument = "";
//   // Here we use a for..of loop as syntactic sugar for the index loop
//   for (const instrument of instruments) {
//     if (instrument.length > longestInstrument.length) {
//       longestInstrument = instrument;
//     }
//   }
//   return longestInstrument;
// }

// console.log(myInstruments)
// myInstruments.push("tuba");
// myInstruments.push("bassoon");
// myInstruments.splice(2, 1);
// myInstruments.unshift("saxophone");

