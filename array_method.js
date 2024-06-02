// arr=[3,4,5,6,7]
// arr.push(11)
// console.log(arr)
//  console.log(arr.pop()) ////to remove the element at last
// console.log(arr)

// fruits=["Mango","Apple","Papaya"]
// f=fruits.pop()
// console.log(f)
// fruits.push("waterMelon")
// console.log(fruits)

// Remove from the frist position.
// arr=[5,3,4,2,1]
// x=arr.shift()
// console.log(x)
// console.log(arr)
// console.log(arr.unshift(51))
// console.log(arr)


// array concatination method
// arr1=[2,3,4,5]
// arr2=[6,7,8,9]
// arr=arr1.concat(arr2)
// console.log(arr)
// console.log(arr.length)

// arr_new=arr1+arr2
// console.log(typeof arr_new)
// console.log(arr_new)

// join method
// let fruits=["apple", "Banna", "Carrot"]
// let result=fruits.join()
// console.log(result)
// let result2=fruits.join(' $ ')
// console.log(typeof result2)

// Slicing
// let arr=[1,2,3,4,5,6,7,8]
// let arr2=arr.slice(2,5)
// console.log(arr2)
// console.log(arr.slice(2))
// console.log(arr.slice(0,4))
// console.log(arr.slice(-1))

// Splice method()
// arr=[1,2,3,4,5]
// // arr.splice(1,2)
// arr.splice(1,2,6)
// console.log(arr)

// reverse method()
// arr=[1,2,3,4,5]
// arr.reverse()
// console.log(arr)

// sort method ()
// arr=[5,4,1,2,9,3,11,13,14,15]
// arr.sort((a,b)=>(a-b)) //sort in acending order
// // arr.sort((a,b)=>b-a) //sort in decending order
// console.log(arr)
//

// arr toString
// arr=[3,4,5,1,7]
// str=arr.toString()
// console.log(str)
// console.log(typeof str)

// flating a array method
// arr=[3,4,5,[7,8,9,1]]
// flat_array=arr.flat()
// console.log(flat_array)
// console.log(arr)

// arr2=[1,2,3,[4,5,[6,7,8,[9,10]]]]
// console.log(arr2.flat())
// console.log(arr2.flat(1))
// console.log(arr2.flat(2))
// console.log(arr2.flat(3))

// isarray method
arr=[1,2,3,4]
console.log(Array.isArray(arr))