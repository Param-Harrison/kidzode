# Answer

Here's the complete solution:

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
weaknesses = ["water", "loud noises", "chocolate", "kryptonite", "mornings"]

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)
power = random.choice(powers)
weakness = random.choice(weaknesses)

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
print(f"Weakness: {weakness}")
print()
print(f"{superhero_name} is here to save the day!")
```

**Remember:** Try solving it yourself first! Understanding how lists and random.choice work is more important than just copying the answer. Add your own weaknesses and powers!

