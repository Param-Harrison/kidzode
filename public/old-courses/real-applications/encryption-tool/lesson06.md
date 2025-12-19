# XOR: The Alien Operator 👽

Caesar cipher is easy to break.
**XOR (`^`)** is mathematically uncrackable if done right.

XOR Rules:
- 0 ^ 0 = 0
- 1 ^ 1 = 0
- 0 ^ 1 = 1
- 1 ^ 0 = 1

Magic Property: `(A ^ B) ^ B = A`
If you XOR twice with the same key, you get the original back!

```python
A = 65  # 'A'
Key = 5

encrypted = A ^ Key
print(f"Encrypted: {encrypted}")

decrypted = encrypted ^ Key
print(f"Decrypted: {decrypted}")
```

You'll see: `Encrypted: 68`, `Decrypted: 65`.
It toggles bits! 0️⃣1️⃣

## Try This!
XOR `ord("Z")` with key `123`.
