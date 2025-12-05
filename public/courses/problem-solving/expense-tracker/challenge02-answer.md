# Solution

```python
expenses = [
    {"item": "Pizza", "cost": 10, "category": "Food"},
    {"item": "Toy", "cost": 20, "category": "Fun"},
    {"item": "Apple", "cost": 1, "category": "Food"},
    {"item": "Bus", "cost": 2, "category": "Travel"},
    {"item": "Soda", "cost": 3, "category": "Food"}
]

food = [e for e in expenses if e["category"] == "Food"]

print("Food Items:")
for item in food:
    print(item["item"])
```

Output:
```
Food Items:
Pizza
Apple
Soda
```

You found the snacks! 🍕
