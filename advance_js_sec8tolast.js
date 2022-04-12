/*
========================================== FP vs OOP ===================================================
NOTE:
### Functional Programing Major principle:
1 task
return statement
pure
no shared state
immutable state
composable
predictable

### Object Oriented Programming vs Functional Programming
inheritance: Inherit from a big (general) class and modify that class extending a new small* class
composition: composing small functions and making big functionalities.

Humans are bad at predicting the future. So at the time of designing our class, we can't predict everything before. 
So our parent class may change in future. This causes problems sometimes. Sometimes at the time of inheriting, 
we just need small functionalities from a parent class. But we had to inherit the whole class. classes are tightly coupled. 
creates problems when parent-child hierarchy changes for some reason. and we had to repeat ourselves sometimes to solve the issue.

On the other hand, functions are more flexible. we can build small simple functions easily. And it has almost no effect on 
future changes.

### Goal to write good code:
1. Clear + Understandable
2. Easy to extend
3. Easy to maintain
4. Memory efficient
5. DRY

### FP vs OOP
1. many operations on fixed data vs few operations on common data
2. stateless: don't change the state. just operate on data. states are immutable vs stateful: change the state of the program 
like when extending object we change the state of the parent class.
3. pure: no side effects, so more predictable code. no effect on data outside of the function. vs impure: has side effects. 
methods manipulate the internal state.

for the purity on FP, we can run our functions on multiple processors as it has no side effects. we can't do that in OOP cause 
it has side effects. FP is very effective for working with big data, ML, and AI. OOP is good for designing large applications 
like the game characters. In OOP we put data and functions in the same place. it helps us to understand our program. 
In FP functions say data and operations are different things and they should be kept separate.
*/

// Asynchronous JavaScript ==========================================================
// const prom = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Success prom");
//   } else {
//     reject("Failure");
//   }
// });

// const prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success 2");
//   }, 2000);
// });

// const prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success 3");
//   }, 5000);
// });

// // for resolving array of promises all at once
// Promise.all([prom, prom2, prom3]).then((result) => {
//   console.log(result);
// });

// prom
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// // this returns an array of promises
// console.log(urls.map((url) => fetch(url).then((resp) => resp.json())));

// // for resolving array of promises all at once
// Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
// .then(
//   (resp) => {
//     resp.map((data) => console.log(data));
//   }
// );

// console.log("After Promise.all");

// // using promise chaining ES6
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resp) => resp.json())
//   .then(data => console.log(data));

// // using async/await ES8
// async function fetchUsers() {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await resp.json();
//   return console.log(data)
// }

// fetchUsers();

// // using spread operator we can destructure the data. it is a new feature in ES6
// // there is some newer syntax for async/await in ES9 which **for await** and for promise which is .finally()
// setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
// setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

// //2
// Promise.resolve('hi').then((data)=> console.log('2', data))

// //3
// console.log('3','is a crowd')

// // parallel, sequence, race
// const promisify = (item, delay) =>
//   new Promise((resolve) => setTimeout(() => resolve(item), delay));

// const a = () => promisify("a", 1000);
// const b = () => promisify("b", 5000);
// const c = () => promisify("c", 5000);

// async function parallel() {
//   const promises = [a(), b(), c()];
//   const [output1, output2, output3] = await Promise.all(promises);
//   return `parallel is done: ${output1} ${output2} ${output3}`;
// }

// async function race() {
//   const promises = [a(), b(), c()];
//   const output1 = await Promise.race(promises);
//   return `race is done: ${output1}`;
// }

// async function sequence() {
//   const output1 = await a();
//   const output2 = await b();
//   const output3 = await c();
//   return `sequence is done ${output1} ${output2} ${output3}`;
// }

// sequence().then(console.log); // will run after 11 sec. cause 11 is the sum of 1+5+5
// parallel().then(console.log); // will run after 5 sec. cause 5 is the highest and everything runs paralelly
// race().then(console.log); // will run after 1 sec. cause it is a race

// // ### ES2020
// // there is a new syntax in ES2020 which is allSettled() for Promise. it can be use for subtituding of Promise.all() with Promise.allSettled().
// // Unlike throwing undefined if any promise gets rejected for all(),  allSettled() returns an array of objects regardless the promise is resolved or rejected.

// // Promise.any() resolves if any of the supplied promises is resolved. Below we have 3 promises, which resolves at random times.

// // ### ES2021: any()
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
// });
// // Out of p1, p2 and p3, whichever resolves first is taken by Promise.any().

// (async function () {
//   const result = await Promise.any([p1, p2, p3]);
//   console.log(result); // Prints "A", "B" or "C"
// })();
// // What if none of the promises resolve? In that case Promise.any() throws an error!

// ### Resources: multi threading, multi processing
// Running Node.js on multiple CPU: https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc
// Web workers: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
// Multi threading: https://www.internalpointers.com/post/gentle-introduction-multithreading

// ### Threads, concurrency and parallelism in JavaScript.
// Threads: threads is the smallest chunk of a task
// Concurrency: a program can run concurrently in a single thread.
// Parallelism: a program can run in parallel in multiple threads in multiple processors.
// on the background of the web browser or node.js there are multiple threads running.
// we do not have to worry about concurrency or parallelism when writing code every time.

// // ### Modules in JavaScript
// var harry = 'potter'
// var voldemort = 'He who must not be named'
// function fight(char1, char2) {
//   var attack1 = Math.floor(Math.random() * char1.length);
//   var attack2 = Math.floor(Math.random() * char2.length);
//   return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
// }

// fight(harry, voldemort)

/*
For having modular code in JS we use:
1. IIFE (Immediately Invoked Function Expression)
2. CommonJS (in Node.js)(using require.js)(browserify, webpack)(bundled all the modules in one file)
3. AMD (Asynchronous Module Definition) - use define() to define a module
4. UMD (Universal Module Definition) - use if else to define a module
5. ES6 Modules - import : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
                  export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
*/

// Error handling in JavaScript ==========================================
/* 
if errors are encountered it search for a catch at the bottom of the stack. 
if don't find any catch then it runs onerror() in the browser and process.on('uncaughtException') in node.
We should catch errors in our program so that our programs keep running rather than getting stopped where errors happen.
*/

throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw Error;
throw new Error(); // will create an instance of an Error in JavaScript and stop the execution of your script.

function a() {
  const b = new Error("what?");
  return b;
}

a().stack;

let error = new Error(message);
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);
