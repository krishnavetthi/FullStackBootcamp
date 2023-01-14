//Let us use the animals array for all the array methods

//unshift() method
const animals = ["Lion", "Zebra", "Camel", "Dog", "Cat"];
console.log(animals.unshift('Elephant','Cheetah'));
console.log(animals);

//push() method
console.log(animals.push("Fox","Hippopotamus","Tiger","Pig","Goat","Cow","Horse","Rabbit"));

// shift() method
console.log(animals.shift());

// pop() method
console.log(animals.pop());

// slice() method -  array.slice(startposition, endposition) 
console.log(animals);
console.log(animals.slice(4)); // from index 4 to end
console.log(animals.slice(1,3)); //from index 1 to 2 (3rd index not included)

// splice() method - array.splice(startposition,range(how many elements should be removed/replaced), replacevalues)
console.log(animals);
console.log(animals.splice(1,3,"Buffalo"));
console.log(animals);

//sort() method
console.log(animals.sort());

//reverse() method
console.log(animals.reverse());

//concat() method
const extra_animals=["Monkey", "Chimpange", "Bear", "Ox", "Kangaroo"];
console.log(animals.concat(extra_animals));

//map() method
let maths = [1, 4, 9, 16, 25];
console.log(maths.map(Math.sqrt));
console.log(maths.map(x => x * 2));

//filter() method
console.log(animals.filter(animal => animal.length > 4));

//fill() method
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.fill(20,4,7));

//indexOf() method
console.log(numbers);
console.log(numbers.indexOf(20));
console.log(numbers.indexOf(100));

//includes() method
console.log(numbers.includes(10));
console.log(numbers.includes(0));

//join() method
console.log(animals.join(':'));

//keys() method
const keys = animals.keys();
for (const key of keys) {
    console.log(key);
}

//lastIndexOf() method 
console.log(numbers);
console.log(numbers.lastIndexOf(20));

//every() method
console.log([1, 13, 3].every((x) => x != 0)); // true
console.log(numbers.every((x)=> x%2==0));

//flat() method
const array_flat=[1,,[2,3],[7,[45,[89,[100,67]]]],5,[90]];
console.log(array_flat.flat(1));
console.log(array_flat.flat(2));
console.log(array_flat.flat(3));
console.log(array_flat.flat(4));

//foreach() method
numbers.forEach(element => console.log(element*2));