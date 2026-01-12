# ========================================
# 🎸 CHALLENGE 3: Band Name Generator
# ========================================

import random

# Step 1: Create band name word lists
first_words = ["The", "Super", "Mighty", "Electric"]
second_words = ["Dragons", "Stars", "Legends", "Rockets"]

# Step 2: Pick randomly
first = random.choice(first_words)
second = random.choice(second_words)

# Step 3: Combine!
band_name = f"{first} {second}"

# Step 4: Print!
print("Your band name is:")
print(band_name)
