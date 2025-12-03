# Draw Hangman Stages

Display hangman stages using ASCII art! Press Run and make wrong guesses - watch the hangman drawing appear!

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

**The magic:** `stages` is a list of ASCII art strings. `stages[wrong_guesses]` shows the current stage. Stage 0 is empty, stage 6 is complete!

Try designing your own hangman stages - make them fun or scary!
