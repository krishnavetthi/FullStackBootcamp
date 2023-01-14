let sumFunction = (arr)=>{
    let sum=0;
    for(let i of arr){
        sum=i+sum;
    }
    return sum;
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let result = sumFunction(numbers)
console.log(result)