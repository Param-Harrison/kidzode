# Count Wrong Guesses

Track wrong guesses and show how many chances are left!

## What to Do
1. Press Run
2. Make wrong guesses and watch the counter!

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

## Remember
- `wrong_guesses = 0` starts at zero
- `max_wrong = 6` sets the limit
- Add 1 for each mistake
- When `wrong_guesses >= max_wrong`, game ends!

## Try This
Change `max_wrong` to 3 for harder, or 10 for easier!

## If Stuck
- Make sure you have `wrong_guesses = wrong_guesses + 1`
- Check the `if wrong_guesses >= max_wrong:` condition

You did it! ⭐
