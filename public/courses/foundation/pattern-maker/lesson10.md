# Building a Grid

Let's use nested loops to make a coordinate grid!

```python
for row in range(3):
    line = ""
    for col in range(3):
        line = line + f"({row},{col}) "
    print(line)
```

You'll see:
```
(0,0) (0,1) (0,2) 
(1,0) (1,1) (1,2) 
(2,0) (2,1) (2,2) 
```

You printed a map! 🗺️

**How it works:**
- `row` stays the same while `col` counts 0, 1, 2
- Then `row` changes, and `col` counts again!

## Try This!
Make a 5x5 grid!
