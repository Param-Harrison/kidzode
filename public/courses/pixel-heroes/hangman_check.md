# Show Feedback

Add helpful feedback messages for guesses!

## What to Do
1. Press Run
2. Try correct and wrong guesses!

```python
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
```

## Remember
- Good feedback makes games fun
- Print multiple messages for clarity
- "CORRECT!" and "WRONG!" are easy to see

## Try This
Add encouraging messages like "Keep going!"

## If Stuck
- Add more `print()` statements
- Try letters in "coding" (c, o, d, i, n, g)

You did it! ⭐
