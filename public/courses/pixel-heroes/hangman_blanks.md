# Show Blanks and Reveal Letters

Display the word with blanks and revealed letters!

## What to Do
1. Press Run
2. Guess letters and watch them appear!

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

## Remember
- `for letter in secret_word:` loops through each letter
- `if letter in guessed_letters:` checks if we've guessed it
- `end=" "` makes print stay on the same line
- Blanks (_) show unguessed letters!

## Try This
Change `guessed_letters = "ae"` to see multiple letters!

## If Stuck
- Check your `guessed_letters` string
- Make sure you have `end=" "`

You did it! ⭐
