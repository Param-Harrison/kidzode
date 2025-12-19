# Structuring Tests

We shouldn't just run asserts randomly.
Result? Organize them into **Test Functions**.
Start the name with `test_`.

```python
def square(x):
    return x * x

def test_square():
    assert square(2) == 4, "2 squared should be 4"
    assert square(3) == 9, "3 squared should be 9"
    print("test_square passed! ✅")

# Run the test
test_square()
```

You'll see:
```
test_square passed! ✅
```

Now we act like real engineers! 👷‍♀️

## Try This!
Add a `test_square_negative()` function to test `-5 * -5`!
