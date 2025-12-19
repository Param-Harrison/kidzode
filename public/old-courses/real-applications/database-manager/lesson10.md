# Calculating Stats

We often want to know the **Sum** or **Average**.
We can calculate these from our list!

```python
cart = [
    {"item": "Apple", "price": 10},
    {"item": "Banana", "price": 5}
]

# Get all prices
prices = [item["price"] for item in cart]

# Calculate Sum
total = sum(prices)
print(f"Total: ${total}")

# Calculate Average (Sum / Count)
avg = total / len(prices)
print(f"Average: ${avg}")
```

You'll see:
```
Total: $15
Average: $7.5
```

Math power! 🧮

## Try This!
Add an item costing $20 and check the new average!
