//IIFE - Immediately invoked function expression
(function(){

// 'use strict'
// //execution context
//  //global 
//  var a = 10;

//  //follow camel casing for all the function

//  function addB(){  
//     //global variable pollution
//      a =50
//      b =30;
//  }
//  addB();
//  console.log('The b Value is' ,b);

// //asking from paraeant scope
//  function askForSomething(){
//      // changing the value in paren scope
//      //money = '$100';
//      // creating one variable within the given scope.
//       var money='200$';
//      console.log('I asked for something adn it gave me', money);
//      //explicilty asking for something
//      //console.log('I asked for something adn it gave me', window.money);
//     //block scope
//     let isTrue = true;
//     while(isTrue){
//         //block scope
//          let money ='500$';
//         //function scope
//         //var money ='$500';
//         console.log('I asked for something in a block scope and it gave me', money);
//         isTrue= false;
//     }
//     console.log('I asked for something adn it gave me', money);

//  }

//  askForSomething();
 //function

 //block

//closures

//you can have variables with same name in global scope

//scope chain
var a = 100;

function closureExample(){
    var a =10 ;

    //unlike other programming languages javascript can return functions
    return function (){
        console.log(a);
    }
} 

// unlike other programming languages javascript variables can store functions

const closureFunction = closureExample(); 
//value returned would be
//functions without names are called anonymous functions
// function (){
//     console.log(a);
// }

closureFunction();

// unlike other programming languages javascript can pass function references as parameters


function executeClosure(callBack){
    var a =200;
    callBack();
}

executeClosure(closureFunction);

//callbacks

//setTimeout

setTimeout(()=>{
console.log("Print me after 5000 ms")
},5000)

console.log("Who Prints first");

})()

