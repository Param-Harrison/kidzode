# Add a Superpower

Add a random superpower to your superhero! Press Run and see both the name AND power!

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

**The magic:** You can use as many lists as you want! Each `random.choice()` picks independently, so combinations make each hero unique!

Add more powers - make them creative, funny, or powerful!
