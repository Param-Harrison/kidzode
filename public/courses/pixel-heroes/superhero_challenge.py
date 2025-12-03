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
# HINT: Create a list like: weaknesses = ["water", "loud noises", "chocolate", "homework"]
# Your code here:

# Pick one from each list
adj = random.choice(adjectives)
noun = random.choice(nouns)
power = random.choice(powers)
# YOUR TURN! Pick a random weakness
# HINT: weakness = random.choice(weaknesses)
# Your code here:

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
# Your code here:

print()
print(f"{superhero_name} is here to save the day!")
