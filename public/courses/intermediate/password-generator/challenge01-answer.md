# Answer: Super Secure ✅

```python
import random

chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%"
length = int(input("How many characters? "))

password = ""
for count in range(length):
    char = random.choice(chars)
    password = password + char

print("Your password is:", password)

if length >= 10:
    print("STRONG! 💪")
```
