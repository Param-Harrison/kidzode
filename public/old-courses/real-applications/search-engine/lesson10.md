# Which result is best?

If "Cat" appears 10 times in Doc A, and 1 time in Doc B...
Doc A is better!
We need **Ranking** based on frequency.

Our index should store counts too!
`"cat": {1: 10, 2: 1}` (DocID: Count)

```python
# Weighted Index
index = {
    "cat": {1: 10, 2: 1} # Doc 1 has 10 cats!
}

results = index["cat"]
# Sort by value (count) descending
sorted_docs = sorted(results, key=results.get, reverse=True)

print(f"Best Matches: {sorted_docs}")
```

You'll see: `[1, 2]`. Doc 1 is first! 🥇

## Try This!
Add Doc 3 with 50 cats. It should win!
