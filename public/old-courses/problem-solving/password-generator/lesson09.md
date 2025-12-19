# Custom Length

What if we want a 20-character password? Or 50?

Let's use a variable for `length`.

```python
import random
import string

length = 12
chars = string.ascii_letters + string.digits + string.punctuation
password = ""

for i in range(length):
    password = password + random.choice(chars)

print(f"Password ({length} chars): {password}")
```

You'll see a long, messy string! Perfect for security!

**How it works:** Change `length = 12` to any number you want!

## Try This!
Generate a 100-character password!
