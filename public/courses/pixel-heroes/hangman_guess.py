print("=== HANGMAN GAME ===")
print()

# Secret word
secret_word = "python"

# Ask for a guess
guess = input("Guess a letter: ")

# Check if the letter is in the word
if guess in secret_word:
    print(f"Yes! The letter '{guess}' is in the word!")
else:
    print(f"Sorry! The letter '{guess}' is not in the word.")
