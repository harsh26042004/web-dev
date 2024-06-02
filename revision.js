// // For Each
// let items=[
//     'apple',
//     'banana',
//     'water melon',
//     'Mango',
//     'Pineapple'
// ]
// items.forEach((item,index,arr)=>{
//     console.log(`The ${item} is on the position of ${index+1} and the items list are ${arr}`)
// })

// MAP
// CONVERT THE NUMBER FROM STRING TO NUMBER GIVEN IN ARRAY
let itemasString=['100','101','102']
let itemasnumber=itemasString.map((item)=>{return Number(item)})
console.log(itemasnumber)