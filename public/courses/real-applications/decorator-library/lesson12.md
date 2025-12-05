# Remembering Things (State)

Decorators can remember data between calls!
Like counting how many times a function ran.

```python
def counter(func):
    def wrapper():
        wrapper.count += 1
        print(f"Run count: {wrapper.count}")
        func()
    
    wrapper.count = 0 # Initialize state
    return wrapper

@counter
def click():
    print("Clicked!")

click()
click()
click()
```

You'll see:
```
Run count: 1
Clicked!
Run count: 2
Clicked!
...
```

The function has a memory! 🧠

## Try This!
Create a limit decorator that stops running after 3 times!
