// Write your code here
var userInput = prompt("pick a number between 1 and 7");
var userNumber = parseInt(userInput);

// if (userNumber === 1) {
//   alert("Monday");
// } else if (userNumber === 2) {
//   alert("Tuesday");
// } else if (userNumber === 3) {
//   alert("Wednesday");
// } else if (userNumber === 4) {
//   alert("Thursday");
// } else if (userNumber === 5) {
//   alert("Friday");
// } else if (userNumber === 6) {
//   alert("Saturday");
// } else if (userNumber === 7) {
//   alert("Sunday");
// } else {
//   alert("wrong input");
// }

switch (userNumber) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  case 7:
    alert("Sunday");
    break;
  default:
    alert("wrong input");
}
