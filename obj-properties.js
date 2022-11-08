var computer ={
    price : 30000,
    processor : 'intel i5',
    color : 'silver',
    storage : '140gb'
}

//set a property value
computer.price= 22000;
//console.log(computer);

//console.log(computer);
//console.log(computer.processor);
var computerPrice = computer.processor;
//console.log(computerPrice);

//different ways to set of an object property

//computer.price= 22000;-- 1
//console.log(computer);-- 1


// computer["price"]=23000; -- 2
// console.log(computer);   --2

var priceProperty = "price";
computer[priceProperty] = 23400;
console.log(computer);