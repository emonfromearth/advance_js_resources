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
//Partial Application
const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(10, 20)