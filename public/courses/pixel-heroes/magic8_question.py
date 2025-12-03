import random

# Ask for a question
question = input("Ask the Magic 8-Ball a yes/no question: ")

# List of fortunes
fortunes = ["Yes, definitely!", "No way!", "Maybe later!"]

# Pick one randomly
answer = random.choice(fortunes)

print("The Magic 8-Ball says...")
print(answer)
