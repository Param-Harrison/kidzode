# Guess a Letter in Hangman

Welcome, Championship Game Creator! You've built amazing games!
Now let's create the classic word game - HANGMAN!
Can you check if a letter is in a secret word?

## 🎯 Today's Mission
Check if a guessed letter is in the secret word!

## Let's Do It!
1. Read the code - see how we check for letters!
2. Press the green **Run** button
3. Guess a letter!

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

## ✨ Magic Moment
Python can check if a letter is in a word!

## 💡 Important Things to Remember
- `in` checks if something is inside something else
- `if guess in secret_word:` checks if the letter is in the word
- This works with any string!
- This is the foundation of Hangman!

## 🎨 Try This Next!
Change `secret_word` to your favorite word and test it!

## 🤔 Stuck? Check This!
- **Always says yes?** Make sure your guess is actually in the word
- **Case sensitive?** "A" and "a" are different - use lowercase
- **Want to see the word?** That's cheating! But you can `print(secret_word)` for testing

## 🌟 Show Your Parents!
"Look! I'm building Hangman - it can check if letters are in words!"

You just unlocked the **Word Game Builder** superpower! ⭐
