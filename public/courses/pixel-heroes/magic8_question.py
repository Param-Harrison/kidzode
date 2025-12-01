import random

# Ask the user for their question
question = input("Ask the Magic 8-Ball a yes/no question: ")

# Create a list of possible fortunes
fortunes = ["Yes, definitely!", "No way!", "Maybe later!"]

# Pick one fortune randomly
answer = random.choice(fortunes)

# Show the fortune
print("The Magic 8-Ball says...")
print(answer)
