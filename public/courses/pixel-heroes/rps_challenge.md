# Best of 5 Championship Challenge

Amazing, Score Keeper! Your game tracks scores!
But one round isn't enough! Let's play BEST OF 5!
Can you make the game play 5 rounds and declare a champion?

## 🎯 Today's Mission
Create a best-of-5 championship with a final winner!

## 📚 Before You Start
You know how to keep score and use loops.

## Your Challenge!
1. Play 5 rounds
2. Keep score across all rounds
3. Declare the final champion!

```python
import random

print("=== BEST OF 5 CHAMPIONSHIP ===")
print()

# Initialize scores
player_score = 0
computer_score = 0
ties = 0

# Play 5 rounds
for round_num in range(1, 6):
    print(f"--- ROUND {round_num} ---")
    
    # Player makes a choice
    player_choice = input("Choose rock, paper, or scissors: ")
    
    # Computer makes a random choice
    choices = ["rock", "paper", "scissors"]
    computer_choice = random.choice(choices)
    
    print(f"You chose: {player_choice}")
    print(f"Computer chose: {computer_choice}")
    
    # Determine the winner and update score
    if player_choice == computer_choice:
        print("TIE!")
        ties = ties + 1
    elif player_choice == "rock" and computer_choice == "scissors":
        print("YOU WIN THIS ROUND!")
        player_score = player_score + 1
    elif player_choice == "paper" and computer_choice == "rock":
        print("YOU WIN THIS ROUND!")
        player_score = player_score + 1
    elif player_choice == "scissors" and computer_choice == "paper":
        print("YOU WIN THIS ROUND!")
        player_score = player_score + 1
    else:
        print("COMPUTER WINS THIS ROUND!")
        computer_score = computer_score + 1
    
    print(f"Score - You: {player_score}, Computer: {computer_score}")
    print()

# Declare the champion
print("=== FINAL RESULTS ===")
print(f"You: {player_score} wins")
print(f"Computer: {computer_score} wins")
print(f"Ties: {ties}")
print()

if player_score > computer_score:
    print("YOU ARE THE CHAMPION!")
elif computer_score > player_score:
    print("COMPUTER IS THE CHAMPION!")
else:
    print("IT'S A TIE! PLAY AGAIN!")
```

## ✨ Magic Moment
A complete 5-round championship with a final winner!

## 💡 Important Things to Remember
- `for round_num in range(1, 6):` plays 5 rounds (1, 2, 3, 4, 5)
- The scores accumulate across all rounds
- We compare final scores to determine the champion
- This is like a real tournament!

## 🎨 Try This Next!
- Change to best of 7 or best of 10
- Add a "play again" option at the end
- Show win percentage
- Add a hall of fame for champions

## 🤔 Stuck? Check This!
- **Only 1 round?** Make sure you have the `for` loop around the game
- **Scores not adding up?** Check that score variables are OUTSIDE the loop
- **Want best of 3?** Use `range(1, 4)` instead

## 🌟 Show Your Parents!
"Look! I made a complete Rock-Paper-Scissors championship game!"

You just unlocked the **Championship Game Creator** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 10! 🎉
