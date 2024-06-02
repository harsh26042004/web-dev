// const person1 = {
//     firstName: 'Ganesh',
//     lastName: 'Prasad'
// }

// const person2 = {
//     fullName: function (city,country) {
//         console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}`);
//     }
// }
// const bound=person2.fullName.bind(person1)
// // person2.fullName.call(person1,'New Delhi','India'); // Output: Ganesh Prasad
// // person2.fullName.apply(person1,['Washington','United States']); // Output: Ganesh Prasad lives in Washington in United States
// // person2.fullName.call(person1,'Patna city','India')
// bound('New Zealand','bihar')

// const rand=(a,b)=>{
//     console.log(Math.trunc(Math.random(1,10)*10))
// }
// rand()
// using call()method
// let person1={
//     firstName:"PW",
//     lastName:"Skills",
//     printFullName:function(){
//         console.log(this.firstName+" "+this.lastName)
//     }
// }
// let person2={
//     firstName:"Alakh",
//     lastName:"wallah"
// };
// person1.printFullName.call(person2);

function printFullName(){
    console.log(this.firstName + '' + this.lastName)
}
let person1={
    firstName:"Pw",
    lastName:"Skills",
};
let person2={
    firstName:"Alakh",
    lastName:"Pandey",
};
printFullName.call(person1);
printFullName.call(person2)