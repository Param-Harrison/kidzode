# Solution

```python
reading_history = [False, False, True, True, True]

streak = 0
for day in reversed(reading_history):
    if day:
        streak = streak + 1
    else:
        break

print(f"Reading Streak: {streak} days")
```

Output:
```
Reading Streak: 3 days
```

Don't break the chain! 🔗
