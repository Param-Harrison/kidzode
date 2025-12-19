# Stronger Password

Now let's generate a password using our mixed list!

```python
import random
import string

all_chars = string.ascii_lowercase + string.digits
password = ""

for i in range(8):
    password = password + random.choice(all_chars)

print(password)
```

You'll see something like:
```
k9s2m4p1
```

Harder to guess!

## Try This!
Make it 10 characters long!
