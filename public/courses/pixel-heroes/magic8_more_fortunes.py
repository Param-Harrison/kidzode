import random

# Ask the user for their question
question = input("Ask the Magic 8-Ball a yes/no question: ")

# Create a BIG list of possible fortunes
fortunes = [
    "Yes, definitely!",
    "No way!",
    "Maybe later!",
    "Ask again tomorrow!",
    "The stars say yes!",
    "Don't count on it!",
    "Absolutely!",
    "Not a chance!"
]

# Pick one fortune randomly
answer = random.choice(fortunes)

# Show the fortune
print("The Magic 8-Ball says...")
print(answer)
