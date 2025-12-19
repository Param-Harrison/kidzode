### One way to solve it:

```python
import random
import string

chars = string.ascii_letters + string.digits + "!@#$%"
password = ""

print("--- SECURITY CENTER ---")
length = int(input("How long should the password be? "))

for i in range(length):
    password += random.choice(chars)

print("Generated Password:", password)
```
