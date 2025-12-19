# Count Streak

How long is your current streak?
We count from the end (today) backwards!

```python
history = [False, True, True, True] # Today is last

streak = 0
# Reverse the list to start from today
for day in reversed(history):
    if day:
        streak = streak + 1
    else:
        break # Stop counting if we hit a False

print(f"Current Streak: {streak} days")
```

You'll see:
```
Current Streak: 3 days
```

**New Keyword:** `break` stops the loop immediately!

## Try This!
Change the last day to `False`. The streak should be 0!
