print("=== HANGMAN GAME ===")
print()

# Secret word
secret_word = "game"

# Letters guessed so far
guessed_letters = "a"  # Pretend we already guessed 'a'

# Show the word with blanks
print("The word: ", end="")
for letter in secret_word:
    if letter in guessed_letters:
        print(letter, end=" ")
    else:
        print("_", end=" ")

print()  # New line
print()

# Ask for a guess
guess = input("Guess a letter: ")

# Check if correct
if guess in secret_word:
    print(f"CORRECT! '{guess}' is in the word!")
else:
    print(f"WRONG! '{guess}' is not in the word.")
