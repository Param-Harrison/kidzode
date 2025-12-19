# Solution

```python
import random
import string

chars = string.ascii_letters + string.digits + string.punctuation
length = 15
password = ""

for i in range(length):
    password = password + random.choice(chars)

print(f"Secure Password: {password}")
```

Output:
```
Secure Password: a8$Kz9#mP2!vL5x
```

Hacker-proof! 🕵️‍♂️
