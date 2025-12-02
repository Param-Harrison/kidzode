# Determine the Winner

Perfect, Two-Player Game Creator! Both players can choose!
But who WINS? We need to figure that out!
Can you add the rules to determine the winner?

## 🎯 Today's Mission
Add logic to determine who wins the game!

## 📚 Before You Start
You know the rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock!

## Let's Do It!
1. Read the code - see all the winning conditions!
2. Press the green **Run** button
3. Play and see who wins!

```python
import random

print("=== ROCK-PAPER-SCISSORS GAME ===")
print()

# Player makes a choice
player_choice = input("Choose rock, paper, or scissors: ")

# Computer makes a random choice
choices = ["rock", "paper", "scissors"]
computer_choice = random.choice(choices)

print()
print(f"You chose: {player_choice}")
print(f"Computer chose: {computer_choice}")
print()

# Determine the winner
if player_choice == computer_choice:
    print("It's a TIE!")
elif player_choice == "rock" and computer_choice == "scissors":
    print("YOU WIN! Rock beats scissors!")
elif player_choice == "paper" and computer_choice == "rock":
    print("YOU WIN! Paper beats rock!")
elif player_choice == "scissors" and computer_choice == "paper":
    print("YOU WIN! Scissors beats paper!")
else:
    print("COMPUTER WINS! Better luck next time!")
```

## ✨ Magic Moment
The game now declares a winner based on the rules!

## 💡 Important Things to Remember
- We check for a tie first: `if player_choice == computer_choice`
- Then we check each way the player can win
- `and` means BOTH conditions must be true
- If none of the win conditions match, the computer wins!

## 🎨 Try This Next!
Play multiple times and try to win with each choice (rock, paper, scissors)!

## 🤔 Stuck? Check This!
- **Always ties?** Make sure you're typing the choice exactly right
- **Computer always wins?** Check your win conditions carefully
- **Confused by logic?** Draw out the rules on paper first!

## 🌟 Show Your Parents!
"Look! I made a complete Rock-Paper-Scissors game with all the rules!"

You just unlocked the **Game Logic Master** superpower! ⭐
