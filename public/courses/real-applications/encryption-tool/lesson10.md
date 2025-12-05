# Salting the Hash 🧂

If two users have the same password, they have the same hash.
Hackers use "Rainbow Tables" to look up common hashes.

We add a **Salt** (random text) to make it unique!

```python
import hashlib

password = "password123"
salt = "random_gibberish_8392"

# Combine them
combo = salt + password
secure_hash = hashlib.sha256(combo.encode()).hexdigest()

print(secure_hash)
```

Now "password123" looks different for every user!

## Try This!
Hash "abc" with salt "1" and salt "2". Look how different they are.
