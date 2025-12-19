# Solution

```python
def is_strong(password):
    if len(password) >= 8 and "!" in password:
        print(f"'{password}' is Strong ✅")
    else:
        print(f"'{password}' is Weak ❌")

# Test it!
is_strong("dog")
is_strong("password")
is_strong("password!")
```

Output:
```
'dog' is Weak ❌
'password' is Weak ❌
'password!' is Strong ✅
```

You built a security tool! 🛡️
