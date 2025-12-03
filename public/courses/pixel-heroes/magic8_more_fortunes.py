import random

question = input("Ask the Magic 8-Ball a yes/no question: ")

# Big list of fortunes
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

answer = random.choice(fortunes)

print("The Magic 8-Ball says...")
print(answer)
