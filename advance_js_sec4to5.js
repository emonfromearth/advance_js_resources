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

false == ""  
false == []  
false == {}  
"" == 0      
"" == []     
"" == {}     
0 == []      
0 == {}      
0 == null    