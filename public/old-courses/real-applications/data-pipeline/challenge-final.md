# Final Challenge: Sales Analyzer 💵

You are processing sales data for a global store.
Data format: `Product,Price`.

**Raw Data:**
```python
raw_data = [
    "Apple,10",
    "Banana,5",
    "Orange,bad_price", # Error!
    "Laptop,1000",
    "Candy,2"
]
```

**Your Mission:**
1. **Parser**: Parse lines into `{"product": ..., "price": ...}`. Handle errors!
2. **Filter**: Keep only items with price > 500 (Expensive stuff).
3. **Formatter**: Format them as "Big Sale: [Product] ($[Price])".
4. Run the pipeline and print the final lines.

Go make some money! 💰
