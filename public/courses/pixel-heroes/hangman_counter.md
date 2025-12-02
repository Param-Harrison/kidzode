# Count Wrong Guesses

Perfect, Visual Game Designer! Your word display works!
But Hangman has a limit - too many wrong guesses and you lose!
Can you count wrong guesses and warn the player?

## 🎯 Today's Mission
Track wrong guesses and show how many chances are left!

## 📚 Before You Start
You know how to use variables to track numbers.

## Let's Do It!
1. Read the code - see the wrong guess counter!
2. Press the green **Run** button
3. Make wrong guesses and watch the counter!

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

## ✨ Magic Moment
The game now tracks mistakes and can end when you run out of chances!

## 💡 Important Things to Remember
- `wrong_guesses = 0` starts the counter at zero
- `max_wrong = 6` sets the limit (traditional Hangman)
- We add 1 to wrong guesses for each mistake
- When `wrong_guesses >= max_wrong`, the game ends!

## 🎨 Try This Next!
Change `max_wrong` to 3 for a harder game, or 10 for an easier game!

## 🤔 Stuck? Check This!
- **Counter not increasing?** Make sure you have `wrong_guesses = wrong_guesses + 1`
- **Game never ends?** Check the `if wrong_guesses >= max_wrong:` condition
- **Want to test losing?** Guess letters not in "hero" like x, z, q

## 🌟 Show Your Parents!
"Look! My Hangman counts wrong guesses and can end the game!"

You just unlocked the **Game Rules Enforcer** superpower! ⭐
