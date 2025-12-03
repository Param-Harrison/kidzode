# Player Makes a Choice

Let both the player AND computer make choices!

## What to Do
1. Press Run
2. Type "rock", "paper", or "scissors"!

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
```

## Remember
- Player uses `input()` to choose
- Computer uses `random.choice()` to choose
- Both choices stored in variables

## Try This
Try typing different choices!

## If Stuck
- Type exactly: rock, paper, or scissors
- Both choices print at the end

You did it! ⭐
