# Hints

## 🟢 Hint 1
Wrapper needs args: `def wrapper(*args, **kwargs):`

## 🟡 Hint 2
Get name: `func.__name__`

## 🔴 Hint 3
Structure:
```python
def spy(func):
    def wrapper(*args, **kwargs):
        print(...)
        return func(*args, **kwargs)
    return wrapper
```
