# Testing for Errors

Sometimes code *should* crash (like dividing by zero).
We test if it crashes correctly using `try/except`.

```python
def bad_math():
    return 1 / 0  # This crashes!

try:
    bad_math()
    print("Test Failed! Should have crashed! ❌")
except ZeroDivisionError:
    print("Test Passed! It crashed correctly! ✅")
```

We **caught** the crash. If it didn't crash, the test failed!

## Try This!
Change `bad_math` to return `1 / 1` and see the test fail!
