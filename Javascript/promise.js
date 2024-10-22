// promises stored in micro stack queue, does not break the synchronous flow of code

function returnDummyPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer completed"); //4. prints as call stack and global execution is empty 
            resolve("done"); //5.resolve -- promise success
        },10000); //2. runtime till timer finishes
    });
}

let p= returnDummyPromise(); //1. function callstack executes

//if p is success we want to do some action
//if call stack is empty and global piece of code is done, then this executes without breaking the flow of the code

p.then(function exec(val){
    //6. as the promises is succcess with resolve, the line prints with done value
    console.log("Promise resolved with a value",val);
})

console.log("end"); //3. Prints 

// difference between synchronous and promises 
// the runtime functions are stored in macro/call back queues whereas promises are stored in micro stack queues
//micro stack queues run before the macro/call back queues