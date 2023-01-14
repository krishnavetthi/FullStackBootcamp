/*
=> Data Types
=> Varibales and typeof
=> Date
=> Loops
=> Conditions
=> OP
=> Indexing
=> Math
=> Objecy and  Array
*/

// Array In Depth and For of loop
// Array Methods
// console.log(names);
// console.log(names.length); // Length of Array

// console.log(names[3]);
// console.log(names[names.length - 1]);

// names[4] = 'Vinay';
// console.log(names);

// let namess = new Array('Name 1', 'Names 2'); // A way to Decalre a Array // Not Recod
// console.log(namess);

// Push => Insert New Values inside the Array
// names.push('VYOM');
// console.log(names);

// Slice
// let names = ['Hitesh Sir', 'Anurag', 'Surya', 'Anirudh', 'Bipul'];
// console.log(names.slice(1, 6)); //

// Splice
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.splice(2, 1, 'Kharab Apple', 'Acha Apple');
// console.log(fruit);

// Concatenation

// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 5, 6, 7];
let arr3 = [6, 7, 6, 7,7,7,7,7,7,7,7,7];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

// fill => Homework

// console.log(arr3.fill('(Kri,sai)',6,8))



// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr4.fill('Anurag', 2, 4);
// console.log(arr4);

// include
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(num.includes(7, 6));

// //indexof

// let num = [1, 2, 3, 'Anurag', 4, 5, 6, 7, 8, 'Anurag', 'Anurag'];
// console.log(num.indexOf('Anurag'));

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2));
// // expected output: 4

console.log(beasts.indexOf('giraffe'));
// // expected output: -1

// isArray()
// let num = [1, 2, 3, 'Anurag', 4, 5, 6, 7, 8, 'Anurag', 'Anurag'];
// let num1 = 'Anurag';
// console.log(Array.isArray(num1));
// console.log(Array.isArray(num));

// Join
// let Arr1 = [1, 2, 3, 4, 5, 6, 7];
// let var1 = Arr1.join(' 1 ');
// console.log(var1);
// console.log(typeof var1);

// keys
// For of

//lastindexof

let num = [1, 2, 3, 'Anurag', 4, 5, 6, 7, 8, 'Anurag', 'Anurag'];
console.log(num.lastIndexOf('Anurag'));

// Map
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.map(Math.sqrt));

// Pop
// let maths = [1, 4, 9, 16, 25];

// console.log(maths.pop());
// console.log(maths);

// reverse
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.reverse());

// Shift()
// let maths = ['Anurag', 1, 4, 9, 16, 25];
// console.log(maths.shift());
// console.log(maths)

// Sort
// let names = ['Hitesh Sir', 'Anurag', 'Surya', 'Anirudh', 'Bipul'];
// console.log(names.sort());

// unShift
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];

// fruit.unshift('Apple 1', 'Grapes 2');
// console.log(fruit);

// Converting to Array

// let name = 'Anurag';
// let array1 = name.split('');
// console.log(array1);

// for of
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// let Upperfruit = []; // empty Array

// for (let mayur of fruit) {
//     Upperfruit.push(mayur.toUpperCase());
// }

// console.log(Upperfruit);

// Break and Continue
// c
// Contin
// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         continue; // Skip, omit
//     }
//     console.log(i);
// }

const array1 = ['a', 'b', 'c'];
let element;
for (element of array1) {
  console.log(element);
}

// Array Method in JavaScript and Write a Blog on it => (compulsory)
