# Keep Score

Add a scoring system to track who's winning!

## What to Do
1. Press Run
2. Play and watch the score!

```python
import random

print("=== ROCK-PAPER-SCISSORS CHAMPIONSHIP ===")
print()

# Initialize scores
player_score = 0
computer_score = 0
ties = 0

# Player makes a choice
player_choice = input("Choose rock, paper, or scissors: ")

# Computer makes a random choice
choices = ["rock", "paper", "scissors"]
computer_choice = random.choice(choices)

print()
print(f"You chose: {player_choice}")
print(f"Computer chose: {computer_choice}")
print()

# Determine the winner and update score
if player_choice == computer_choice:
    print("It's a TIE!")
    ties = ties + 1
elif player_choice == "rock" and computer_choice == "scissors":
    print("YOU WIN! Rock beats scissors!")
    player_score = player_score + 1
elif player_choice == "paper" and computer_choice == "rock":
    print("YOU WIN! Paper beats rock!")
    player_score = player_score + 1
elif player_choice == "scissors" and computer_choice == "paper":
    print("YOU WIN! Scissors beats paper!")
    player_score = player_score + 1
else:
    print("COMPUTER WINS!")
    computer_score = computer_score + 1

# Show the score
print()
print("=== SCORE ===")
print(f"You: {player_score}")
print(f"Computer: {computer_score}")
print(f"Ties: {ties}")
```

## Remember
- Create score variables BEFORE the game: `player_score = 0`
- When someone wins, add 1: `player_score = player_score + 1`
- Track player wins, computer wins, and ties

## Try This
Run multiple times and see scores add up!

## If Stuck
- Make sure you have `score = score + 1` in each win condition
- Score shows at the end of each round

You did it! ⭐
