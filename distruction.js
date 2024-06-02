// const nums=[1,2,3];
// const[one,,three]=nums
// console.log(one)
// console.log(three)
// const name='John Doe';
// const[fristName,lastName]=name.split(' ');
// console.log(fristName)
// console.log(lastName)

// const name='abc'
// const[char1,char2,char3]=name;
// console.log(char1)
// console.log(char2)

// let firstName='John';
// let lastName='Doe';
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName,lastName);

// object destructuring
// const obj={
//     firstName:'John',
//     lastName:'Doe'
// };
// const{firstName,middleName='kumar',lastName='ln'}=obj;
// console.log(firstName,middleName,lastName);

// alliace
// const firstName='ABC'
// const obj={
//     firstName:'John',
//     lastName:'Doe'
// };
// const{firstName:fn,middleName='kumar',lastName}=obj;
// console.log(fn,middleName,lastName);


// let options={
//     size:{
        
//         height:200
//     },
//     items:["Cake","Donut"],
//     extra:true
// };
// const{
//     size:{width:w=3000},
//     items:[,item2],
//     abc='123'
// }=options;
// console.log(w,item2,abc);

// function name({fn,ln}){
//     console.log(`${fn} ${ln}`);
// }
// name({
//     ln:'Doe',
//     fn:'Harsh'
// })

// // Interview round question
// const person={
//     name:'john',address:{city:'New York', country:'USA'}
// };
// const getNestedInfo=({name,address})=>{
//     const{city,country}=address;
//     return `${name} lives in ${city},${country}`;
// }
// console.log(getNestedInfo(person))

// // Interview question:
// const company={
//     name:'Tech co.',
//     CEO:{
//         name:'HARSH KUMAR',
//         age:45,
//         address:{
//             city:'Silicon Valley',
//             country:'USA'
//         }    }
// }
// const getCEOInfo=({name,CEO})=>{
//     const{name,age,address:{city}
// }= CEO;}
// const ceoInfo=getCEOInfo(company);
