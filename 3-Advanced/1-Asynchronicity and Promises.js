// Asynchronicity //

// After hoisting variables and functions, the interpreter runs code-block by code-block
// How to get out of that synchronous cycle and run code via an event loop?

// In the example below, the code runs asynchronously: A -> C -> D -> F -> E -> B

getData(); // User invokes getData function (return value logged to console)

function getData(){

    // A. store return value of invoking querySlowDB function, passing in 'query' callback
    let request = querySlowDB(queryDB);

    // B. our 'query' callback which LATER logs DB data after our SlowDB 'responds'
    function queryDB(data){
        console.log(`Response: ${data}`);
    }

    // C. logs the return value of querySlowDB (F), which was stored in A
    console.log(`Confirmation: ${request}`);
}

// Our callback function 'query' was passed into the querySlowDB function
function querySlowDB(a_callback){
    
    // D. setTimeout called to simulate a slow DB
    setTimeout(readSlowDB, 3000); // usually triggered by an event (e.g. 'submit')
    
    // E. when DB 'responds', data is passed into the 'query' callback function
    function readSlowDB(){
        db_data = "Fake data from SlowDB";
        a_callback(db_data); // notice various callbacks can be passed in as args
    }

    // F. this is just the return value passed back to A and logged in C
    return "Data loading...";

}


// Promises //

// With ES6, a "Promise" class has been introduced which ensures a successful callback

getData();

function getData(){

    // create promise to get return data from querying SlowDB
    let data = new Promise(function(resolve, reject){
        querySlowDB(resolve, reject);
    });

    // 
    data.then(function query(data){
        console.log(data);
    });
    
    // return queue_data;
}

function querySlowDB(a_callback){
    setTimeout(readSlowDB, 3000);
    function readSlowDB(){
        db_data = "{data: Fake data from SlowDB}";
        a_callback(db_data);
    }
    return "Data still loading...";
}