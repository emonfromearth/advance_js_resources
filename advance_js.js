// ---EX--- stack overflow
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

// // solution to prevent stack overflow using setTimeout which use browser's native stack
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

// // more hoisting practice
// function bigBrother(){
//     function littleBrother() {
//       return 'it is me!';
//     }
//     return littleBrother();
//     function littleBrother() {
//       return 'no me!';
//     }
//   }
  
//   // Before running this code, what do you think the output is?
//   bigBrother();

// function invocation/call/execution.

// Function expression. Express a function using variables. don't hoisted

// var sing = function(){
// }

// // Function statement/declaration. Declare a function in the usual way. hoisted.
// sing = function(){
// }

// // Function Expression
// var canada = () => console.log('cold')
// // Function Declaration
// function india() {
//   console.log('warm')
// }

// // Function Invocation, Calling, Execution
// canada()
// india()

// function india() {
//   console.log(arguments)
//   console.log('warm')
// }

// india()

// //arguments is an array-like object. it is created in very execution context
// function marry(person1, person2) {
//   console.log(arguments)
//   console.log(Array.from(arguments))
//   return `${person1} is now married to ${person2}`
// }

// function marry2(...args) {
//   console.log(args)
//   console.log(Array.from(arguments))
//   return `${person1} is now married to ${person2}`
// }

// marry('Tim', 'Tina')

//Variable Environement
// function two() {
//     var isValid; // 5. isValid is undefined in this execution context.
//   }
  
//   function one() {
//     var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
//     two(); // 4. New execution context created.
//   }
  
//   var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
//   one() // 2. New execution context is created on top of the stack.
  
// // Scope:
// function sayMyName() {
//     var a = 'a';
//     return function findName() {
//       var b = 'b';
//       console.log(c)
//       return function printName() {
//         var c = 'c';
//         return 'Andrei Neagoie'
//       }
//     }
//   }
  
//   sayMyName()()()
  
//   function findName() {
//     var b = 'b';
//     return printName();
//   }
  
//   function printName() {
//     var c = 'c'
//     return 'Andrei Neagoie'
//   }
  
//   function sayMyName() {
//     var a = 'a';
//     return findName()
//   }
  
//   sayMyName()

// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
// 'use strict' // it will not create a global variable for height if not declared. it restricts default behavior.
// function weird() {
//     height = 50
//   }
  
//   var heyhey = function doodle() {
//     // code here
//   }
  
//   heyhey();
//   doodle(); // Error! because it is enclosed in its own scope.

// Function Scope. variables are only accessible within the function. for, while, if, etc's {} is not strict here.
function loop() {
    for( var i = 0; i < 5; i++) {
      console.log(i);
    }
    console.log(i)
  }
  
  //Block Scope. variables are only accessible within the block not the entire function. for, while, if, etc's {} is strict here.
  function loop2() {
    for( let i = 0; i < 5; i++) {
      console.log(i);
    }
    console.log(i)
  }