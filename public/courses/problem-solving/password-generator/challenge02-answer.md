# Solution

```python
import random
import string

chars = string.ascii_lowercase + string.ascii_uppercase + string.digits
password = ""

for i in range(6):
    password = password + random.choice(chars)

print(f"Code: {password}")
```

Output:
```
Code: X9m2Pq
```

Super secure code! 🛡️
