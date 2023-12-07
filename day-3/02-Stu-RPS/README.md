# Rock, Paper, Scissors

In this activity, you will work with a partner to build a rock-paper-scissors game using only JavaScript.

**Rules for rock-paper-scissors**

- Rock: wins against scissors, loses to paper, and ties against itself.
- Paper: wins against rock, loses to scissors, and ties against itself.
- Scissors: wins against paper, loses to rock, and ties against itself.

![RPS-Example-Picture](images/RPS-example.png)

### Instructions

- Begin the process of coding out the rock-paper-scissors game.

- As a user:

  - I want to play Rock, Paper, Scissors against an automated opponent.
  - I can enter R, P, or S to signify my choice of rock, paper, or scissors.
  - I expect the computer to choose R, P, or S in return.
  - I want the option to play again whether I win or lose.
  - I want to see my total wins, ties, and losses after 10 rounds.

- The computer's selection must be random to ensure a fair game.

- Follow your pseudocode as much as you can, and if you get stuck don't worry, this is a challenging assignment.

## 💡 Notes

Refer to the documentation:

- [MDN Web Docs on Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

# Rock-Paper-Scissors Pseudocode

1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.

2. Prompt user to enter "r," "p," or "s".

3. Computer chooses a **random** value in a list of "r," "p," or "s."

4. We determine if the user wins or not.

   - Initialize `wins`, `losses`, `ties` variables to 0

   - If user picks rock and if computer picks scissors, then user wins.

   - If user picks rock and if computer picks paper, then user loses.

   - If user picks scissors and if computer picks rock, then user loses.

   - If user picks scissors and if computer picks paper, then user wins.

   - If user picks paper and if computer picks rock, then user wins.

   - If user picks paper and if computer picks scissors, then user loses.

   - If user picks the same as computer, then they tie.

5. We then add to their score.

   - If user wins, then we add one to their wins.

   - If user loses, then we add one to their losses.

   - If user ties, then we add one to their ties.

6. Prompt user to play again.
