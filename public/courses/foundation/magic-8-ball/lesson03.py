import random

answers = ["Yes", "No", "Maybe", "Ask later"]

# Ask the user a question
question = input("Ask the Magic 8-Ball a question: ")

# Pick a random answer from the list
result = random.choice(answers)

print("The Magic 8-Ball says...")
print(result)
