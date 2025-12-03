# Show Blanks and Reveal Letters

Now let's make Hangman show blanks for letters we haven't guessed yet, and reveal the ones we have!

Press Run and guess a letter. Watch how it shows `_` for unguessed letters and reveals the correct ones!

```python
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
```

**The magic:** `for letter in secret_word:` goes through each letter. If we've guessed it, we show the letter. Otherwise, we show `_`. The `end=" "` keeps everything on the same line!

Try changing `guessed_letters = "ae"` to see multiple letters revealed at once!
