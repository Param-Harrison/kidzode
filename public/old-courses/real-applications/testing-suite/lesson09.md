# Checking Lists

We can test more than numbers. We can test lists too!

```python
def get_colors():
    return ["Red", "Blue"]

colors = get_colors()

# Check length (size)
assert len(colors) == 2, "Should be 2 colors"

# Check contents
assert "Red" in colors, "Missing Red"
assert "Green" not in colors, "Green shouldn't be here"

print("Colors Valid! 🎨")
```

Testing "what is NOT there" is as important as "what IS there"!

## Try This!
Check if "Blue" is in the colors!
