# Pick Multiple Letters

One letter isn't a password. We need more!

Let's use a loop to pick 3 letters.

```python
import random
import string

letters = string.ascii_lowercase

for i in range(3):
    print(random.choice(letters))
```

You'll see:
```
k
z
b
```

Three random letters! But they are on different lines...

## Try This!
Change the loop to pick 10 letters!
