# Find the Median

The Median is the **middle number**.
It's better than average if there are crazy outliers!

1. Sort the list
2. Pick the middle one

```python
scores = [10, 50, 20]
scores = sorted(scores) # [10, 20, 50]

# Middle index is length // 2
mid = len(scores) // 2 

median = scores[mid]
print(f"Median: {median}")
```

You'll see:
```
Median: 20
```

It's right in the middle!

## Try This!
Find the median of `[1, 9, 5, 3, 7]`!
