# Handling Arguments

What if our function takes arguments?
The wrapper needs to take `*args` and `**kwargs`!

- `*args`: Collects positional arguments
- `**kwargs`: Collects keyword arguments

```python
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Running {func.__name__} with {args}")
        return func(*args, **kwargs)
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(2, 3))
```

You'll see:
```
Running add with (2, 3)
5
```

Now our decorator works on ANY function! 🔧

## Try This!
Decorate `def greet(name)` and call `greet("Alice")`.
