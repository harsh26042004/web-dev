// function outer(num1){
//     var num2=20;
//     return function (){
//         return num1+num2
//     }
// }
// const closure=outer(10);
// console.log(closure());

// lexical environment
// function outer(){
//     let count=0;
//     return function(){
//         console.log(count++);
//     }
// }
// const counter=outer();
// counter(); 
// counter();

// How can closures be useful in managing callbacks for asynchronous operations?
// function fetchData(url,callback){
//     console.log('Initiating data fetch from ',url);
//     //Simulating anasynchronous request
//     setTimeout(function(){
//         const data='Fetched data from'+url;
//         callback(data);
//     },1000)
// }

// function processData(dataProcessor){
//     const url='https://example.com/api/data';
//     fetchData(url,function(data){
//         dataProcessor(data);
//     });
// }
// //Example usage
// processData(function(data){
//     console.log('Processing data:',data);});

// const person={name:"Harsh"};
// function sayhi(age){
//     console.log(`${this.name}is${age}years`);
// }
// const god=sayhi.bind(person,19)//binding calling
// console.log(sayhi.call(person,19));
// god()//here we call the binding/.


