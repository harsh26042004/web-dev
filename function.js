

// function sum(a,b){
//     console.log("inside the sum function")
//     return a+b //return code is very important to print the value or get the value in java script.
// }
// console.log("a+b =",sum(5,6))

// function fact(num){
//     if(num==0 || num===1){
//         return 1
//     }
//     result=1
//     for(i=1;i<=num;i++){
//         result= result*i
//     }
//     return result
// }
// console.log(fact(5))
// function avg(num1,num2){
//     console.log("average number")
//     average=num1+num2/2
//     return average
// }
// console.log("average of two number is:",avg(50,60))

// function greet_students(){
//     console.log("Hi")
//     console.log("Welcome to the university")
//     console.log("Bye")
// }

// greet_students()

// function sub(a,b){
//     console.log("inside the sub function")
//     return a-b
// }
// result=sub(4,3)
// console.log(result)

// create funtion for factorial
// function factor(num){
//     if(num==0||num==1){
//         return 1
//     }
//     result=1
//     for(i=1;i<=num;i++){
//         result=result*i
//     }
//     return result
// }
// console.log(factor(5))

// assingin function with variable name
// const hello_funt= function hello(){
//     console.log("hello")
// }
// console.log(hello_funt())

// anonymous function is function without name.
// it pass to an arguement 
// function operate(a,b,fn){
//     console.log(fn(a,b))
// }
// function sum2(a,b){
//     return a+b
// }
// operate(5,6,sum2)

// java script me function ke andar function pass kar sakte hai

// return function in function
// function return_greet_fn(){
//     return function(){
//         console.log("Hello Students")
//     }
// }
// return_greet_fn()()

// function func1(){
//     console.log("hello from outer")
//     return function(){
//         console.log("hello from inner")
//         return function(){
//             console.log("hello from inner most")
//         }
//     }
// }
// func1()()()

// function sum (){
//     console.log(arguments)
//     let sum =0
//     for (i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]
//     }
//     return sum 
// }
// console.log(sum(5,6))

// function with unlimited parameters
// function sumofallparmeters(){
//     let sum =0
//     for(i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]
//     }M
//     return sum
// }

// let result =sumofallparmeters(1,2,3,4,5,6)
// console.log(result)