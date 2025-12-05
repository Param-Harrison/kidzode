# Filtering Data

We don't always want *all* the data.
We often want to **Filter** it (like "WHERE age > 10").

We can use a **List Comprehension**!

```python
users = [
    {"name": "Alice", "age": 10},
    {"name": "Bob", "age": 18},
    {"name": "Charlie", "age": 20}
]

# Get users older than 15
adults = [u for u in users if u["age"] > 15]

print(adults)
```

You'll see:
```
[{'name': 'Bob', 'age': 18}, {'name': 'Charlie', 'age': 20}]
```

Alice is missing because she is too young! 👶

## Try This!
Filter for users whose name starts with "C"! (`u["name"].startswith("C")`)
