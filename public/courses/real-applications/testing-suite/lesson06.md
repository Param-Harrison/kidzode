# Test Classes

Functions are good, but **Classes** are better for big tests.
We can group related tests together.

```python
class TestMath:
    def test_add(self):
        assert 1 + 1 == 2
        print("Addition works!")

    def test_sub(self):
        assert 5 - 3 == 2
        print("Subtraction works!")

# Create the tester
tester = TestMath()

# Run the tests
tester.test_add()
tester.test_sub()
```

You'll see:
```
Addition works!
Subtraction works!
```

Neat and tidy! 🧹
