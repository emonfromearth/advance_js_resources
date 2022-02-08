// learn more about js Standard built-in objects here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// array in javascript is an object. we can check the array type by using the Array.isArray(here put the array to check) method.
/*
pass by value: every variable has its own memory space. they are primitive types and immutable. 
we can't modify them, we have to delete and create the whole variable to make any changes.

pass by reference: variable doesn't have their own copy of memory. all variables are just referred to a single memory location. 
they are non-primitive types and mutable. we can change the value. and it's good cause they don't copy again and again to every 
variable which saves our memory. and it's also bad sometimes if someone changes the value of our object.
*/

/*
cloning: Objects and arrays are copied to a variable by its reference, not by value. So if we want to make a copy of the 
object we have to use Object.assign() method or spread operator ...obj to clone the value of the object by its value.

But, normally these two methods clone the object which we called shallow cloning. in a nested object, this only clones 
the outer object but the inner object is passed by reference.

for deep cloning, we can use JSON.parse(JSON.stringyfy()) methods or nested use of spread operator.
*/

// var c = [1,2,3];
// var d = c;
// d.push( 4 );

// console.log(c);   // [1,2,3,4]
// console.log(d);   // [1,2,3,4]

// var a = 5;
// var b = a;

// b++;

// let obj = {
//   a: 'a',
//   b: 'b',
//   c: {
//     deep: 'try and copy me'
//   }
// };
// let clone = Object.assign({}, obj);
// let clone2 = {...obj} // shallow clone using spread operator.
// let superClone = JSON.parse(JSON.stringify(obj)) // deep cloning. sometimes cause performance issue if the object is deeply nested.

// obj.c.deep = 'hahaha';
// console.log(obj)
// console.log(clone)
// console.log(clone2)
// console.log(superClone)

// // Exercise: Compare Objects
// // How would you compare two objects if they are pointing to a different location in memory but still have the same properties?

// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
// var jsn = JSON.stringify(user1) == JSON.stringify(user2);
// console.log(eq) // gives false
// console.log(jsn) // gives true

// // Exercise: pass by value and pass by reference
// const number = 100
// const string = "Jay"
// let obj1 = {
//   value: "a"
// }
// let obj2 = {
//   value: "b"
// }
// let obj3 = obj2;

// function change(number, string, obj1, obj2) {
//     number = number * 10;
//     string = "Pete";
//     obj1 = obj2;
//     obj2.value = "c";
// }

// change(number, string, obj1, obj2);

// //Guess the outputs here before you run the code:
// console.log(number);
// console.log(string);
// console.log(obj1.value);

// type coercion ============================================================
/*
1 == '1' :  means check the two types and if not equal change the right one. so '1' becomes 1 and the result prints true. this type of coercion.

1 === '1'  we should use === to check of the two object equal or comparing two things. there will be no type coercion happens.

in if(1){} here 1 coerce to true
in if(0){} here 0 coerce to false

we can learn more about type coercion here:
1. [interactive graph] https://dorey.github.io/JavaScript-Equality-Table/
2. [docs] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
3. https://262.ecma-international.org/5.1/#sec-11.9.3
*/

// Exercise: Type Coercion
// JS can be weird when it comes to type coercion. Try to guess what the output for each of the lines below are:

// false == ""
// false == []
// false == {}
// "" == 0
// "" == []
// "" == {}
// 0 == []
// 0 == {}
// 0 == null

/*
Dynamic vs Static - Strong vs Weak
In javascript, because of coercion, it changes the variable types in runtime. for example, we can add strings and numbers together. 
here variable types are not strongly kept, it changes. So, we call JavaScript is a weakly typed language. 
(also javascript is a dynamically typed language as we do not define variable types when we write code. 
in statically typed language we have to define the variable types whether it is str or int or any other types.).

So, JavaScript is a dynamic and weakly typed language.
*/

/*
function in javascript is just an object under the hood, but they have some special things like call ability, 
some methods, and properties.

function in JS is a first-class citizen. we can-
1. assign function to a variable
2. pass function as argument to another function
3. return function from a function

so we can do everything with functions like other data types. so that we called function is a first-class citizen.
*/

// Higher Order Functions =====================================================
// Higher Order Function (HOF): function that returns another function or function that takes function as argument is called higher-order function.
// const multiplyBy = num1 => num2 => num1 * num2;

// multiplyBy(2)(3); // 6

// closure: function that uses a variable from an outer function's scope is called closure.
// lexically scoped variables are called closure. lexical scoping is a way to create a closure.
// lexical scope === closure.
// function a() {
//     let grandpa = 'grandpa'
//     return function b() {
//       let father = 'father'
//       return function c() {
//         let son = 'son'
//         return `${grandpa} > ${father} > ${son}`
//       }
//     }
//   }

//   a()

//   //closures and higher order function
//   function boo(string) {
//     return function(name) {
//       return function(name2) {
//         console.log(`hi ${name2}`)
//       }
//     }
//   }

//   // same above function using arrow function
//   const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)

//   boo('hi')('john')('tanya');

