// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
var choices = ["r", "p", "s"];
console.log(choices);

// 2. Prompt user to enter "r," "p," or "s".
var whatChoice = prompt("Please choose between r, p, or s");

// 3. Computer chooses a **random** value in a list of "r," "p," or "s."
var randomChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(randomChoice);

//4.We determine if the user wins or not.
var wins = 0;
var losses = 0;
var ties = 0;

if (whatChoice === "r" && randomChoice === "s") {
  alert("You win!");
} else if (whatChoice === "r" && randomChoice === "p") {
  alert("You lost!");
} else if (whatChoice === "s" && randomChoice === "r") {
  alert("You lost!");
} else if (whatChoice === "s" && randomChoice === "p") {
  alert("You win!");
} else if (whatChoice === "p" && randomChoice === "r") {
  alert("You win!");
} else if (whatChoice === "p" && randomChoice === "s") {
  alert("You lost!");
} else if (whatChoice === randomChoice) {
  alert("It's a tie!");
}
