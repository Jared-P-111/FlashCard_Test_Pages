'use-strict';
//------------------------------DESTRUCTURING OBJECTS--------------------------------
console.log('-----------------------Problem 1------------------------------');
//------------------------SELECTING PROPERTY'S IN OBJECTS----------------------------

//Create an object named animalsAtZoo with the following criteria.
//      1.) Make two property's named cage1 & cage2 with a different animal in each.
//      2.) Make two property's that are Arrays named cage3 and cage 4 with 3 animals in each. In cage
//          3 put chimp<name> etc... and in cage 4 put baboon<name> etc...

const animalsAtZoo = {
  cage1: 'bear',
  cage2: 'tiger',
  cage3: ['chimpAria', 'chimpGeorge', 'chimpBob'],
  cage4: ['baboonSteve', 'babboonMike', 'babboonSarah'],
};
console.log(animalsAtZoo);

console.log('-----------------------Problem 2------------------------------');
//------------------------ASSIGN VARIABLES WITH DESTRUCTURING----------------------------

//Create three variables using destructuring use the names in the console log.

const { cage1, cage3, cage4 } = animalsAtZoo;
console.log(cage1, cage3, cage4);

console.log('-----------------------Problem 3------------------------------');
//------------------------RENAMING VARIABLES WITH DESTRUCTURING----------------------

//Rename cage1, cage3, cage4 to bearCage, chimpCage, baboonCage. Use destructuring.
const { cage1: bearCage, cage3: chimpCage, cage4: baboonCage } = animalsAtZoo;
console.log(bearCage, chimpCage, baboonCage);

console.log('-----------------------Problem 4------------------------------');
//--------------MUTATING VARIABLES WITH AN OBJECT AND DESTRUCTURING----------------------

//create two variables using let and named a and b and assign them numbers. Then create an object
//called obj with 3 propertys each property key should a, b, c and the values assign them numbers.
//Now using the global var's mutate them with the object.

let a = 100;
let b = 200;

const obj = { a: 22, b: 33, c: 44 };
({ a, b } = obj);
console.log(a, b);
