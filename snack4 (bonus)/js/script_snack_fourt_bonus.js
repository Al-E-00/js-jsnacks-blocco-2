/* 
made two arrays with a num of elements different
- add elements to array how have less element to have the same num of 
elements in both the arrays
*/

let arr1 = [4, 2, 5, 1, 5, 67, 21 ,34, 23, 65, 1];
let arr2 = [4, 32, 76, 43, 65];
let addElements;

if (arr1.length < arr2.length) {
    addElements = (arr2.length - arr1.length);
} else {
    addElements = (arr1.length - arr2.length);
}

for (let i = 0; i < addElements; i++) {
    
}

console.log(arr1);
console.log(arr2);
