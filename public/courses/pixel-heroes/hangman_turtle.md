# Draw Hangman Stages

Display hangman stages using ASCII art!

## What to Do
1. Press Run
2. Make wrong guesses to see the stages!

```python
print("=== HANGMAN GAME ===")
print()

# Hangman stages (ASCII art)
stages = [
    """
       ------
       |    |
       |
       |
       |
       |
    --------
    """,
    """
       ------
       |    |
       |    O
       |
       |
       |
    --------
    """,
    """
       ------
       |    |
       |    O
       |    |
       |
       |
    --------
    """,
    """
       ------
       |    |
       |    O
       |   /|
       |
       |
    --------
    """,
    """
       ------
       |    |
       |    O
       |   /|\\
       |
       |
    --------
    """,
    """
       ------
       |    |
       |    O
       |   /|\\
       |   /
       |
    --------
    """,
    """
       ------
       |    |
       |    O
       |   /|\\
       |   / \\
       |
    --------
    """
]

# Game state
secret_word = "code"
guessed_letters = ""
wrong_guesses = 0
max_wrong = 6

# Show current hangman stage
print(stages[wrong_guesses])

# Show the word
print("Word: ", end="")
for letter in secret_word:
    if letter in guessed_letters:
        print(letter, end=" ")
    else:
        print("_", end=" ")

print()
print()

# Ask for a guess
guess = input("Guess a letter: ")

# Check if correct
if guess in secret_word:
    print("CORRECT!")
    guessed_letters = guessed_letters + guess
else:
    print("WRONG!")
    wrong_guesses = wrong_guesses + 1
    
    if wrong_guesses >= max_wrong:
        print(stages[wrong_guesses])
        print("GAME OVER!")
        print(f"The word was: {secret_word}")
```

## Remember
- `stages` is a list of ASCII art strings
- `stages[wrong_guesses]` shows the current stage
- Stage 0 is empty, stage 6 is complete

## Try This
Design your own hangman stages!

## If Stuck
- Make sure you have `print(stages[wrong_guesses])`
- Check that `wrong_guesses` doesn't exceed 6

You did it! ⭐
