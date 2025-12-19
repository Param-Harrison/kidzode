# Reset Streak

If you miss a day, the streak resets to 0.
That's why consistency is key!

```python
# Missed yesterday!
history = [True, True, False] 

streak = 0
for day in reversed(history):
    if day:
        streak = streak + 1
    else:
        break

print(f"Streak: {streak}")
```

You'll see:
```
Streak: 0
```

Ouch! Back to the start.

## Try This!
Add a `True` to the end. Streak becomes 1!
