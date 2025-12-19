# XOR on Strings

To XOR a string, we loop through it and XOR each character.

```python
def xor_encrypt(text, key):
    result = ""
    for char in text:
        # XOR the number, then convert back to char
        new_code = ord(char) ^ key
        result += chr(new_code)
    return result

msg = "Secret"
key = 123

cipher = xor_encrypt(msg, key)
print(f"Cipher: {repr(cipher)}") # repr shows hidden chars

plain = xor_encrypt(cipher, key) # Same function decrypts!
print(f"Plain: {plain}")
```

The "Cipher" looks like garbage symbols. That's good!

## Try This!
Encrypt "Data" with key 99.
