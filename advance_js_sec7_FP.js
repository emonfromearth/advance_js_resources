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

// map and concat methods can fix this issue of mutation
// No Side effects: these below functions are pure functions. it has no side effects.
const array = [1, 2, 3];
function mutateArray3(arr) {
  const newArr = [].concat(arr);
  newArr.pop();
  return newArr;
}
function mutateArray4(arr) {
  return arr.map((item) => item*2);
}
//The order of the function calls will matter.
mutateArray3(array); // it doesn't change the global array
mutateArray4(array); // it doesn't change the global array
array; // global array is still [1, 2, 3] because it's not changed by the function call.

// it's not pure function because it has side effects. it calls window/global object that has side effects.
function something(){
    console.log("something");
}

// it's a pure function because it returns the same output for the same input. No matters how many time it's called. 
function multiply(num1, num2){
    return num1 * num2;
}