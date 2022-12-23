/*
let input = prompt('введи число')

let total = 0;


let result = input + total

//console.log(typeof result)

switch (input) {
    case result:
        
        break;

    default:
        break;
}
*/
let input = prompt("Enter Number");
let total = 0;
for (input; typeof input == "string"; input) {
    if (!isNaN(Number(input)) && input.trim().length !== 0) {
      total += Number(input);
    } else {
      alert("Not a number entered, try again");
    }
    input = prompt("Enter Number");
  }
  
  alert(`Total sum is ${total}`);