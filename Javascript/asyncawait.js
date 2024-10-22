//Async await -- asynchronous code

function returnDummyPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer completed");  //6 after timer  prints // 10 after timer
            resolve("done");   //7,11
        },10000); 
    });
}

//marks function asynchronous -- returns promise
// example -- laundry machine
// I am turning on laundry machine, while the machine is running Im free to do other tasks
//laundry machine is performing the task asynchronously in the background, while Im free to do tasks

//async helps function to work without freezing computer program
async function consume(){
    try{
        console.log("start"); //2
        //await keyword used to wait for the completetion of asynchronous task
        console.log("Start Promise"); //3
        const response = await returnDummyPromise();
        //4 response - it waits for returnDummyPromise
        //await - it waits for returnDummyPromise --> now comes out of the try catch block and executes the global code
        
        console.log("Start Promise1"); // 8 prints start promise1

        
        const response1 = await returnDummyPromise(); //9 waits for response1
        console.log("response is ", response); //12
        console.log("response1 is ", response1); //13
    }catch(err){
        console.log(err);
    }
}
consume(); //1
console.log("ending"); // 5 jumps to global code and prints
    


