
function getFactorial(Number) {
    let factorial = 1;
for ( let i = 1; i <= Number; i++) {
    factorial = factorial * i;
 }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log('factorial of 7 is ', firstFactorial);

var secondFactorial = getFactorial (9);
console.log('factorial of 9 is ', secondFactorial);