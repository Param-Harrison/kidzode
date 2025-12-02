# Draw Hangman Stages

Amazing, Game Rules Enforcer! Your game tracks mistakes!
Traditional Hangman draws a stick figure for each wrong guess!
Can you show different stages as the player makes mistakes?

## 🎯 Today's Mission
Display hangman stages using ASCII art!

## 📚 Before You Start
You know how to count wrong guesses and use multi-line strings.

## Let's Do It!
1. Read the code - see the ASCII art stages!
2. Press the green **Run** button
3. Make wrong guesses to see the stages!

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

## ✨ Magic Moment
The hangman figure appears piece by piece with each wrong guess!

## 💡 Important Things to Remember
- `stages` is a list of ASCII art strings
- `stages[wrong_guesses]` shows the current stage
- Stage 0 is empty, stage 6 is complete
- This makes the game visual and exciting!

## 🎨 Try This Next!
Design your own hangman stages with different ASCII art!

## 🤔 Stuck? Check This!
- **Stages not showing?** Make sure you have `print(stages[wrong_guesses])`
- **Error: list index out of range?** Check that `wrong_guesses` doesn't exceed 6
- **Want simpler stages?** You can use fewer stages

## 🌟 Show Your Parents!
"Look! My Hangman draws the figure just like the real game!"

You just unlocked the **ASCII Artist** superpower! ⭐
