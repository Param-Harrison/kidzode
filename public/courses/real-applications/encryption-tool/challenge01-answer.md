# Solution

```python
def shift_char(char, key):
    if char.isalpha():
        base = ord('A') if char.isupper() else ord('a')
        return chr(base + (ord(char) - base + key) % 26)
    return char

def decrypt(text, key):
    return "".join(shift_char(c, -key) for c in text)

secret = "Uifsf jt b dbuf!"

print("Cracking...")
for key in range(1, 26):
    guess = decrypt(secret, key)
    print(f"Key {key}: {guess}")

# Key 1 makes "There is a cafe!"
```
