# The Assert Statement

Writing `if/else` for every test is boring.
Python has a magic word: `assert`.

`assert` means "Make sure this is True, or else CRASH!" directly.

```python
def add(a, b):
    return a + b

# If this is True, nothing happens (Silence is Good)
assert add(2, 2) == 4

print("All tests passed!")
```

You'll see:
```
All tests passed!
```

If you see nothing, it worked!

## Try This!
Add `assert add(2, 2) == 5` and see the crash!
