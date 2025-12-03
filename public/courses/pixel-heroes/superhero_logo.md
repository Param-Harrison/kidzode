# Create a Logo

Add an ASCII art logo to your superhero!

## What to Do
1. Press Run
2. See the logo and profile!

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

# Create the logo (ASCII art)
logo = """
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
    ⭐             ⭐
    ⭐   HERO!     ⭐
    ⭐             ⭐
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐
"""

print("=== SUPERHERO PROFILE ===")
print(logo)
print(f"Name: {superhero_name}")
print(f"Power: {power}")
print()
print(f"Beware villains! {superhero_name} {power}!")
```

## Remember
- Triple quotes `"""` make multi-line text
- ASCII art uses keyboard characters
- Design your own logo!

## Try This
Use different characters like `#`, `*`, `=`, or `+`!

## If Stuck
- Use THREE quotes: `"""`
- Keep same number of characters per line

You did it! ⭐
