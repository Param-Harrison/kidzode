# Count Wrong Guesses

Track wrong guesses and show how many chances are left! Press Run and make wrong guesses - watch the counter go up!

```python
print("=== HANGMAN GAME ===")
print()

# Secret word
secret_word = "hero"

# Game state
guessed_letters = ""
wrong_guesses = 0
max_wrong = 6

# Show the word
print("The word: ", end="")
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
    guessed_letters = guessed_letters + guess
else:
    print(f"WRONG! '{guess}' is not in the word.")
    wrong_guesses = wrong_guesses + 1
    print(f"Wrong guesses: {wrong_guesses}/{max_wrong}")
    
    if wrong_guesses >= max_wrong:
        print("GAME OVER! You ran out of guesses!")
        print(f"The word was: {secret_word}")
```

**How it works:** `wrong_guesses = 0` starts at zero. `max_wrong = 6` sets the limit. Add 1 for each mistake. When `wrong_guesses >= max_wrong`, the game ends!

Try changing `max_wrong` to 3 for harder, or 10 for easier - adjust the difficulty!
