# Show Blanks and Reveal Letters

Excellent, Feedback Master! Your feedback is clear!
But real Hangman shows blanks (_ _ _) and reveals letters!
Can you show which letters have been guessed?

## 🎯 Today's Mission
Display the word with blanks and revealed letters!

## 📚 Before You Start
You know how to loop through strings and use `if` statements.

## Let's Do It!
1. Read the code - see how we show blanks!
2. Press the green **Run** button
3. Guess letters and watch them appear!

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

## ✨ Magic Moment
The word appears with blanks, and guessed letters show up!

## 💡 Important Things to Remember
- `for letter in secret_word:` loops through each letter
- `if letter in guessed_letters:` checks if we've guessed it
- `end=" "` makes print stay on the same line
- Blanks (_) show unguessed letters!

## 🎨 Try This Next!
Change `guessed_letters = "ae"` to see multiple letters revealed!

## 🤔 Stuck? Check This!
- **Everything showing as blanks?** Check your `guessed_letters` string
- **No spaces between letters?** Make sure you have `end=" "`
- **Want to test?** Try adding more letters to `guessed_letters`

## 🌟 Show Your Parents!
"Look! My Hangman shows blanks and reveals letters like the real game!"

You just unlocked the **Visual Game Designer** superpower! ⭐
