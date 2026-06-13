// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


// A1.
// Declare a variable using const and assign it the number 100.
// Declare a variable using let and assign it the number 45.
// Log both.

//Answer:
const cNum = 100;
let lNum = 45;
console.log(cNum);
console.log(lNum)



// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
// Log the result.


//Answer:
console.log((((cNum + lNum) - 20) * 2) / 5);


// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
//
// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer:let variables let you reassign them but const variables do not


//Answer: 
console.log(lNum = 50);
//console.log(cNum = 200);


// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
// Log the result and a message that says "even" or "odd".
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer:
let numFourSeven = 47
function oddOrEven (num){
  if (num % 2 === 0){
    return `${numFourSeven} is even.`;
  }
  else {
    return `${numFourSeven} is odd.`;
  }
}
console.log(oddOrEven(numFourSeven));
console.log()


// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "
console.log(rawInput);

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
console.log(rawInput.trim());

// B2.
// Log the string converted to all lowercase.
console.log(rawInput.toLowerCase())

// B3.
// Log the number of characters in rawInput (including spaces).
console.log(rawInput.length)  //originally I did  rawInput.length() but on the console it said it was not a function so I took off the () and the warning message went away

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.

console.log(rawInput.toLowerCase().includes("awesome"))


// B5.
// Log the first 10 characters of rawInput.

console.log(` This is the legnth of the first 10 characters: ${rawInput.slice(0,10).length}`)
console.log(rawInput.slice(0,10))

//I forgot if the end is inclusive or exclusive so I used length to see if it was and it in inclusive 




// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: 
console.log(`This is the size of the array below: ${rawInput.trim().split(" ").length}`);
console.log(rawInput.trim().split(" "));
// originally I did rawInput.trim().split() however this just converted the entire string into an array so its size was 1

// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.

function firstLast(arr){
  let firstScore = arr[0];
  let lastScore = arr[arr.length - 1];  
  
  return `This is my first score: ${firstScore}\nThis is my last scrore: ${lastScore}`;
}

console.log(firstLast(scores))

//wait we can just do
console.log(`This is my first score: ${scores[0]}\nThis is my last scrore: ${scores[scores.length - 1]}`)
//it works!!



// C2.
// Log the total number of scores we see in the array.




function seeScores(arr){
  
  return `We see ${arr.length} scores in the array`;
}

console.log(seeScores(scores));

//same here
console.log(`We see ${scores.length} scores in the array`);


// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.

console.log(`New array size after I add 73 is: ${scores.push(73)}\nThis is my new array ${scores}`)



// C4.
// Use a method to log the index of the score 95.
// Log the index.

console.log(`The index of score 95 is: ${scores.indexOf(95)}`)

// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.

console.log(`It is ${scores.includes(50)} that score 50 is in the array`)

// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.

console.log(((arr)=> {
  let result = "";
  for(let i = 0; i < arr.length; i++){
    result += `Score ${i + 1}: ${arr[i]}\n`
  }
  return result;
}) (scores));


/*for(let i = 0; i < scores.length; i++){
  console.log(scores[i])
}
*/




// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
//

scores.forEach((score) => {
  console.log(`Score: ${score}`)
});

/*Answer:I guess it all depends on what you are trying to show in a for loop you can do through each element in the array and you
can also skip some elements if need be but the best part is you have a way to show which number (score 1, score 2)

I think it just depends on what the task is. I dont know if one is better than the other but one is definitely better on the hands
*/




// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.

let aboveEighty = scores.filter((score) =>{
  return score > 80;
});

console.log(`New array: ${aboveEighty}`);


// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
//
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer:

let timesTwo = scores.map((score) => {
  return score * 2
});

console.log(timesTwo)

//Answer: .filter() you need a condition that returns the true elements onto new created array and .map() mutates the elements inside and array well I guess not mutates it mutates the result onto a new array (TRANSFORMS!!!)





// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.

console.log(student.name);
console.log(student['city']);


// D2
// Add a new key called grade and set it to "B+".
// Log the updated object.

// student["grade"] = "B+"
// console.log(student["grade"])


student.grade = "B+";
console.log(student.grade);


// D3.
// Use a method to log all of the keys in the object.

const keys = Object.keys(student)
console.log(keys)

// D4.
// Use a method to log all of the values in the object.
// console.log("D4")
// let values = student.valueOf()
// console.log(values)
console.log(student.valueOf())

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)
// console.log("D5")
for(let key in student){
  console.log(`${key}: ${student[key]}`);
}

// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer: with dot notation you need to know the properties of the object but with bracket notation 
//          you can search for an object




// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]

// E1.
// Log the name of the third student.

//console.table(roster[2])
console.log(roster[2])
// E2.
// Using forEach, log the name of every student who is present.

roster.forEach((student) => {
  if (student.present === true){
    console.log(student.name);
  }
});
// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.

roster.filter((student) =>{
  if (student.grade >= 70){
    console.log(`${student.name}: ${student.grade}`)
  }
});


// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.
const newArr = roster.map((student => student.name));
console.log(newArr);

// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer: you can group related content together and you can use methods like .forEach() and .map() and .filter to search, modify and loop a bunch of objects






// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")


// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//

function greet(name){
  return (`Hello, ${name}`)
};
console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"

// function greet(name){
//   console.log(`Hello, ${name}`)
// } 


// F2.
// Write a function called square that takes a number and returns its square.
//

function square(number){
  return number * number
};

console.log(square(4))   // → 16
console.log(square(9))   // → 81
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: the keyword return returns a value and without it will show undefined. Also return can just simpley return without a value. Stop the execution of a function


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//

function isEven(number){
  if (number % 2 === 0){
    return true;
  }else {return false}
};


console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true


// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//

function sum(arr){
 let total = 0;

 for(let i = 0; i < arr.length; i++){
  total += arr[i];
 }
 return total
};

console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0


// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//

function myForEach(arr, callback){
  for (let i = 0; i < arr.length; i++){
    callback(arr[i]);
  }
}



myForEach([1, 2, 3], function(n) {
  console.log(n)
})
// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer:the roll of callback would be the no name function(n). callback function is a function that is passed in another function.


// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//

function myMap(fSixArr, callback){
  let newArr = [];

  for(let i = 0; i < fSixArr.length; i++){
    let mutatedVal = callback(fSixArr[i]);
    newArr.push(mutatedVal)
  }
  return newArr;
};


console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]


// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
function myFilter(fSevenArr, callback){
  let newArr =[];

  for(let i = 0; i < fSevenArr.length; i++){
    if(callback(fSevenArr[i]) === true){
      newArr.push(fSevenArr[i])
    }
  }
  return newArr;
}


console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer: mymap returns a new array with the same length and transformed elements if user chooses to and
//          myFilter returns a new arry that contained only specif elements that passed a true or false condition.
//          neither of them change the orginal array becayse they create a new array and use callback function to manipulate that new array
