# ========================================
# 🐾 CHALLENGE 2: Pet Name Generator
# ========================================

import random

# Step 1: Create pet word lists
adjectives = ["Fluffy", "Super", "Speedy", "Mighty"]
animals = ["Paws", "Whiskers", "Buddy", "Snout"]

# Step 2: Pick randomly
adj = random.choice(adjectives)
animal = random.choice(animals)

# Step 3: Combine!
pet_name = f"{adj} {animal}"

# Step 4: Print!
print("Your pet's superhero name is:")
print(pet_name)
