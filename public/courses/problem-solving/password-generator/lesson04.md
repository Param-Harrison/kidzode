# Build the Password

Let's stick the letters together!

We start with an empty string `password = ""` and ADD to it.

```python
import random
import string

letters = string.ascii_lowercase
password = ""

for i in range(5):
    char = random.choice(letters)
    password = password + char

print(password)
```

You'll see:
```
xkqpz
```

A real random password!

**How it works:**
1. Start empty `""`
2. Pick 'x', add it -> `"x"`
3. Pick 'k', add it -> `"xk"`
4. ...

## Try This!
Make a 20-letter password!
