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
