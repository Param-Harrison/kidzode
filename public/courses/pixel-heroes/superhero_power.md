# Add a Superpower

Add a random superpower to your superhero!

## What to Do
1. Press Run
2. See name AND power!

```python
import random

# Lists of superhero parts
adjectives = ["Mighty", "Super", "Amazing", "Incredible", "Fantastic"]
nouns = ["Thunder", "Lightning", "Shadow", "Phoenix", "Dragon"]
powers = [
    "can fly at supersonic speed",
    "has super strength",
    "can become invisible",
    "controls fire and ice",
    "reads minds"
]

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)
power = random.choice(powers)

# Create the superhero
superhero_name = adj + " " + noun

print("=== SUPERHERO GENERATOR ===")
print()
print(f"Name: {superhero_name}")
print(f"Power: {power}")
print()
print(f"{superhero_name} {power}!")
```

## Remember
- You can use many lists
- Each `random.choice()` picks independently
- Combinations make each hero unique!

## Try This
Add more powers!

## If Stuck
- Powers can be full sentences
- Keep running to see different combos!

You did it! ⭐
