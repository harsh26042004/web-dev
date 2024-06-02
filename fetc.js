// // fetch('https://jsonplaceholder.typicode.com/todos/1',{
// //     method:'',
// //     headers:'',
// //     auth:true,
// //     body:{}
// // })

// // .then(res => res.json())
// // .then(res =>console.log(res))
// async function getData(){
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await res.json();
//         console.log(data);
//     } catch(error){
//         console.log(JSON.stringify(error));
//     } finally{
//         console.log('end');
//     }
// }
// getData()
// try{
//     console.log('abc')
// }catch(error){
//     console.log('error')
// }finally{
//     console.log('end loader')
// }

const fetchData=(url)=>{
    new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('success')
            }else{
                reject(new Error('fail'))
            }
        },1000)
    })
}
fetchData('https://jsonplaceholder.typicode.com/todos') .then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})