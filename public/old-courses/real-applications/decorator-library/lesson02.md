# Passing Functions

Since functions are variables, we can pass them into other functions!
This is called a **Higher-Order Function**.

```python
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

# This function takes ANOTHER function as an argument
def calculate(func, x, y):
    return func(x, y)

print(calculate(add, 5, 3))
print(calculate(sub, 5, 3))
```

You'll see:
```
8
2
```

We passed logic as data! 🤯

## Try This!
Create a `multiply` function and pass it to `calculate`!
