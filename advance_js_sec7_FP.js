// Functional Programing
// // Amazon shopping exercise
// const user = {
//   name: "Kim",
//   active: true,
//   cart: [],
//   purchases: [],
// };

// //Implement a cart feature:
// // 1. Add items to cart.
// // 2. Add 3% tax to item in cart
// // 3. Buy item: cart --> purchases
// // 4. Empty cart

// //Bonus:
// // accept refunds.
// // Track user history.

// function addItem(user){
//     user.cart.push({itemName: "Shoes", price: 100});
//     return user;
// }

// function addTax(user){
//     user.cart.map(item => {
//         item.price = item.price * 1.03;
//     });
//     return user;
// }

// function buyItem(user){
//     user.purchases.push(user.cart);
//     user.cart = [];
//     return user;
// }

/*
NOTE:
Pure Function:
1. No side effects
2. Output should be same as Input
3. Can't change anything outside of the function

without pure function, code can't be easily predicted. Cause functions that share the same global data or state can change the 
data and it depends on the order of the function call.
*/

// //Side effects: these below functions are not pure functions. it has side effects.
// const array = [1, 2, 3];
// function mutateArray(arr) {
//   arr.pop();
// }
// function mutateArray2(arr) {
//   arr.forEach((item) => arr.push(1));
// }
// //The order of the function calls will matter.
// mutateArray(array); // it changes the global array
// mutateArray2(array); // it changes the global array
// array;

// // map and concat methods can fix this issue of mutation
// // No Side effects: these below functions are pure functions. it has no side effects.
// const array = [1, 2, 3];
// function mutateArray3(arr) {
//   const newArr = [].concat(arr);
//   newArr.pop();
//   return newArr;
// }
// function mutateArray4(arr) {
//   return arr.map((item) => item*2);
// }
// //The order of the function calls will matter.
// mutateArray3(array); // it doesn't change the global array
// mutateArray4(array); // it doesn't change the global array
// array; // global array is still [1, 2, 3] because it's not changed by the function call.

// // it's not pure function because it has side effects. it calls window/global object that has side effects.
// function something(){
//     console.log("something");
// }

// // it's a pure function because it returns the same output for the same input. No matters how many time it's called.
// function multiply(num1, num2){
//     return num1 * num2;
// }

/*
We can't have pure function everywhere in our application cause it needs API calls, dom manipulation, etc which have side effects. 
But we should minimize the side effects as of FP principal. And we should try to make our function pure as much as we can. 
It will save time and make us more confident at the time of debugging.

Idempotence: idempotent functions are not pure functions. 
It communicates with the outside world but return the same result no matter how many time the function is called.
*/

// // Idempotence:
// function notGood() {
//   return Math.random();
//   // new Date();
// }

// function good() {
//   return 5;
// }

// Math.abs(Math.abs(10));

/*
Imperative: what to do and how to do
Declarative: what to do and what should be the output

Imperative is kinda low-level instructions and declarative is high level. In the end, all declarative code is gone through the 
imperative conversion. Jquery is more Imperative than React which is Declarative.

To minimize the complexity of our code we should do declarative coding.
*/

// parameters of a function are local variables.
// // Immutability: not changing the data, not changing the state.
// const obj = {name: 'Andrei'}
// function clone(obj) {
//   return {...obj}; // this is pure
// }

// function updateName(obj) {
//   const obj2 = clone
//   (obj);
//   obj2.name = 'Nana'
//   return obj2 // this function doesn't change the global object. it makes a copy and then changes the name. and then returns the copy.
// }

// const updatedObj = updateName(obj)
// console.log(obj, updatedObj)

// // we can use closure and higher-order functions to make variable private.
// //HOF
// const hof = (fn) => fn(5);
// hof(function a(x) {
//   return x;
// });
// //Closure
// const closure = function () {
//   let count = 55;
//   return function getCounter() {
//     return count;
//   };
// };

// const getCounter = closure();
// getCounter();
// getCounter();
// getCounter();

// // The currying function takes one argument at a time and works with multiple arguments.
// //Currying
// const multiply = (a, b) => a * b
// const curriedMultiply = (a) => (b) => a * b
// curriedMultiply(5)(20)
// const multiplyBy5 = curriedMultiply(5)
// multiplyBy5(20)

// partial application function takes one argument at the first call and the rest of the arguments at the second call.
// not like currying function that takes one argument at a time.
// //Partial Application
// const multiply = (a, b, c) => a * b * c
// const partialMultiplyBy5 = multiply.bind(null, 5)
// partialMultiplyBy5(10, 20)

// //learn to cache using memoization
// function addTo80(n) {
//   return n + 80;
// }

// addTo80(5); // this is not memoized

// // let's make the above function memoized
// let cache = {};
// function memoizeAddTo80(n) {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     console.log("long time");
//     const answer = n + 80;
//     cache[n] = answer;
//     return answer;
//   }
// }

// // console.log(1, memoizeAddTo80(6))
// // // console.log(cache)
// // // console.log('-----------')
// // console.log(2, memoizeAddTo80(6))

// // let's make that better with no global scope. This is closure in javascript so.
// function memoizeAddTo80(n) {
//   let cache = {}; // here cache is a closure. it won't run every time and won't be reset.
//   return function (n) {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       console.log("long time");
//       const answer = n + 80;
//       cache[n] = answer;
//       return answer;
//     }
//   };
// }

// const memoized = memoizeAddTo80();
// console.log(1, memoized(6));
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoized(6)); // this will not run again because it's in the cache.
// console.log(3, memoized(8)); // this will run again because it's not in the cache.

// we can use small pure function and by composing them can make complex function.
fn1(fn2(fn3(50))); // same as above without using compose or pipe just calling function

// compose(fn1, fn2, fn3)(50) // Right to left
// pipe(fn3, fn2, fn1)(50) // left to right

const compose = (f, g) => (a) => f(g(a))
const pipe = (f, g) => (a) => g(f(a))
const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
console.log(multiplyBy3AndAbsolute(-50))