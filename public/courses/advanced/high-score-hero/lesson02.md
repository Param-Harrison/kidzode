# Finding the Winner 🥇

## Quick Reminder
You learned how to find the `max()` and `min()` scores. But there's a problem... we know the *score* is 990, but we don't know *who* got it!

## Your Mission
We need to connect the numbers to the names. It’s like finding a trophy on a shelf—you see the gold, but you need to read the nameplate!

## The Index Trick
Remember how every item in a list has a "Spot Number" (Index)? We can use the score to find its spot, and then use that spot to find the player.

```python
players = ["Zelda", "Mario", "Sonic", "Peach"]
scores = [100, 500, 300, 200]

# 1. Find the highest score
top_score = max(scores)

# 2. Find WHAT SPOT that score is in
winner_spot = scores.index(top_score)

# 3. Use that spot to find the name
winner_name = players[winner_spot]
```

## Try It!
1. Look at the two lists: `players` and `scores`.
2. Click **Run** to see the computer look up the winner.
3. **Challenge:** Change Mario's score to `50`. Run the code. Who is the winner now?

## What You Learned
✅ **`.index()`** tells you the "Spot Number" of a specific piece of data.
✅ You can "link" two lists together by using the same index for both.
✅ This is how leaderboards in games like *Fortnite* or *Roblox* work!

## Achievement Unlocked! 🏆
**Talent Scout**: You successfully matched a high score to a player name! 🕵️‍♀️
