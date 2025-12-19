# Modifying Output

Decorators can change the *result* too!
Let's wrap text in HTML tags.

```python
def bold(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"<b>{result}</b>"
    return wrapper

def italic(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"<i>{result}</i>"
    return wrapper

@bold
@italic
def get_text():
    return "Hello"

print(get_text())
```

You'll see:
```
<b><i>Hello</i></b>
```

We stacked them! Decorators execute from bottom to top (Inner -> Outer).

## Try This!
Create a `@header` decorator to wrap in `<h1>...</h1>`.
