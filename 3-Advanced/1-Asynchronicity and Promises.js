// Asynchronicity //

// After hoisting variables and functions, the interpreter runs code-block by code-block
// How to get out of that synchronous cycle and run code via an event loop?

// In the example below, the code runs asynchronously: A -> C -> D -> F -> E -> B

getData(); // User invokes getData function (return value logged to console)

function getData(){

    // A. store return value of invoking querySlowDB function, passing in 'logData' callback
    let request = querySlowDB(logData);

    // B. our 'logData' callback which LATER logs DB data after our SlowDB 'responds'
    function logData(data){
        console.log(`Response: ${data}`);
    }

    // C. logs the return value of querySlowDB (F), which was stored in A
    console.log(`Confirmation: ${request}`);
}

// Our callback function 'logData' was passed into the querySlowDB function
function querySlowDB(a_callback){
    
    // D. setTimeout called to simulate a slow DB
    setTimeout(readSlowDB, 3000); // usually triggered by an event (e.g. 'submit')
    
    // E. when DB 'responds', data is passed into the 'logData' callback function
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
    let data = new Promise((resolve, reject) => {
        querySlowDB(resolve, reject); // promise passes in resolve, reject callback functions
    });
    data.then(logData); // 'then' triggers if querySlowDB resolves
    function logData(data){ console.log(`Response: ${data}`); }
    data.catch(() => { console.log("Error!"); }); // 'catch' triggers if querySlowDB rejects
}

function querySlowDB(resolve, reject){
    if(!readSlowDB) { reject(); } // mock condition to demonstrate reject function
    console.log("Confirmation: Data loading...");
    setTimeout(readSlowDB, 3000);

    function readSlowDB(){
        db_data = "{data: Fake data from SlowDB}";
        resolve(db_data); // resolve takes in a return value
    }
}