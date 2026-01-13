# Counting Feelings 😊

## Quick Reminder
You learned that text is just a list of letters. Now, let's learn how to find the "vibes" hidden inside those letters! 🔍

## Your Mission
To detect a mood, we need to know how many "happy" or "sad" words are in a sentence. If there are 10 happy words and 0 sad ones, the computer knows the user is having a great day!

## The .count() Trick 🎯
Python has a built-in search engine called `.count()`. You give it a word, and it tells you how many times it found that word.

```python
message = "I love cats and I love dogs"
loves = message.count("love")
print("Total love found:", loves)  # Shows: 2
```

## Detective Skills
Computers are picky! They think `"Happy"` and `"happy"` are different. To stay safe, we always turn our text into tiny letters first:
```python
message = "HAPPY DAY"
clean_message = message.lower()  # Makes it "happy day"
```

## Try It!
1. Look at the variable called `message` on the right.
2. Click **Run** to see how many "happy" words the computer finds.
3. **Experiment:** Change the message to something super sad. Does the `happy_count` go to 0?

## What You Learned
✅ `.count()` finds how many times a word appears in text.
✅ `.lower()` turns all big letters into small ones.
✅ You can build a "mood meter" by counting positive words!

## Achievement Unlocked! 🏆
**Emotion Expert**: You can now extract feelings from raw data! 🎭
