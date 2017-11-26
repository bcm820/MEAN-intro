
// function fib() {
//     let x = 0;
//     let y = 1;
//     function nacci(){
//         console.log(x + y);
//         temp = y;
//         y = x + y;
//         x = temp;
//     }
//     if(x === 0){ console.log(1); }
//     return nacci;
// }

function fib() {
    let f = [0,1];
    console.log(0); console.log(1);
    function nacci(){
        let l = f.length;
        console.log(f[l-1] + f[l-2]);
        f.push(f[l-1] + f[l-2]);
    }
    return nacci;
}

const fibCounter = fib();
fibCounter(); // logs first 3 numbers to accommodate for 0,1
fibCounter(); // why does it call 'nacci' from now on??? 
fibCounter(); 
fibCounter(); 
fibCounter(); 
fibCounter(); 
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();