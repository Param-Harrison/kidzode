# Answer: Custom Password ✅

```python
import random

chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
length = int(input("How long should the password be? "))

password = ""
for count in range(length):
    char = random.choice(chars)
    password = password + char

print("Your custom password is:", password)
```
