# Don't Lose the Key! 🔑

If you encrypt a file and lose the key... it's gone forever.
There is no "Forgot Password" for encryption!

Real tools save keys to a separate file (e.g., `key.key`).

```python
import random

# Generate random key
key = random.randint(1, 100)

# Save it
with open("secret.key", "w") as f:
    f.write(str(key))

print("Key saved to secret.key")
```

Keep it safe! 🔒

## Try This!
Write a program that reads the key back from the file.
