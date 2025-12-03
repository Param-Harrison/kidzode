import random

print("=== HANGMAN WITH CATEGORIES ===")
print()

# Word categories
animals = ["elephant", "giraffe", "penguin", "dolphin"]
colors = ["purple", "orange", "yellow", "silver"]
sports = ["soccer", "tennis", "hockey", "boxing"]

# Choose category
print("Categories: animals, colors, sports")
category = input("Choose a category: ")

# Pick a random word from the category
if category == "animals":
    secret_word = random.choice(animals)
elif category == "colors":
    secret_word = random.choice(colors)
elif category == "sports":
    secret_word = random.choice(sports)
else:
    secret_word = "python"  # Default word

print(f"I've chosen a {category} word!")
print(f"The word has {len(secret_word)} letters.")
print()

# Game state
guessed_letters = ""
wrong_guesses = 0
max_wrong = 6

# YOUR TURN! Show the word with blanks
# HINT: Use a for loop to go through each letter in secret_word
# HINT: If letter in guessed_letters: print the letter
# HINT: Else: print "_"
# HINT: Use end=" " to print on same line
# Your code here:

print()
print(f"Wrong guesses: {wrong_guesses}/{max_wrong}")
print()

# Ask for a guess
guess = input("Guess a letter: ")

# YOUR TURN! Check if correct and update game state
# HINT: If guess in secret_word: print correct message, add to guessed_letters
# HINT: Else: print wrong message, wrong_guesses = wrong_guesses + 1
# Your code here:
