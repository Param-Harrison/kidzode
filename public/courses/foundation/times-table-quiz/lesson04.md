# The Full Table

Let's make it look like a real times table chart!

Use an **f-string** to show the math.

```python
for i in range(1, 11):
    print(f"5 x {i} = {5 * i}")
```

You'll see:
```
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

Now that's a proper times table!

**How it works:**
- `{i}` shows the counter (1, 2, 3...)
- `{5 * i}` calculates the answer
