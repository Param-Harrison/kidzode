# Solution

```python
import hashlib

target = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
words = ["password", "123456", "secret", "password", "admin"]

print("Cracking...")

for word in words:
    h = hashlib.sha256(word.encode()).hexdigest()
    if h == target:
        print(f"FOUND IT: {word}")
        break

# The password is 'password'
```
