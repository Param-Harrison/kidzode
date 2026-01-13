# The Genre Filter 🎭

## Quick Reminder
You learned that a movie database is like a vault of DVD cases. Now, let's build a way to find *only* the movies we're in the mood for.

## Your Mission
A user says: "I want to watch something funny!" 🤡 Your job is to filter the database and show them only the **Comedy** movies.

## Matching the Mood
We use a loop to check every movie's genre. If it matches what the user wants, we add it to a "Suggestions" list:

```python
user_mood = "Comedy"
suggestions = []

for movie in movies:
    if movie["genre"] == user_mood:
        suggestions.append(movie["title"])
```

## Try It!
1. Check the code. The `user_mood` is set to `"Action"`.
2. Click **Run** to see the Action movies.
3. **Experiment:** Change `user_mood` to `"Sci-Fi"`. Does the list update automatically?

## What You Learned
✅ You can use **variables** to change what your code searches for.
✅ Comparing two strings (like `movie["genre"] == user_mood`) is how we find matches.
✅ This makes your code **Dynamic**—it reacts to the user!

## Achievement Unlocked! 🏆
**Mood Matcher**: You successfully helped a user find the perfect movie! 🍿
