# Nested Loops (Loop Inside a Loop)

This is a superpower! You can put a loop INSIDE another loop!

- **Outer loop:** Controls the rows (down)
- **Inner loop:** Controls the columns (across)

```python
for row in range(3):
    line = ""
    for col in range(5):
        line = line + "X"
    print(line)
```

You'll see:
```
XXXXX
XXXXX
XXXXX
```

It builds each line character by character!

**How it works:**
1. Outer loop starts row 0
2. Inner loop adds "X" 5 times
3. Print the line
4. Repeat for next row!

## Try This!
Change the inner loop to add "O" instead of "X"!
