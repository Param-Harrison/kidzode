# Best Streak

What's your record?

```python
history = [True, True, False, True, True, True]

best_streak = 0
current_streak = 0

for day in history:
    if day:
        current_streak = current_streak + 1
    else:
        # Check if this was a new record
        if current_streak > best_streak:
            best_streak = current_streak
        current_streak = 0 # Reset

# Check one last time at the end
if current_streak > best_streak:
    best_streak = current_streak

print(f"Best Streak: {best_streak}")
```

You'll see:
```
Best Streak: 3
```

Beat your high score!

## Try This!
Add 5 `True`s at the end to set a new record!
