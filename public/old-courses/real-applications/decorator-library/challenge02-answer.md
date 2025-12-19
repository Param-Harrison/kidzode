# Solution

```python
def spy(func):
    def wrapper(*args, **kwargs):
        print(f"Spying on {func.__name__}...")
        return func(*args, **kwargs)
    return wrapper

@spy
def say_secret(msg):
    print(f"Secret: {msg}")

say_secret("The treasure is hidden")
```

Output:
```
Spying on say_secret...
Secret: The treasure is hidden
```
