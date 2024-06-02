// older method of function can be written
// function add(a,b){
//     console.log("Inside the add function: " );
//     return a+b;
// }
// console.log(add(5,6))

// now arrow function(write less and get more)
// const add1=(a,b)=>{
//     console.log("Inside the add function: " );
//     return a+b;
// }
// console.log(add1(4,6))

// Function with multiple arguements
// const sum_three=(a,b,c)=>{
//     console.log("Inside the sum function: " );
//     return a+b+c;
// }
// console.log(sum_three(2,4,6))

// Function with no returns
// greet=(name)=>{
//     console.log("Hello "+name);
// }
// greet('harsh')

// if you have to pass single statement you do not need use {}
// sum =(a,b)=>a+b
// console.log(sum(2,4))
// function even_odd(num){
//     if(num%2==0){
//         return "Even"
//     } 
//     else{
//         return "Odd"
//     }
// }
// console.log(even_odd(2))

// convert this function to arrow function
// typ=(a)=>(a%2==0)?"Even":"Odd"//single arrow +ternary operator
// console.log(typ(9))

// const person={
//     name:"Harsh",
//     greet:function(){
//         console.log("Hello "+this.name);
//     },
//     greetTwo:()=>{
//         console.log("Hello "+this.name);
//     }
// }
// person.greet();
// person.greetTwo();