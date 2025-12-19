# What is Testing?

Code breaks. Bugs happen. 🐛
**Testing** is how we prove our code works *before* users see it.

Imagine a Calculator app. If `2 + 2` equals `5`, that's bad!
We write code to **Check** our code.

```python
# A simple function to test
def add(a, b):
    return a + b

# Manual Testing (The slow way)
result = add(2, 2)

if result == 4:
    print("Test Passed! ✅")
else:
    print("Test Failed! ❌")
```

You'll see:
```
Test Passed! ✅
```

## Try This!
Change the function to return `a - b` (a bug!) and run the test!
