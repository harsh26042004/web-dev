// for(let i=1;i<=5;i++){
//     let row=""
//     for(let j=1;j<=i;j++){
//         row +="* "
//     }
//     console.log(row);
// }

// function printRightAngleTriangleStars(height){
//     for(i=1;i<=height;i++){
//         // String to store the stars for each row
//         let row="";
//         // concatenate stars for each row
//         for(j=1;j<=i;j++){
//             row +="* "
//         }
//         // print the row using console.log
//         console.log(row);
//     }

// }
// printRightAngleTriangleStars(6);

// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // print stars for n number of times in each row
//    for (let num = 1; num <= n; num++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);

let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // Inner Loop - I -> prints spaces
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }

   // Inner Loop - II -> prints stars
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);

