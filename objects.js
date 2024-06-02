// const person={
//     name:"Harsh",
//     age:18,
//     city:"Patna"

// }
// console.log(typeof(person))
// console.log(person)

// const user={
//     1:"vishwa",
//     2:"MOhan",
//     3:"harsh"
// }   
// console.log(user) //java script automaticaly convert integer to string in key.

// const user={
//     name:"Harsh kumar",
//     age:18,
//     greet:function(){
//         console.log("hello students")
//     }
// }
// console.log(user)

// another way of creating objects
// const obj= new Object()
// console.log(obj)

// 3rd way of creating objects by using function
// function emp(id,name, salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;
// }    
// const emp_obj=new emp(1,'vishwa',70000)
// console.log(emp_obj)  //this inside a func mean this refers to the object that will be created.
// console.log(emp_obj.name) //by defining key 
// console.log(emp_obj['name']) //by using brackets

// const student={
//     name:"Harsh kumar",
//     age:20,
//     address:{
//         city_name:"Patna",
//         pincode:800001,
//         area:"danapur"
//     }
// }
// console.log(student.address.city_name)
// console.log(student['address'].city_name)
// console.log(student['address']['city_name'])

// empty object
const person={}
person.name = "Harsh kumar"
person.age=19
person.address = "Patna"
person['city_name']="Patna"
person['pincode']=800001
person.hobby='acting'
console.log(person)
person.name='Golu'//update the name of the object.
console.log(person)
delete person['name']
console.log(person)
