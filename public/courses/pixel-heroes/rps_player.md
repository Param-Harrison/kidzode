# Player Makes a Choice

Great, Game AI Creator! The computer can choose!
But a game needs TWO players!
Can you let the player choose too?

## 🎯 Today's Mission
Let both the player AND computer make choices!

## 📚 Before You Start
You know how to make the computer choose randomly.

## Let's Do It!
1. Read the code - both players choose!
2. Press the green **Run** button
3. Type "rock", "paper", or "scissors"!

```python
import random

print("=== ROCK-PAPER-SCISSORS GAME ===")
print()

# Player makes a choice
player_choice = input("Choose rock, paper, or scissors: ")

# Computer makes a random choice
choices = ["rock", "paper", "scissors"]
computer_choice = random.choice(choices)

print()
print(f"You chose: {player_choice}")
print(f"Computer chose: {computer_choice}")
```

## ✨ Magic Moment
Both you and the computer have made your choices!

## 💡 Important Things to Remember
- The player uses `input()` to choose
- The computer uses `random.choice()` to choose
- Both choices are stored in variables
- Now we have everything we need to determine a winner!

## 🎨 Try This Next!
Try typing different choices - rock, paper, scissors!

## 🤔 Stuck? Check This!
- **Computer always wins?** We haven't added winner logic yet - that's next!
- **Typo in choice?** Make sure you type exactly: rock, paper, or scissors
- **Want to see both choices?** They both print at the end!

## 🌟 Show Your Parents!
"Look! I can play Rock-Paper-Scissors against the computer!"

You just unlocked the **Two-Player Game Creator** superpower! ⭐
