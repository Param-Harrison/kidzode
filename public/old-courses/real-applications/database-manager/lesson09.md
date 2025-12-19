# Limiting Results

Sometimes we only want the top 3 results.
We can **Limit** the list using Slicing `[:N]`.

```python
scores = [
    {"name": "Alice", "pts": 100},
    {"name": "Bob", "pts": 90},
    {"name": "Charlie", "pts": 80},
    {"name": "Dave", "pts": 70}
]

# Get top 2
top_2 = scores[:2]

print(top_2)
```

You'll see:
```
[{'name': 'Alice', 'pts': 100}, {'name': 'Bob', 'pts': 90}]
```

Only the best 2 remain! 🏆

## Try This!
Change it to get the top 3! `scores[:3]`
