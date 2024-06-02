// let count=1;
// setInterval(()=>{
// console.log(count++)
// },1000)

//NODE.JS script example
//simulated function to fect data from an external API 
// function fetchDataFromAPI(){
//     const date=new Date();
//     console.log('Fetching data from the API at:',date.toLocaleString());
//     //simulated API call or data fetching logic
// }
// // Set an interval to fetch data from the API every 3 sec
// const dataFetchInterval=setInterval(fetchDataFromAPI,3000);
// setTimeout(function(){
//     clearInterval(dataFetchInterval);
//     console.log('Fetching data from the API stopped after 15 sec')
// },15000)

// countdown
// let count=10;
// const countDown=()=>{
//     console.log(count--);
//     if(count===0){
//         clearInterval(timer);
//     }
// }
// const timer=setInterval(countDown,1000);

// SET TIME OUT
// setTimeout(()=>{
//     console.log('Hello World');
// },3000)

// // clearTimeout()
// const timeoutId=setTimeout(function(){
//     console.log('Hello World');
// },2000);
// clearTimeout(timeoutId);
// console.log('Timeout has been cleared')

// for(var i=0;i<5;i++){
//     setTimeout(((i_local)=>{
//         console.log(i_local);
//     })(i),0);
// }
// for(var i=1;i<=16;i=i*2){
//     (function(num){
//         setTimeout((num)=>{
//             console.log(num);
//         },3000, num);
//     })(i);
// }

let count=0;
function printCount(){
    console.log("Interval Count",count);
    count++;
}
console.log("Start");
const intervalId=setInterval(printCount,500);
setTimeout(function(){
    clearInterval(intervalId);
    console.log("Interval stopped");
},2000);
console.log("END")