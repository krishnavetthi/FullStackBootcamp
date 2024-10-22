// promises stored in micro stack queue, does not break the synchronous flow of code

function returnDummyPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer completed"); //5. prints as call stack and global execution is empty 
            reject("done"); //6.reject -- promise reject
        },10000); //2. runtime till timer finishes
    });
}

let p= returnDummyPromise(); //1. function callstack executes

//if p is success we want to do some action
//if call stack is empty and global piece of code is done, then this executes without breaking the flow of the code

p.
then(function exec(val){
     console.log("Promise resolved with a value",val);
})
.catch(function exec(err){
    //7. as the promise is rejected the error is catched here, with value done
    console.log("error in catch of promise",err)
})
.finally(function fin(){
    //8. finall always executes either promise rejected or resolved
    console.log("Finllally promise consumer")
})

for(let i=0;i<10000;i++){
    //3. Executes the function
}

console.log("end"); //4. Prints 

// difference between synchronous and promises 
// the runtime functions are stored in macro/call back queues whereas promises are stored in micro stack queues
//micro stack queues run before the macro/call back queues