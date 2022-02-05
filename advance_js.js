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

//---EX---
