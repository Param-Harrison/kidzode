# Hashing: No Return 🕳️

Encryption is two-way (Locak and Key).
**Hashing** is one-way (Blender).
You can't turn the smoothie back into fruit! 🍓

Used for Passwords. We check if `hash(input) == stored_hash`.

Python has a built-in `hash()`, but it changes every restart.
We use `hashlib`.

```python
import hashlib

data = "password123".encode() # Must be bytes

# SHA-256 (Secure Hash Algorithm)
digest = hashlib.sha256(data).hexdigest()

print(digest)
```

You'll see a long random hex string.

## Try This!
Hash "password123" again. It's the exact same!
Change it to "password124". It changes completely!
