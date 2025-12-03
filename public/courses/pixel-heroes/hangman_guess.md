# Guess a Letter

Check if a guessed letter is in the secret word! Press Run and guess a letter - see if it's correct!

```python
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
```

**How it works:** `in` checks if something is inside something else. `if guess in secret_word:` checks if the letter is in the word. This works with any string!

Try changing `secret_word` to your favorite word - make it personal!
