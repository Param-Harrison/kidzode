# ========================================
# 🎱 LESSON 3: Picking Randomly
# ========================================

# Step 1: Open the random toolbox
import random

# Step 2: Create our list of answers
answers = ["Yes", "No", "Maybe", "Ask later"]

# Step 3: Ask the user a question
question = input("Ask the Magic 8-Ball a question: ")

# Step 4: Pick a random answer from the list
result = random.choice(answers)

# Step 5: Show the answer!
print("The Magic 8-Ball says...")
print(result)

# ----------------------------------------
# 🎮 TRY THIS:
# Add more answers to make it more fun!
# Run it multiple times with the same question!
# ----------------------------------------
