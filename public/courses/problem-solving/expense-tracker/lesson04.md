# Calculate Total

How much did we spend in total?

We need to loop and add up the costs.

```python
expenses = [
    {"item": "Toy", "cost": 20},
    {"item": "Candy", "cost": 5}
]

total = 0
for e in expenses:
    total = total + e["cost"]

print(f"Total Spent: ${total}")
```

You'll see:
```
Total Spent: $25
```

Math is easy with loops!

## Try This!
Add an expense that costs $100. See the total jump!
