/* 
put a user num
IF it's even -> print
ELSE it's odd -> print next
*/

const userNum = parseInt(prompt("Enter a number."));
let evenNum = -1;

if (userNum % 2 == 0) {
    evenNum = userNum;
    console.log(evenNum);
} else {
    evenNum = userNum + 1;
    console.log(evenNum);
}

document.getElementById("enterNum").innerHTML = (`${evenNum}`);