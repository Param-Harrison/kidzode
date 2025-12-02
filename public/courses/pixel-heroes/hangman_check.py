print("=== HANGMAN GAME ===")
print()

# Secret word
secret_word = "coding"

# Ask for a guess
guess = input("Guess a letter: ")

print()

# Check if the letter is in the word
if guess in secret_word:
    print("CORRECT!")
    print(f"The letter '{guess}' is in the word!")
else:
    print("WRONG!")
    print(f"The letter '{guess}' is not in the word.")
    print("Try again!")
