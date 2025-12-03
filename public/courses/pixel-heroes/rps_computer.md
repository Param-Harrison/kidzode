# Computer Makes a Choice

Let's make the computer choose rock, paper, or scissors randomly! Press Run, then run it many times - the computer will choose differently each time!

```python
import random

print("=== ROCK-PAPER-SCISSORS ===")
print()

# Computer makes a random choice
choices = ["rock", "paper", "scissors"]
computer_choice = random.choice(choices)

print(f"Computer chose: {computer_choice}")
```

**How it works:** The list has three options. `random.choice(choices)` picks one randomly. The computer might choose rock one time, paper the next, scissors after that - it's random!

Try adding more options like "lizard" and "spock" to make it more interesting!
