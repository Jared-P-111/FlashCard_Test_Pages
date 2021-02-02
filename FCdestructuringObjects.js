'use-strict';
//------------------------------DESTRUCTURING OBJECTS--------------------------------
//------------------------SELECTING PROPERTY'S IN OBJECTS----------------------------

//Using the below Object solve the destructuring problems.

const animalsAtZoo = {
  cage1: 'Tony',
  cage2: 'Billy',
  cage3: 'Philly',
  cage4: 'Brian',
  animalCage: ['Baboon Steve', 'Baboon Mike', 'Baboon Sarah', 'Tony the Tiger', 'Billy the Bear'],
  foodMenuMeat: ['chicken', 'lamb', 'beef', 'turkey'],
  foodMenuVegtables: ['broccoli', 'asparagus', 'carrots'],
};

console.log('-----------------------Problem 1------------------------------');
//------------------------ASSIGN VARIABLES WITH DESTRUCTURING----------------------------

//Create three variables using destructuring use the names in the console log. Then uncomment to use.

//console.log(cage1, cage3, cage4);

console.log('-----------------------Problem 2------------------------------');
//------------------------RENAMING VARIABLES WITH DESTRUCTURING----------------------

//Rename cage1, cage3, cage4 to bearCage, chimpCage, baboonCage. Use destructuring. Then uncomment to use.

//console.log(bearCage, chimpCage, baboonCage);

console.log('-----------------------Problem 3------------------------------');
//--------------MUTATING VARIABLES WITH AN OBJECT AND DESTRUCTURING----------------------

//create two variables using let named a and b and assign them numbers. Then create an object
//called obj with 3 propertys each property key should be a, b, c and then assign values with numbers.
//Now using the outside scoped var's mutate them with the object. Use the below console .log
//Uncomment them when ready to use.

//console.log(a, b);

console.log('-----------------------Problem 4------------------------------');
//----------------USING AN OBJECT AS AN ARGUMENT WITH DESTRUCTURING----------------------
//animalIndex, meatIndex, vegIndex
//Use the method below, inside the animalsAtZoo object that takes an object as the
//argument the argument names are above. Then use that method to output new values using
// the key names above as the arguments in the method. Hint do not forget to destructure

/*
animalFoodOrder: function () {
    console.log(`Food order recieved: ${} & ${} will be deliverd to
${}.`);
  },
*/
