function addNumbers(a, b) {
    return a + b;
  }
  
  let num0 = 5;
  let num = 10;
  
  console.log(addNumbers(num0, num));  // Output: 15
  console.log(addNumbers(20, 30));  // Output: 50

  let descriptiveWords = ["amazing", "brilliant", "charming", "dazzling", "excellent", "fantastic", "gorgeous", "handsome", "incredible", "jovial"];

function getNameAndDescription() {
  let userName = prompt("Please enter your name:");
  let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
  let randomWord = descriptiveWords[randomIndex];
  console.log(`Hello, ${userName}! You are ${randomWord}!`);
}

getNameAndDescription();

let num1 = 10;
let num2 = 5;
let operator = "+";

function calculate(num0, num, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else {
    return num1 + num2; // default to addition if operator is not + or -
  }
}

console.log(calculate(num1, num2, operator));  // Output: 15

operator = "-";
console.log(calculate(num1, num2, operator));  // Output: 5


let prize = prompt("Select a number between 0 and 10:");
prize = Number(prize);
let outputMessage = "My Selection: ";

switch (prize) {
  case 0:
    prize = "a rock";
    break;
  case 1:
    prize = "a small toy car";
    break;
  case 2:
    prize = "a sticker";
    break;
  case 3:
    prize = "a small bag of candy";
    break;
  case 4:
    prize = "a pencil";
    break;
  case 5:
    prize = "a small notebook";
    break;
  case 6:
    prize = "a fun eraser";
    break;
  case 7:
    prize = "a small stuffed animal";
    break;
  case 8:
    prize = "a bookmark";
    break;
  case 9:
    prize = "a small gift card";
    break;
  case 10:
    prize = "a grand prize!";
    break;
  default:
    prize = "nothing, try again!";
}

console.log(outputMessage + prize);