/* 
    - make an array with whole numbers
    - sum elements with odd index
*/

let numbers = [32, 43, 54, 122, 132, 21, 65, 43, 2, 54, 5, 65, 6];
let oddNumbersSum = [];

let sum = 0;


    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
        sum = sum + numbers[i];
        oddNumbersSum.push(numbers[i]);
    } else {
        sum = sum
    }
    }

console.log(oddNumbersSum);
console.log(sum);