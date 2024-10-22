function returnDummyPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer completed"); 
            let randomeNumber = Math.random()*100;
            console.log(randomeNumber);
            if(randomeNumber > 50){
                //first resolve or reject executed even if we call more
                resolve("done");
                resolve("done1");
            }else{
                reject("error");
            }  
        },10000); 
    });
}

let p= returnDummyPromise();

p.
then(function exec(val){
    console.log("Promise resolved with a value",val);
})
.then(function exec(){
    console.log("Promise resolved as the random number is greater than 50");
})
.catch(function exec(err){
    console.log("error in catch of promise",err)
})
.finally(function fin(){
    console.log("Finllally promise consumer")
})

console.log("Promises Resolved if random number is greater than 50, else Rejects")