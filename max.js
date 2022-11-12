const business = 340;
const minister = 333;
const army = 555;
// if ( business > minister){
//     console.log('business is bigger');
// }
// else {
//     console.log('minister is bigger');
// }

// if (business > minister && business > army){
//     console.log(business is bigger);
// }

// else if ( minister > business && minister > army){
//     console.log('minister is bigger');
// }

//  else {
//      console.log('army is bigger');
//  }

// methods-3

// var max = Math.max(business, minister, army);
// console.log('largest is ', max);

function findLargest(first, second){
    if(first > second){
        return first;
    }
    else {
        return second;
    }
}
const largest = findLargest(345, 453);
console.log('largest is ', largest);

