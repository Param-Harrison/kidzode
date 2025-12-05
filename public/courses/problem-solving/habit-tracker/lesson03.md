# Multiple Habits

We have many habits. Use a list!

```python
habits = [
    {"name": "Exercise", "completed": True},
    {"name": "Drink Water", "completed": False},
    {"name": "Study", "completed": True}
]

for h in habits:
    if h["completed"]:
        print(f"{h['name']}: Done! ✅")
    else:
        print(f"{h['name']}: Not yet ❌")
```

You'll see:
```
Exercise: Done! ✅
Drink Water: Not yet ❌
Study: Done! ✅
```

A checklist for your life!

## Try This!
Add "Sleep Early" to the list!