//   // AHH! HOW DOES IT REMEMBER THIS 5 years from now?
//   booString = boo2('sing');
//   booStringName = booString('John');
//   booStringNameName2 = booStringName('tanya')

//   // closure exercise 2
//   function heavyDuty(item) {
//     const bigArray = new Array(7000).fill('😄')
//     console.log('created!');
//     return bigArray[item]
//   }

//   heavyDuty(699)
//   heavyDuty(699)
//   heavyDuty(699)
//   const getHeavyDuty = heavyDuty2(); // it creates closure.
//   getHeavyDuty(699)
//   getHeavyDuty(699)
//   getHeavyDuty(699)

//   // but i dont want to pollute the global namespace..
//   function heavyDuty2() {
//     const bigArray = new Array(7000).fill('😄')
//     console.log('created Again!')
//     return function(item) {
//       return bigArray[item]
//     }
//   }

// // closure exercise 3
// const makeNuclearButton = () => {
//   let timeWithoutDestruction = 0;
//   const passTime = () => timeWithoutDestruction++;
//   const totalPeaceTime = () => timeWithoutDestruction;
//   const launch = () => {
//     timeWithoutDestruction = -1;
//     return "💥";
//   };

//   setInterval(passTime, 1000);
//   return { totalPeaceTime };
// };

// const ww3 = makeNuclearButton();
// ww3.totalPeaceTime();

// // Make it so that the initialize function can only be called once!
// let view;
// function initialize() {
//       view = '🏔';
//       console.log('view has been set!')
// }

// initialize();
// initialize();
// initialize();

// console.log(view)

// // solution 3
// let view;
// function initialize() {
//   let called = 0;
//   return function() {
//     if (called > 0) {
//       return
//     } else {
//       view = '🏔';
//       called = true;
//       console.log('view has been set!')
//     }

//   }
// }

// const start = initialize();
// start();
// start();
// start();
// console.log(view)

// // closure exercise
// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + i)
//   }, 3000)
// } // after 3 seconds, it will print -> I am at index 4 : because it is at the end of the loop and i was 4 at that time.

// // solution
// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//     let j = i;
//   setTimeout(function(){
//     console.log('I am at index ' + j)
//   }, 3000)
// }

// // another soltuion to the above problem
// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//   (function(closureI) {
//     setTimeout(function(){
//       console.log('I am at index ' + array[closureI])
//     }, 3000)
//   })(i)
// }
/*
closure is memory efficient: when we create closure and call the function then it doesn't create and destruct every time.
closure encapsulates data: we can hide unnecessary data using the power of closure.
*/
// javascript cares where the function is written, not where the function is called.

// // prototypal inheritance =====================================================
// // We can inherit the properties and methods from one object to another object using prototypal inheritance.
// // array and functions are objects in javascript. And they get access to the object's method through the prototype chain which we call prototypal inheritance.
// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//       return 5
//     },
//     sing() {
//       if (this.fire) {
//         return `I am ${this.name}, the breather of fire`
//       }
//     }
//   }

//   let lizard = {
//     name: 'Kiki',
//     fight() {
//       return 1
//     }
//   }
//   // Don't do this, bad performance. Show with bind.
//   lizard.__proto__ = dragon;
//   dragon.isPrototypeOf(lizard);
//   console.log(lizard.fire)
//   console.log(lizard.sing())
//   const lizardFire = dragon.sing.bind(lizard)
//   console.log(lizardFire())

// //Every Prototype chain links to a prototype object{}
// function multiplyBy5(num) {
//   return num * 5;
// }

// // multiplyBy5(num) > Function > Object > null
// //   multiplyBy5.__proto__ === Function.prototype //   true
// multiplyBy5.__proto__;
// Function.prototype;
// //   multiplyBy5.__proto__.__proto__ === Object.prototype //   true
// multiplyBy5.__proto__.__proto__;
// Object.prototype;
// multiplyBy5.__proto__.__proto__.__proto__; // null
// typeof Object;
// typeof {};

// // Create our own prototypes:
// // we can use Object.create() instead of __proto__
// var human = {mortal: true}
// var socrates = Object.create(human);
// human.isPrototypeOf(socrates); // true

// // prototypal inheritance Exercise
// //Array.map() => to print '🗺'
// // modify the javascript's map method to add '🗺' to the end of each element in the array.
// Array.prototype.map = function () {
//   // what happens with arrow function here?
//   arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(this[i] + "🗺");
//   }
//   return arr;
// };
// console.log([1, 2, 3].map());

// //Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
// Date.prototype.lastYear = function () {
//   return this.getFullYear() - 1; // this will refer to after dot which means  the Date object's argument.
// };

// new Date("1900-10-10").lastYear();
// // don't worry if you didn't get this... we will expand on this later.

// // modify the javascript's bind() method to add '🗺' to the end of each element in the array.
// Function.prototype.bind = function(whoIsCallingMe){
//     const self = this;
//     return function(){
//       return self.apply(whoIsCallingMe, arguments);
//     };
//   }