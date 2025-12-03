# Generate Superhero Name

Create your own superhero name generator! Press Run, then run it again - you'll get different names each time!

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

**The magic:** You can have as many lists as you want! `random.choice()` picks randomly from any list. Use `" "` (a space in quotes) to add a space between words when combining them.

Add your own words like "Blazing", "Cosmic", "Fire", or "Ice" - make it your own!
