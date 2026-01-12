# ========================================
# 💥 LESSON 3: The Final Identity
# ========================================

# Step 1: Open the random toolbox
import random

# Step 2: Our word lists
powers = ["Mega", "Sonic", "Quantum", "Shadow"]
heroes = ["Falcon", "Storm", "Pulse", "Knight"]

# Step 3: Pick randomly
power = random.choice(powers)
hero = random.choice(heroes)

# Step 4: Use an f-string to combine them
# The f means "fill in the blanks"
# {power} and {hero} get replaced with the actual words!
super_name = f"{power} {hero}"

# Step 5: Reveal the name!
print("Your superhero name is:")
print(super_name)

# ----------------------------------------
# 🎮 TRY THIS:
# Change the f-string to add "The" at the start!
# super_name = f"The {power} {hero}"
# ----------------------------------------
