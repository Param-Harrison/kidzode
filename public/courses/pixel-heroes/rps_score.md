# Keep Score

Excellent, Game Logic Master! Your game works perfectly!
But real games keep SCORE! Who's winning overall?
Can you track wins, losses, and ties?

## 🎯 Today's Mission
Add a scoring system to track who's winning!

## 📚 Before You Start
You know how to determine winners and use variables to store information.

## Let's Do It!
1. Read the code - see the score tracking!
2. Press the green **Run** button
3. Play and watch the score!

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

## ✨ Magic Moment
The game now tracks who's winning!

## 💡 Important Things to Remember
- We create score variables BEFORE the game: `player_score = 0`
- When someone wins, we add 1 to their score: `player_score = player_score + 1`
- We track three things: player wins, computer wins, and ties
- The score shows at the end of each round!

## 🎨 Try This Next!
Run the program multiple times and imagine the scores adding up!

## 🤔 Stuck? Check This!
- **Score always 0 or 1?** That's normal - each run is one game
- **Want multiple rounds?** We'll add that in the next lesson!
- **Score not updating?** Make sure you have `score = score + 1` in each win condition

## 🌟 Show Your Parents!
"Look! My game keeps score now - just like a real championship!"

You just unlocked the **Score Keeper** superpower! ⭐
