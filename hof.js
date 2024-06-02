// function calculatorFunction(operation, initialValue,
//     numbers) {
    
//       let total = initialValue;
    
//       for (const number of numbers) {
    
//         total = operation(total, number);
    
//       }
    
//       return total;
    
//     }
    
//     function sum(n1, n2) {
    
//       return n1 + n2;
    
//     }
    
//     function multiply(n1, n2) {
    
//       return n1 * n2;
    
//     }
    
// console.log(calculatorFunction(sum, 0, [1, 3, 4]));    // 8
    
// console.log(calculatorFunction(multiply, 1, [1, 3, 4])); // 12

// const sqr=(num)=>num*num;
// const dbl=(num)=>num*2;
// const compose=(func1,func2)=>value=>func1(func2(value));
// const sqrthedbl=compose(sqr,dbl);
// console.log(sqrthedbl(3));

// const findIndex=(callback,nums)=>{
//   let index=-1;
//   for(let i=0;i<nums.length;i++){
//     if(callback[nums[i]]){
//       index=i;
//       break;
//     }
//   }
//   return index;
// }
// const arr=[1,2,3,4,5,6,7,9]
// const condition=(num)=>num>10;
// console.log(findIndex(condition,arr));

const forEach=(cb,arr)=>{
  for(let item of arr){
    cb(item);
  }
}
const callback=(item)=>{
  console.log(item);
}
forEach(callback,[1,3,5])