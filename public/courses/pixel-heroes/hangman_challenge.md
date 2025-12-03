# Challenge: Word Categories

Let players choose a category and get a random word!

## What to Do
1. Create word lists for different categories
2. Let the player choose a category
3. Pick a random word from that category
4. Play a complete game!

```python
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

# Show the word with blanks
print("Word: ", end="")
for letter in secret_word:
    if letter in guessed_letters:
        print(letter, end=" ")
    else:
        print("_", end=" ")

print()
print(f"Wrong guesses: {wrong_guesses}/{max_wrong}")
print()

# Ask for a guess
guess = input("Guess a letter: ")

# Check if correct
if guess in secret_word:
    print(f"CORRECT! '{guess}' is in the word!")
else:
    print(f"WRONG! '{guess}' is not in the word.")
    wrong_guesses = wrong_guesses + 1
```

## Remember
- Each category is a separate list
- `random.choice()` picks a random word
- `len(secret_word)` tells how many letters

## Try This
Add more categories or a loop to play multiple rounds!

## If Stuck
- Type exactly: animals, colors, or sports
- Try each category multiple times

**CHALLENGE COMPLETE!** 🎉
