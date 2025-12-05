# Formatting Function

Let's combine everything into a tool!

```python
def make_fancy(text):
    clean = text.strip()
    fancy = clean.title()
    return f"✨ {fancy} ✨"

print(make_fancy("  hello world  "))
```

You'll see:
```
✨ Hello World ✨
```

Reusable code is the best code!

## Try This!
Create a function `shout_it(text)` that makes it uppercase and adds "!!!"!
