# F-Strings Introduction

The BEST way to combine text and variables!

Put `f` before the quote and use `{}` for variables!

```python
name = "Jack"
age = 10
message = f"Hello, I'm {name} and I'm {age} years old!"
print(message)
```

You'll see:
```
Hello, I'm Jack and I'm 10 years old!
```

So much easier! No more `+` everywhere!

**How it works:**
- `f"..."` = f-string (formatted string)
- `{name}` = put the name variable here
- `{age}` = put the age variable here

## Try This!
```python
f"My name is {name}!"
f"{name} is {age} years old"
```
