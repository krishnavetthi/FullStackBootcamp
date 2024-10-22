//Map

const myMap = new Map();
console.log(myMap);

let array1 = [
    [1,"Krishna"],
    [2,"Sai"],
    [3,"Aditya"],
    [4,"Chinni"],
    [5,"SKHome"],
    [3,"Aditya"],
    [1,"Krishna vetthi"],
    ["krishna",2]
];

array1.forEach(e=>myMap.set(e[0],e[1]))

console.log(myMap)
