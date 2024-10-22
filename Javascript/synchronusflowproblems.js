//JS is synchronuous PL, below code shows what problem it causes

//callback hell

// call stack --- functions stored here
//global piece of code -- synchronous flow code, step by step code 

//event loop --- checks whether there is there any global code needs to be executed or anything in callstack needs to be executed --- If there is anything in either of them, it wont allow runtime function to execute, instead sends to callback queue to wait

//callback queue / macro task queue ----  after the timer finishes, event loop stores the functions here in queue waiting to execute after call stack 

//runtime -- setTimeout -- till the timer is finished

function timeConsumingTask(){
    //3 inside the loop till it finishes
    //10 executes the funtion holds control till the loop is done exeuting
    for(let i = 0; i < 100000000000; i++){
        //some task
    }
}
console.log("start"); //1
timeConsumingTask(); // 2 next call
console.log("starting the timer"); //4 after function finished this line executes

setTimeout(function exec(){
    //13. as now nothing is in call stack, the callback queue starts executing, first entry in the queue gets executed following FIFO
    
    console.log("timer completed 1");
    //timer completed 1 prints

},0); // 5.timer sent to runtime  //7. as 0 ms is finished now its sent to callback queue


setTimeout(function exec(){
   
    //14. 2nd element in callback queue, executed now prints timer completed 2
    
    console.log("timer completed 2");

},10); // 6. timer sent to runtime //11. after 10ms the function is sent to callback queue and waits till the callstack is finished executing


console.log("exiting the timer");//8. Prints 

timeConsumingTask();//9.Call this function 

console.log("end");//12.after timeconsuming task is done, this line executes