// ---EX--- stack overflow =============================================================
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

// //---EX--- hoisting =============================================================
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

// // Function Invocation, Calling, Execution =============================================================
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

// // Scope: =============================================================
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
// function loop() {
//     for( var i = 0; i < 5; i++) {
//       console.log(i);
//     }
//     console.log(i)
//   }

//   //Block Scope. variables are only accessible within the block not the entire function. for, while, if, etc's {} is strict here.
//   function loop2() {
//     for( let i = 0; i < 5; i++) {
//       console.log(i);
//     }
//     console.log(i)
//   }

// IIFE : Immediately Invoked Function Expression =============================================================
// a function expression can be called immediately after
// (function(){
//     console.log('hi')
// })()

// // same as above
// (function(){
//     console.log('hi')
// }())

// but in function declaration we can't
// function(){}()

// we can use IIFE to create a private scope. script returns only what we want. it'll return only a, b as object but not c. here c is a private variable.
// var script = (function (anything) {
//   var b = 5;
//   var c = 10;
//   function a() {
//     console.log(anything + " " + c);
//   }
//   return {
//     a: a,
//     b: b,
//   };
// })("emon");

// // this keyword
// const obj = {
//   name: "Billy",
//   sing: function () {
//     return "llala " + this.name + "!";
//   },
//   singAgain: function () {
//     return this.sing();
//   },
// };

// obj.sing();

// function importantPerson() {
//   console.log(this.name);
// }

// const name = "Sunny";
// const obj1 = { name: "Cassy", importantPerson: importantPerson };
// const obj2 = { name: "Jacob", importantPerson: importantPerson };

// obj2.importantPerson();

//Exercise with this keyword
// const a = function() {
//     console.log(this)
//     const b = function() {
//       console.log(this)
//       const c = {
//         hi: function() {
//        console.log(this)
//       }}
//       c.hi()
//     }
//     b()
//   }

//   a()

//   //JS is weird:
//   const obj = {
//     name: 'Billy',
//     sing: function() {
//       console.log(this) // in this case, it's a method on an object.
//       var anotherFunc = function() {
//         console.log(this)// this points to windows!
//       }
//     }
//   }
/* 
binding this :3
self = this

^ using the above methods we can solve the problem with this without using the arrow function. 
In the arrow function, this keyword is lexically scope not dynamically scope.
*/

// call, apply, bind =============================================================
/* 
call() and apply() methods bind any methods from one object to another object. 
or just say they borrow methods from one object to another.

call() and apply() methods do exactly the same things just apply() takes an array as the arguments.

bind() method is just the same as call() but rather than calling the function immediately, 
it stores the value in a variable for later use.
*/
// const wizard = {
//     name: 'Merlin',
//     health: 100,
//     heal: function(num1, num2) {
//       this.health += num1 + num2;
//     }
//   }

//   const archer = {
//     name: 'Robin Hood',
//     health: 50
//   }

//   wizard.heal.call(archer, 50, 60)
//   wizard.heal.apply(archer, [20, 30])
//   archer
//   // function borrowing

//   const healArcher = wizard.heal.bind(archer, 50, 60);
//   console.log(archer)
//   healArcher()
//   console.log(archer)

// // use bind() - function currying
// function multiply(a, b) {
//     return a*b;
// }

// var multipleByTwo = multiply.bind(this, 2);
// console.log(multipleByTwo(4));

// var multipleByThree = multiply.bind(this, 3);
// console.log(multipleByThree(4));

// // this again
// var b = {
//   name: "jay",
//   say() {
//     console.log(this); // this is the object b. it makes sense.
//   },
// };

// var c = {
//   name: "jay",
//   say() {
//     return function () {
//       console.log(this); // will point to windows object. unexpected behavior of this. dynamically scoped.
//     };
//   },
// };

// var d = {
//   name: "jay",
//   say() {
//     return () => console.log(this); // arrow function. lexically scoped. solved the above unexpected behavior.
//   },
// };

// // exercise with this keyword
// const character = {
//     name: 'Simon',
//     getCharacter() {
//       return this.name;
//     }
//   };
//   const giveMeTheCharacterNOW = character.getCharacter;
   
//   //How Would you fix this?
//   console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

//   // solution of the above exercise
//   const character = {
//     name: 'Simon',
//     getCharacter() {
//       return this.name;
//     }
//   };
//   const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
//   console.log('?', giveMeTheCharacterNOW());
  