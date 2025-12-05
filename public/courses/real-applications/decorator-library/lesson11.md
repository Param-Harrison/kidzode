# Decorators with Arguments

Sometimes the *decorator itself* needs arguments.
We need **Three Functions**! 🤯

```python
def repeat(n):
    def decorator(func):
        def wrapper():
            for i in range(n):
                func()
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi!")

say_hi()
```

You'll see:
```
Hi!
Hi!
Hi!
```

1. `repeat(3)` returns `decorator`
2. `@decorator` wraps `say_hi`
3. `say_hi` runs 3 times!

## Try This!
Create `@repeat(5)` and say "Hello"!
