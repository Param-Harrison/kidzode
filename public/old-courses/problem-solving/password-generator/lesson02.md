# Pick Random Letter

Now let's pick ONE random letter.

Remember `random.choice()`?

```python
import random
import string

letters = string.ascii_lowercase
secret = random.choice(letters)

print(f"Secret letter: {secret}")
```

You'll see a different letter every time!

**How it works:** It grabs one character from the long string "abcdef...".

## Try This!
Run it 5 times to see 5 different letters!
