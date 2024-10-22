// Network request API's

//Network request is a process of sending msg from client (web browser) to a server and receiving response
//API - is interface that defines how software components sould interact 

//Fetch API - promise based syntax

fetch("https://type.fit/api/quotes")
.then(function exec(response){
    return response.json()
})
.then(function exec(data){
    console.log(data);
})

