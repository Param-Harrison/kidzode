# Show Feedback

Add helpful feedback messages to make your game more fun! Press Run and try correct and wrong guesses - see the feedback!

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

**Why it matters:** Good feedback makes games fun! Print multiple messages for clarity. "CORRECT!" and "WRONG!" are easy to see and understand.

Try adding encouraging messages like "Keep going!" or "You're doing great!" - make it more fun!
