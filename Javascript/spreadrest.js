//spread access all elements
const array1 = [1,2,3];
const array2 = [2,4,6];
const array3 = [...array1,...array2];
console.log(array3)

//rest --- for arguments in functions 
function add(...args){
    const array4 = args.map(e=>e*3);
    console.log(array4)
}
add(1,2,3,4,5,6);

const string1 = "krishna vetthi"
console.log([...string1]);

function strings(...values){
    console.log(values)
}

console.log(strings("krishna","vetthi"));