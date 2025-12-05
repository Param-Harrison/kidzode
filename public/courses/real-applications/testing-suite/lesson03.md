# Assert Messages

When a test fails, we want to know *why*.
We can add a message to `assert`.

```python
def multiply(a, b):
    return a * b

# Checking if 3 * 3 is 9
# The string only shows if it FAILS
assert multiply(3, 3) == 9, "Math is broken! 3x3 should be 9"

print("Math works! 🧠")
```

You'll see:
```
Math works! 🧠
```

Good tests have good error messages!

## Try This!
Force a failure: `assert multiply(3, 3) == 10, "Oops!"`
