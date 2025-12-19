# Solution

```python
habits = [
    {"name": "Read", "completed": True},
    {"name": "Exercise", "completed": True},
    {"name": "Clean", "completed": False}
]

count = 0
for h in habits:
    if h["completed"]:
        print(f"{h['name']}: Good job!")
        count = count + 1

print(f"Total Finished: {count}")
```

Output:
```
Read: Good job!
Exercise: Good job!
Total Finished: 2
```

Keep it up! 🚀
