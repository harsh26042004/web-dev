// // const promise = new Promise(function(resolve, reject) {
// //     // Simulating an API CALL
// //     if (Math.random() > 0.5) {
// //         resolve({ city: 'Delhi', temperature: '39' });
// //     } else {
// //         reject(new Error('Data not found.'));
// //     }
// // });
// // promise.then(response => console.log(response)).catch(error => console.log(error)).finally(()=>{console.log('stop loader')});


// const promise1=new Promise(function(resolve){
//     resolve('first')
// })
// const promise2=new Promise(function(resolve){
//     resolve('second')
// })
// const promise3=new Promise(function(resolve){
//     resolve('Third')
// })
// const allPromises=[promise1, promise2, promise3];
// Promise.all(allPromises).then(res=>console.log(res)).finally(()=>{console.log('stop lader')});

// Interview point question
// const promise1=Promise.resolve(5);
// const promise2=Promise.resolve(6);
// const promise=new Promise(function(resolve){
//     let num1,num2;
//     promise1.then(res=>{num1=res;
//     if(num1 && num2){
//         resolve(num1+num2);
//     }})
//     promise2.then(res=>{num2=res;
//     if(num1 && num2){
//         resolve(num1+num2);
//     }
// })})
// promise.then(res=>console.log(res))

// another way of solving it 
const promise1=Promise.resolve(9);
const promise2=Promise.resolve(6);
const promise=new Promise(function(resolve){
    Promise.all([promise1, promise2]).then(res=>{
        resolve(res.reduce((sum,num)=> sum+num))
    })
})
promise.then(res=>console.log(res))