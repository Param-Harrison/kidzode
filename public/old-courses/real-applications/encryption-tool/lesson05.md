# Encrypting a Sentence

Let's combine `shift_char` into a loop to encrypt whole messages!

```python
def caesar_encrypt(text, key):
    result = ""
    for char in text:
        result += shift_char(char, key) # From Lesson 4
    return result

msg = "Attack at Dawn!"
cipher = caesar_encrypt(msg, 13) # ROT13

print(cipher)
```

You'll see: `Nggnpx ng Qnja!`.
Punctuation stays the same. Letters change.

## Try This!
Decrypt it! `caesar_encrypt(cipher, -13)`.
