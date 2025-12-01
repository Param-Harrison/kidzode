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
