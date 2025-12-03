# Times Table

Learn your times tables the fun way! Press Run and see the 5 times table print out automatically.

```python
# Print the 5 times table
print("=== 5 TIMES TABLE ===")
print()

for number in range(1, 11):
    answer = 5 * number
    print(f"5 x {number} = {answer}")
```

**How it works:** `range(1, 11)` counts from 1 to 10. `5 * number` multiplies 5 by each number. The loop does all 10 calculations automatically - no typing needed!

Try changing `5` to `7` to see the 7 times table, or `3` for the 3 times table!
