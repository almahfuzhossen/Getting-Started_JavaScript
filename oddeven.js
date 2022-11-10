function isEven(number) {
    if(number %2 == 0) {
        return true;
    }
       return false;
}
const myNumber = 1234;
const isMyNumberEven = isEven(myNumber);
console.log('is My Number Even', isMyNumberEven);

const herNumber = 1891;
const isHerNumberEven = isEven(herNumber);
console.log('is Her Number Even', isHerNumberEven);

//is odd number
function isOdd(number){
    if(number % 2 != 0) {
        return true;
    }
     return false;
}

const apuNumber = 1221;
const isApaNumberOdd = isOdd(apuNumber);
console.log('is apa number odd', isApaNumberOdd);

const MaaNumber = 1222;
const isMaaNumberOdd = isOdd(MaaNumber);
console.log('is maa number odd', isMaaNumberOdd);