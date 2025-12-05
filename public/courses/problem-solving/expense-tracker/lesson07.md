# Filter with List Comprehension

We can also filter in one line!

```python
expenses = [
    {"item": "Burger", "cost": 10, "category": "Food"},
    {"item": "Game", "cost": 50, "category": "Fun"}
]

# Get only Food items
food_items = [e for e in expenses if e["category"] == "Food"]

print(food_items)
```

You'll see:
```
[{'item': 'Burger', 'cost': 10, 'category': 'Food'}]
```

This is professional Python code! 🐍

## Try This!
Filter for items that cost more than $20!
