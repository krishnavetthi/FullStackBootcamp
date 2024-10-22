//Set
let set1 = new Set();
set1.add(2);
set1.add(3);
set1.add(4);
set1.add(5);
set1.add(2);
set1.forEach(e=>console.log(e))
console.log(set1);

let array1 = [1,2,3,4,1,2,3,5,2,6,1];
let setarray1 = new Set(array1);
console.log(setarray1);

console.log(setarray1.delete(1));
setarray1.clear()
console.log(setarray1);

let array2 = new Array(set1);
console.log(array2)

