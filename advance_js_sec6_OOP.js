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
//     return this.name + " attack with " + this.weapon;
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

// // more on constructor functions
// //Constructor Functions
// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// // add a method to the prototype through the prototype chain
// Elf.prototype.attack = function () {
//   return "attack with " + this.weapon;
// };
// const sam = new Elf("Sam", "bow");
// const peter = new Elf("Peter", "bow");
// console.log(sam.attack())

/*
NOTE:

JS has class keyword but this is not actually a class. this is just syntactic sugar that uses the same prototypal inheritance. 
class is still an object like everything

constructor functions run every time a new object is created using new keyword. 
But the other methods in class don't create every time. thus we can save memory.

only functions has prototype property

we can only add properties in a constructor function using this keyword.
*/
// // class is just a syntactic sugar
// class Elf {
//     constructor(name, weapon) {
//       this.name = name;
//       this.weapon = weapon;
//     }
//     attack() {
//       return 'attack with ' + this.weapon
//     }
//   }

//   const fiona = new Elf('Fiona', 'ninja stars');
//   console.log(fiona instanceof Elf) //
//   const ben = new Elf('Ben', 'bow');
//   fiona.attack()

// // this keyword
// // new binding
// // at the time of creating an object, the this keyword is bound to the object.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// const person1 = new Person("Xavier", 55);

// //implicit binding
// // natural use case for this keyword
// const person = {
//   name: "Karen",
//   age: 40,
//   hi() {
//     console.log("hi" + this.name);
//   },
// };

// person.hi();

// //explicit binding with bind method. here .bind(window) window refers to this keyword
// const person3 = {
//   name: "Karen",
//   age: 40,
//   hi: function () {
//     console.log("hi" + this.setTimeout);
//   }.bind(window),
// };

// person3.hi();

// // arrow functions
// // in arrow functions this keyword is lexically scoped to the enclosing context.
// const person4 = {
//   name: "Karen",
//   age: 40,
//   hi: function () {
//     var inner = () => {
//       console.log("hi " + this.name);
//     };
//     return inner();
//   },
// };

// // OOP in JS
// class Character {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return "attack with " + this.weapon;
//   }
// }

// class Elf extends Character {
//   constructor(name, weapon, type) { //  name and weapon are inherited from the parent class
//     // console.log('what am i?', this); this gives an error
//     super(name, weapon);
//     console.log("what am i?", this); // at this line this.type yet not defined.
//     this.type = type;
//   }
// }

// class Ogre extends Character {
//   constructor(name, weapon, color) {
//     super(name, weapon);
//     this.color = color;
//   }
//   makeFort() {
//     // this is like extending our prototype.
//     return "strongest fort in the world made";
//   }
// }

// const houseElf = new Elf("Dolby", "cloth", "house");
// // houseElf.makeFort() // error
// const shrek = new Ogre("Shrek", "club", "green");
// shrek.makeFort();

// OOP Exercise
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

class Queen extends Character {
    constructor(name, weapon, type){
        super(name, weapon)
        this.type = type
    }
    attack(){
        console.log(super.attack());
        return `I am the ${this.name} of ${this.type}, now bow down to me!`
    }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen("Victoria", "army", "hearts"); // create a new instance with the queen having (name, weapon, type). Type includes: 'hearts', 'clubs', 'spades', 'diamonds'

victoria.attack(); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
