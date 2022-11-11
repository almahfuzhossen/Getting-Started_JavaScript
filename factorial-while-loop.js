// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while( i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(7);
// console.log(myFactorial);

// bujhar jonne abar kortechi
function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while ( i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(9);
console.log('my factorial result is ', myFactorial);