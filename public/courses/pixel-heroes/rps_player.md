# Player Makes a Choice

Let both the player AND computer make choices! Press Run and type "rock", "paper", or "scissors" - see what the computer picks!

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

**How it works:** The player uses `input()` to choose. The computer uses `random.choice()` to choose randomly. Both choices are stored in variables so you can use them later!

Try typing different choices - see what happens each time!
