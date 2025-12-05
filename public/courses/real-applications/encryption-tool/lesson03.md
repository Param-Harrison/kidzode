# The Caesar Cipher

Julius Caesar used this! 🏛️
He shifted every letter by a number (The Key).
If Key = 1:
A -> B, B -> C, Z -> A

```python
def encrypt(text, key):
    result = ""
    for char in text:
        # Shift the character's code
        new_code = ord(char) + key
        result += chr(new_code)
    return result

print(encrypt("ABC", 1))
```

You'll see: `BCD`.
Simple math!

## Try This!
Encrypt "HELLO" with key 2. (Watch out for weird symbols!)
