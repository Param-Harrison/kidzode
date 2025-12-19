# Preserving Identity

When we decorate, we lose the original name!
`say_hi` becomes `wrapper`.
We fix this with `@functools.wraps`.

```python
import functools

def log(func):
    @functools.wraps(func) # Makes wrapper look like func
    def wrapper():
        func()
    return wrapper

@log
def my_func():
    """This helps me."""
    print("Func running")

print(my_func.__name__)
print(my_func.__doc__)
```

You'll see:
```
my_func
This helps me.
```

It keeps its identity! 🆔

## Try This!
Remove `@functools.wraps` and see the name change to `wrapper`!
