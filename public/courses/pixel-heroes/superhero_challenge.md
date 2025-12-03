# Challenge: Complete Superhero Profile

Add a weakness to make a complete profile!

## What to Do
1. Add a weaknesses list
2. Pick a random weakness
3. Show the complete profile!

```python
import random

# Lists of superhero parts
adjectives = ["Mighty", "Super", "Amazing", "Incredible", "Fantastic", "Blazing"]
nouns = ["Thunder", "Lightning", "Shadow", "Phoenix", "Dragon", "Storm"]
powers = [
    "can fly at supersonic speed",
    "has super strength",
    "can become invisible",
    "controls fire and ice",
    "reads minds",
    "shoots energy blasts"
]

# YOUR TURN! Add a weaknesses list
# HINT: weaknesses = ["water", "loud noises", "chocolate", ...]

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)
power = random.choice(powers)
# YOUR TURN! Pick a random weakness
# HINT: weakness = random.choice(weaknesses)

# Create the superhero
superhero_name = adj + " " + noun

# Create the logo
logo = """
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
    ⭐             ⭐
    ⭐   HERO!     ⭐
    ⭐             ⭐
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
"""

print("=== COMPLETE SUPERHERO PROFILE ===")
print(logo)
print(f"Name: {superhero_name}")
print(f"Power: {power}")
# YOUR TURN! Print the weakness
# HINT: print(f"Weakness: {weakness}")
print()
print(f"{superhero_name} is here to save the day!")
```

## Remember
- Every superhero has a weakness!
- You can have many lists
- Each `random.choice()` is independent

## Try This
Add a sidekick or catchphrase!

## If Stuck
- Create the `weaknesses` list
- Use `weakness = random.choice(weaknesses)`

**CHALLENGE COMPLETE!** 🎉
