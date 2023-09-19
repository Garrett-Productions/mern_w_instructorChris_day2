// You will be given an array and a value. you need to write a function to check whether the provided array contains the value.
// * Array can contain numbers or strings. value can be either.
// * Return true if the array contains the value, 


// const doesContain = (array, val) => {
//     for(let idx = 0; idx < array.length; idx++){
//         if(array[idx] === val){
//             return true
//         }
//     }
//     return false
// }

const doesContain = (array, val) => array.includes(val)

console.log(doesContain([1,2,3,4,], 7))
console.log(doesContain([1,2,3,7,], 7))