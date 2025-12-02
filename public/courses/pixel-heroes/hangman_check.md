# Show Correct or Wrong Feedback

Great, Word Game Builder! You can check letters!
But players need better feedback!
Can you give clear messages about correct and wrong guesses?

## 🎯 Today's Mission
Add helpful feedback messages for guesses!

## 📚 Before You Start
You know how to check if a letter is in a word using `in`.

## Let's Do It!
1. Read the code - see the improved feedback!
2. Press the green **Run** button
3. Try correct and wrong guesses!

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

## ✨ Magic Moment
Clear feedback helps players know if they're on the right track!

## 💡 Important Things to Remember
- Good feedback makes games more fun
- We print multiple messages for clarity
- "CORRECT!" and "WRONG!" are easy to see
- This helps players learn and improve!

## 🎨 Try This Next!
Add encouraging messages like "Keep going!" or "You got this!"

## 🤔 Stuck? Check This!
- **Want more feedback?** Add more `print()` statements
- **Testing?** Try letters you know are in "coding" (c, o, d, i, n, g)
- **Want colors?** We can't add colors in this version, but the messages work great!

## 🌟 Show Your Parents!
"Look! My Hangman game gives clear feedback on every guess!"

You just unlocked the **Feedback Master** superpower! ⭐
