
//var ,let , const
//objects, arrays

//difference between let and const

var a = {name:"john"};
    a ={name:"doe"};
    a.name='mark';
console.log('Value of a is ', a.name);
greet();

function greet(){
    console.log(`Hello ${user}`);
}

//hoisting
var user = "Subhash";
greet();

let user = "John Doe";

//block scope

function testBlockScope(){
    var i =20;
    for (const i=0; i<=9 ;i++){
        
    }
    console.log('Value inside testblock',i);
}

testBlockScope();

//call backs- function passing
function sayHiTenTimes(callBack){
    var i= 20;
    for (let i=0; i<=9 ;i++){
        //closure
        callBack(i);
    }
    //i is not block scoped
    console.log('i value in sayHiTenTimes function', i);
}
//passing functions as parameters

function callBack(iValue){
    console.log('Current i Value in callBack Function is',iValue);
    //global variable pollution
    z = 100;
}

sayHiTenTimes(callBack);

console.log(z);