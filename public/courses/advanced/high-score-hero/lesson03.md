# The Average Hero 📊

## Quick Reminder
You’ve mastered finding the best and worst players. But what if we want to know how the *whole team* is doing?

## Your Mission
The Game Director wants to know the **Average Score**. This tells us if our game is too hard or too easy. 

## The Team Math
To find an average, we need two things:
1. The **Sum** (All scores added together).
2. The **Length** (How many players there are).

In Python, it looks like this:
```python
total = sum(scores)
count = len(scores)

average = total / count
```

## Sorting the Board
Want to see the scores from worst to best? Use **`.sort()`**! It’s like asking everyone to line up in order of height.

```python
scores.sort()
print(scores)  # Now they are in order!
```

## Try It!
1. Check the code for the average calculation.
2. Click **Run** to see the team's performance.
3. **Experiment:** Add a player with a score of `0`. How does that change the average?

## What You Learned
✅ The **Average** is the total divided by the count.
✅ **`.sort()`** organizes lists from smallest to largest.
✅ These tools help you understand the "Big Picture" of your data.

## Pro Tip
Professional sports teams use these same math tricks to decide which players to hire! 🏀
