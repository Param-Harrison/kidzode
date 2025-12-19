# The @ Magic

Doing `func = decorator(func)` is ugly.
Python gives us the `@` symbol (syntactic sugar)!

It does the exact same thing, but looks cleaner.

```python
def my_decorator(func):
    def wrapper():
        print("Power Up! 🍄")
        func()
    return wrapper

# Use the @ symbol
@my_decorator
def jump():
    print("I jumped high!")

jump()
```

You'll see:
```
Power Up! 🍄
I jumped high!
```

Just add `@decorator_name` above any function!

## Try This!
Create a `@shusher` decorator that prints "Shhh..." before the function!
