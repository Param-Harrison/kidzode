# Find the Mode

The Mode is the **most common number**.
Like voting!

```python
votes = ["Red", "Blue", "Red", "Green", "Red"]
counts = {}

# Count them
for v in votes:
    if v in counts:
        counts[v] += 1
    else:
        counts[v] = 1

# Find max count
winner = max(counts, key=counts.get)
print(f"Winner: {winner}")
```

You'll see:
```
Winner: Red
```

Red got the most votes!

## Try This!
Find the most common number in `[1, 2, 2, 3]`!
