# The Mood Score 🎭

## Quick Reminder
You know how to count words using `.count()`. Now, it's time for the final piece of our AI: **The Math!** 🔢

## Your Mission
One happy word doesn't always mean a happy person. We need a way to weigh the "Good Vibes" against the "Bad Vibes." We're going to calculate a **Mood Score!**

## The Formula ➗
Think of it like a tug-of-war game:
- Happy words pull the score **UP** (+1)
- Sad words pull the score **DOWN** (-1)

```python
score = happy_count - sad_count
```

- If score is **Positive** (like 5) -> 😃 The user is HAPPY!
- If score is **Negative** (like -2) -> 😢 The user is SAD.
- If score is **Zero** -> 😐 The user is just... okay.

## Try It!
1. Run the code and see what our AI thinks of the message!
2. **Challenge:** Try to write a message that is *exactly* neutral (Score: 0).
3. **Pro Challenge:** Add new "mood triggers" like `"angry"` or `"excited"` to the code.

## What You Learned
✅ You can use math to solve human problems (like feelings!).
✅ A **Positive** score means one thing, and a **Negative** score means another.
✅ Using `if` and `else`, your computer can give different reactions based on the score!

## Fun Fact
Companies use this exact system (it's called "Sentiment Analysis") to see if people like their new products or movies! 🍿
