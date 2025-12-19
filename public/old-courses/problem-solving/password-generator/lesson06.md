# Mix Letters and Numbers

Let's put them together in one big pot!

```python
import string

letters = string.ascii_lowercase
numbers = string.digits

all_chars = letters + numbers
print(all_chars)
```

You'll see:
```
abcdefghijklmnopqrstuvwxyz0123456789
```

Now we can pick from BOTH!

**How it works:** `+` joins two strings together.

## Try This!
Add `string.ascii_uppercase` to the mix!
