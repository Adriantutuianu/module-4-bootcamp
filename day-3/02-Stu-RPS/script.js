// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
var computerChoices = ["r", "p", "s"];
// console.log(choices);

//4.We determine if the user wins or not.
var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i < 10; i++) {
  //randomly chooses a choice from the options array. This is the computer guess.
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  //collect the user s response and convert to lower case
  var userGuess = prompt("Enter r, p, or s!");
  userGuess = userGuess.toLowerCase();

  //only run game logic if user chose a valid option
  if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
    alert("The computer chose " + computerGuess);

    // win/lose condition
    if (userGuess === computerGuess) {
      ties++;
      alert("You've tied " + ties + "times.");
    } else if (
      (userGuess === "r" && computerGuess === "s") ||
      (userGuess === "s" && computerGuess === "p") ||
      (userGuess === "p" && computerGuess === "r")
    ) {
      wins++;
      alert("You've won " + wins + " times!");
    }
  }
}

//when game is over alert the totals to the users.
alert(
  "Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses
);
