# Generate Superhero Name

Make random superhero names!

## What to Do
1. Press Run
2. Run again for different names!

```python
import random

# Lists of superhero name parts
adjectives = ["Mighty", "Super", "Amazing", "Incredible", "Fantastic"]
nouns = ["Thunder", "Lightning", "Shadow", "Phoenix", "Dragon"]

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)

# Combine them!
superhero_name = adj + " " + noun

print("=== SUPERHERO NAME GENERATOR ===")
print()
print(f"Your superhero name is: {superhero_name}!")
```

## Remember
- You can have many lists
- `random.choice()` picks from any list
- Use `" "` to add a space between words

## Try This
Add your own words like "Blazing" or "Cosmic"!

## If Stuck
- Make sure `import random` is at top
- Check you have `" "` between words

You did it! ⭐
