# ========================================
# 🏆 CHALLENGE 1: Villain Generator
# ========================================

import random

# Step 1: Create villain word lists
evil_words = ["Dark", "Evil", "Doom", "Shadow"]
villains = ["Lord", "Master", "King", "Knight"]

# Step 2: Pick randomly from each
evil = random.choice(evil_words)
villain = random.choice(villains)

# Step 3: Combine with f-string
villain_name = f"{evil} {villain}"

# Step 4: Print!
print("Your villain is:")
print(villain_name)
