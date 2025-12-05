# Sorting Data

We can **Sort** our data (like "ORDER BY age").
We use Python's `sorted()` function with a `key`.
The `key` tells Python *what* to sort by.

```python
users = [
    {"name": "Bob", "score": 50},
    {"name": "Alice", "score": 100},
    {"name": "Charlie", "score": 80}
]

# Sort by score (lambda is a tiny function!)
sorted_users = sorted(users, key=lambda x: x["score"])

print(sorted_users)
```

You'll see users ordered by score: Bob (50), Charlie (80), Alice (100).

`lambda x: x["score"]` just means "use the score for sorting".

## Try This!
Sort by "name" instead!
