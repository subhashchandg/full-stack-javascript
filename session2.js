'use strict'
//execution context
 //global 
 var a = 10;

 //follow camel casing for all the function

 function addB(){  
    //global variable pollution
     a =50
     b =30;
 }
 addB();
 console.log('The b Value is' ,b);

//asking from paraeant scope
 function askForSomething(){
     // changing the value in paren scope
     //money = '$100';
     // creating one variable within the given scope.
      var money='200$';
     console.log('I asked for something adn it gave me', money);
     //explicilty asking for something
     //console.log('I asked for something adn it gave me', window.money);
    //block scope
    let isTrue = true;
    while(isTrue){
        //block scope
         let money ='500$';
        //function scope
        //var money ='$500';
        console.log('I asked for something in a block scope and it gave me', money);
        isTrue= false;
    }
    console.log('I asked for something adn it gave me', money);

 }

 askForSomething();
 //function

 //block

//closures

//callbacks

//setTimeout

//eventloop

//Function Constructors 

//es6 classes



