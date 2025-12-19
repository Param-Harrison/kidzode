# Encoding is NOT Encryption ⚠️

**Encoding** (like Base64) just changes the format.
It's like translating English to French. Anyone can translate it back!
**Encryption** locks it with a key.

```python
import base64

msg = "Hello World"
# Encode
encoded = base64.b64encode(msg.encode())
print(f"Encoded: {encoded}")

# Decode
decoded = base64.b64decode(encoded).decode()
print(f"Decoded: {decoded}")
```

You'll see: `b'SGVsbG8gV29ybGQ='`.
It looks secret, but it's NOT! Don't rely on it for secrets. 🚫

## Try This!
Encode your name. Can you read it?
