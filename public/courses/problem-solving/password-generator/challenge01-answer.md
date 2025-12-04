# Solution

```python
import random
import string

letters = string.ascii_lowercase
password = ""

for i in range(5):
    password = password + random.choice(letters)

print(f"Your code: {password}")
```

Output:
```
Your code: hjskl
```

You made a password generator! 🔐
