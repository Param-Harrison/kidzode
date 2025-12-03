# Guess a Letter

Check if a guessed letter is in the secret word!

## What to Do
1. Press Run
2. Guess a letter!

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

## Remember
- `in` checks if something is inside something else
- `if guess in secret_word:` checks if letter is in word
- This works with any string!

## Try This
Change `secret_word` to your favorite word!

## If Stuck
- Use lowercase letters
- Make sure your guess is in the word

You did it! ⭐
