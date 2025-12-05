# Completion Rate

How good were you this week?

```python
history = [True, True, False, True, True, False, True]

total_days = len(history)
completed_days = sum(history) # True counts as 1!

print(f"Days: {total_days}")
print(f"Completed: {completed_days}")
```

You'll see:
```
Days: 7
Completed: 5
```

**Pro Tip:** In Python, `True` is 1 and `False` is 0. So `sum()` counts the Trues!

## Try This!
Add more days to the list and check the count!
