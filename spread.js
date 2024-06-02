// const nums=[1,2,3]
// const num2=[4,5,6]
// const newArr=[...nums,...num2];
// console.log(newArr)

// we can do operation like addition,multi etc, inside function parameters;
// const num=[1,2,3];
// const sum=(a,b,c)=>console.log(`sum of${a} + ${b} + ${c}=`,a+b+c);
// sum(...num);//output:6

const nums=[1,2,3]
console.log(Math.max(...nums))

//we can seprate the string into individual characters
// const str='abc';
// const chars=[...str];
// console.log(chars)//output:["a","b","c"]

// // we can work with objects
// let obj1={
//     name:"Pw skills",
//     course:"Full stack web development"
// };
// let obj2={rating:5,reviews:2000,name:'PW'}
// const obj={...obj2,...obj1};
// console.log(obj)

// distructing
const getFirstTwo=([first,second,...rest])=>{
    return [first,second]
}
console.log(getFirstTwo([1,2,3,4,5]))//output:[1
console.log(getFirstTwo([5,6,7]))