//  var i = 0;
//  while (i < 10) {
// console.log(i);
// if(i == 5){
//  break;
// }

//  i++;
//  }



// for( var i = 0; i<10; i++){
//     console.log(i);
//     if(i == 7){
//         break;
//     }
// }

// var numbers =[ 20, 30, 40, 50, 60, 80, 100];
// for( var i = 0; i < numbers.length; i++){
//  var number = numbers[i];
//  console.log(number);
//  if(number > 80){
//      break;
//  }
// }

//  continue er jaygate skip mone korte hobe
//tahole sohoj hobe bujhte

var numbers=[20, 30, 40, 50, 60, 70, 80, 90];
for(var i =0; i< numbers.length; i++){
    var number = numbers[i];
    if(number > 60){
        continue;
    }
    console.log(number);

}