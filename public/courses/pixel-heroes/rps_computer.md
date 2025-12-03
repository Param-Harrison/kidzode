# Computer Makes a Choice

Make the computer choose rock, paper, or scissors randomly!

## What to Do
1. Press Run
2. Run many times to see different choices!

```python
import random

print("=== ROCK-PAPER-SCISSORS ===")
print()

# Computer makes a random choice
choices = ["rock", "paper", "scissors"]
computer_choice = random.choice(choices)

print(f"Computer chose: {computer_choice}")
```

## Remember
- List has three options: rock, paper, scissors
- `random.choice(choices)` picks one randomly
- Computer might choose differently each time

## Try This
Add more options like "lizard" and "spock"!

## If Stuck
- Make sure you have `import random`
- Keep running to see different choices!

You did it! ⭐
