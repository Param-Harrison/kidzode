# What is a Decorator?

A **Decorator** is just a function that wraps another function.
It adds extra powers! 🦸‍♀️

It follows this pattern:
1. Takes a function.
2. Creates a wrapper function (adding powers).
3. Returns the wrapper.

```python
def my_decorator(func):
    def wrapper():
        print("Before running...")
        func()
        print("After running...")
    
    return wrapper

def say_hello():
    print("Hello!")

# Manual decoration
decorated_hello = my_decorator(say_hello)

decorated_hello()
```

You'll see:
```
Before running...
Hello!
After running...
```

We added code *around* `say_hello` without changing it!

## Try This!
Create a decorator that prints "Start" and "End"!
