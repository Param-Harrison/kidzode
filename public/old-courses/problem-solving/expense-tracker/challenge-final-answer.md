# Solution

```python
budget = 50
expenses = [
    {"item": "Toy", "cost": 25},
    {"item": "Food", "cost": 10},
    {"item": "Bus", "cost": 5}
]

total_spent = 0
for e in expenses:
    total_spent = total_spent + e["cost"]

remaining = budget - total_spent

print(f"Total: ${total_spent}")
print(f"Remaining: ${remaining}")

if total_spent > budget:
    print("ALERT! Over Budget! 🚨")
else:
    print("Great job! Under Budget! 🌟")
```

Output:
```
Total: $40
Remaining: $10
Great job! Under Budget! 🌟
```

You are a financial genius! 💸
