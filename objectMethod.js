const emp={
    name:"sai",
    age:20,
    salary:1000,
    address:{
        city:"hydrabad",
        country:"India"
    }
}
// list of all the keys in given object
// console.log(Object.keys(emp))
// list of all the values in given object
// console.log(Object.values(emp))
// list of all keys and value pair in object
// console.log(Object.entries(emp))

// assign is used to create new object from given object
// emp_new=Object.assign({},emp,{role:"developer"})
// console.log(emp_new)

// const person={
//     name:"harsh",
//     age:20
// }
// console.log(person)
// //Object.freeze(person)//after using freeze we can not modify addition and no deletion.
// Object.seal(person)//in seal method modification in allowed but deletion and addition is not allowed.
// person.name="Ritik"
// person.hobby="cricket"
// console.log(person)

const aam={
    name : "Harsh",
    age : 20,
    salary:2000
}
// Object.freeze(aam)
// console.log(Object.hasOwn(aam,"name"))
// console.log(Object.hasOwn(aam,"Company"))
// console.log(Object.getOwnPropertyNames(aam)) //it is similar to object.keys() e
// console.log(Object.getOwnPropertyDescriptors(aam))
// Object.defineProperties(aam,{
//     salary :{
//         value:2000,
//         enumerable:false
//     }
// })//this is used to additional change in object.
for(k in aam){
    console.log(k)
}