
function fib() {
    let x = 0;
    let y = 1;
    function nacci(){
        console.log(x + y);
        temp = y;
        y = x + y;
        x = temp;
    }
    // this might be cheating :p
    if(x === 0){ console.log(1); }
    return nacci;
}

const fibCounter = fib();
fibCounter(); 
fibCounter(); 
fibCounter(); 
fibCounter(); 
fibCounter(); 
fibCounter(); 
fibCounter();
fibCounter();