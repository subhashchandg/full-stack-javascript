//asynchronous programming

// callbacks
setTimeout(()=>{
    console.log("Print me after 5000 ms")
    },5000)
    
console.log("Who Prints first");

//eventloop


function deductMoney(amount, banAccountNumber){
    console.log('Deductingn amount from bank account number')
}

//api.deductmoney(deductMoney.bind(100,1234))
// call back problems
    //callback hell 
    // Losing Control.
//Inversion Of COntrol
//callback hell
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'There was an Error');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch(error=>{
console.log(error)
});
// expected output: Array [3, 42, "foo"]



const promise = new Promise(function(resolve,reject){
    if(Math.random() *10 > 5){
        resolve("Success")
    }
    else{
        resolve("Faliure")
    }

});

//mdn link for promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// normal function
function fNotAsync() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  fNotAsync();
// normal function
  async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f();
  
//Function Constructors 

//es6 classes

