//---EX---
// //fill array with 60000 elements
//// this will cause stacker overflow
// const list = new Array(60000).join('1.1').split('.');

// function removeItemsFromList() {
//     var item = list.pop();

//     if (item) {
//         removeItemsFromList();
//     }
// };

// removeItemsFromList();

// // solution to prevent stack overflow
// const list = new Array(60000).join('1.1').split('.');

// function removeItemsFromList() {
//     var item = list.pop();

//     if (item) {
//       setTimeout(removeItemsFromList, 0);
//     }
// };

// removeItemsFromList();

// //---EX--- hoisting
// a();
// console.log(one);
// var one = 1;
// var one = 2;
// function a() {
//   console.log('hi')
// }

// function a() {
//   console.log('bye')
// }

// var favouriteFood = "grapes";

// var foodThoughts = function () {
//      console.log("Original favourite food: " + favouriteFood);

//      var favouriteFood = "sushi";

//      console.log("New favourite food: " + favouriteFood);
// };

// foodThoughts()

/* P.s. when you change the 'var' to 'const' technically there is still hoisting happening. 
That is why you get a reference error instead of looking at the global favouriteFood variable. 
let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. 
So the engine says, "ya there is a favouriteFood variable here but you can't access it yet" */
