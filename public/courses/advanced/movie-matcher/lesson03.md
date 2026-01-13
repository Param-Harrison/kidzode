# Smart Recommendations ⭐

## Quick Reminder
You built a genre filter. That's great, but sometimes there are 100 comedies! Which one should we show first?

## Your Mission
We want to be a "Smart" engine. We should only recommend movies that have a **Rating of 8.0 or higher**. These are the "Must Watch" movies!

## Double Filtering
We can check for two things at once using `if` and `and`:

```python
for movie in movies:
    if movie["genre"] == "Action" and movie["rating"] >= 8.0:
        print("MUST WATCH:", movie["title"])
```

## The "Best Match" Logic
Instead of showing a list, what if we only want to show the **Single Best** movie? We use the "Highest Score" trick from the High Score Hero project!

## Try It!
1. Look at the movies library.
2. Click **Run** to see the "Must Watch" list.
3. **Challenge:** Lower the rating of one movie to `5.0`. Does it disappear from the "Must Watch" list?

## What You Learned
✅ **Smart Engines** use multiple rules to filter data.
✅ You can combine text checks (Genre) and number checks (Rating).
✅ This is why your phone can suggest "High Rated Restaurants Near You"! 🍕

## Pro Tip
Real recommendation engines also look at what you've watched before. That's just more data in the dictionary! 🧠
