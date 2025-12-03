# Challenge: Complete Superhero Profile

Challenge time! Add a weakness to make a complete profile. Add a weaknesses list, pick a random weakness, then show the complete profile!

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

**The secret:** Every superhero has a weakness! You can have as many lists as you want. Each `random.choice()` is independent, so combinations stay random.

Want to make it harder? Add a sidekick or catchphrase - make it complete!
