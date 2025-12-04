# Sum with Loop

How do we add up a list? We loop through it!

```python
grades = [90, 80, 100]
total = 0

for grade in grades:
    total = total + grade

print(f"Total: {total}")
```

You'll see:
```
Total: 270
```

**How it works:**
1. Start `total` at 0
2. Add 90 -> 90
3. Add 80 -> 170
4. Add 100 -> 270

## Try This!
Add 50 to the list and see the total change!
