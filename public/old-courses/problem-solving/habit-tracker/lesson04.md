# Count Completed

How productive were you today?

```python
habits = [
    {"name": "A", "completed": True},
    {"name": "B", "completed": True},
    {"name": "C", "completed": False}
]

count = 0
for h in habits:
    if h["completed"]:
        count = count + 1

print(f"You finished {count} habits today!")
```

You'll see:
```
You finished 2 habits today!
```

Counting `True` values is easy!

## Try This!
Make all habits `False`. The count should be 0!
