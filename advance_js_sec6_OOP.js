// // OOP - Normal object
// const elf = {
//     name: 'Elft',
//     weapon: 'bow',
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// };

// const elf2 = {
//     name: 'Sally',
//     weapon: 'sword',
//     attack() {
//         return 'attack with ' + this.weapon;
//     }
// };

// elf.attack();
// elf2.attack();

// // OOP - factory function make/create
// // but this is not memory efficient as it creates a new object everytime.
// function createElf(name, weapon) {
//     //we can also have closures here to hide properties from being changed.
//     return {
//       name: name,
//       weapon: weapon,
//       atack() {
//         return 'atack with ' + weapon
//       }
//     }
//   }
//   const sam = createElf('Sam', 'bow');
//   const peter = createElf('Peter', 'bow');

//   sam.atack()

// // OOP- using Object.create() to create a prototype chain
// const elfFunctions = {
//   attack: function () {
//     return this.name + " atack with " + this.weapon;
//   },
// };
// function createElf(name, weapon) {
//   //Object.create creates __proto__ link
//   let newElf = Object.create(elfFunctions);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }

// const sam = createElf("Sam", "bow");
// const peter = createElf("Peter", "bow");
// console.log(sam.attack());
// console.log(peter.attack());

// more on constructor functions
//Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

// add a method to the prototype through the prototype chain
Elf.prototype.attack = function () {
  return "atack with " + this.weapon;
};
const sam = new Elf("Sam", "bow");
const peter = new Elf("Peter", "bow");
console.log(sam.attack()) 
